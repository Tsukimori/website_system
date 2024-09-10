"use client"

import Link from "next/link"
import Image from "next/image"
import menu from "@/components/ui/navigation/Menu"
import sns from "@/components/ui/navigation/SnsButton"
import ContactButton from "@/components/ui/button/ContactButton"

// ヘッダー
const Header1 = () => {
  return (
    <header className="border-b h-20 text-[#393939] tracking-wide">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between ">
        <div className="flex items-center space-x-10 ">
          <Link href="/" className="letter">
            株式会社COMPANY
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
