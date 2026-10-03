'use client';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './admin.css';

const STEPS = ['Created', 'Picked up', 'Departed facility', 'In transit', 'Out for delivery', 'Delivered'];
const SERVICES = { sv1: 'Standard delivery', sv2: 'Express delivery', sv3: 'International shipping', sv4: 'Business logistics' };
const EMPTY = { customerName: '', customerEmail: '', customerPhone: '', recipientName: '', recipientPhone: '', from: '', to: '', service: 'sv1', weight: '1', fee: '', eta: '' };
const FIELD_LABELS = { customerName: 'Sender name', customerEmail: 'Sender email', recipientName: 'Recipient name', from: 'From', to: 'To', service: 'Service', eta: 'Estimated delivery', weight: 'Weight', fee: 'Shipping fee' };
const HOLD_REASONS = { customs: 'Held at customs', immigration: 'Immigration review', weather: 'Weather delay', docs: 'Documents required', address: 'Address issue', other: 'Other delay' };
const HOLD_HINTS = { customs: 'Your parcel is being inspected by customs. We will update you once it is cleared.', immigration: 'Your parcel is held for an immigration review. This can take a few extra days.', weather: 'Severe weather is slowing deliveries on this route. Your parcel will move again as soon as it is safe.', docs: 'We need additional documents to continue. Please contact support.', address: 'We could not confirm the delivery address. Please contact support.', other: '' };
const JSON_HEADERS = { 'Content-Type': 'application/json' };
const FILTERS = [['all', 'All'], ['active', 'In progress'], ['hold', 'On hold'], ['ex', 'Exceptions'], ['done', 'Delivered']];

const fmtDate = (d) => { try { return new Date(d + 'T00:00:00').toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' }); } catch { return d; } };
const money = (n) => '$' + Number(n || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function Icon({ name }) {
  const p = {
    plus: 'M12 5v14M5 12h14', search: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm9 16-4-4',
    x: 'M6 6l12 12M18 6 6 18', more: 'M5 12h.01M12 12h.01M19 12h.01', copy: 'M9 9h10v10H9zM5 15V5h10',
    box: 'M3 7l9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10', alert: 'M12 4 2 20h20zM12 10v4M12 17h.01',
    check: 'M5 13l4 4L19 7', truck: 'M3 6h11v10H3zM14 9h4l3 3v4h-7M7 19a1.5 1.5 0 1 0 0-.01M17 19a1.5 1.5 0 1 0 0-.01',
    out: 'M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10', pause: 'M8 5v14M16 5v14', play: 'M7 4l13 8-13 8z',
  }[name];
  return <svg className="ic" viewBox="0 0 24 24" aria-hidden="true"><path d={p} /></svg>;
}

function Modal({ title, onClose, children, wide }) {
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', k);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', k); document.body.style.overflow = ''; };
  }, [onClose]);
  return (
    <div className="m-back" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className={'m-box' + (wide ? ' wide' : '')} role="dialog" aria-modal="true" aria-label={title}>
        <div className="m-head"><h2>{title}</h2><button type="button" className="ib" onClick={onClose} aria-label="Close"><Icon name="x" /></button></div>
        {children}
      </div>
    </div>
  );
}

function RowMenu({ o, onAction }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const h = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [open]);
  const go = (a) => { setOpen(false); onAction(a, o); };
  return (
    <div className="menu" ref={ref}>
      <button type="button" className="ib" aria-label="More actions" aria-expanded={open} onClick={() => setOpen(!open)}><Icon name="more" /></button>
      {open && (
        <ul role="menu">
          <li><button role="menuitem" onClick={() => go('copy')}>Copy tracking ID</button></li>
          <li><button role="menuitem" onClick={() => go('hold')}>{o.paused ? 'Edit hold message' : 'Pause progress'}</button></li>
          <li><button role="menuitem" disabled={o.cur <= 0} onClick={() => go('back')}>Move back a step</button></li>
          <li><button role="menuitem" onClick={() => go('ex')}>{o.ex ? 'Clear exception' : 'Flag exception'}</button></li>
          <li className="sep" />
          <li><button role="menuitem" className="danger" onClick={() => go('delete')}>Delete order</button></li>
        </ul>
      )}
    </div>
  );
}

