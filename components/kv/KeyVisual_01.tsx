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

        <section className="mx-auto">
          {/* KeyVisualContentに高さを指定 */}
          <KeyVisualContent className="h-[600px]" />
        </section>

          <TopPageHeadline
            maintitle={
              <>
                <span>Lorem Ipsum</span>
                <br />
                <span>Lorem Ipsum</span>
              </>
            }
            subtitle="日本語のテキストが入ります。"
            className="  absolute right-20  bottom-60  text-white text-right"
          />

      </FirstViewContent>
    </>
  )
}

export default KeyVisual_01
