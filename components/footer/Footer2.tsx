"use client"

import Link from "next/link"
import Image from "next/image"
import Menu from "@/components/ui/navigation/Menu"
import Sns from "@/components/ui/button/SnsButton"
import CompanyInfo from "@/components/ui/navigation/CompanyInfo"

// フッター
const Footer2 = () => {
  const { companyName } = CompanyInfo[0]

  return (
    <footer className="py-24 bg-black text-white">
      <div className="md:w-1200 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6">
          <h4>{companyName}</h4>

          <ul className="flex items-center space-x-10 font-light">
            {Menu.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>
                  <div>{item.name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-[#eeeeee] md:w-1200 my-6"></div>

        {/* <div className="border-t border-borderGray mt-6 pt-6">
          <ul className="flex items-center justify-center font-semibold">
            {Sns.map((item, index) => (
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
        </div> */}
        <small className="mt-6 flex justify-center items-center text-base ">
          ©2024　<span className="w-36 mt-[2px]">{companyName}</span>　ALL Rights Reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer2
