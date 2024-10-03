// components/flow/Flow_01.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"

const Flow_01 = () => {
  return (
    <>
      <PageContent className="">
        <section className="w-1200 mx-auto">
          <ContentHeadline
            entitle="Flow"
            maintitle="ご利用の流れ"
            entitleClassName="text-center"
            titleClassName="text-center"
          />
          <div className="mt-16 grid grid-cols-4 gap-x-10 gap-y-6">
            <div className="relative border-2 border-[#4270ed] after:content[] after:bg-[url('/flow/arrow-right.svg')] after:bg-no-repeat after:inline-block after:w-[20px] after:h-[40px] after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-[34px]">
              <p>STEP 1</p>
              <p>01</p>
              <h3>ステップ見出し入りますステップ見出し入ります</h3>
              <p>
                ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。
              </p>
            </div>
            <div className="relative border-2 border-[#4270ed] after:content[] after:bg-[url('/flow/arrow-right.svg')] after:bg-no-repeat after:inline-block after:w-[20px] after:h-[40px] after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-[34px]">
              <p>STEP 1</p>
              <p>01</p>
              <h3>ステップ見出し入りますステップ見出し入ります</h3>
              <p>
                ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。
              </p>
            </div>
            
            <div className="relative border-2 border-[#4270ed] after:content[] after:bg-[url('/flow/arrow-right.svg')] after:bg-no-repeat after:inline-block after:w-[20px] after:h-[40px] after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-[34px]">
              <p>STEP 1</p>
              <p>01</p>
              <h3>ステップ見出し入りますステップ見出し入ります</h3>
              <p>
                ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。
              </p>
            </div>
            <div className="border-2 border-[#4270ed] ">
              <p>STEP 1</p>
              <p>01</p>
              <h3>ステップ見出し入りますステップ見出し入ります</h3>
              <p>
                ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。
              </p>
            </div>
          </div>
        </section>
      </PageContent>
    </>
  )
}

export default Flow_01
