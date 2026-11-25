import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Cpu,
  Keyboard,
  Layers3,
  RefreshCw,
  SlidersHorizontal,
  Sparkles,
} from 'lucide-react'

const features = [
  {
    icon: Cpu,
    eyebrow: 'ПРОИЗВОДИТЕЛЬНОСТЬ',
    title: 'Лёгкий на подъём',
    description: 'Меньше лишних процессов — больше внимания игре и плавному FPS.',
  },
  {
    icon: Layers3,
    eyebrow: 'ИНТЕРФЕЙС',
    title: 'Всё на своих местах',
    description: 'Чистые панели и понятные настройки, которые не отвлекают от мира.',
  },
  {
    icon: SlidersHorizontal,
    eyebrow: 'ПЕРСОНАЛИЗАЦИЯ',
    title: 'Твой стиль игры',
    description: 'Сохраняй профили и переключайся между настройками за пару кликов.',
  },
  {
    icon: Sparkles,
    eyebrow: 'ВИЗУАЛ',
    title: 'Плавная визуализация',
    description: 'Настраиваемый HUD и деликатные анимации без визуального шума.',
  },
  {
    icon: Keyboard,
    eyebrow: 'БЫСТРЫЙ ДОСТУП',
    title: 'Горячие клавиши',
    description: 'Назначай удобные сочетания, чтобы быстро открывать нужные настройки.',
  },
  {
    icon: RefreshCw,
    eyebrow: 'ОБНОВЛЕНИЯ',
    title: 'Всегда свежее',
    description: 'Следи за новыми сборками и улучшениями в одном месте.',
  },
]

const versions = ['26.2', '1.21.11', '1.21.8', '1.20.6', '1.16.5']

function VoidWareMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </span>
  )
}

export function Header() {
  return (
    <header className="site-header">
      <nav className="nav-island" aria-label="Основная навигация">
        <a className="brand" href="/" aria-label="VoidWare — на главную">
          <img className="brand-logo" src="/logo.png" alt="" />
          <span>VOID<span className="brand-light">WARE</span></span>
        </a>
        <div className="nav-links">
          <a href="/overview">Обзор</a>
          <a href="/pricing">Цены</a>
          <a href="/faq">FAQ</a>
          <a href="/media">Медиа</a>
        </div>
        <a className="nav-cta" href="/login">
          Войти <ArrowUpRight aria-hidden="true" />
        </a>
      </nav>
    </header>
  )
}

function ProductPreview() {
  return (
    <div className="preview-wrap" aria-label="Пример интерфейса VoidWare">
      <div className="floating-label floating-label-top">
        <span className="live-dot" />
        Minecraft <strong>26.2</strong>
      </div>
      <div className="product-window">
        <div className="window-topbar">
          <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
          <span className="window-title">VOIDWARE <span>CLIENT</span></span>
          <Sparkles aria-hidden="true" />
        </div>
        <div className="window-content">
          <div className="window-heading">
            <div>
              <span className="window-kicker">ТВОЁ ПРОСТРАНСТВО</span>
              <h2>Настрой под себя</h2>
            </div>
            <div className="avatar-mark" aria-hidden="true"><VoidWareMark /></div>
          </div>
          <div className="module-list">
            <div className="module-row">
              <span className="module-icon"><Layers3 aria-hidden="true" /></span>
              <span className="module-copy"><strong>Визуальный HUD</strong><small>Чисто и без лишнего</small></span>
              <span className="module-check"><Check aria-hidden="true" /></span>
            </div>
            <div className="module-row">
              <span className="module-icon"><SlidersHorizontal aria-hidden="true" /></span>
              <span className="module-copy"><strong>Быстрые пресеты</strong><small>Переключай стиль игры</small></span>
              <span className="toggle"><i /></span>
            </div>
            <div className="module-row">
              <span className="module-icon"><Keyboard aria-hidden="true" /></span>
              <span className="module-copy"><strong>Горячие клавиши</strong><small>Доступ в одно касание</small></span>
              <span className="key-chip">⌘ K</span>
            </div>
          </div>
          <div className="profile-bar">
            <span className="profile-sun" aria-hidden="true" />
            <span><strong>Профиль</strong><small> Спокойное приключение</small></span>
            <ArrowRight aria-hidden="true" />
          </div>
        </div>
      </div>
      <div className="floating-label floating-label-bottom">
        <span className="sparkle-mini"><Sparkles aria-hidden="true" /></span>
        <span><strong>126</strong> обновлений и улучшений</span>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-sky" aria-hidden="true" />
      <Header />
      <div className="hero-content">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-star">✳</span> КЛИЕНТ ДЛЯ MINECRAFT <span className="eyebrow-divider" /> 26.2</div>
          <h1>Играй<br />по-своему<span className="title-period">.</span></h1>
          <p className="hero-description">
            VoidWare — модифицированный клиент для Minecraft с настраиваемым HUD, профилями, горячими клавишами и поддержкой актуальных и старых версий.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="/overview">
              Полный обзор <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="button-secondary" href="#features">
              Возможности <ArrowDown aria-hidden="true" />
            </a>
          </div>
          <div className="hero-proof" aria-label="VoidWare в цифрах">
            <div className="hero-metric"><strong>48 291</strong><span>пользователь</span></div>
            <span className="proof-divider" />
            <div className="hero-metric"><strong>126</strong><span>обновлений</span></div>
            <span className="proof-divider" />
            <div className="hero-metric"><strong>2.8M+</strong><span>запусков</span></div>
          </div>
        </div>
        <ProductPreview />
      </div>
      <a className="scroll-cue" href="#features"><span>ЛИСТАЙ ВНИЗ</span><ArrowDown aria-hidden="true" /></a>
      <div className="hero-bottom-fade" aria-hidden="true" />
    </section>
  )
}

