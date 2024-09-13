// components/kv/KeyVisual_04.tsx
"use client"

import FirstViewContent from "@/components/ui/frame/FirstViewContent"
import TopPageHeadline from "@/components/ui/frame/TopPageHeadline"
import KeyVisualContent from "@/components/ui/frame/KeyVisualContent"

// キービジュアル
const KeyVisual_04 = () => {
  return (
    <>
      <FirstViewContent>
        {/* widthがフルサイズでない場合は指定する */}
        <section className="mx-auto">
          {/* KeyVisualContentに高さを指定 */}
          <KeyVisualContent className="h-[800px]" />
        </section>
        <div className="relative">
          <TopPageHeadline
            maintitle={
              <>
                <span>Lorem Ipsum</span>
                <br />
                <span>Lorem Ipsum</span>
              </>
            }
            subtitle="日本語のテキストが入ります。"
            className="w-full absolute left-1/2 text-white text-center  transform -translate-x-1/2 bottom-60"
          />
        </div>
      </FirstViewContent>
    </>
  )
}

export default KeyVisual_04
