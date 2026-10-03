// One-time (and safely repeatable) import of the old json-server data into MongoDB.
//   npm run migrate:dry   -> shows what would happen, writes nothing
//   npm run migrate       -> imports
// Orders are matched on trackingId. An order that already exists in MongoDB is left untouched,
// so re-running never overwrites newer data and never creates duplicates.
const fs = require('node:fs');
const path = require('node:path');
const { MongoClient } = require('mongodb');

const dry = process.argv.includes('--dry-run');
const file = path.resolve(process.argv.find((a, i) => i > 1 && !a.startsWith('--')) || process.env.JSON_FILE || path.join(__dirname, 'db.json'));

function normalise(o) {
  const { id, ...rest } = o;                       // json-server's numeric/string id is replaced by Mongo's _id
  const createdAt = rest.createdAt || new Date().toISOString();
  const cur = Number.isInteger(rest.cur) ? rest.cur : 0;
  return {
    ...rest,
    legacyId: id === undefined ? null : id,         // kept for reference only
    cur,
    ex: !!rest.ex,
    paused: !!rest.paused,                          // new field: older orders are simply "not paused"
    holdReason: rest.holdReason || '',
    holdMessage: rest.holdMessage || '',
    holdAt: rest.holdAt || null,
    events: Array.isArray(rest.events) && rest.events.length ? rest.events : [{ step: 0, city: String(rest.from || '').split(',')[0].trim(), ts: createdAt }],
    createdAt,
  };
}

async function main() {
  if (!fs.existsSync(file)) throw new Error('Cannot find ' + file);
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  const list = Array.isArray(data.orders) ? data.orders : [];
  const bad = list.filter((o) => !/^NUX-\d{8}$/.test(String(o.trackingId || '')));
  if (bad.length) console.warn('Skipping ' + bad.length + ' order(s) without a valid trackingId');
  const good = list.filter((o) => !bad.includes(o)).map(normalise);
  console.log('Source: ' + file + ' (' + list.length + ' orders, ' + good.length + ' importable)');
  if (dry) { console.log('Dry run: nothing written.'); return; }

  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI is not set');
  const client = await new MongoClient(uri, { serverSelectionTimeoutMS: 8000 }).connect();
  try {
    const orders = client.db(process.env.MONGODB_DB || 'nux_express').collection('orders');
    await orders.createIndex({ trackingId: 1 }, { unique: true });
    await orders.createIndex({ createdAt: -1 });
    let inserted = 0, existing = 0;
    for (const o of good) {
      const r = await orders.updateOne({ trackingId: o.trackingId }, { $setOnInsert: o }, { upsert: true });
      if (r.upsertedCount) inserted++; else existing++;
    }
    const total = await orders.countDocuments();
    console.log('Inserted ' + inserted + ', already present ' + existing + '. Orders now in MongoDB: ' + total);
  } finally {
    await client.close();
  }
}
main().catch((e) => { console.error(e.message); process.exit(1); });
