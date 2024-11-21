// components/kv/KeyVisual_01.tsx

"use client"

import FirstViewContent from "@/components/top/kv/FirstViewContent"
import TopPageHeadline from "@/components/ui/frame/TopPageHeadline"
import KeyVisualContent from "@/components/top/kv/KeyVisualContent"

// キービジュアル
const KeyVisual_01 = () => {
  return (
    <>
      <FirstViewContent>
        {/* widthがフルサイズでない場合は指定する */}
        <section>
          {/* KeyVisualContentに高さを指定 */}
          <KeyVisualContent className="h-screen md:h-[810px]" />
        </section>
        <div className="relative  md:w-1200 mx-auto ">
          <TopPageHeadline
            subtitleTop={
              <>
                <span>Optimal SolutionSolution</span>
                <br />
                <span>For your Company</span>
              </>
            }
            maintitle={
              <>
                <span>常にベストな<br className="block md:hidden"/>決断を</span>
              </>
            }
            subtitleBottom={<>1,000社以上の実績で御社の決算も安心して<br className="block md:hidden"/>お任せください</>}
            className="absolute left-0 bottom-56 md:bottom-64 text-white text-left"
          />
        </div>
      </FirstViewContent>
    </>
  )
}

export default KeyVisual_01
