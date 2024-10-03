// components/plan/Plan_04.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import PlanOption from "@/components/ui/module/PlanOption"

const Plan_04 = () => {
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
            <div className="flex justify-between p-6">
              <div>
                <h3>プラン_A</h3>
                <p>説明文入ります説明文入ります説明文入ります</p>
              </div>
              <p>
                <span>￥</span>0,000
              </p>
            </div>
            <div className="flex justify-between p-6">
              <div>
                <h3>プラン_A</h3>
                <p>説明文入ります説明文入ります説明文入ります</p>
              </div>
              <p>
                <span>￥</span>0,000
              </p>
            </div>
            <div className="flex justify-between p-6">
              <div>
                <h3>プラン_A</h3>
                <p>説明文入ります説明文入ります説明文入ります</p>
              </div>
              <p>
                <span>￥</span>0,000
              </p>
            </div>
            <div className="flex justify-between p-6">
              <div>
                <h3>プラン_A</h3>
                <p>説明文入ります説明文入ります説明文入ります</p>
              </div>
              <p>
                <span>￥</span>0,000
              </p>
            </div>
            <div className="flex justify-between p-6">
              <div>
                <h3>プラン_A</h3>
                <p>説明文入ります説明文入ります説明文入ります</p>
              </div>
              <p>
                <span>￥</span>0,000
              </p>
            </div>
            <div className="flex justify-between p-6">
              <div>
                <h3>プラン_A</h3>
                <p>説明文入ります説明文入ります説明文入ります</p>
              </div>
              <p>
                <span>￥</span>0,000
              </p>
            </div>
          </div>
          <ul>
            <li>※注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります</li>
            <li>※注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります</li>
            <li>※注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります</li>
            <li>※注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります</li>
          </ul>
        </section>
        <PlanOption/>
      </PageContent>
    </>
  )
}

export default Plan_04
