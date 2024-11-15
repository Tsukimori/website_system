// components/kv/KeyVisual_08.tsx

"use client"

import Image from "next/image"

// キービジュアル
const Kv8 = () => {
  return (
    <div className="relative">
      <div className="aspect-[16/9] relative overflow-hidden">
        <Image
          fill
          src="/kv/kv2.png"
          alt="kv"
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-5">
        <div className="text-white font-bold text-6xl">
          この文章はダミーです
        </div>

        <div className="text-white font-bold ">
          日本語見出し日本語見出し文入ります
        </div>
      </div>
    </div>
  )
}

export default Kv8
