import 'server-only'
import { createHmac, timingSafeEqual } from 'node:crypto'

export const COOKIE_NAME = 'vw_session'
const secret = process.env.SESSION_SECRET || 'DEV_ONLY_CHANGE_THIS_SESSION_SECRET'

export type Session = { login: string; tier: string; prefix: string; expiresAt: number; remember: boolean }

function sign(value: string) {
  return createHmac('sha256', secret).update(value).digest('base64url')
}

export function createSession(session: Session) {
  const payload = Buffer.from(JSON.stringify(session)).toString('base64url')
  return `${payload}.${sign(payload)}`
}

export function readSession(token?: string): Session | null {
  if (!token) return null
  const [payload, signature] = token.split('.')
  if (!payload || !signature) return null
  const expected = sign(payload)
  const a = Buffer.from(signature)
  const b = Buffer.from(expected)
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null
  try {
    const session = JSON.parse(Buffer.from(payload, 'base64url').toString()) as Session
    if (!session.login || session.expiresAt <= Date.now()) return null
    return session
  } catch { return null }
}
