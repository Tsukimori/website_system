import "./globals.css"
import type { Metadata, Viewport } from "next"
import ToastProvider from "@/components/providers/ToastProvider"
import { Noto_Sans_JP } from "next/font/google"
import { GoogleTagManager } from "@next/third-parties/google"

// Noto Sans JP フォントの設定
const notoSansJP = Noto_Sans_JP({
  weight: ["200", "300", "400", "500", "600", "700", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
})

// Marcellus フォントの設定
// const marcellus = Marcellus({
//   weight: ["400"], // Marcellusは400のみ利用可能
//   subsets: ["latin"],
//   display: "swap",
// })

export const metadata: Metadata = {
  title: {
    template: "%s | チョイスWeb制作",
    default: "チョイスのWeb制作は",
  },
  icons: {
    icon: "/common/favicon.ico",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <html lang="ja">
      <body className="font-notoSansJP text-baseColor">
        <GoogleTagManager gtmId="GTM-5VZQPT43" />
        <ToastProvider />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
