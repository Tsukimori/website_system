// components/kv/KeyVisual_06.tsx
"use client"

import FirstViewContent from "@/components/top/kv/FirstViewContent"
import TopPageHeadline from "@/components/ui/frame/TopPageHeadline_02"
import KeyVisualContent from "@/components/top/kv/KeyVisualContent"
import ScrollButton from "@/components/ui/button/ScrollButton"

// キービジュアル
const KeyVisual_06 = () => {
  const scrollToNextSection = () => {
    const kvElement = document.getElementById("kv-section")
    if (kvElement && kvElement.nextElementSibling) {
      kvElement.nextElementSibling.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <>
      <FirstViewContent className="relative">
        {/* widthがフルサイズでない場合は指定する */}
        <section className="mx-auto">
          {/* KeyVisualContentに高さを指定 */}
          <KeyVisualContent className="h-screen md:h-[810px]" />
        </section>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-20 w-full md:max-w-[1200px] px-5">
          <TopPageHeadline
            mainTitle={<>Create the <br />next stage.</>}
            description="企業と働く人。ステップアップのループへ。"
            className="w-full text-white text-right absolute right-0 bottom-[120px]"
          />
        </div>
      </FirstViewContent>
    </>
  )
}

export default KeyVisual_06
