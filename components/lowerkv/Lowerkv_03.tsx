"use client";

import Image from "next/image";

// 私たちについて
const Lowerkv_03 = () => {
  return (
    <div className="h-[400px] mx-auto relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative flex items-center h-full">
        <h1 className="w-[30vw] text-5xl font-semibold tracking-[0.05em] leading-[120%]">
          <div className="block text-accentColor font-lato text-lg font-extrabold mb-1 ![line-height:120%]">
            title
          </div>
          タイトルが入ります
        </h1>
      </div>

      <div className="w-[50vw] absolute right-0 h-full top-0">
        <img
          src="/common/lowerkv2.jpg"
          alt="キービジュアル"
          className="w-full h-full object-cover aspect-[800/400]"
        />
      </div>
    </div>
  );
};

export default Lowerkv_03;
