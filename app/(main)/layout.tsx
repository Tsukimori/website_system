import Footer1 from "@/components/footer/Footer1"
import Footer2 from "@/components/footer/Footer2"
import Header_01 from "@/components/header/Header_01"
import Header_02 from "@/components/header/Header_02"
import Header_03 from "@/components/header/Header_03"
import Header_04 from "@/components/header/Header_04"
import Header_05 from "@/components/header/Header_05"

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header_05 />
      <main className="flex-1">{children}</main>
      <Footer1 />
    </div>
  )
}

export default MainLayout
