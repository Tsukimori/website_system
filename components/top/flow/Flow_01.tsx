// components/flow/Flow_01.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import FlowCard from "@/components/ui/ItemCard/FlowCard_01"

const Flow_01 = () => {
  return (
    <>
      <PageContent className="">
        <section className="md:w-1200 mx-auto">
          <ContentHeadline
            entitle="Flow"
            maintitle="ご利用の流れ"
            entitleClassName="text-center"
            titleClassName="text-center"
          />
          <div className="mt-16 grid grid-cols-4 gap-x-10 gap-y-6">
            <FlowCard
              step="STEP 1"
              number="01"
              title="ステップ見出し入りますステップ見出し入ります"
              description="ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。"
              index={1}
            />
             <FlowCard
              step="STEP 2"
              number="02"
              title="ステップ見出し入りますステップ見出し入ります"
              description="ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。"
              index={2}
            />
            <FlowCard
              step="STEP 3"
              number="03"
              title="ステップ見出し入りますステップ見出し入ります"
              description="ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。"
              index={3}
            />
            <FlowCard
              step="STEP 4"
              number="04"
              title="ステップ見出し入りますステップ見出し入ります"
              description="ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。"
              index={4}
            />
             <FlowCard
              step="STEP 5"
              number="05"
              title="ステップ見出し入りますステップ見出し入ります"
              description="ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。"
              index={5}
            />
             <FlowCard
              step="STEP 6"
              number="06"
              title="ステップ見出し入りますステップ見出し入ります"
              description="ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。"
              index={6}
            />
            <FlowCard
              step="STEP 7"
              number="07"
              title="ステップ見出し入りますステップ見出し入ります"
              description="ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。"
              index={7}
            />
            <FlowCard
              step="STEP 8"
              number="08"
              title="ステップ見出し入りますステップ見出し入ります"
              description="ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。"
              index={8}
            />
          </div>
        </section>
      </PageContent>
    </>
  )
}

export default Flow_01
