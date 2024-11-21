// components/module/aside/Aside_01.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import PageContent from "@/components/ui/frame/PageContent"
import MoreButton from "@/components/ui/button/MoreButton"

const Aside_01 = () => {
  return (
    <>
      <PageContent className="bg-white">
        <section className="w-1200  py-16 mx-auto bg-[url('/aside/aside.png')] bg-no-repeat bg-cover flex flex-col items-center  text-white">
          <p className="text-lg font-bold">料金プラン</p>
          <h4 className="text-[40px] font-lato font-bold">Plan</h4>
          <p className="text-center text-lg font-medium w-[495px] my-6">
            御社のニーズに沿ったプランをご用意しております。
          </p>
          <div>
            <MoreButton className="!bg-white !text-accentColor" />
          </div>
        </section>
      </PageContent>
    </>
  )
}

export default Aside_01
