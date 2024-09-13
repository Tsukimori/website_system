// components/kv/KeyVisual_01.tsx

"use client"

import FirstViewContent from "@/components/ui/frame/FirstViewContent"
import TopPageHeadline from "@/components/ui/frame/TopPageHeadline"
import KeyVisualContent from "@/components/ui/frame/KeyVisualContent"

// キービジュアル
const KeyVisual_01 = () => {
  return (
    <>
      <FirstViewContent>
        {/* widthがフルサイズでない場合は指定する */}
        <section>
          {/* KeyVisualContentに高さを指定 */}
          <KeyVisualContent className="h-[700px]" />
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
            subtitleBottom="日本語のテキストが入ります。"
            className="w-[1200px] absolute left-1/2 transform -translate-x-1/2 bottom-20 text-white text-right"
          />
        </div>
      </FirstViewContent>
    </>
  )
}

export default KeyVisual_01
