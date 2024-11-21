// components/header/Header_01

"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import Menu from "@/components/ui/navigation/Menu"
import ContactButton from "@/components/ui/button/ContactButton"
import CompanyInfo from "@/components/ui/navigation/CompanyInfo"
import HeaderContent from "../ui/frame/HeaderContent"

// ヘッダー
const Header_01 = () => {
  const { companyName } = CompanyInfo[0]

  // スクロール状態を管理
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // スクロール位置が50pxを超えたら背景色を変更
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // "お問い合わせ" を非表示にするフィルタリング
  const filteredMenu = Menu.filter((item) => item.name !== "お問い合わせ")

  return (
    <>
      <HeaderContent
        className={`fixed h-20 left-1/2 transform -translate-x-1/2 z-10 text-white w-full transition-all duration-300   ${
          isScrolled ? "bg-gray-800 bg-opacity-30 " : "bg-transparent"
        }`}
      >
        <div className="flex items-center w-1400 mx-auto h-20">
          <Link href="/">{companyName}</Link>

          <ul className="flex items-center space-x-10 font-medium ml-10">
            {filteredMenu.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>
                  <div>{item.name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute top-0 right-0">
          <ContactButton className="h-20" />
        </div>
      </HeaderContent>
    </>
  )
}

export default Header_01
