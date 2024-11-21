// components/plan/Plan_01.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import PlanCard from "@/components/ui/ItemCard/PlanCard_01"
import PlanOption from "@/components/ui/module/PlanOption"

const Plan_01 = () => {
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
          <div className="mt-16 grid grid-cols-4 gap-x-1">
            <PlanCard
              planName="プラン_A"
              description="説明文入ります説明文入ります説明文入ります"
              price="0,000"
              bgColor="bg-accentColor"
              features={[
                "機能項目説明はいります1",
                "機能項目説明はいります2",
                "機能項目説明はいります3",
                "機能項目説明はいります4",
                "機能項目説明はいります5",
              ]}
              link="/"
            />
            <PlanCard
              planName="プラン_B"
              description="説明文入ります説明文入ります説明文入ります"
              price="0,000"
              bgColor="bg-[#0a66c1]"
              features={[
                "機能項目説明はいります",
                "機能項目説明はいります",
                "機能項目説明はいります",
                "機能項目説明はいります",
                "機能項目説明はいります",
              ]}
              link="/"
            />
            <PlanCard
              planName="プラン_C"
              description="説明文入ります説明文入ります説明文入ります"
              price="0,000"
              bgColor="bg-[#5087e2]"
              features={[
                "機能項目説明はいります",
                "機能項目説明はいります",
                "機能項目説明はいります",
                "機能項目説明はいります",
                "機能項目説明はいります",
              ]}
              link="/"
            />
            <PlanCard
              planName="プラン_D"
              description="説明文入ります説明文入ります説明文入ります"
              price="0,000"
              bgColor="bg-[#265cb3]"
              features={[
                "機能項目説明はいります",
                "機能項目説明はいります",
                "機能項目説明はいります",
                "機能項目説明はいります",
                "機能項目説明はいります",
              ]}
              link="/"
            />
          </div>
          <ul className="mt-6 text-xs gap-y-2">
            <li className="mb-2">※注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります</li>
            <li className="mb-2">※注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります</li>
            <li className="mb-2">※注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります</li>
            <li>※注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります</li>
          </ul>
        </section>
        <PlanOption/>
      </PageContent>
    </>
  )
}

export default Plan_01
