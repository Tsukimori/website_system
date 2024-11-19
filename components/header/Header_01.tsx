// components/header/Header_01

"use client"

import Link from "next/link"
import Image from "next/image"
import Menu from "@/components/ui/navigation/Menu"
import SnsButton from "@/components/ui/button/SnsButton"
import ContactButton from "@/components/ui/button/ContactButton"
import CompanyInfo from "@/components/ui/navigation/CompanyInfo"
import HeaderContent from "../ui/frame/HeaderContent"

// ヘッダー
const Header_01 = () => {
  const { companyName } = CompanyInfo[0]
  return (
    <>
      <HeaderContent className=" fixed left-1/2 transform -translate-x-1/2 z-10 text-white ">

          <div className="flex items-center space-x-10 ">
            <Link href="/">{companyName}</Link>

            <ul className="flex items-center space-x-10 font-medium ">
              {Menu.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>
                    <div>{item.name}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center space-x-10">
            {/* <ul className="flex items-center justify-end font-semibold">
              {SnsButton.map((item, index) => (
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
            </ul> */}
            <ContactButton className="h-20" />
          </div>

      </HeaderContent>
    </>
  )
}

export default Header_01
