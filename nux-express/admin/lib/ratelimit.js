// In-memory limiter (per server instance). Swap for Redis/Upstash if you run several instances.
const hits = new Map();
export function limited(key, max, ms) {
  const now = Date.now();
  const a = (hits.get(key) || []).filter((t) => now - t < ms);
  a.push(now);
  hits.set(key, a);
  if (hits.size > 5000) for (const [k, v] of hits) if (!v.length || now - v[v.length - 1] > ms) hits.delete(k);
  return a.length > max;
}
export const ipOf = (req) => (req.headers.get('x-forwarded-for') || 'local').split(',')[0].trim();
