"use client";

import Image from "next/image";

// 私たちについて
const Lowerkv_02 = () => {
  return (
    <div
      className="h-[400px]"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url(/common/lowerkv.jpg) lightgray 50% / cover no-repeat`,
      }}
    >
      <div className="md:max-w-[1240px] mx-auto space-y-10 px-5 relative h-[400px] flex items-center">
        <h1 className="text-5xl font-semibold tracking-[0.05em] leading-[120%] text-white">
          <span className="block font-lato text-lg font-extrabold mb-1 ![line-height:120%]">
            title
          </span>
          タイトルが入ります
        </h1>
      </div>
    </div>
  );
};

export default Lowerkv_02;
