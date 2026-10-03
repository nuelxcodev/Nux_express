// Full read/write access to MongoDB. Server-side only (never imported by client code).
// Same function names as the old json-server version, so the routes did not have to change.
import { MongoClient, ObjectId } from 'mongodb';

const NAME = process.env.MONGODB_DB || 'nux_express';

// One shared connection per server process (also survives Next.js dev hot reloads).
function conn() {
  if (!globalThis._nuxAdminMongo) {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error('MONGODB_URI is not set');
    const p = new MongoClient(uri, { maxPoolSize: 10, serverSelectionTimeoutMS: 5000 }).connect();
    p.catch(() => { if (globalThis._nuxAdminMongo === p) globalThis._nuxAdminMongo = undefined; }); // retry on next request
    globalThis._nuxAdminMongo = p;
  }
  return globalThis._nuxAdminMongo;
}

async function col() {
  const c = (await conn()).db(NAME).collection('orders');
  if (!globalThis._nuxIndexes) {
    globalThis._nuxIndexes = c.createIndex({ trackingId: 1 }, { unique: true })
      .then(() => c.createIndex({ createdAt: -1 }))
      .catch((e) => { globalThis._nuxIndexes = undefined; console.error('index setup failed:', e.message); });
  }
  return c;
}

// Mongo _id -> the string `id` the admin UI and API already use.
const out = (d) => { if (!d) return null; const { _id, ...rest } = d; return { id: String(_id), ...rest }; };
const oid = (id) => {
  const s = String(id || '');
  return /^[0-9a-f]{24}$/i.test(s) ? new ObjectId(s) : null;
};

export const db = {
  list: async () => (await (await col()).find({}).sort({ createdAt: -1 }).toArray()).map(out),
  byTracking: async (id) => out(await (await col()).findOne({ trackingId: String(id) })),
  get: async (id) => { const _id = oid(id); return _id ? out(await (await col()).findOne({ _id })) : null; },
  create: async (o) => {
    const doc = { ...o };
    const r = await (await col()).insertOne(doc);
    return out({ ...doc, _id: r.insertedId });
  },
  update: async (id, p) => {
    const _id = oid(id);
    if (!_id) return null;
    return out(await (await col()).findOneAndUpdate({ _id }, { $set: p }, { returnDocument: 'after' }));
  },
  remove: async (id) => { const _id = oid(id); if (_id) await (await col()).deleteOne({ _id }); return null; },
};
