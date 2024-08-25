"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import Image from "next/image"

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

type HeaderType = "Header1" | "Header2"
type KvType = "Kv1" | "Kv2"
type MessageType = "Message1" | "Message2"
type SolutionType = "Solution1" | "Solution2"
type FooterType = "Footer1" | "Footer2"

const AdminHome = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true)

  const [selectedHeader, setSelectedHeader] = useState<HeaderType>("Header1")
  const [selectedKv, setSelectedKv] = useState<KvType>("Kv1")
  const [selectedMessage, setSelectedMessage] =
    useState<MessageType>("Message1")
  const [selectedSolution, setSelectedSolution] =
    useState<SolutionType>("Solution1")
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
      isSelected ? "border-4 border-blue-500" : ""
    }`
  }

  const overlayClass = (isSelected: boolean) => {
    return isSelected
      ? "absolute inset-0 bg-blue-500 bg-opacity-50"
      : "absolute inset-0"
  }

  const headerComponents = {
    Header1: <Header1 />,
    Header2: <Header2 />,
  }

  const kvComponents = {
    Kv1: <Kv1 />,
    Kv2: <Kv2 />,
  }

  const messageComponents = {
    Message1: <Message1 />,
    Message2: <Message2 />,
  }

  const solutionComponents = {
    Solution1: <Solution1 />,
    Solution2: <Solution2 />,
  }

  const footerComponents = {
    Footer1: <Footer1 />,
    Footer2: <Footer2 />,
  }

  return (
    <div className="flex">
      <div className="fixed top-3 left-4 z-20">
        <Menu className="w-7 h-7 cursor-pointer" onClick={toggleSidebar} />
      </div>

      {isSidebarVisible && (
        <aside className="w-44 mt-12 bg-gray-50 p-4 space-y-5 fixed h-[calc(100vh-3rem)] z-10 overflow-y-auto border-r">
          <div className="font-bold text-sm">ヘッダー</div>
          <div className="space-y-4">
            <Image
              src="/admin/test1.png"
              alt="Header1"
              onClick={() => {
                setSelectedHeader("Header1")
                scrollToSection("header-section")
              }}
              className="cursor-pointer object-cover"
              width={128}
              height={72}
            />
            <Image
              src="/admin/test2.png"
              alt="Header2"
              onClick={() => {
                setSelectedHeader("Header2")
                scrollToSection("header-section")
              }}
              className="cursor-pointer object-cover"
              width={128}
              height={72}
            />
          </div>

          <div className="font-bold text-sm">キービジュアル</div>
          <div className="space-y-4">
            <Image
              src="/admin/test1.png"
              alt="Kv1"
              onClick={() => {
                setSelectedKv("Kv1")
                scrollToSection("kv-section")
              }}
              className="cursor-pointer object-cover"
              width={128}
              height={72}
            />
            <Image
              src="/admin/test2.png"
              alt="Kv2"
              onClick={() => {
                setSelectedKv("Kv2")
                scrollToSection("kv-section")
              }}
              className="cursor-pointer object-cover"
              width={128}
              height={72}
            />
          </div>

          <div className="font-bold text-sm">メッセージ</div>
          <div className="space-y-4">
            <Image
              src="/admin/test1.png"
              alt="Message1"
              onClick={() => {
                setSelectedMessage("Message1")
                scrollToSection("message-section")
              }}
              className="cursor-pointer object-cover"
              width={128}
              height={72}
            />
            <Image
              src="/admin/test2.png"
              alt="Message2"
              onClick={() => {
                setSelectedMessage("Message2")
                scrollToSection("message-section")
              }}
              className="cursor-pointer object-cover"
              width={128}
              height={72}
            />
          </div>

          <div className="font-bold text-sm">サービス</div>
          <div className="space-y-4">
            <Image
              src="/admin/test1.png"
              alt="Solution1"
              onClick={() => {
                setSelectedSolution("Solution1")
                scrollToSection("solution-section")
              }}
              className="cursor-pointer object-cover"
              width={128}
              height={72}
            />
            <Image
              src="/admin/test2.png"
              alt="Solution2"
              onClick={() => {
                setSelectedSolution("Solution2")
                scrollToSection("solution-section")
              }}
              className="cursor-pointer object-cover"
              width={128}
              height={72}
            />
          </div>

          <div className="font-bold text-sm">フッター</div>
          <div className="space-y-4">
            <Image
              src="/admin/test1.png"
              alt="Footer1"
              onClick={() => {
                setSelectedFooter("Footer1")
                scrollToSection("footer-section")
              }}
              className="cursor-pointer object-cover"
              width={128}
              height={72}
            />
            <Image
              src="/admin/test2.png"
              alt="Footer2"
              onClick={() => {
                setSelectedFooter("Footer2")
                scrollToSection("footer-section")
              }}
              className="cursor-pointer object-cover"
              width={128}
              height={72}
            />
          </div>
        </aside>
      )}

      <main
        className={`flex-1 mt-12 transition-all duration-300 ${
          isSidebarVisible ? "ml-44" : "ml-0"
        }`}
      >
        <section id="header-section">
          {headerComponents[selectedHeader]}
        </section>
        <section id="kv-section">{kvComponents[selectedKv]}</section>
        <section id="message-section">
          {messageComponents[selectedMessage]}
        </section>
        <section id="solution-section">
          {solutionComponents[selectedSolution]}
        </section>
        <section id="footer-section">
          {footerComponents[selectedFooter]}
        </section>
      </main>
    </div>
  )
}

export default AdminHome
