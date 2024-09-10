"use client"

import Image from "next/image"

// キービジュアル
const Kv1 = () => {
  return (
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
          <div className="font-extrabold text-[80px] leading-[88px] font-lato tracking-[4px]">Lorem Ipsum</div>
          <div className="font-extrabold text-[80px] leading-[88px] font-lato tracking-[4px]">Lorem Ipsum</div>
          <div className="text-xl font-semibold mt-4">
            日本語見出し日本語見出し文入ります
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kv1
