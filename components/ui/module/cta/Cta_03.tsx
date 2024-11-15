// components/module/cta/Cta_03.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import PageContent from "@/components/ui/frame/PageContent"
import FreeButtonBlue from "@/components/ui/button/FreeButtonBlue"

const Cta_03 = () => {
  return (
    <>
      <PageContent className="bg-accentColor">
        <section className="w-1200 mx-auto grid grid-cols-2 gap-x-10">
          <div className="bg-white text-accentColor text-center px-16 py-6 flex flex-col items-center rounded-xl">
          <Image
            src="/cta/tel.svg"
            alt="電話イメージ"
            width={50}
            height={40}
            className="mx-auto mb-4"
          />
            <h4 className="relative inline-block after:content[] after:bg-[url('/cta/line-right.svg')] after:bg-no-repeat after:inline-block after:w-[10px] after:h-[20px] after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-4 
            before:content[] before:bg-[url('/cta/line-left.svg')] before:bg-no-repeat before:inline-block before:w-[10px] before:h-[14px] before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-4">いますぐ資料を請求する</h4>
            <div className="flex justify-center mt-2">
              <FreeButtonBlue href="/" text="無料資料請求・お問い合わせ" />
            </div>
          </div>
          <div className="bg-white text-[#4270ed] text-center px-16 py-6 flex flex-col items-center rounded-xl">
          <Image
            src="/cta/mail.svg"
            alt="メールイメージ"
            width={50}
            height={40}
            className="mx-auto mb-4"
          />
            <h4 className="relative inline-block after:content[] after:bg-[url('/cta/line-right.svg')] after:bg-no-repeat after:inline-block after:w-[10px] after:h-[20px] after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-4 
            before:content[] before:bg-[url('/cta/line-left.svg')] before:bg-no-repeat before:inline-block before:w-[10px] before:h-[14px] before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-4 ">先ずはお試ししてみる</h4>
            <div className="flex justify-center mt-2">
              <FreeButtonBlue href="/" text="無料テスト利用申し込み" />
            </div>
          </div>
        </section>
      </PageContent>
    </>
  )
}

export default Cta_03