function Features() {
  return (
    <section className="features-section" id="features">
      <div className="section-inner">
        <div className="section-heading">
          <div>
            <div className="section-eyebrow"><span /> МАЛЕНЬКИЕ ДЕТАЛИ. БОЛЬШОЕ УДОВОЛЬСТВИЕ.</div>
            <h2>Всё нужное.<br /><span>Ничего лишнего.</span></h2>
          </div>
          <p>Шесть категорий настроек: производительность, HUD, профили, горячие клавиши и обновления — в одном спокойном интерфейсе.</p>
        </div>
        <div className="feature-grid">
          {features.map(({ icon: Icon, eyebrow, title, description }, index) => (
            <article className="feature-card" key={title} style={{ animationDelay: `${index * 90}ms` }}>
              <div className="feature-card-top">
                <span className="feature-icon"><Icon aria-hidden="true" /></span>
                <span className="feature-index">0{index + 1}</span>
              </div>
              <span className="feature-eyebrow">{eyebrow}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="card-corner" aria-hidden="true"><ArrowUpRight /></span>
            </article>
          ))}
        </div>
        <div className="version-panel" id="versions">
          <div className="version-intro">
            <span className="version-icon"><Sparkles aria-hidden="true" /></span>
            <div><span className="feature-eyebrow">СОВМЕСТИМОСТЬ</span><h3>Выбирай свою версию</h3></div>
          </div>
          <div className="version-list" aria-label="Поддерживаемые версии Minecraft">
            {versions.map((version, index) => <span className={index === 0 ? 'version-chip version-chip-current' : 'version-chip'} key={version}>{version}{index === 0 && <i>актуальная</i>}</span>)}
          </div>
          <a className="version-link" href="https://voidware.ru" target="_blank" rel="noreferrer" aria-label="Подробнее о версиях на официальном сайте"><ArrowUpRight aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glow" aria-hidden="true" />
      <div className="footer-inner">
        <div className="footer-columns">
          <div className="footer-about">
            <a className="footer-brand brand" href="/" aria-label="VoidWare — на главную"><img className="brand-logo" src="/logo.png" alt="" /><span>VOID<span className="brand-light">WARE</span></span></a>
            <p className="footer-tagline">Лёгкий клиент. Чистый интерфейс. Свобода настроек.</p>
            <div className="footer-social">
              <a href="https://t.me/VoidWareDlc" target="_blank" rel="noreferrer">Telegram <ArrowUpRight aria-hidden="true" /></a>
              <a href="mailto:voidware@vk.com">Почта поддержки <ArrowUpRight aria-hidden="true" /></a>
            </div>
          </div>
          <div className="footer-link-column">
            <span>Продукт</span>
            <a href="/overview">Возможности</a>
            <a href="/pricing">Цены</a>
            <a href="/media">Статус и медиа</a>
          </div>
          <div className="footer-link-column">
            <span>Поддержка</span>
            <a href="/faq">FAQ</a>
            <a href="/overview">Руководства</a>
            <a href="mailto:voidware@vk.com">Связаться с нами</a>
          </div>
          <div className="footer-link-column">
            <span>Правовая информация</span>
            <a href="/privacy">Политика конфиденциальности</a>
            <a href="/terms">Условия использования</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 VOIDWARE. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</span>
          <span>Minecraft — товарный знак Mojang Studios. Сайт не связан с Mojang или Microsoft.</span>
        </div>
      </div>
    </footer>
  )
}

export default function VoidWareLanding() {
  return (
    <main className="voidware-page">
      <Hero />
      <Features />
      <Footer />
    </main>
  )
}
