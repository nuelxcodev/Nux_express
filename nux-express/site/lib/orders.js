export const cityOf = (s) => String(s).split(',')[0].trim();

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
    eta: o.eta, c, ts, chg: { s: o.service, w: o.weight, fee: o.fee },
  };
}
