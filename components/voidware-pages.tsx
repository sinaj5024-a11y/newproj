import { ArrowUpRight, Check, Cpu, Keyboard, Layers3, RefreshCw, SlidersHorizontal, Sparkles } from 'lucide-react'
import { Footer, Header } from '@/components/voidware-landing'

export const voidwarePageDetails = {
  overview: {
    eyebrow: 'ВОЗМОЖНОСТИ',
    title: 'Всё важное — в одном месте',
    description: 'Обзор VoidWare: интерфейс, профили, визуальные настройки и совместимость с версиями Minecraft.',
  },
  pricing: {
    eyebrow: 'ЦЕНЫ',
    title: 'Простые планы',
    description: 'Выберите уровень доступа под свой сценарий использования. Покупка и активация доступны на официальном сайте.',
  },
  faq: {
    eyebrow: 'ПОДДЕРЖКА',
    title: 'Частые вопросы',
    description: 'Короткие ответы о версиях, настройках, правилах серверов и поддержке VoidWare.',
  },
  media: {
    eyebrow: 'МЕДИА',
    title: 'VoidWare в интерфейсе',
    description: 'Посмотрите, как могут выглядеть профили, настройки HUD и быстрый доступ к параметрам.',
  },
  privacy: {
    eyebrow: 'ПРАВОВАЯ ИНФОРМАЦИЯ',
    title: 'Политика конфиденциальности',
    description: 'Информация о данных, которые может обрабатывать эта демонстрационная версия сайта.',
  },
  terms: {
    eyebrow: 'ПРАВОВАЯ ИНФОРМАЦИЯ',
    title: 'Условия использования',
    description: 'Основные условия использования сайта и сведения о сторонних сервисах.',
  },
} as const

export type VoidWarePageSlug = keyof typeof voidwarePageDetails

const overviewFeatures = [
  { icon: Cpu, title: 'Оптимизация', description: 'Минимум лишних процессов и аккуратная работа клиента на разных конфигурациях.' },
  { icon: Layers3, title: 'Умный интерфейс', description: 'Понятные панели помогают быстро находить нужные параметры.' },
  { icon: SlidersHorizontal, title: 'Гибкие профили', description: 'Сохраняйте разные наборы настроек и переключайтесь между ними.' },
  { icon: Sparkles, title: 'Настройка HUD', description: 'Изменяйте визуальные элементы и оставляйте на экране только нужное.' },
  { icon: Keyboard, title: 'Горячие клавиши', description: 'Назначайте сочетания для быстрого доступа к настройкам.' },
  { icon: RefreshCw, title: 'Автообновления', description: 'Следите за новыми сборками и изменениями в одном месте.' },
]

const faqItems = [
  {
    question: 'Какие версии Minecraft поддерживаются?',
    answer: 'Основная сборка — 26.2. Также на официальном сайте указаны предыдущие версии, включая 1.21.11, 1.21.8, 1.20.6 и 1.16.5.',
  },
  {
    question: 'Нужна ли регистрация?',
    answer: 'Для этой информационной версии сайта регистрация не требуется. Вход в существующий аккаунт доступен на официальном сайте VoidWare.',
  },
  {
    question: 'Можно ли настроить интерфейс под себя?',
    answer: 'В клиенте предусмотрены профили, настройки HUD и горячие клавиши. Доступность отдельных параметров может зависеть от сборки.',
  },
  {
    question: 'Как получить другую версию?',
    answer: 'Откройте официальный сайт VoidWare и выберите сборку, совместимую с вашей версией Minecraft.',
  },
  {
    question: 'Можно ли использовать клиент на любом сервере?',
    answer: 'Правила различаются от сервера к серверу. Перед использованием обязательно проверьте правила конкретного сервера: модифицированные клиенты могут быть запрещены.',
  },
  {
    question: 'Где получить поддержку?',
    answer: 'Ссылки на Telegram, Discord и контактную почту находятся в подвале сайта.',
  },
]

