"use client"

import { useEffect, useState } from "react"
import { useStore } from "@/store/useStore"

import AdminLayout from "@/components/admin/AdminLayout"
import SidebarAbout from "@/components/admin/sidebar/SidebarAbout"
import Header1 from "@/components/header/Header1"
import Header2 from "@/components/header/Header2"
import About1 from "@/components/about/About1"
import About2 from "@/components/about/About2"
import Footer1 from "@/components/footer/Footer1"
import Footer2 from "@/components/footer/Footer2"

// コンポーネントのマッピング用の型定義
type ComponentMap = {
  [key: string]: { [key: string]: JSX.Element }
}

// 動的にレンダリングするためのコンポーネントマッピング
const componentsMap: ComponentMap = {
  header: {
    Header1: <Header1 />,
    Header2: <Header2 />,
  },
  about: {
    About1: <About1 />,
    About2: <About2 />,
  },
  footer: {
    Footer1: <Footer1 />,
    Footer2: <Footer2 />,
  },
}

const AdminAbout = () => {
  const [isHydrated, setIsHydrated] = useState(false)
  const selectedSections = useStore((state) => state.selectedSections)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  if (!isHydrated) {
    return null
  }

  return (
    <AdminLayout sidebarContent={SidebarAbout}>
      {Object.entries(componentsMap).map(([sectionKey, sectionComponents]) => (
        <section key={sectionKey} id={`${sectionKey}-section`}>
          {sectionComponents[selectedSections[sectionKey]]}
        </section>
      ))}
    </AdminLayout>
  )
}

export default AdminAbout
