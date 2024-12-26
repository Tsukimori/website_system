// components/header/Header_02

"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Sns from "@/components/ui/button/SnsButton"
import CompanyInfo from "@/components/ui/navigation/CompanyInfo"
import HeaderContent from "@/components/ui/frame/HeaderContent"
import HamburgerMenu from "@/components/ui/navigation/HamburgerMenu" // 新しいハンバーガーメニューコンポーネントをインポート

const Header_02 = () => {
  // ハンバーガーメニューの開閉状態を管理するstate
  const [MenuOpen, setMenuOpen] = useState(false)

  // メニュー開閉のトグル関数
  const toggleMenu = () => {
    setMenuOpen(!MenuOpen)
  }

  const { companyName } = CompanyInfo[0]

  return (
    <>
      <HeaderContent className="">
        <div className="flex items-center space-x-5  md:space-x-10">
          <Link href="/" className="w-[60px] md:w-[200px]">
            <div className="block md:hidden">
              {CompanyInfo[0].companyName("tertiary")} {/* SP用ロゴ */}
            </div>
            <div className="hidden md:block">
              {CompanyInfo[0].companyName("secondary")} {/* PC用ロゴ */}
            </div>
          </Link>
        </div>

        <div className="flex items-center space-x-3 md:space-x-10">
          <ul className="flex items-center justify-end font-semibold  space-x-2 md:space-x-0">
            {Sns.map((item, index) => (
              <li
                key={index}
                className="w-5 h-5 md:w-[60px] md:h-[60px] flex items-center justify-center"
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
            className="border-l border-borderGray w-10 md:w-20 h-20 flex items-center justify-end md:justify-center cursor-pointer"
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
        {/* ハンバーガーメニューの表示 */}
        <HamburgerMenu isOpen={MenuOpen} toggleMenu={toggleMenu} />
      </HeaderContent>
    </>
  )
}

export default Header_02
