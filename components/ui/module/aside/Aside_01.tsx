// components/module/aside/Aside_01.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import PageContent from "@/components/ui/frame/PageContent"
import FreeButtonWhite from "@/components/ui/button/FreeButtonWhite"

const Aside_01 = () => {
  return (
    <>
      <PageContent className="bg-white">
        <section className="w-1200  py-16 mx-auto bg-[url('/aside/aside.png')] bg-no-repeat bg-cover flex flex-col items-center rounded-lg">
          <p>見出し</p>
          <h4>asideaside</h4>
          <p className="text-center text-[22px] text-white font-bold w-[495px]">
            見出しはいります。見出しはいります。見出しはいります。
            見出しはいります。見出しはいります。見出しはいります。
          </p>
          <div>
            <FreeButtonWhite href="/" text="お問い合わせ" />
          </div>
        </section>
      </PageContent>
    </>
  )
}

export default Aside_01
