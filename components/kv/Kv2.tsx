"use client"

import Image from "next/image"

// キービジュアル
const Kv2 = () => {
  // スクロールボタンが押された時に次のセクションに移動する関数
  const scrollToNextSection = () => {
    const kvElement = document.getElementById("kv-section");
    if (kvElement && kvElement.nextElementSibling) {
      kvElement.nextElementSibling.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-full">
      <div className="max-w-screen-xl mx-auto pt-40">
        <div className="mb-16 relative">
          <div className="font-extrabold text-[80px] leading-[88px] font-lato tracking-[4px]">
            Lorem Ipsum
          </div>
          <div className="font-extrabold text-[80px] leading-[88px] font-lato tracking-[4px]">
            Lorem Ipsum
          </div>
          <div className="text-xl font-semibold mt-4">
            日本語見出し日本語見出し文入ります
          </div>
          {/* スクロールボタン */}
          <div className="absolute right-0 -bottom-10">
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

        {/* キービジュアルの画像 */}
        <div className="max-w-screen-xl mx-auto h-[600px]">
          <Image
            src="/kv/Kv1.png"
            alt="kv"
            width="1280"
            height="600"
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Kv2;
