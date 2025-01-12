// components/kv/KeyVisual_03.tsx
"use client"

import FirstViewContent from "@/components/top/kv/FirstViewContent"
import TopPageHeadline from "@/components/ui/frame/TopPageHeadline"
import ScrollButton from "@/components/ui/button/ScrollButton"
import KeyVisualContent from "@/components/top/kv/KeyVisualContent"

// キービジュアル
const KeyVisual_03 = () => {
  // スクロールボタンが押された時に次のセクションに移動する関数
  const scrollToNextSection = () => {
    const kvElement = document.getElementById("kv-section")
    if (kvElement && kvElement.nextElementSibling) {
      kvElement.nextElementSibling.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <>
      <FirstViewContent className="relative h-screen ">
        {/* widthがフルサイズでない場合は指定する */}
        {/* キービジュアルの画像 */}
        <section className="w-[65%] h-full absolute right-0 ">
          {/* KeyVisualContentに高さを指定 */}
          <KeyVisualContent className="h-screen md:h-full" />
        </section>
        <div className="md:max-w-screen-xl mx-auto flex flex-col justify-center h-full relative">
          <TopPageHeadline
            maintitle={
              <>
                <span>Lorem Ipsum</span>
                <br />
                <span>Lorem Ipsum</span>
              </>
            }
            subtitleBottom="日本語のテキストが入ります。"
          />
          {/* スクロールボタン */}
          <div className="absolute left-4 md:left-0 bottom-4 md:bottom-20">
            <ScrollButton onClick={scrollToNextSection} />
          </div>
        </div>
      </FirstViewContent>
    </>
  )
}

export default KeyVisual_03
