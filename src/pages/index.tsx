import { Inter } from 'next/font/google'
import SMCForm from '@/components/SMCForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <SMCForm />
    </main>
  )
}
