// Read-only access to the shared database service. Uses the READ key, which cannot write.
const BASE = process.env.JSON_SERVER_URL || 'http://127.0.0.1:4000';

export const db = {
  byTracking: async (id) => {
    const r = await fetch(BASE + '/orders?trackingId=' + encodeURIComponent(id), {
      cache: 'no-store',
      headers: { 'x-api-key': process.env.DB_READ_KEY || '' },
    });
    if (r.status === 404) return null;
    if (!r.ok) throw new Error('database ' + r.status);
    const a = await r.json();
    return a[0] || null;
  },
};
