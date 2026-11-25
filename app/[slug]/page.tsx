import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import VoidWareInfoPage, { voidwarePageDetails, type VoidWarePageSlug } from '@/components/voidware-pages'

export function generateStaticParams() {
  return Object.keys(voidwarePageDetails).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = voidwarePageDetails[slug as VoidWarePageSlug]

  if (!page) {
    return { title: 'Страница не найдена — VoidWare' }
  }

  return {
    title: `${page.title} — VoidWare`,
    description: page.description,
  }
}

export default async function InfoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  if (!Object.prototype.hasOwnProperty.call(voidwarePageDetails, slug)) {
    notFound()
  }

  return <VoidWareInfoPage slug={slug as VoidWarePageSlug} />
}
