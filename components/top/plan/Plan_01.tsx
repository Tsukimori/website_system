// components/plan/Plan_01.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import PlanCard from "@/components/ui/ItemCard/PlanCard_01"
import PlanOption from "@/components/ui/module/PlanOption"
import PlanList from "@/components/ui/ItemCard/PlanList_01"

const Plan_01 = () => {
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
        </section>
        <PlanOption />
      </PageContent>
    </>
  )
}

export default Plan_01
