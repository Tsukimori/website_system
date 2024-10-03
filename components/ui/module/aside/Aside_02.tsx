// components/module/aside/Aside_02.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import PageContent from "@/components/ui/frame/PageContent"
import FreeButtonWhite from "@/components/ui/button/FreeButtonWhite"

const Aside_02 = () => {
  return (
    <>
      <PageContent className="bg-white">
        <section className="w-1200  py-16 mx-auto grid grid-cols-2 ">
          <div className="bg-accentColor rounded-l-lg">
            <p>見出し</p>
            <h4>asideaside</h4>
            <p className="text-center text-[22px] text-white font-bold w-[495px]">
              見出しはいります。見出しはいります。見出しはいります。
              見出しはいります。見出しはいります。見出しはいります。
            </p>
            <div>
              <FreeButtonWhite href="/" text="お問い合わせ" />
            </div>
          </div>
          <div className="bg-[#393939] rounded-r-lg">
            <p>見出し</p>
            <h4>asideaside</h4>
            <p className="text-center text-[22px] text-white font-bold w-[495px]">
              見出しはいります。見出しはいります。見出しはいります。
              見出しはいります。見出しはいります。見出しはいります。
            </p>
            <div>
              <FreeButtonWhite href="/" text="お問い合わせ" />
            </div>
          </div>
        </section>
      </PageContent>
    </>
  )
}

export default Aside_02
