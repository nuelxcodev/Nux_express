import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { isAdmin } from '@/lib/auth';
import { HOLD_REASONS } from '@/lib/orders';

export const dynamic = 'force-dynamic';
const unauth = () => NextResponse.json({ error: 'unauthorized' }, { status: 401 });
const bad = () => NextResponse.json({ error: 'invalid' }, { status: 400 });
const paused = () => NextResponse.json({ error: 'paused' }, { status: 409 });

// Body (all optional): { cur: 0-5, city: 'Chicago', ex: true|false, eta: 'YYYY-MM-DD',
//   hold: { paused: true, reason: 'customs', message: 'Shown to the customer' } | { paused: false } }
export async function PATCH(req, { params }) {
  if (!isAdmin(req)) return unauth();
  const o = await db.get(params.id);
  if (!o) return NextResponse.json({ error: 'not_found' }, { status: 404 });
  let b;
  try { b = await req.json(); } catch { return bad(); }
  const p = {};
  const willPause = b.hold !== undefined ? !!(b.hold && b.hold.paused) : !!o.paused;
  if (b.cur !== undefined) {
    const n = Number(b.cur);
    if (!Number.isInteger(n) || n < 0 || n > 5) return bad();
    if (n > o.cur && willPause) return paused(); // resume first, then advance
    const ev = o.events.filter((e) => e.step <= n);
    if (n > o.cur) {
      const city = String(b.city || '').trim().slice(0, 80) || ev[ev.length - 1].city;
      for (let s = o.cur + 1; s <= n; s++) ev.push({ step: s, city, ts: new Date().toISOString() });
    }
    p.cur = n; p.events = ev;
  }
  if (b.hold !== undefined) {
    const h = b.hold || {};
    if (h.paused) {
      const message = String(h.message || '').trim().slice(0, 300);
      if (!message) return bad();
      p.paused = true;
      p.holdReason = HOLD_REASONS.includes(h.reason) ? h.reason : 'other';
      p.holdMessage = message;
      p.holdAt = o.paused && o.holdAt ? o.holdAt : new Date().toISOString();
    } else {
      p.paused = false; p.holdReason = ''; p.holdMessage = ''; p.holdAt = null;
    }
  }
  if (b.ex !== undefined) p.ex = !!b.ex;
  if (b.eta !== undefined) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(String(b.eta))) return bad();
    p.eta = b.eta;
  }
  return NextResponse.json(await db.update(o.id, p));
}

export async function DELETE(req, { params }) {
  if (!isAdmin(req)) return unauth();
  await db.remove(params.id);
  return new NextResponse(null, { status: 204 });
}
