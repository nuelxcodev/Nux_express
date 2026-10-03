import crypto from 'node:crypto';

function secret() {
  const s = process.env.SESSION_SECRET;
  if (!s && process.env.NODE_ENV === 'production') throw new Error('SESSION_SECRET is required in production');
  return s || 'dev-only-secret';
}
export const sessionToken = () => crypto.createHmac('sha256', secret()).update('nux-admin').digest('hex');

export function passwordOk(p) {
  const real = process.env.ADMIN_PASSWORD;
  if (!real) return false;
  const h = (x) => crypto.createHash('sha256').update(String(x)).digest();
  return crypto.timingSafeEqual(h(p), h(real));
}
export function isAdmin(req) {
  const c = req.cookies.get('nux_admin');
  if (!c) return false;
  const a = Buffer.from(c.value), b = Buffer.from(sessionToken());
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}
