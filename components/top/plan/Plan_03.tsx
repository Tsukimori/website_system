// components/plan/Plan_03.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import PlanCard from "@/components/ui/ItemCard/PlanCard_02"

const Plan_03 = () => {
  return (
    <>
      <PageContent className="bg-bgLightBlue">
        <section className="w-1200 mx-auto">
          <ContentHeadline
            entitle="Plan"
            maintitle="料金プラン"
            entitleClassName=""
            titleClassName=""
          />
          <div className="mt-16 ">
            <div>
              <div className="bg-accentColor text-white p-6 rounded-t-2xl">
                <h3>プラン_A</h3>
              </div>
              <div className="mt-[2px] bg-white border border-[#EFEFEF] p-7 font-light text-[#393939] text-center">
                <p>説明文入ります説明文入ります説明文入ります</p>
                <p>
                  <span>￥</span>0,000
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/" className="bg-accentColor text-white cursor-pointer rounded-full flex items-center justify-center w-[350px] h-[58px] font-semibold">申し込む</Link>
          </div>
        </section>
      </PageContent>
    </>
  )
}

export default Plan_03
