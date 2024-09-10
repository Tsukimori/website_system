interface AdminLayoutProps {
  children: React.ReactNode
}

import { Noto_Sans_JP } from 'next/font/google'

// Noto Sans JP フォントの設定
const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500','600', '700', '700','800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

const AdminMainLayout = ({ children }: AdminLayoutProps) => {
  return <div className={`${notoSansJP.className} `}>{children}</div>
}

export default AdminMainLayout
