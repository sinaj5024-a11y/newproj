import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { createSession, COOKIE_NAME } from '@/lib/auth'

export const runtime = 'nodejs'
const PRIVATE_DIR = path.join(process.cwd(), 'api', 'private')

async function privateText(filename: string, envName: string) {
  if (process.env[envName]) return process.env[envName]!
  return readFile(path.join(PRIVATE_DIR, filename), 'utf8')
}

function parseDate(value: string) {
  const match = /^(\d{2})-(\d{2})-(\d{4})$/.exec(value)
  if (!match) return NaN
  return new Date(Number(match[3]), Number(match[2]) - 1, Number(match[1]), 23, 59, 59, 999).getTime()
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const login = String(body.login ?? '').trim()
    const password = String(body.password ?? '')
    const key = String(body.key ?? '').trim()
    const remember = body.remember === true
    if (!login || !password || !key || login.length > 80 || password.length > 200 || key.length > 200) {
      return NextResponse.json({ error: 'Заполни все поля.' }, { status: 400 })
    }

    const [usersText, keysText] = await Promise.all([
      privateText('logins.txt', 'VOIDWARE_LOGIN_DATA'),
      privateText('keys.txt', 'VOIDWARE_SUBSCRIPTION_KEYS'),
    ])
    const userExists = usersText.split(/\r?\n/).some(line => {
      const [storedLogin, storedPassword] = line.trim().split(/\s+/)
      return storedLogin && storedPassword && storedLogin === login && storedPassword === password
    })
    if (!userExists) return NextResponse.json({ error: 'Неверный логин или пароль.' }, { status: 401 })

    const record = keysText.split(/\r?\n/).map(line => line.trim()).filter(Boolean).map(line => {
      const [storedKey, date, tier = 'ordinary', prefix = 'USER'] = line.split(/\s+/)
      return { storedKey, date, tier, prefix, expiresAt: parseDate(date) }
    }).find(item => item.storedKey === key)

    if (!record) return NextResponse.json({ error: 'Ключ подписки не найден.' }, { status: 401 })
    if (!Number.isFinite(record.expiresAt) || record.expiresAt < Date.now()) {
      return NextResponse.json({ error: 'Срок действия подписки истёк.' }, { status: 403 })
    }

    const lifetime = remember ? 7 * 24 * 60 * 60 * 1000 : 8 * 60 * 60 * 1000
    const token = createSession({ login, tier: record.tier, prefix: record.prefix, expiresAt: Date.now() + lifetime, remember })
    const response = NextResponse.json({ ok: true })
    response.cookies.set(COOKIE_NAME, token, {
      httpOnly: true, secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict', path: '/', maxAge: lifetime / 1000,
    })
    return response
  } catch {
    return NextResponse.json({ error: 'Сервер авторизации не настроен. Проверь приватные файлы или переменные окружения.' }, { status: 500 })
  }
}
