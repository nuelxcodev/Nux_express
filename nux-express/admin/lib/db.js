// Full access to the shared database service. Uses the ADMIN key. Server-side only.
const BASE = process.env.JSON_SERVER_URL || 'http://127.0.0.1:4000';

async function call(path, opts = {}) {
  const r = await fetch(BASE + path, {
    cache: 'no-store',
    ...opts,
    headers: { 'Content-Type': 'application/json', 'x-api-key': process.env.DB_ADMIN_KEY || '', ...(opts.headers || {}) },
  });
  if (r.status === 404) return null;
  if (!r.ok) throw new Error('database ' + r.status);
  const t = await r.text();
  return t ? JSON.parse(t) : null;
}

export const db = {
  list: () => call('/orders?_sort=createdAt&_order=desc'),
  byTracking: async (id) => {
    const a = await call('/orders?trackingId=' + encodeURIComponent(id));
    return (a && a[0]) || null;
  },
  get: (id) => call('/orders/' + encodeURIComponent(id)),
  create: (o) => call('/orders', { method: 'POST', body: JSON.stringify(o) }),
  update: (id, p) => call('/orders/' + encodeURIComponent(id), { method: 'PATCH', body: JSON.stringify(p) }),
  remove: (id) => call('/orders/' + encodeURIComponent(id), { method: 'DELETE' }),
};
