// components/plan/Plan_02.tsx
import PageContent from "@/components/ui/frame/PageContent"
import PlanCard from "@/components/ui/ItemCard/PlanCard_02"
import PlanOption from "@/components/ui/module/PlanOption"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"

const Plan_02 = () => {
  return (
    <PageContent className="bg-bgLightBlue">
      <section className="md:w-1200 mx-auto">
        <ContentHeadline
          entitle="Plan"
          maintitle="料金プラン"
          entitleClassName=""
          titleClassName=""
        />

        <div className="mt-16 grid grid-cols-5 gap-x-1">
          <PlanCard
            title="プラン一覧"
            colorClass="bg-accentColor"
            features={[
              "機能項目",
              "機能項目",
              "機能項目",
              "機能項目",
              "機能項目",
            ]}
            isLargePadding={true}
          />
          <PlanCard
            title="プラン_A"
            description="説明文入ります説明文入ります説明文入ります"
            price="0,000"
            colorClass="bg-accentColor"
            features={["◎", "◎", "◎", "◎", "◎"]}
          />
          <PlanCard
            title="プラン_B"
            description="説明文入ります説明文入ります説明文入ります"
            price="0,000"
            colorClass="bg-[#0a66c1]"
            features={["◎", "◎", "◎", "◎", "◎"]}
          />
          <PlanCard
            title="プラン_C"
            description="説明文入ります説明文入ります説明文入ります"
            price="0,000"
            colorClass="bg-[#5087e2]"
            features={["◎", "◎", "◎", "◎", "◎"]}
          />
          <PlanCard
            title="プラン_D"
            description="説明文入ります説明文入ります説明文入ります"
            price="0,000"
            colorClass="bg-[#5087e2]"
            features={["◎", "◎", "◎", "◎", "◎"]}
          />
        </div>
        <ul className="mt-6 text-xs gap-y-2">
            <li className="mb-2">※注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります</li>
            <li className="mb-2">※注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります</li>
            <li className="mb-2">※注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります</li>
            <li>※注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります</li>
          </ul>
      </section>
      <PlanOption />
    </PageContent>
  )
}

export default Plan_02
