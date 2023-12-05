import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'

const pops = Poppins({ weight: ['400', '700', '100'], subsets: ['latin']})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={pops.className}>
      <Component {...pageProps} />
    </main>
  )
}
