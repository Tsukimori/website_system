import "./globals.css"
import type { Metadata, Viewport } from "next"
import ToastProvider from "@/components/providers/ToastProvider"

import { Noto_Sans_JP, Lato } from 'next/font/google'

// Noto Sans JP フォントの設定
const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500','600', '700', '700','800', '900'],
  subsets: ['latin'],
  display: 'swap',
})


// Lato フォントの設定
const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: "HP制作システム",
    default: "HP制作システム",
  },
}

export const viewport: Viewport = {
  maximumScale: 1,
  userScalable: false,
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className}`}>
        <ToastProvider />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
