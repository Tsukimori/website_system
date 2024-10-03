// components/plan/Plan_02.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import PlanCard from "@/components/ui/ItemCard/PlanCard_02"
import PlanOption from "@/components/ui/module/PlanOption"

const Plan_02 = () => {
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
          <div className="mt-16 grid grid-cols-5 gap-x-1">
            <div>
              <div className="bg-accentColor text-white  p-6 rounded-t-2xl">
                <p>プラン一覧</p>
              </div>
              <div>
                <h4 className="mt-[2px] bg-white border border-[#EFEFEF] p-7 font-light text-[#393939] text-center">
                  機能項目
                </h4>
              </div>
              <div>
                <h4 className="mt-[2px] bg-white border border-[#EFEFEF] p-7 font-light text-[#393939] text-center">
                  機能項目
                </h4>
              </div>
              <div>
                <h4 className="mt-[2px] bg-white border border-[#EFEFEF] p-7 font-light text-[#393939] text-center">
                  機能項目
                </h4>
              </div>
              <div>
                <h4 className="mt-[2px] bg-white border border-[#EFEFEF] p-7 font-light text-[#393939] text-center">
                  機能項目
                </h4>
              </div>
              <div>
                <h4 className="mt-[2px] bg-white border border-[#EFEFEF] p-7 font-light text-[#393939] text-center">
                  機能項目
                </h4>
              </div>
            </div>

            <div>
              <div className="bg-accentColor text-white p-6 rounded-t-2xl">
                <h3>プラン_A</h3>
                <p>説明文入ります説明文入ります説明文入ります</p>
                <p>
                  <span>￥</span>0,000
                </p>
                <Link href="/">申し込む</Link>
              </div>
              <div>
                <p className="mt-[2px] bg-white border border-[#EFEFEF] p-7 font-light text-[#393939] text-center">
                  ◎
                </p>
                <p className="mt-[2px] bg-white border border-[#EFEFEF] p-7 font-light text-[#393939] text-center">
                  ◎
                </p>
                <p className="mt-[2px] bg-white border border-[#EFEFEF] p-7 font-light text-[#393939] text-center">
                  ◎
                </p>
                <p className="mt-[2px] bg-white border border-[#EFEFEF] p-7 font-light text-[#393939] text-center">
                  ◎
                </p>
                <p className="mt-[2px] bg-white border border-[#EFEFEF] p-7 font-light text-[#393939] text-center">
                  ◎
                </p>
              </div>
            </div>
            <div>
              <div className="bg-[#0a66c1] text-white p-6 rounded-t-2xl">
                <h3>プラン_B</h3>
                <p>説明文入ります説明文入ります説明文入ります</p>
                <p>
                  <span>￥</span>0,000
                </p>
                <Link href="/">申し込む</Link>
              </div>
              <div>
                <p className="mt-[2px] bg-white border border-[#EFEFEF] p-7 font-light text-[#393939] text-center">
                  ◎
                </p>
                <p className="mt-[2px] bg-white border border-[#EFEFEF] p-7 font-light text-[#393939] text-center">
                  ◎
                </p>
                <p className="mt-[2px] bg-white border border-[#EFEFEF] p-7 font-light text-[#393939] text-center">
                  ◎
                </p>
                <p className="mt-[2px] bg-white border border-[#EFEFEF] p-7 font-light text-[#393939] text-center">
                  ◎
                </p>
                <p className="mt-[2px] bg-white border border-[#EFEFEF] p-7 font-light text-[#393939] text-center">
                  ◎
                </p>
              </div>
            </div>
            <div>
              <div className="bg-[#5087e2] text-white p-6 rounded-t-2xl">
                <h3>プラン_C</h3>
                <p>説明文入ります説明文入ります説明文入ります</p>
                <p>
                  <span>￥</span>0,000
                </p>
                <Link href="/">申し込む</Link>
              </div>
              <div>
                <p className="mt-[2px] bg-white border border-[#EFEFEF] p-7 font-light text-[#393939] text-center">
                  ◎
                </p>
                <p className="mt-[2px] bg-white border border-[#EFEFEF] p-7 font-light text-[#393939] text-center">
                  ◎
                </p>
                <p className="mt-[2px] bg-white border border-[#EFEFEF] p-7 font-light text-[#393939] text-center">
                  ◎
                </p>
                <p className="mt-[2px] bg-white border border-[#EFEFEF] p-7 font-light text-[#393939] text-center">
                  ◎
                </p>
                <p className="mt-[2px] bg-white border border-[#EFEFEF] p-7 font-light text-[#393939] text-center">
                  ◎
                </p>
              </div>
            </div>
            <div>
              <div className="bg-[#5087e2] text-white p-6 rounded-t-2xl">
                <h3>プラン_D</h3>
                <p>説明文入ります説明文入ります説明文入ります</p>
                <p>
                  <span>￥</span>0,000
                </p>
                <Link href="/">申し込む</Link>
              </div>
              <div>
                <p className="mt-[2px] bg-white border border-[#EFEFEF] p-7 font-light text-[#393939] text-center">
                  ◎
                </p>
                <p className="mt-[2px] bg-white border border-[#EFEFEF] p-7 font-light text-[#393939] text-center">
                  ◎
                </p>
                <p className="mt-[2px] bg-white border border-[#EFEFEF] p-7 font-light text-[#393939] text-center">
                  ◎
                </p>
                <p className="mt-[2px] bg-white border border-[#EFEFEF] p-7 font-light text-[#393939] text-center">
                  ◎
                </p>
                <p className="mt-[2px] bg-white border border-[#EFEFEF] p-7 font-light text-[#393939] text-center">
                  ◎
                </p>
              </div>
            </div>
          </div>
        </section>
        <PlanOption/>
      </PageContent>
    </>
  )
}

export default Plan_02
