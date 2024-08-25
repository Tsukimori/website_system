"use client"

import Image from "next/image"

// キービジュアル
const Kv2 = () => {
  return (
    <div className="relative">
      <div className="aspect-[16/9] relative overflow-hidden">
        <Image fill src="/kv/kv2.png" alt="kv" className="object-cover" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-5">
        <div className="text-white font-bold text-7xl">Lorem Ipsum</div>
        <div className="text-white font-bold text-7xl">Lorem Ipsum</div>

        <div className="text-white font-bold ">
          日本語見出し日本語見出し文入ります
        </div>
      </div>
    </div>
  )
}

export default Kv2
