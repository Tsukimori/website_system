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
      <section id="header-section">
        {selectedSections["header"] === "Header1" ? <Header1 /> : <Header2 />}
      </section>
      <section id="about-section">
        {selectedSections["about"] === "About1" ? <About1 /> : <About2 />}
      </section>
      <section id="footer-section">
        {selectedSections["footer"] === "Footer1" ? <Footer1 /> : <Footer2 />}
      </section>
    </AdminLayout>
  )
}

export default AdminAbout
