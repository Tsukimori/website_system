// components/plan/Plan_03.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import PlanCard from "@/components/ui/ItemCard/PlanCard_03"
import PlanOption from "@/components/ui/module/PlanOption"
import PlanList from "@/components/ui/ItemCard/PlanList_03"

const Plan_03 = () => {
  return (
    <>
      <PageContent className="bg-bgLight">
        <section className="md:max-w-[1200px] mx-auto">
          <ContentHeadline
            enTitle="Plan"
            mainTitle="料金プラン"
            enTitleClassName=""
            titleClassName=""
          />
          <PlanList />

          <div className="flex justify-center mt-10 md:mt-16">
            <Link
              href="/"
              className="bg-accentColor text-white cursor-pointer rounded-full flex items-center justify-center w-[350px] h-12 md:h-[58px] font-semibold"
            >
              申し込む
            </Link>
          </div>
        </section>
        <PlanOption />
      </PageContent>
    </>
  )
}

export default Plan_03
