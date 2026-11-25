import { NextRequest, NextResponse } from 'next/server'
import { COOKIE_NAME, readSession } from '@/lib/auth'

export async function GET(request: NextRequest) {
  const session = readSession(request.cookies.get(COOKIE_NAME)?.value)
  if (!session) return NextResponse.json({ authenticated: false }, { status: 401 })
  return NextResponse.json({
    authenticated: true, login: session.login, tier: session.tier,
    prefix: session.prefix, expiresAt: session.expiresAt,
  })
}
