"use client"

import Image from "next/image"

// キービジュアル
const Kv3 = () => {
   // スクロールボタンが押された時に次のセクションに移動する関数
   const scrollToNextSection = () => {
    const kvElement = document.getElementById("kv-section");
    if (kvElement && kvElement.nextElementSibling) {
      kvElement.nextElementSibling.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="relative h-screen">
      <div className="w-[65%] h-full absolute right-0 -z-10">
        <Image
          fill
          src="/kv/kv_img.png"
          alt="kv"
          className="object-cover"
          priority
        />
      </div>
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center h-full relative">
        <div className="">
          <div className="font-extrabold text-[80px] leading-[88px] font-lato tracking-[4px]">Lorem Ipsum</div>
          <div className="font-extrabold text-[80px] leading-[88px] font-lato tracking-[4px]">Lorem Ipsum</div>
          <div className="text-xl font-semibold mt-4">
            日本語見出し日本語見出し文入ります
          </div>
        </div>
        {/* スクロールボタン */}
        <div className="absolute left-0 bottom-20">
            <Image
              src="/common/scrolldown.svg"
              alt="スクロールボタン"
              width="80"
              height="80"
              className="cursor-pointer"
              priority
              onClick={scrollToNextSection} // クリックイベントを追加
            />
          </div>
      </div>
    </div>
  )
}

export default Kv3
