// components/strength/Strength_04.tsx

"use client"

import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import StrengthCard from "@/components/ui/ItemCard/StrengthCard_04"
import { strengthData } from "@/components/data/top/StrengthData"
import MoreLinkButton from "@/components/ui/button/MoreButton"

// 強み
const Strength_04 = () => {
  return (
    <>
      <PageContent>
        {/* widthがフルサイズでない場合は指定する */}
        <section className="md:w-1200 mx-auto space-y-10">
          <ContentHeadline
            enTitle="Strength"
            mainTitle="私たちの強み"
            className="text-center"
          />

          {/* gridレイアウトを使用して3列にカードを配置 */}
          <div className="grid grid-cols-1 gap-10">
            {/* strengthDataをループしてStrengthCardを生成 */}
            {strengthData.map((strength) => (
              <StrengthCard
                key={strength.number}
                number={strength.number}
                title={strength.title}
                description={strength.description}
                image={strength.image}
              />
            ))}
          </div>
        </section>
        <MoreLinkButton
          href="/"
          className="mt-10 md:mt-16 text-accentColor border-accentColor mx-auto"
        />
      </PageContent>
    </>
  )
}

export default Strength_04
