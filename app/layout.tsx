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
    template: "株式会社アセントビジョン",
    default: "株式会社アセントビジョン",
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
        style={
          {
            "--font-noto-sans-jp": notoSansJP.style.fontFamily,
            "--font-marcellus": marcellus.style.fontFamily,
            fontFamily: `${notoSansJP.style.fontFamily}, sans-serif`,
          } as React.CSSProperties
        }
      >
        <ToastProvider />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
