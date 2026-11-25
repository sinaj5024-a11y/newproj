import type { Metadata } from 'next'
import VoidWareLogin from '@/components/voidware-login'

export const metadata: Metadata = {
  title: 'Вход в аккаунт — VoidWare',
  description: 'Войдите в аккаунт VoidWare через официальный сайт.',
}

export default function LoginPage() {
  return <VoidWareLogin />
}
