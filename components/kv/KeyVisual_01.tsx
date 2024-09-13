// components/kv/KeyVisual_01.tsx

"use client"

import Image from "next/image"
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
        <div className="absolute right-0 bottom-32 text-white">
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
        </div>
      </FirstViewContent>

      <div className="relative">
        <div className="aspect-[16/9] relative overflow-hidden">
          <Image
            fill
            src="/kv/kv1.png"
            alt="kv"
            className="object-cover"
            priority
          />
        </div>
        <div className="max-w-screen-xl mx-auto relative">
          <div className="absolute right-0 bottom-32 text-white">
            <div className="font-extrabold text-[80px] leading-[88px] font-lato tracking-[4px]">
              Lorem Ipsum
            </div>
            <div className="font-extrabold text-[80px] leading-[88px] font-lato tracking-[4px]">
              Lorem Ipsum
            </div>
            <div className="text-xl font-semibold mt-4">
              日本語見出し日本語見出し文入ります
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default KeyVisual_01
