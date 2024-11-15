// components/plan/Plan_04.tsx
"use client"

import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import PlanOption from "@/components/ui/module/PlanOption"
import PlanCard_04 from "@/components/ui/ItemCard/PlanCard_04"

const Plan_04 = () => {
  return (
    <PageContent className="bg-bgLightBlue">
      <section className="w-1200 mx-auto">
        <ContentHeadline
          entitle="Plan"
          maintitle="料金プラン"
          entitleClassName=""
          titleClassName=""
        />
        <div className="mt-16">
          {/* PlanCard_04に各プランの情報を渡して表示 */}
          <PlanCard_04 
            title="プラン_A" 
            description="説明文入ります説明文入ります説明文入ります" 
            price="0,000" 
          />
          <PlanCard_04 
            title="プラン_B" 
            description="説明文入ります説明文入ります説明文入ります" 
            price="0,000" 
          />
          <PlanCard_04 
            title="プラン_C" 
            description="説明文入ります説明文入ります説明文入ります" 
            price="0,000" 
          />
          <PlanCard_04 
            title="プラン_D" 
            description="説明文入ります説明文入ります説明文入ります" 
            price="0,000" 
          />
          <PlanCard_04 
            title="プラン_E" 
            description="説明文入ります説明文入ります説明文入ります" 
            price="0,000" 
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
  )
}

export default Plan_04