export default function AdminPage() {
  const [auth, setAuth] = useState(null);
  const [orders, setOrders] = useState([]);
  const [form, setForm] = useState(EMPTY);
  const [pw, setPw] = useState('');
  const [loginErr, setLoginErr] = useState('');
  const [formErr, setFormErr] = useState('');
  const [loadErr, setLoadErr] = useState('');
  const [made, setMade] = useState(null);
  const [modal, setModal] = useState(null); // 'create' | {type:'advance'|'delete', o}
  const [city, setCity] = useState('');
  const [hold, setHold] = useState({ reason: 'customs', message: '' });
  const [busy, setBusy] = useState(false);
  const [q, setQ] = useState('');
  const [filter, setFilter] = useState('all');
  const [toast, setToast] = useState(null);

  const say = useCallback((text, kind = 'ok') => {
    setToast({ text, kind, id: Date.now() });
  }, []);
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3500);
    return () => clearTimeout(t);
  }, [toast]);

  const load = useCallback(async () => {
    try {
      const r = await fetch('/api/orders');
      if (r.status === 401) { setAuth(false); return; }
      setAuth(true);
      if (!r.ok) { setLoadErr('Could not load orders. Check the database connection.'); return; }
      setLoadErr('');
      setOrders(await r.json());
    } catch { setAuth(true); setLoadErr('Network error while loading orders.'); }
  }, []);
  useEffect(() => { load(); }, [load]);

  async function login(e) {
    e.preventDefault();
    setLoginErr(''); setBusy(true);
    const r = await fetch('/api/login', { method: 'POST', headers: JSON_HEADERS, body: JSON.stringify({ password: pw }) });
    setBusy(false);
    if (r.ok) { setPw(''); load(); } else setLoginErr(r.status === 429 ? 'Too many attempts. Wait a minute.' : 'Wrong password.');
  }
  async function logout() {
    await fetch('/api/login', { method: 'DELETE' });
    setAuth(false); setOrders([]); setMade(null);
  }
  async function create(e) {
    e.preventDefault();
    setFormErr(''); setBusy(true);
    const r = await fetch('/api/orders', { method: 'POST', headers: JSON_HEADERS, body: JSON.stringify(form) });
    const j = await r.json().catch(() => ({}));
    setBusy(false);
    if (!r.ok) { setFormErr('Please check: ' + (j.fields || [j.error || 'unknown error']).map((f) => FIELD_LABELS[f] || f).join(', ')); return; }
    setMade(j); setForm(EMPTY); setModal(null); load();
    say('Order ' + j.trackingId + ' created');
  }
  async function patch(o, body, okMsg) {
    setBusy(true);
    const r = await fetch('/api/orders/' + o.id, { method: 'PATCH', headers: JSON_HEADERS, body: JSON.stringify(body) });
    setBusy(false);
    if (r.ok) { say(okMsg); load(); } else say('Update failed', 'err');
    return r.ok;
  }
  async function remove(o) {
    setBusy(true);
    const r = await fetch('/api/orders/' + o.id, { method: 'DELETE' });
    setBusy(false);
    if (r.ok || r.status === 204) { say('Order deleted'); setModal(null); load(); } else say('Delete failed', 'err');
  }
  const copy = async (t) => {
    try { await navigator.clipboard.writeText(t); say('Copied ' + t); } catch { say('Copy failed', 'err'); }
  };
  function onAction(a, o) {
    if (a === 'copy') copy(o.trackingId);
    else if (a === 'back') patch(o, { cur: o.cur - 1 }, 'Moved back to ' + STEPS[o.cur - 1]);
    else if (a === 'hold') { setHold({ reason: o.holdReason || 'customs', message: o.holdMessage || '' }); setModal({ type: 'hold', o }); }
    else if (a === 'resume') patch(o, { hold: { paused: false } }, 'Resumed ' + o.trackingId);
    else if (a === 'ex') patch(o, { ex: !o.ex }, o.ex ? 'Exception cleared' : 'Exception flagged');
    else if (a === 'delete') setModal({ type: 'delete', o });
  }

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const field = (k, label, props = {}) => (
    <label className="f">{label}<input value={form[k]} onChange={set(k)} {...props} /></label>
  );

  const stats = useMemo(() => ({
    total: orders.length,
    active: orders.filter((o) => o.cur < 5 && !o.ex && !o.paused).length,
    hold: orders.filter((o) => o.paused).length,
    ex: orders.filter((o) => o.ex).length,
    done: orders.filter((o) => o.cur >= 5).length,
  }), [orders]);

  const shown = useMemo(() => {
    const s = q.trim().toLowerCase();
    return orders.filter((o) => {
      if (filter === 'active' && !(o.cur < 5 && !o.ex && !o.paused)) return false;
      if (filter === 'hold' && !o.paused) return false;
      if (filter === 'ex' && !o.ex) return false;
      if (filter === 'done' && o.cur < 5) return false;
      if (!s) return true;
      return [o.trackingId, o.customerName, o.recipientName, o.from, o.to].some((v) => String(v || '').toLowerCase().includes(s));
    });
  }, [orders, q, filter]);

  if (auth === null) return <div className="adm"><p className="loading">Loading…</p></div>;

  if (!auth) {
    return (
      <div className="adm">
        <form className="card login" onSubmit={login}>
          <div className="brand big"><span className="logo-dot"><Icon name="box" /></span>Nux Express</div>
          <h1>Admin sign in</h1>
          <p className="sub">Manage shipments and tracking updates.</p>
          <label className="f">Password<input type="password" value={pw} onChange={(e) => setPw(e.target.value)} autoFocus required autoComplete="current-password" /></label>
          {loginErr && <p className="err" role="alert">{loginErr}</p>}
          <button className="btn" disabled={busy}>{busy ? 'Signing in…' : 'Sign in'}</button>
        </form>
      </div>
    );
  }

  const advanceTarget = modal && modal.type === 'advance' ? modal.o : null;

  return (
    <div className="adm">
      <header className="top">
        <div className="w top-in">
          <div className="brand"><span className="logo-dot"><Icon name="box" /></span>Nux Express <span className="tag">Admin</span></div>
          <button className="btn ghost sm" onClick={logout}><Icon name="out" />Sign out</button>
        </div>
      </header>

      <main className="w main">
        <div className="page-head">
          <div><h1>Orders</h1><p className="sub">Create shipments and keep tracking up to date.</p></div>
          <button className="btn" onClick={() => { setFormErr(''); setModal('create'); }}><Icon name="plus" />New order</button>
        </div>

        {made && (
          <div className="banner ok">
            <div><b>Order created.</b> Give this tracking ID to your customer:</div>
            <code>{made.trackingId}</code>
            <button className="btn ghost sm" onClick={() => copy(made.trackingId)}><Icon name="copy" />Copy</button>
            <button className="ib" onClick={() => setMade(null)} aria-label="Dismiss"><Icon name="x" /></button>
          </div>
        )}
        {loadErr && <div className="banner bad" role="alert"><div>{loadErr}</div><button className="btn ghost sm" onClick={load}>Retry</button></div>}

        <section className="stats" aria-label="Summary">
          <div className="stat"><span className="si b"><Icon name="box" /></span><div><b>{stats.total}</b><small>Total orders</small></div></div>
          <div className="stat"><span className="si i"><Icon name="truck" /></span><div><b>{stats.active}</b><small>In progress</small></div></div>
          <div className="stat"><span className="si h"><Icon name="pause" /></span><div><b>{stats.hold}</b><small>On hold</small></div></div>
          <div className="stat"><span className="si r"><Icon name="alert" /></span><div><b>{stats.ex}</b><small>Exceptions</small></div></div>
          <div className="stat"><span className="si g"><Icon name="check" /></span><div><b>{stats.done}</b><small>Delivered</small></div></div>
        </section>

        <section className="card list">
          <div className="toolbar">
            <label className="search"><Icon name="search" /><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search tracking ID, name or city" aria-label="Search orders" /></label>
            <div className="seg" role="tablist">
              {FILTERS.map(([k, l]) => <button key={k} role="tab" aria-selected={filter === k} className={filter === k ? 'on' : ''} onClick={() => setFilter(k)}>{l}</button>)}
            </div>
          </div>

          <div className="tbl">
            <div className="tr th"><span>Tracking ID</span><span>Customer</span><span>Route</span><span>Status</span><span>ETA</span><span className="r">Fee</span><span /></div>
            {shown.map((o) => (
              <div className="tr" key={o.id}>
                <span className="c-id" data-l="Tracking ID"><code>{o.trackingId}</code></span>
                <span className="c-cu" data-l="Customer"><b>{o.customerName}</b><small>to {o.recipientName}</small></span>
                <span className="c-ro" data-l="Route"><b>{o.from}</b><small>→ {o.to}</small></span>
                <span className="c-st" data-l="Status">
                  <span className={'pill' + (o.paused ? ' h' : o.ex ? ' x' : o.cur >= 5 ? ' d' : '')}>{o.paused ? 'On hold' : (o.ex ? 'Exception · ' : '') + STEPS[o.cur]}</span>
                  {o.paused && <small className="hm" title={o.holdMessage}>{HOLD_REASONS[o.holdReason] || 'Delayed'} · at {STEPS[o.cur]}</small>}
                  <i className="bar" aria-hidden="true"><i style={{ width: ((o.cur + 1) / 6) * 100 + '%' }} /></i>
                </span>
                <span className="c-eta" data-l="ETA">{fmtDate(o.eta)}</span>
                <span className="c-fee r" data-l="Fee">{money(o.fee)}</span>
                <span className="c-ac">
                  {o.paused
                    ? <button className="btn sm" onClick={() => onAction('resume', o)}><Icon name="play" />Resume</button>
                    : <button className="btn sm" disabled={o.cur >= 5} onClick={() => { setCity(''); setModal({ type: 'advance', o }); }}>{o.cur >= 5 ? 'Delivered' : 'Advance'}</button>}
                  <RowMenu o={o} onAction={onAction} />
                </span>
              </div>
            ))}
            {!shown.length && (
              <div className="empty">
                <Icon name="box" />
                <b>{orders.length ? 'No matching orders' : 'No orders yet'}</b>
                <span>{orders.length ? 'Try a different search or filter.' : 'Create your first order to get a tracking ID.'}</span>
                {!orders.length && <button className="btn sm" onClick={() => setModal('create')}><Icon name="plus" />New order</button>}
              </div>
            )}
          </div>
        </section>
      </main>

      {modal === 'create' && (
        <Modal title="New order" onClose={() => setModal(null)} wide>
          <form onSubmit={create}>
            <div className="m-body">
              <h3>Sender</h3>
              <div className="grid">
                {field('customerName', 'Name', { required: true })}
                {field('customerEmail', 'Email', { type: 'email', required: true })}
                {field('customerPhone', 'Phone', { type: 'tel' })}
              </div>
              <h3>Recipient</h3>
              <div className="grid">
                {field('recipientName', 'Name', { required: true })}
                {field('recipientPhone', 'Phone', { type: 'tel' })}
              </div>
              <h3>Shipment</h3>
              <div className="grid">
                {field('from', 'From (City, Country)', { required: true, placeholder: 'New York, USA' })}
                {field('to', 'To (City, Country)', { required: true, placeholder: 'Los Angeles, USA' })}
                <label className="f">Service
                  <select value={form.service} onChange={set('service')}>
                    {Object.entries(SERVICES).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                  </select>
                </label>
                {field('weight', 'Weight (kg)', { type: 'number', min: '0.1', step: '0.1', required: true })}
                {field('fee', 'Shipping fee (USD)', { type: 'number', min: '0', step: '0.01', required: true })}
                {field('eta', 'Estimated delivery', { type: 'date', required: true })}
              </div>
              {formErr && <p className="err" role="alert">{formErr}</p>}
            </div>
            <div className="m-foot">
              <button type="button" className="btn ghost" onClick={() => setModal(null)}>Cancel</button>
              <button className="btn" disabled={busy}>{busy ? 'Creating…' : 'Create order'}</button>
            </div>
          </form>
        </Modal>
      )}

      {modal && modal.type === 'hold' && (
        <Modal title={modal.o.paused ? 'Edit hold message' : 'Pause progress'} onClose={() => setModal(null)}>
          <form onSubmit={async (e) => { e.preventDefault(); if (await patch(modal.o, { hold: { paused: true, reason: hold.reason, message: hold.message } }, modal.o.paused ? 'Hold message updated' : 'Progress paused')) setModal(null); }}>
            <div className="m-body">
              <p className="move"><code>{modal.o.trackingId}</code><span className="pill">{STEPS[modal.o.cur]}</span></p>
              <label className="f">Reason
                <select value={hold.reason} onChange={(e) => setHold({ ...hold, reason: e.target.value, message: hold.message.trim() && hold.message !== HOLD_HINTS[hold.reason] ? hold.message : HOLD_HINTS[e.target.value] })}>
                  {Object.entries(HOLD_REASONS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                </select>
              </label>
              <label className="f">Message for the customer
                <textarea value={hold.message} onChange={(e) => setHold({ ...hold, message: e.target.value })} maxLength={300} rows={4} required autoFocus placeholder="Tell the customer what is happening and what to expect." />
                <span className="cnt">{hold.message.length}/300</span>
              </label>
              <p className="note">This message appears on the public tracking page until you resume the parcel. Its progress stays at <b>{STEPS[modal.o.cur]}</b> and it cannot be advanced while paused.</p>
            </div>
            <div className="m-foot">
              <button type="button" className="btn ghost" onClick={() => setModal(null)}>Cancel</button>
              <button className="btn" disabled={busy || !hold.message.trim()}>{modal.o.paused ? 'Save message' : 'Pause parcel'}</button>
            </div>
          </form>
        </Modal>
      )}

      {advanceTarget && (
        <Modal title="Advance order" onClose={() => setModal(null)}>
          <form onSubmit={async (e) => { e.preventDefault(); if (await patch(advanceTarget, { cur: advanceTarget.cur + 1, city: city.trim() }, 'Moved to ' + STEPS[advanceTarget.cur + 1])) setModal(null); }}>
            <div className="m-body">
              <p className="move"><code>{advanceTarget.trackingId}</code><span><span className="pill">{STEPS[advanceTarget.cur]}</span> → <span className="pill d">{STEPS[advanceTarget.cur + 1]}</span></span></p>
              <label className="f">Current city <em>(optional)</em><input value={city} onChange={(e) => setCity(e.target.value)} placeholder="e.g. Chicago" autoFocus /></label>
            </div>
            <div className="m-foot">
              <button type="button" className="btn ghost" onClick={() => setModal(null)}>Cancel</button>
              <button className="btn" disabled={busy}>Confirm</button>
            </div>
          </form>
        </Modal>
      )}

      {modal && modal.type === 'delete' && (
        <Modal title="Delete order?" onClose={() => setModal(null)}>
          <div className="m-body"><p>Order <code>{modal.o.trackingId}</code> will be permanently removed and its tracking link will stop working. This cannot be undone.</p></div>
          <div className="m-foot">
            <button className="btn ghost" onClick={() => setModal(null)}>Cancel</button>
            <button className="btn danger" disabled={busy} onClick={() => remove(modal.o)}>Delete</button>
          </div>
        </Modal>
      )}

      {toast && <div key={toast.id} className={'toast ' + toast.kind} role="status">{toast.text}</div>}
    </div>
  );
}
