import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { isAdmin } from '@/lib/auth';
import { newTrackingId, validate, cityOf } from '@/lib/orders';

export const dynamic = 'force-dynamic';
const unauth = () => NextResponse.json({ error: 'unauthorized' }, { status: 401 });

export async function GET(req) {
  if (!isAdmin(req)) return unauth();
  return NextResponse.json((await db.list()) || []);
}

export async function POST(req) {
  if (!isAdmin(req)) return unauth();
  let b;
  try { b = await req.json(); } catch { return NextResponse.json({ error: 'bad_json' }, { status: 400 }); }
  const { v, e } = validate(b);
  if (e.length) return NextResponse.json({ error: 'invalid', fields: e }, { status: 400 });
  const now = new Date().toISOString();
  const order = {
    trackingId: await newTrackingId(), ...v, ex: false, cur: 0,
    events: [{ step: 0, city: cityOf(v.from), ts: now }], createdAt: now,
  };
  return NextResponse.json(await db.create(order), { status: 201 });
}
