// components/module/cta/Cta_03.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import PageContent from "@/components/ui/frame/PageContent"
import FreeButtonWhite from "@/components/ui/button/FreeButtonWhite"

const Cta_03 = () => {
  return (
    <>
      <PageContent className="!py-0 px-0 ">
        <section className="mx-auto grid md:grid-cols-2">
          <div className="text-white text-center bg-accentColor py-10 md:py-16">
            <p className="md:text-lg font-bold">お電話でのお問い合わせ</p>
            <h4 className="text-3xl md:text-[40px] font-bold font-poppins">TEL</h4>
            <p className="md:text-lg my-3 md:my-6">営業時間 9:00〜18:00（土日祝日休業）</p>
            <div className="flex justify-center">
              <FreeButtonWhite href="tel:0364555380" text="03-6455-5380" className="!bg-white !text-accentColor" />
            </div>
          </div>
          <div className="bg-[#393939] text-white text-center py-10 md:py-16">
            <p className="md:text-lg font-bold">メールでのお問い合わせ</p>
            <h4 className="text-3xl md:text-[40px] font-bold font-poppins">MAIL</h4>
            <p className="md:text-lg my-3 md:my-6">お問い合わせフォームはこちら</p>
            <div className="flex justify-center">
              <FreeButtonWhite href="/contact" text="Contatc form" className="!bg-white !text-[#393939]" />
            </div>
          </div>
        </section>
      </PageContent>
    </>
  )
}

export default Cta_03
