"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Menu from "@/components/ui/navigation/Menu"
import Sns from "@/components/ui/navigation/SnsButton"
import ContactButton from "@/components/ui/button/ContactButton"
import CompanyInfo from "@/components/ui/navigation/CompanyInfo"

const Header2 = () => {
  // ハンバーガーメニューの開閉状態を管理するstate
  const [MenuOpen, setMenuOpen] = useState(false)

  // メニュー開閉のトグル関数
  const toggleMenu = () => {
    setMenuOpen(!MenuOpen)
  }

  const { companyName } = CompanyInfo[0]

  return (
    <header className="border-b border-black h-20 text-[#393939] tracking-wide">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between ">
        <div className="flex items-center space-x-10 ">
          <Link href="/" className="letter">
            {companyName}
          </Link>
        </div>

        <div className="flex items-center space-x-10">
          <ul className="flex items-center justify-end font-semibold">
            {Sns.map((item, index) => (
              <li
                key={index}
                className="w-[60px] h-[60px] flex items-center justify-center"
              >
                <Link href={item.href}>
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={30}
                    height={30}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* ハンバーガーメニューボタン */}
          <div
            className="border-l border-borderGray w-20 h-20 flex items-center justify-center cursor-pointer"
            onClick={toggleMenu}
          >
            <Image
              src="/common/Menu.png"
              alt="メニューボタン"
              width={38}
              height={38}
            />
          </div>
        </div>
      </div>

      {/* ハンバーガーメニュー */}
      <div
        className={`fixed z-10 top-0 right-0 h-screen w-[500px] bg-bgBlack text-white shadow-lg transform transition-transform duration-300 pt-14 ${
          MenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* 閉じるボタン */}
        <div className="flex justify-end p-4">
          <button
            aria-label="メニューを閉じる"
            onClick={toggleMenu}
            className="w-10 h-10"
          >
            <div className="w-[38px] h-[38px] relative">
              <div className="w-[53.74px] h-[0px] left-0 top-0 absolute origin-top-left rotate-45 border border-white"></div>
              <div className="w-[53.74px] h-[0px] left-[38px] top-0 absolute origin-top-left rotate-[135deg] border border-white"></div>
            </div>
          </button>
        </div>

        {/* メニューアイテム */}
        <ul className="flex flex-col items-center space-y-6 mb-16">
          {Menu.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="text-lg font-semibold">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center w-[260px] mx-auto">
          <ContactButton />
        </div>
      </div>
    </header>
  )
}

export default Header2
