// Read-only access to MongoDB for the public site. Server-side only.
// Use a database user with the "read" role for MONGODB_URI here: this code cannot write, and neither can its credentials.
import { MongoClient } from 'mongodb';

const NAME = process.env.MONGODB_DB || 'nux_express';

function conn() {
  if (!globalThis._nuxSiteMongo) {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error('MONGODB_URI is not set');
    const p = new MongoClient(uri, { maxPoolSize: 10, serverSelectionTimeoutMS: 5000 }).connect();
    p.catch(() => { if (globalThis._nuxSiteMongo === p) globalThis._nuxSiteMongo = undefined; });
    globalThis._nuxSiteMongo = p;
  }
  return globalThis._nuxSiteMongo;
}

// Only the fields the tracking page needs. Customer name, email and phone are never even fetched.
const PUBLIC_FIELDS = {
  _id: 0, trackingId: 1, cur: 1, ex: 1, from: 1, to: 1, eta: 1, service: 1, weight: 1, fee: 1,
  events: 1, createdAt: 1, paused: 1, holdReason: 1, holdMessage: 1, holdAt: 1,
};

export const db = {
  byTracking: async (id) => {
    const c = (await conn()).db(NAME).collection('orders');
    return (await c.findOne({ trackingId: String(id) }, { projection: PUBLIC_FIELDS })) || null;
  },
};
