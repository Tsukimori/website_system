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
        <section className="w-1200  py-16 mx-auto bg-[url('/aside/aside.png')] bg-no-repeat bg-cover flex flex-col items-center rounded-lg text-white">
          <p className="text-lg font-semibold">見出し</p>
          <h4 className="text-[40px] font-lato font-bold">asideaside</h4>
          <p className="text-center text-lg font-semibold w-[495px] pt-1 pb-6">
            見出しはいります。見出しはいります。見出しはいります。
            見出しはいります。見出しはいります。見出しはいります。
          </p>
          <div>
          <MoreButton className="bg-white text-accentColor" />
          </div>
        </section>
      </PageContent>
    </>
  )
}

export default Aside_01
