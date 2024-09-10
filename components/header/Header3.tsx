"use client"

import Link from "next/link"
import Image from "next/image"
import menu from "@/components/ui/navigation/Menu"
import sns from "@/components/ui/navigation/SnsButton"
import TelButton from "@/components/ui/button/TelButton"
import ContactButton from "@/components/ui/button/ContactButton"
import CompanyInfo from "@/components/ui/navigation/CompanyInfo"

// ヘッダー
const Header3 = () => {
  const { companyName } = CompanyInfo[0]
  return (
    <header className="border-b h-[98px] text-[#393939] tracking-wide">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between ">
        <div className="flex items-center space-x-10 ">
          <Link href="/">{companyName}</Link>
        </div>
        <div className="flex flex-col justify-between items-end h-full">
          <div className="flex items-center justify-center w-full">
          <TelButton />
          <ContactButton height="h-10" />
          </div>
          <ul className="flex items-center space-x-10 font-semibold  ">
            {menu.map((item, index) => (
              <li key={index} className="py-4">
                <Link href={item.href}>
                  <div>{item.name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header3
