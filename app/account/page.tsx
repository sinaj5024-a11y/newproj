'use client'

import { useEffect, useState } from 'react'
import { Download, LogOut, ShieldCheck, Sparkles } from 'lucide-react'
import { Footer, Header } from '@/components/voidware-landing'

type Account = { login: string; tier: string; prefix: string; expiresAt: number }

function date(value: number) {
  return new Intl.DateTimeFormat('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' }).format(new Date(value))
}

export default function AccountPage() {
  const [account, setAccount] = useState<Account | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/auth/me', { cache: 'no-store' }).then(async response => {
      if (!response.ok) { window.location.replace('/login'); return }
      setAccount(await response.json())
    }).catch(() => window.location.replace('/login')).finally(() => setLoading(false))
  }, [])

  async function logout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    window.location.replace('/login')
  }

  return (
    <main className="voidware-page login-page">
      <section className="login-hero">
        <div className="hero-sky" aria-hidden="true" />
        <Header />
        <div className="vw-account-wrap">
          {loading ? <div className="vw-account-loading">Загружаем профиль...</div> : account && <>
            <div className="vw-account-heading"><span className="login-eyebrow"><Sparkles /> VOIDWARE ACCOUNT</span><h1>Твой кабинет<span>.</span></h1><p>Управление аккаунтом и подпиской в одном месте.</p></div>
            <section className="vw-account-card">
              <div className="vw-account-top"><div><span className="login-card-eyebrow">АККАУНТ</span><h2>{account.login}</h2></div><span className="vw-account-badge"><ShieldCheck /> {account.prefix}</span></div>
              <div className="vw-account-stats">
                <div><span>Подписка</span><strong className={account.tier === 'alpha' ? 'vw-alpha' : ''}>{account.tier === 'alpha' ? 'ALPHA' : 'ORDINARY'}</strong></div>
                <div><span>Действует до</span><strong>{date(account.expiresAt)}</strong></div>
                <div><span>Префикс</span><strong>{account.prefix}</strong></div>
              </div>
              <a className="login-submit vw-download" href={process.env.NEXT_PUBLIC_LAUNCHER_URL || '#'}><Download /> Скачать лаунчер</a>
              {!process.env.NEXT_PUBLIC_LAUNCHER_URL && <p className="login-privacy-note">Ссылка на загрузку пока не настроена владельцем сайта.</p>}
              <button className="vw-logout" onClick={logout}><LogOut /> Выйти из аккаунта</button>
            </section>
          </>}
        </div>
      </section>
      <Footer />
    </main>
  )
}
