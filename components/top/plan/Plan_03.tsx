// components/plan/Plan_03.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import PlanCard from "@/components/ui/ItemCard/PlanCard_03"
import PlanOption from "@/components/ui/module/PlanOption"

const Plan_03 = () => {
  return (
    <>
      <PageContent className="bg-bgLightBlue">
        <section className="md:w-1200 mx-auto">
          <ContentHeadline
            entitle="Plan"
            maintitle="料金プラン"
            entitleClassName=""
            titleClassName=""
          />
          <div className="mt-16 ">
            <div>
              <div className="bg-accentColor text-white p-6 rounded-t-2xl">
                <h3 className="text-2xl font-bold leading-[38.40px] mb-1 text-center">プラン_A</h3>
              </div>
              <div className="mt-[2px] bg-white border border-[#EFEFEF] p-7 font-light text-[#393939] text-center">
                <p className="font-light">説明文入ります説明文入ります説明文入ります</p>
                <p className="my-4 text-[40px] font-bold text-accentColor">
                  <span className="text-lg font-extrabold">￥</span>0,000
                </p>
              </div>
            </div>
          </div>
          <ul className="mt-6 text-xs gap-y-2">
            <li className="mb-2">※注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります</li>
            <li className="mb-2">※注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります</li>
            <li className="mb-2">※注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります</li>
            <li>※注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります</li>
          </ul>
          <div className="flex justify-center mt-16">
            <Link href="/" className="bg-accentColor text-white cursor-pointer rounded-full flex items-center justify-center w-[350px] h-[58px] font-semibold">申し込む</Link>
          </div>
        </section>
        <PlanOption/>
      </PageContent>
    </>
  )
}

export default Plan_03
