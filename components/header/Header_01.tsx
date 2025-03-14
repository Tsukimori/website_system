// components/header/Header_01

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Menu from "@/components/ui/navigation/Menu";
import ContactButton from "@/components/ui/button/ContactButton";
import CompanyInfo from "@/components/ui/navigation/CompanyInfo";
import HeaderContent from "../ui/frame/HeaderContent";

const Header_01 = () => {
  const { companyName } = CompanyInfo[0];

  // スクロール状態とメニュー開閉状態を管理
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // メニュー開閉状態
  const [isAnimating, setIsAnimating] = useState(false); // フェードアニメーション用状態

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsAnimating(false);
      }, 200); // アニメーションの長さに合わせて調整
    } else {
      setIsMenuOpen(true);
    }
  };

  const filteredMenu = Menu.filter((item) => item.name !== "お問い合わせ");

  return (
    <>
      <HeaderContent
        className={`fixed h-20 top-0 left-1/2 transform -translate-x-1/2 z-10 text-white w-full transition-all duration-300   ${
          isScrolled ? "!bg-gray-800 !bg-opacity-30" : " bg-opacity-0"
        }`}
      >
        <div className="flex items-center justify-between md:justify-start  w-1400 mx-auto h-20 px-4">
          {/* ロゴ */}
          <Link href="/"  className="w-[150px] md:w-[200px]">
            <div className="text-lg font-bold ">{CompanyInfo[0].companyName("primary")}</div>
          </Link>

          {/* デスクトップ用メニュー */}
          <ul className="hidden md:flex items-center space-x-10 ml-10">
            {filteredMenu.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>
                  <div>{item.name}</div>
                </Link>
              </li>
            ))}
            <li className="">
              <ContactButton className="h-20 absolute top-0 right-0 !w-52" />
            </li>
          </ul>

          {/* ハンバーガーメニューボタン */}
          <button
            className={`block md:hidden text-white transition-transform duration-300 ${
              isMenuOpen ? "rotate-90" : "rotate-0"
            }`}
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* スマホ用メニュー */}
        <div
          className={`absolute top-20 left-0 w-full h-screen bg-gray-800 bg-opacity-70 text-white md:hidden transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          } ${isAnimating ? "pointer-events-auto" : ""}`}
        >
          <ul className="flex flex-col items-center space-y-6 py-10">
            {filteredMenu.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>
                  <div onClick={handleMenuToggle}>{item.name}</div>
                </Link>
              </li>
            ))}
            {/* ContactButton */}
            <li>
              <ContactButton className="w-full py-4 font-normal" />
            </li>
          </ul>
        </div>
      </HeaderContent>
    </>
  );
};

export default Header_01