const plans = [
  {
    name: 'Бесплатный',
    description: 'Базовый набор возможностей.',
    price: '0₽',
    period: 'навсегда',
    features: ['Основные настройки', 'Поддержка 1.16.5+', 'Базовые профили'],
    action: 'disabled',
    actionLabel: 'Пока недоступно',
  },
  {
    name: 'Навсегда',
    description: 'Один раз — доступ без ежемесячной оплаты.',
    price: '250₽',
    period: 'разовый платёж',
    features: ['Полный набор функций', 'Все поддерживаемые версии', 'Обновления навсегда'],
    action: 'official',
    actionLabel: 'Купить на сайте',
    popular: true,
  },
  {
    name: 'Месяц',
    description: 'Расширенный набор для активных пользователей.',
    price: '199₽',
    period: 'в месяц',
    features: ['Все функции Free', 'Расширенная кастомизация', 'Дополнительные профили', 'Приоритетные обновления'],
    action: 'disabled',
    actionLabel: 'Пока недоступно',
  },
] as const

const mediaCards = [
  {
    title: 'Профили',
    eyebrow: 'ПЕРСОНАЛИЗАЦИЯ',
    rows: [['Спокойное приключение', 'Активен'], ['Компактный HUD', 'Сохранён'], ['Новый профиль', 'Создать']],
  },
  {
    title: 'Визуальные настройки',
    eyebrow: 'HUD',
    rows: [['Положение элементов', 'Настроить'], ['Размер интерфейса', '100%'], ['Анимации', 'Мягкие']],
  },
  {
    title: 'Быстрый доступ',
    eyebrow: 'УПРАВЛЕНИЕ',
    rows: [['Открыть меню', 'Right Shift'], ['Следующий профиль', 'Ctrl + 2'], ['Сохранить настройки', 'Ctrl + S']],
  },
]

const privacySections = [
  {
    title: '1. Общие положения',
    body: 'Эта страница описывает работу информационной версии сайта VoidWare и не заменяет политику официального сервиса.',
  },
  {
    title: '2. Персональные данные',
    body: 'На этой версии сайта нет локальной регистрации, форм оплаты или загрузки файлов. Вход и покупка перенаправляют на официальный сайт, где действует собственная политика конфиденциальности.',
  },
  {
    title: '3. Техническая информация',
    body: 'При публикации проекта аналитика Vercel может обрабатывать агрегированные сведения о посещениях в соответствии с настройками проекта.',
  },
  {
    title: '4. Внешние сервисы',
    body: 'Переходы в Telegram, Discord и на официальный сайт регулируются правилами и политиками соответствующих сервисов.',
  },
  {
    title: '5. Изменения политики',
    body: 'При изменении состава функций или обработки данных текст этой страницы должен быть обновлён.',
  },
]

const termsSections = [
  {
    title: '1. Информационный сайт',
    body: 'Сайт знакомит с VoidWare и его возможностями. Подробности о клиенте, версиях и доступе уточняйте на официальном сайте.',
  },
  {
    title: '2. Правила серверов',
    body: 'Пользователь самостоятельно проверяет правила выбранного сервера. Модифицированные клиенты могут быть ограничены или запрещены администрацией.',
  },
  {
    title: '3. Совместимость и обновления',
    body: 'Поддерживаемые версии и функции могут меняться. Совместимость зависит от сборки клиента, версии Minecraft и окружения пользователя.',
  },
  {
    title: '4. Сторонние сервисы',
    body: 'Этот сайт не управляет Telegram, Discord, Minecraft или официальным сервисом VoidWare. Их доступность и условия определяются соответствующими владельцами.',
  },
  {
    title: '5. Товарные знаки',
    body: 'Minecraft является товарным знаком Mojang Studios. VoidWare не связан с Mojang Studios или Microsoft.',
  },
]

function SubpageIntro({ slug }: { slug: VoidWarePageSlug }) {
  const page = voidwarePageDetails[slug]

  return (
    <div className="subpage-intro">
      <span className="subpage-eyebrow"><i />{page.eyebrow}</span>
      <h1>{page.title}</h1>
      <p>{page.description}</p>
    </div>
  )
}

