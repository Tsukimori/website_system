import "./globals.css"
import type { Metadata, Viewport } from "next"
import ToastProvider from "@/components/providers/ToastProvider"

import { Noto_Sans_JP, Marcellus } from "next/font/google"

// Noto Sans JP フォントの設定
const notoSansJP = Noto_Sans_JP({
  weight: ["200", "300", "400", "500", "600", "700", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
})

// Marcellus フォントの設定
const marcellus = Marcellus({
  weight: ["400"], // Marcellusは400のみ利用可能
  subsets: ["latin"],
  display: "swap",
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
      <body
        className="font-notoSansJP text-baseColor"
        style={{
          fontFamily: `${notoSansJP.style.fontFamily}, ${marcellus.style.fontFamily}, sans-serif`,
        }}
      >
        <ToastProvider />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
