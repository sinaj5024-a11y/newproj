'use client'

import { useState } from 'react'
import { ArrowLeft, LockKeyhole, ShieldCheck, Sparkles, LoaderCircle } from 'lucide-react'
import { Footer, Header } from '@/components/voidware-landing'

export default function VoidWareLogin() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [key, setKey] = useState('')
  const [remember, setRemember] = useState(true)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setLoading(true)
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login, password, key, remember }),
      })
      const result = await response.json()
      if (!response.ok) { setError(result.error || 'Не удалось войти.'); return }
      window.location.assign('/account')
    } catch {
      setError('Не удалось связаться с сервером. Попробуй ещё раз.')
    } finally { setLoading(false) }
  }

  return (
    <main className="voidware-page login-page">
      <section className="login-hero">
        <div className="hero-sky" aria-hidden="true" />
        <Header />
        <div className="login-layout">
          <div className="login-copy">
            <span className="login-eyebrow"><Sparkles aria-hidden="true" /> ЛИЧНЫЙ КАБИНЕТ VOIDWARE</span>
            <h1>Рады видеть<br />тебя снова<span>.</span></h1>
            <p>Войди в аккаунт, чтобы открыть личный кабинет и проверить свою подписку.</p>
            <div className="login-assurances" aria-label="Безопасность входа">
              <div className="login-assurance-icon"><ShieldCheck aria-hidden="true" /></div>
              <div><strong>Защищённый вход</strong><span>Сессия хранится в защищённой HttpOnly cookie.</span></div>
            </div>
          </div>
          <section className="login-card" aria-labelledby="login-heading">
            <div className="login-card-top">
              <div className="login-card-icon"><LockKeyhole aria-hidden="true" /></div>
              <span className="login-secure-label"><i /> ЗАЩИЩЁННЫЙ ВХОД</span>
            </div>
            <span className="login-card-eyebrow">ТВОЙ АККАУНТ</span>
            <h2 id="login-heading">Войди в аккаунт</h2>
            <p className="login-card-copy">Введи логин, пароль и ключ подписки.</p>
            <form className="vw-auth-form" onSubmit={submit}>
              <label>Логин<input autoComplete="username" value={login} onChange={e => setLogin(e.target.value)} required maxLength={80} /></label>
              <label>Пароль<input type="password" autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} required maxLength={200} /></label>
              <label>Ключ подписки<input className="vw-key-input" autoComplete="off" value={key} onChange={e => setKey(e.target.value)} required maxLength={200} placeholder="VW-XXXX-XXXX" /></label>
              <label className="vw-remember"><input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} /> Запомнить меня на 7 дней</label>
              {error && <p className="vw-auth-error" role="alert">{error}</p>}
              <button className="login-submit" type="submit" disabled={loading}>{loading ? <><LoaderCircle className="vw-spin" /> Проверяем...</> : <>Войти в аккаунт <span>↗</span></>}</button>
            </form>
            <p className="login-privacy-note">Не передавай ключ подписки другим пользователям.</p>
            <div className="login-divider"><span>VOIDWARE</span></div>
            <a className="login-back-link" href="/"><ArrowLeft aria-hidden="true" /> Вернуться на главную</a>
          </section>
        </div>
        <div className="login-page-footnote"><span className="login-live-dot" /> VOIDWARE ACCOUNT <i /> ТВОИ НАСТРОЙКИ. ТВОЯ ИГРА.</div>
      </section>
      <Footer />
    </main>
  )
}
