// components/header/Header_01

"use client";

import Link from "next/link";
import Menu from "@/components/ui/navigation/Menu";
import ContactButton from "@/components/ui/button/ContactButton";
import CompanyInfo from "@/components/ui/navigation/CompanyInfo";
import HeaderContent from "../ui/frame/HeaderContent";

// ヘッダー
const Header_01 = () => {
  const { companyName } = CompanyInfo[0];

  // "お問い合わせ" を非表示にするフィルタリング
  const filteredMenu = Menu.filter((item) => item.name !== "お問い合わせ");

  return (
    <>
      <HeaderContent className="fixed left-1/2 transform -translate-x-1/2 z-10 text-white">
        <div className="flex items-center space-x-10">
          <Link href="/">{companyName}</Link>

          <ul className="flex items-center space-x-10 font-medium">
            {filteredMenu.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>
                  <div>{item.name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-10">
          <ContactButton className="h-20" />
        </div>
      </HeaderContent>
    </>
  );
};

export default Header_01;
