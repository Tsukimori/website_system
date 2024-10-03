// components/module/cta/Cta_02.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import PageContent from "@/components/ui/frame/PageContent"
import FreeButtonWhite from "@/components/ui/button/FreeButtonWhite"

const Cta_02 = () => {
  return (
    <>
      <PageContent className="bg-accentColor">
        <section className="w-1200 mx-auto grid grid-cols-2 gap-x-20">
          <Image
            src="/cta/cta.png"
            alt="ctaイメージ画像"
            width={500}
            height={363}
          />
          <div className="">
            <h4 className="text-white">見出しテキスト入ります見出しテキスト入ります</h4>
            <p className="text-white">リード文はいりますリード文はいりますリード文はいりますリード文はいりますリード文はいりますリード文はいります</p>
            <div>
            <FreeButtonWhite href="/" text="お問い合わせ" />
          </div>
          </div>
        </section>
      </PageContent>
    </>
  )
}

export default Cta_02
