"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import Navigation from "@/components/admin/Nvigation"
import Image from "next/image"

import Header1 from "@/components/header/Header1"
import Header2 from "@/components/header/Header2"
import About1 from "@/components/about/About1"
import About2 from "@/components/about/About2"
import Footer1 from "@/components/footer/Footer1"
import Footer2 from "@/components/footer/Footer2"

type HeaderType = "Header1" | "Header2"
type AboutType = "About1" | "About2"
type FooterType = "Footer1" | "Footer2"

const AdminAbout = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true)

  const [selectedHeader, setSelectedHeader] = useState<HeaderType>("Header1")
  const [selectedAbout, setSelectedAbout] = useState<AboutType>("About1")
  const [selectedFooter, setSelectedFooter] = useState<FooterType>("Footer1")

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible)
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const yOffset = -48 // 12 * 4 (mt-12 のスペースを考慮)
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  const getImageClass = (isSelected: boolean) => {
    return `relative cursor-pointer object-cover ${
      isSelected ? "border-2 border-blue-300" : ""
    }`
  }

  const overlayClass = (isSelected: boolean) => {
    return isSelected
      ? "absolute inset-0 bg-blue-300 bg-opacity-50 pointer-events-none"
      : "absolute inset-0 pointer-events-none"
  }

  const headerComponents = {
    Header1: <Header1 />,
    Header2: <Header2 />,
  }

  const aboutComponents = {
    About1: <About1 />,
    About2: <About2 />,
  }

  const footerComponents = {
    Footer1: <Footer1 />,
    Footer2: <Footer2 />,
  }

  return (
    <div className="flex">
      {isSidebarVisible && <Navigation />}

      <div className="fixed top-3 left-4 z-20">
        <Menu className="w-7 h-7 cursor-pointer" onClick={toggleSidebar} />
      </div>

      {isSidebarVisible && (
        <aside className="w-40 mt-12 bg-gray-50 p-4 space-y-5 fixed h-[calc(100vh-3rem)] z-10 overflow-y-auto border-r">
          <div className="font-bold text-sm">ヘッダー</div>
          <div className="space-y-4">
            <div className="relative">
              <Image
                src="/admin/test1.png"
                alt="Header1"
                onClick={() => {
                  setSelectedHeader("Header1")
                  scrollToSection("header-section")
                }}
                className={getImageClass(selectedHeader === "Header1")}
                width={128}
                height={72}
              />
              <div className={overlayClass(selectedHeader === "Header1")}></div>
            </div>
            <div className="relative">
              <Image
                src="/admin/test2.png"
                alt="Header2"
                onClick={() => {
                  setSelectedHeader("Header2")
                  scrollToSection("header-section")
                }}
                className={getImageClass(selectedHeader === "Header2")}
                width={128}
                height={72}
              />
              <div className={overlayClass(selectedHeader === "Header2")}></div>
            </div>
          </div>

          <div className="font-bold text-sm">メッセージ</div>
          <div className="space-y-4">
            <div className="relative">
              <Image
                src="/admin/test1.png"
                alt="About1"
                onClick={() => {
                  setSelectedAbout("About1")
                  scrollToSection("about-section")
                }}
                className={getImageClass(selectedAbout === "About1")}
                width={128}
                height={72}
              />
              <div className={overlayClass(selectedAbout === "About1")}></div>
            </div>
            <div className="relative">
              <Image
                src="/admin/test2.png"
                alt="About2"
                onClick={() => {
                  setSelectedAbout("About2")
                  scrollToSection("about-section")
                }}
                className={getImageClass(selectedAbout === "About2")}
                width={128}
                height={72}
              />
              <div className={overlayClass(selectedAbout === "About2")}></div>
            </div>
          </div>

          <div className="font-bold text-sm">フッター</div>
          <div className="space-y-4">
            <div className="relative">
              <Image
                src="/admin/test1.png"
                alt="Footer1"
                onClick={() => {
                  setSelectedFooter("Footer1")
                  scrollToSection("footer-section")
                }}
                className={getImageClass(selectedFooter === "Footer1")}
                width={128}
                height={72}
              />
              <div className={overlayClass(selectedFooter === "Footer1")}></div>
            </div>
            <div className="relative">
              <Image
                src="/admin/test2.png"
                alt="Footer2"
                onClick={() => {
                  setSelectedFooter("Footer2")
                  scrollToSection("footer-section")
                }}
                className={getImageClass(selectedFooter === "Footer2")}
                width={128}
                height={72}
              />
              <div className={overlayClass(selectedFooter === "Footer2")}></div>
            </div>
          </div>
        </aside>
      )}

      <main
        className={cn(
          "flex-1 transition-all duration-300",
          isSidebarVisible ? "ml-40 mt-12" : "ml-0 mt-0"
        )}
      >
        <section id="header-section">
          {headerComponents[selectedHeader]}
        </section>
        <section id="about-section">{aboutComponents[selectedAbout]}</section>
        <section id="footer-section">
          {footerComponents[selectedFooter]}
        </section>
      </main>
    </div>
  )
}

export default AdminAbout
