import Footer1 from "@/components/footer/Footer1"
import Footer2 from "@/components/footer/Footer2"
import Header1 from "@/components/header/Header1"
import Header2 from "@/components/header/Header2"

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = async ({ children }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Header1 /> */}
      <Header2 />
      <main className="flex-1">{children}</main>
      {/* <Footer1 /> */}
      <Footer2 />
    </div>
  )
}

export default MainLayout
