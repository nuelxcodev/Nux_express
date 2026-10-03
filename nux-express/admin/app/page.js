'use client';

import { useCallback, useEffect, useState } from 'react';
import './admin.css';

const STEPS = [
  'Created',
  'Picked up',
  'Departed facility',
  'In transit',
  'Out for delivery',
  'Delivered',
];

const SERVICES = {
  sv1: 'Standard delivery',
  sv2: 'Express delivery',
  sv3: 'International shipping',
  sv4: 'Business logistics',
};

const EMPTY = {
  customerName: '',
  customerEmail: '',
  customerPhone: '',
  recipientName: '',
  recipientPhone: '',
  from: '',
  to: '',
  service: 'sv1',
  weight: '1',
  fee: '',
  eta: '',
};

const JSON_HEADERS = {
  'Content-Type': 'application/json',
};

export default function AdminPage() {
  const [auth, setAuth] = useState(null);
  const [orders, setOrders] = useState([]);
  const [form, setForm] = useState(EMPTY);
  const [pw, setPw] = useState('');
  const [msg, setMsg] = useState('');
  const [made, setMade] = useState(null);

  const load = useCallback(async () => {
    const r = await fetch('/api/orders');

    if (r.status === 401) {
      setAuth(false);
      return;
    }

    if (!r.ok) {
      setMsg('Could not load orders. Is json-server running?');
      setAuth(true);
      return;
    }

    setAuth(true);
    setOrders(await r.json());
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function login(e) {
    e.preventDefault();
    setMsg('');

    const r = await fetch('/api/login', {
      method: 'POST',
      headers: JSON_HEADERS,
      body: JSON.stringify({ password: pw }),
    });

    if (r.ok) {
      setPw('');
      load();
    } else {
      setMsg(
        r.status === 429
          ? 'Too many attempts. Wait a minute.'
          : 'Wrong password.'
      );
    }
  }

  async function logout() {
    await fetch('/api/login', {
      method: 'DELETE',
    });

    setAuth(false);
    setOrders([]);
    setMade(null);
  }

  async function create(e) {
    e.preventDefault();
    setMsg('');

    const r = await fetch('/api/orders', {
      method: 'POST',
      headers: JSON_HEADERS,
      body: JSON.stringify(form),
    });

    const j = await r.json();

    if (!r.ok) {
      setMsg('Please check: ' + (j.fields || [j.error]).join(', '));
      return;
    }

    setMade(j);
    setForm(EMPTY);
    load();
  }

  async function patch(o, body) {
    await fetch('/api/orders/' + o.id, {
      method: 'PATCH',
      headers: JSON_HEADERS,
      body: JSON.stringify(body),
    });

    load();
  }

  async function remove(o) {
    if (
      !window.confirm(
        'Delete order ' + o.trackingId + '? This cannot be undone.'
      )
    ) {
      return;
    }

    await fetch('/api/orders/' + o.id, {
      method: 'DELETE',
    });

    load();
  }

  const copy = (t) =>
    navigator.clipboard && navigator.clipboard.writeText(t);

  const set = (k) => (e) =>
    setForm({
      ...form,
      [k]: e.target.value,
    });

  const field = (k, label, props = {}) => (
    <label>
      {label}
      <input value={form[k]} onChange={set(k)} {...props} />
    </label>
  );

  if (auth === null) {
    return (
      <div className="adm">
        <p style={{ padding: 24 }}>Loading…</p>
      </div>
    );
  }

  if (!auth) {
    return (
      <div className="adm">
        <form className="adm-card adm-login" onSubmit={login}>
          <h2>Nux Express admin</h2>

          <label>
            Password
            <input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              autoFocus
              required
            />
          </label>

          <button className="adm-btn">Sign in</button>

          {msg && <p className="adm-msg">{msg}</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="adm">
      <div className="adm-top">
        <b>Nux Express · Orders</b>

        <button
          className="adm-btn s g"
          onClick={logout}
        >
          Sign out
        </button>
      </div>

      <div className="adm-wrap">
        <form className="adm-card" onSubmit={create}>
          <h2>Create order</h2>

          <div className="adm-grid">
            {field('customerName', 'Sender name', {
              required: true,
            })}

            {field('customerEmail', 'Sender email', {
              type: 'email',
              required: true,
            })}

            {field('customerPhone', 'Sender phone')}

            {field('recipientName', 'Recipient name', {
              required: true,
            })}

            {field('recipientPhone', 'Recipient phone')}

            {field('from', 'From (City, Country)', {
              required: true,
              placeholder: 'New York, USA',
            })}

            {field('to', 'To (City, Country)', {
              required: true,
              placeholder: 'Los Angeles, USA',
            })}

            <label>
              Service
              <select value={form.service} onChange={set('service')}>
                {Object.entries(SERVICES).map(([k, v]) => (
                  <option key={k} value={k}>
                    {v}
                  </option>
                ))}
              </select>
            </label>

            {field('weight', 'Weight (kg)', {
              type: 'number',
              min: '0.1',
              step: '0.1',
              required: true,
            })}

            {field('fee', 'Shipping fee (USD)', {
              type: 'number',
              min: '0',
              step: '0.01',
              required: true,
            })}

            {field('eta', 'Estimated delivery', {
              type: 'date',
              required: true,
            })}
          </div>

          <p>
            <button className="adm-btn">
              Create order
            </button>
          </p>

          {msg && <p className="adm-msg">{msg}</p>}

          {made && (
            <div className="adm-new">
              <span>
                New tracking ID (give this to your customer):
              </span>

              <code>{made.trackingId}</code>

              <button
                type="button"
                className="adm-btn s g"
                onClick={() => copy(made.trackingId)}
              >
                Copy
              </button>
            </div>
          )}
        </form>

        <div className="adm-card orders-card">
          <h2>Orders ({orders.length})</h2>

          {/* Only the table scrolls horizontally */}
          <div className="adm-scroll">
            <table>
              <thead>
                <tr>
                  <th>Tracking ID</th>
                  <th>Sender → Recipient</th>
                  <th>Route</th>
                  <th>Status</th>
                  <th>ETA</th>
                  <th>Fee</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((o) => (
                  <tr key={o.id}>
                    <td>
                      <code>{o.trackingId}</code>
                    </td>

                    <td>
                      {o.customerName} → {o.recipientName}
                    </td>

                    <td>
                      {o.from} → {o.to}
                    </td>

                    <td>
                      <span
                        className={
                          'adm-pill' + (o.ex ? ' x' : '')
                        }
                      >
                        {o.ex ? 'Exception · ' : ''}
                        {STEPS[o.cur]}
                      </span>
                    </td>

                    <td>{o.eta}</td>

                    <td>
                      ${Number(o.fee).toFixed(2)}
                    </td>

                    <td>
                      <div className="row">
                        <button
                          type="button"
                          className="adm-btn s g"
                          onClick={() => copy(o.trackingId)}
                        >
                          Copy ID
                        </button>

                        <button
                          type="button"
                          className="adm-btn s"
                          disabled={o.cur >= 5}
                          onClick={() =>
                            patch(o, {
                              cur: o.cur + 1,
                              city:
                                window.prompt(
                                  'City for the next step (optional)'
                                ) || '',
                            })
                          }
                        >
                          Advance
                        </button>

                        <button
                          type="button"
                          className="adm-btn s g"
                          disabled={o.cur <= 0}
                          onClick={() =>
                            patch(o, {
                              cur: o.cur - 1,
                            })
                          }
                        >
                          Back
                        </button>

                        <button
                          type="button"
                          className="adm-btn s g"
                          onClick={() =>
                            patch(o, {
                              ex: !o.ex,
                            })
                          }
                        >
                          {o.ex
                            ? 'Clear exception'
                            : 'Exception'}
                        </button>

                        <button
                          type="button"
                          className="adm-btn s d"
                          onClick={() => remove(o)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {!orders.length && (
                  <tr>
                    <td colSpan="7">
                      No orders yet. Create the first one above.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}