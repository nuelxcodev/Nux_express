import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { isAdmin } from '@/lib/auth';
import { newTrackingId, validate, cityOf } from '@/lib/orders';

export const dynamic = 'force-dynamic';
const unauth = () => NextResponse.json({ error: 'unauthorized' }, { status: 401 });

export async function GET(req) {
  if (!isAdmin(req)) return unauth();
  try {
    return NextResponse.json((await db.list()) || []);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'database_unavailable' }, { status: 503 });
  }
}

export async function POST(req) {
  if (!isAdmin(req)) return unauth();
  let b;
  try { b = await req.json(); } catch { return NextResponse.json({ error: 'bad_json' }, { status: 400 }); }
  const { v, e } = validate(b);
  if (e.length) return NextResponse.json({ error: 'invalid', fields: e }, { status: 400 });
  const now = new Date().toISOString();
  // trackingId has a unique index; if two orders ever draw the same ID, draw again.
  for (let i = 0; i < 5; i++) {
    const order = {
      trackingId: await newTrackingId(), ...v, ex: false, paused: false, cur: 0,
      events: [{ step: 0, city: cityOf(v.from), ts: now }], createdAt: now,
    };
    try {
      return NextResponse.json(await db.create(order), { status: 201 });
    } catch (e) {
      if (!(e && e.code === 11000)) throw e;
    }
  }
  return NextResponse.json({ error: 'could_not_allocate_id' }, { status: 503 });
}
