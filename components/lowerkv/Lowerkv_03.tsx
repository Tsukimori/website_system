"use client"

import Image from "next/image"

// 私たちについて
const Lowerkv_03 = () => {
  return (
    <div className="h-[400px] mx-auto relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto relative flex items-center h-[200px] md:h-full px-5">
        <h1 className="md:w-[30vw] text-3xl md:text-5xl font-semibold tracking-[0.05em] leading-[120%]">
          <div className="block text-accentColor font-lato text-lg font-extrabold mb-1 ![line-height:120%]">
            title
          </div>
          タイトルが入ります
        </h1>
      </div>

      <div className="md:w-[50vw] md:absolute right-0 h-[200px] md:h-full md:top-0">
        <Image
          src="/common/lowerkv2.jpg"
          alt="キービジュアル"
          width={800}
          height={400}
          className="w-full h-full object-cover aspect-[800/400]"
        />
      </div>
    </div>
  )
}

export default Lowerkv_03