function OverviewContent() {
  return (
    <>
      <div className="overview-callout">
        <span className="overview-callout-icon"><Sparkles aria-hidden="true" /></span>
        <div>
          <span className="info-kicker">КЛИЕНТ ДЛЯ MINECRAFT</span>
          <h2>Настрой под себя</h2>
          <p>VoidWare объединяет интерфейс, профили и параметры клиента в одном месте. Сохраняйте удобную конфигурацию, возвращайтесь к ней в пару кликов и выбирайте подходящую версию Minecraft.</p>
        </div>
      </div>
      <div className="info-card-grid">
        {overviewFeatures.map(({ icon: Icon, title, description }, index) => (
          <article className="info-feature-card" key={title}>
            <div className="info-feature-top"><span className="info-feature-icon"><Icon aria-hidden="true" /></span><span>0{index + 1}</span></div>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </div>
      <div className="server-rules-note">
        <span className="info-kicker">ВАЖНО ПЕРЕД ИГРОЙ</span>
        <p>Проверьте правила сервера до запуска модифицированного клиента: на отдельных серверах его использование запрещено.</p>
      </div>
    </>
  )
}

function PricingContent() {
  return (
    <>
      <div className="pricing-grid">
        {plans.map((plan) => (
          <article className={`pricing-card${'popular' in plan && plan.popular ? ' pricing-card-popular' : ''}`} key={plan.name}>
            {'popular' in plan && plan.popular && <span className="popular-label">ПОПУЛЯРНЫЙ</span>}
            <div className="pricing-card-heading"><h2>{plan.name}</h2><p>{plan.description}</p></div>
            <div className="plan-price"><strong>{plan.price}</strong><span>{plan.period}</span></div>
            <ul>
              {plan.features.map((feature) => <li key={feature}><Check aria-hidden="true" />{feature}</li>)}
            </ul>
            {plan.action === 'official' ? (
              <a className="plan-action plan-action-primary" href="https://voidware.ru/pricing.html" target="_blank" rel="noreferrer">
                {plan.actionLabel}<ArrowUpRight aria-hidden="true" />
              </a>
            ) : (
              <button className="plan-action" type="button" disabled>{plan.actionLabel}</button>
            )}
          </article>
        ))}
      </div>
    </>
  )
}

function FaqContent() {
  return (
    <div className="faq-list">
      {faqItems.map(({ question, answer }, index) => (
        <details className="faq-item" key={question}>
          <summary><span className="faq-number">0{index + 1}</span><span className="faq-question">{question}</span><span className="faq-toggle" aria-hidden="true">+</span></summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  )
}

function MediaContent() {
  return (
    <>
      <div className="media-grid">
        {mediaCards.map((card) => (
          <article className="media-card" key={card.title}>
            <div className="media-preview" aria-label={`Демонстрационный интерфейс: ${card.title}`}>
              <div className="media-window">
                <div className="media-window-top"><span className="window-dots" aria-hidden="true"><i /><i /><i /></span><span>VOIDWARE <small>CLIENT</small></span><Sparkles aria-hidden="true" /></div>
                <div className="media-window-content">
                  <span className="media-window-kicker">{card.eyebrow}</span>
                  <strong>{card.title}</strong>
                  {card.rows.map(([label, value]) => (
                    <div className="media-setting" key={label}><span>{label}</span><small>{value}</small></div>
                  ))}
                </div>
              </div>
            </div>
            <span className="info-kicker">{card.eyebrow}</span>
            <h2>{card.title}</h2>
          </article>
        ))}
      </div>
    </>
  )
}

function LegalContent({ sections }: { sections: { title: string; body: string }[] }) {
  return (
    <div className="legal-content">
      {sections.map(({ title, body }) => <section key={title}><h2>{title}</h2><p>{body}</p></section>)}
    </div>
  )
}

export default function VoidWareInfoPage({ slug }: { slug: VoidWarePageSlug }) {
  return (
    <main className="voidware-page info-page">
      <section className="subpage-hero">
        <div className="hero-sky" aria-hidden="true" />
        <Header />
        <SubpageIntro slug={slug} />
      </section>
      <section className={`info-content info-content-${slug}`}>
        {slug === 'overview' && <OverviewContent />}
        {slug === 'pricing' && <PricingContent />}
        {slug === 'faq' && <FaqContent />}
        {slug === 'media' && <MediaContent />}
        {slug === 'privacy' && <LegalContent sections={privacySections} />}
        {slug === 'terms' && <LegalContent sections={termsSections} />}
      </section>
      <Footer />
    </main>
  )
}
