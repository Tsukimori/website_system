"use client"

import { useEffect, useState } from "react"
import { useStore } from "@/store/useStore"

import AdminLayout from "@/components/admin/AdminLayout"
import SidebarHome from "@/components/admin/sidebar/SidebarHome"
import Header1 from "@/components/header/Header1"
import Header2 from "@/components/header/Header2"
import Kv1 from "@/components/kv/Kv1"
import Kv2 from "@/components/kv/Kv2"
import Message1 from "@/components/message/Message1"
import Message2 from "@/components/message/Message2"
import Solution1 from "@/components/solution/Solution1"
import Solution2 from "@/components/solution/Solution2"
import Footer1 from "@/components/footer/Footer1"
import Footer2 from "@/components/footer/Footer2"

type ComponentMap = {
  [key: string]: { [key: string]: JSX.Element }
}

// 動的にレンダリングするためのコンポーネントマッピング
const componentsMap: ComponentMap = {
  header: {
    Header1: <Header1 />,
    Header2: <Header2 />,
  },
  kv: {
    Kv1: <Kv1 />,
    Kv2: <Kv2 />,
  },
  message: {
    Message1: <Message1 />,
    Message2: <Message2 />,
  },
  solution: {
    Solution1: <Solution1 />,
    Solution2: <Solution2 />,
  },
  footer: {
    Footer1: <Footer1 />,
    Footer2: <Footer2 />,
  },
}

const AdminHome = () => {
  const [isHydrated, setIsHydrated] = useState(false)
  const selectedSections = useStore((state) => state.selectedSections)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  if (!isHydrated) {
    return null
  }

  return (
    <AdminLayout sidebarContent={SidebarHome}>
      {Object.entries(componentsMap).map(([sectionKey, sectionComponents]) => (
        <section key={sectionKey} id={`${sectionKey}-section`}>
          {sectionComponents[selectedSections[sectionKey]]}
        </section>
      ))}
    </AdminLayout>
  )
}

export default AdminHome
