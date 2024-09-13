// components/kv/KeyVisual_02.tsx

"use client"

import FirstViewContent from "../ui/frame/FirstViewContent"
import TopPageHeadline from "@/components/ui/frame/TopPageHeadline"
import ScrollButton from "../ui/button/ScrollButton"
import KeyVisualContent from "../ui/frame/KeyVisualContent"

// キービジュアル
const KeyVisual_02 = () => {
  const scrollToNextSection = () => {
    const kvElement = document.getElementById("kv-section")
    if (kvElement && kvElement.nextElementSibling) {
      kvElement.nextElementSibling.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <FirstViewContent>
        {/* widthがフルサイズでない場合は指定する */}
        <div className="w-11/12 mx-auto mt-60">
          <TopPageHeadline
            maintitle={
              <>
                <span>Lorem Ipsum</span>
                <br />
                <span>Lorem Ipsum</span>
              </>
            }
            subtitle="日本語のテキストが入ります。"
          />
          <section className="relative">
            <div className="absolute right-0 -bottom-10">
              <ScrollButton onClick={scrollToNextSection} />
            </div>
          </section>

          {/* キービジュアルの画像 */}
          <section className="mx-auto mt-16">
            {/* KeyVisualContentに高さを指定 */}
            <KeyVisualContent className="h-[600px]" />
          </section>
        </div>
      </FirstViewContent>
    </>
  )
}

export default KeyVisual_02
