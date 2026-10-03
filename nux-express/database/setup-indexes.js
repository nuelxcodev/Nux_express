// Creates the indexes the app relies on. Safe to run any number of times.
const { MongoClient } = require('mongodb');

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI is not set');
  const client = await new MongoClient(uri, { serverSelectionTimeoutMS: 8000 }).connect();
  try {
    const orders = client.db(process.env.MONGODB_DB || 'nux_express').collection('orders');
    await orders.createIndex({ trackingId: 1 }, { unique: true }); // lookups + guarantees no duplicate tracking IDs
    await orders.createIndex({ createdAt: -1 });                   // admin list, newest first
    console.log('indexes ready');
  } finally {
    await client.close();
  }
}
main().catch((e) => { console.error(e.message); process.exit(1); });
