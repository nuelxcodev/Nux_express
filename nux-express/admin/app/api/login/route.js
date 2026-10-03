import { NextResponse } from 'next/server';
import { passwordOk, sessionToken } from '@/lib/auth';
import { limited, ipOf } from '@/lib/ratelimit';

export const dynamic = 'force-dynamic';

export async function POST(req) {
  if (limited('login:' + ipOf(req), 5, 60000)) return NextResponse.json({ error: 'rate_limited' }, { status: 429 });
  let b = {};
  try { b = await req.json(); } catch {}
  if (!passwordOk(b.password)) return NextResponse.json({ error: 'invalid' }, { status: 401 });
  const res = NextResponse.json({ ok: true });
  res.cookies.set('nux_admin', sessionToken(), {
    httpOnly: true, sameSite: 'strict', secure: process.env.NODE_ENV === 'production', path: '/', maxAge: 60 * 60 * 8,
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set('nux_admin', '', { path: '/', maxAge: 0 });
  return res;
}
