"use client"

import Link from "next/link"
import Image from "next/image"
import menu from "@/components/ui/navigation/Menu"
import sns from "@/components/ui/navigation/SnsButton"
import ContactButton from "@/components/ui/button/ContactButton"
import CompanyInfo from "@/components/ui/navigation/CompanyInfo" 

// ヘッダー
const Header1 = () => {
  const { companyName } = CompanyInfo[0]; 
  return (
    <header className="border-b h-20 text-[#393939] tracking-wide">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between ">
        <div className="flex items-center space-x-10 ">
          <Link href="/">
            {companyName}
          </Link>

          <ul className="flex items-center space-x-10 font-semibold ">
            {menu.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>
                  <div>{item.name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-10">
          <ul className="flex items-center justify-end font-semibold">
            {sns.map((item, index) => (
              <li
                key={index}
                className="w-[60px] h-[60px] flex items-center justify-center"
              >
                <Link href={item.href} className="">
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
          <ContactButton />
        </div>
      </div>
    </header>
  )
}

export default Header1
