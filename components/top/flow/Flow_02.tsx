// components/flow/Flow_01.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import FlowCard from "@/components/ui/ItemCard/FlowCard_02"

const Flow_02 = ({ className = "" }) => {
  return (
    <>
      <PageContent className={className}>
        <section className="md:max-w-[1200px] mx-auto">
          <ContentHeadline
            enTitle="Flow"
            mainTitle="ご利用の流れ"
            enTitleClassName="text-center"
            titleClassName="text-center"
          />
          <div className="mt-16 grid grid-cols-1 gap-y-10">
            <FlowCard
              number="01"
              title="ステップ見出し入りますステップ見出し入ります"
              description="ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。"
            />
            <FlowCard
              number="02"
              title="ステップ見出し入りますステップ見出し入ります"
              description="ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。"
            />
            <FlowCard
              number="03"
              title="ステップ見出し入りますステップ見出し入ります"
              description="ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。"
            />
            <FlowCard
              number="04"
              title="ステップ見出し入りますステップ見出し入ります"
              description="ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。ステップ説明文はいります。"
            />
          </div>
        </section>
      </PageContent>
    </>
  )
}

export default Flow_02
