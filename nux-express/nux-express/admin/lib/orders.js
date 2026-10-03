import crypto from 'node:crypto';
import { db } from './db';

export const SERVICES = ['sv1', 'sv2', 'sv3', 'sv4']; // standard, express, international, business
export const HOLD_REASONS = ['customs', 'immigration', 'weather', 'docs', 'address', 'other'];
const cityOf = (s) => String(s).split(',')[0].trim();

export async function newTrackingId() {
  for (let i = 0; i < 10; i++) {
    const id = 'NUX-' + String(crypto.randomInt(0, 1e8)).padStart(8, '0');
    if (!(await db.byTracking(id))) return id;
  }
  throw new Error('could not allocate tracking id');
}

// What the public tracking page may see. Customer details never leave the server.
export function toPublic(o) {
  const c = [], ts = [];
  let city = cityOf(o.from), t = o.createdAt;
  for (let i = 0; i <= o.cur; i++) {
    const e = o.events.find((x) => x.step === i);
    if (e) { city = e.city; t = e.ts; }
    c.push(city); ts.push(t);
  }
  const country = (String(o.to).split(',')[1] || '').trim();
  return {
    cur: o.cur, ex: o.ex ? 1 : 0, from: o.from, to: o.to,
    loc: c[o.cur] + (country ? ', ' + country : ''),
    pz: o.paused ? 1 : 0, pr: o.paused ? o.holdReason || 'other' : '', pm: o.paused ? o.holdMessage || '' : '', pa: o.paused ? o.holdAt || '' : '',
    eta: o.eta, c, ts, chg: { s: o.service, w: o.weight, fee: o.fee },
  };
}

export function validate(b) {
  const s = (k, n = 120) => String(b[k] ?? '').trim().slice(0, n);
  const v = {
    customerName: s('customerName'), customerEmail: s('customerEmail'), customerPhone: s('customerPhone', 30),
    recipientName: s('recipientName'), recipientPhone: s('recipientPhone', 30),
    from: s('from'), to: s('to'), service: s('service', 4), eta: s('eta', 10),
    weight: Number(b.weight), fee: Number(b.fee),
  };
  const e = [];
  if (!v.customerName) e.push('customerName');
  if (!/^\S+@\S+\.\S+$/.test(v.customerEmail)) e.push('customerEmail');
  if (!v.recipientName) e.push('recipientName');
  if (!v.from) e.push('from');
  if (!v.to) e.push('to');
  if (!SERVICES.includes(v.service)) e.push('service');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(v.eta)) e.push('eta');
  if (!(v.weight > 0 && v.weight <= 1000)) e.push('weight');
  if (!(v.fee >= 0 && v.fee <= 100000)) e.push('fee');
  return { v, e };
}
export { cityOf };
