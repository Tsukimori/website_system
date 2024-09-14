// components/kv/KeyVisual_05.tsx
"use client"

import FirstViewContent from "@/components/ui/frame/FirstViewContent"
import TopPageHeadline from "@/components/ui/frame/TopPageHeadline"
import KeyVisualContent from "@/components/ui/frame/KeyVisualContent"
import ScrollButton from "@/components/ui/button/ScrollButton"
import MoreButton from "@/components/ui/button/MoreButton"

// キービジュアル
const KeyVisual_05 = () => {
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
          <KeyVisualContent className="h-screen" />
        </section>
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[1200px]">
          <TopPageHeadline
            maintitle={
              <>
                <span className=" block text-[50px] leading-normal w-[600px]">
                  日本語見出し文日本語見出し文はいります
                </span>
              </>
            }
            subtitleTop={
              <>
                <span>Lorem Ipsum</span>
                <br />
                <span>Lorem Ipsum</span>
              </>
            }
            className="  text-white "
          />
          <MoreButton />
        </div>
        <div className="absolute left-1/2  transform -translate-x-1/2 bottom-20">
          <ScrollButton onClick={scrollToNextSection} color="white" />
        </div>
      </FirstViewContent>
    </>
  )
}

export default KeyVisual_05
