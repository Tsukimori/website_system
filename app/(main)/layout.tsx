import Footer1 from "@/components/footer/Footer1"
import Footer2 from "@/components/footer/Footer2"
import Header1 from "@/components/header/Header1"
import Header2 from "@/components/header/Header2"
import { Noto_Sans_JP } from 'next/font/google'

// Noto Sans JP フォントの設定
const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500','600', '700', '700','800', '900'],
  subsets: ['latin'],
  display: 'swap',
})


interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={`${notoSansJP.className}  flex min-h-screen flex-col`}>
      {/* <Header1 /> */}
      <Header2 />
      <main className="flex-1">{children}</main>
      {/* <Footer1 /> */}
      <Footer2 />
    </div>
  )
}

export default MainLayout
