"use client"

import Link from "next/link"
import Image from "next/image"
import Menu from "@/components/ui/navigation/Menu"
import Sns from "@/components/ui/button/SnsButton"
import FooterLinks from "@/components/ui/navigation/FooterLinks"
import CompanyInfo from "@/components/ui/navigation/CompanyInfo"
import ContactButton from "@/components/ui/button/ContactButton"

// フッター
const Footer1 = () => {
  const { companyName, companyPostalCode, companyAddress } = CompanyInfo[0]
  return (
    <footer className="border-t py-24">
      <div className="w-[1400px] mx-auto">
        <div className="flex justify-between">
          <div className="space-y-3">
            <h4>{companyName}</h4>
            <p>
              <span className="">{companyPostalCode}</span>
              {companyAddress}
            </p>
          </div>
          <div className="flex flex-col items-end">
            <ul className="flex items-center space-x-10 font-light">
              {Menu.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>
                    <div>{item.name}</div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="w-[198px] mt-7">
              <ContactButton className="h-14 rounded-xl" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center border-t border-borderGray mt-4 pt-4 ">
          <div className="flex flex-col items-center justify-center text-sm space-y-5">
            <ul className="flex items-center justify-end font-semibold">
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
          </div>
          <ul className="flex items-center space-x-10 font-light">
            {FooterLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>
                  <div>{item.name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <small className="mt-4 flex justify-end">
          ©{companyName}. ALL Rights Reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer1
