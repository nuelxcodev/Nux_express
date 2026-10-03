import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { toPublic } from '@/lib/orders';
import { limited, ipOf } from '@/lib/ratelimit';

export const dynamic = 'force-dynamic';
const notFound = () => NextResponse.json({ error: 'not_found' }, { status: 404 });

// Public. Same 404 for malformed and unknown IDs so nothing about valid IDs leaks.
export async function GET(req, { params }) {
  if (limited('track:' + ipOf(req), 30, 60000)) return NextResponse.json({ error: 'rate_limited' }, { status: 429 });
  const id = String(params.id || '').toUpperCase();
  if (!/^NUX-\d{8}$/.test(id)) return notFound();
  try {
    const o = await db.byTracking(id);
    if (!o) return notFound();
    return NextResponse.json(toPublic(o), { headers: { 'Cache-Control': 'no-store' } });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'unavailable' }, { status: 503 });
  }
}
