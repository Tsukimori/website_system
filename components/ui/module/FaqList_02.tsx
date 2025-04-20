import { useState } from "react";
import Image from "next/image";
import { faqData, FaqData } from "@/data/faqData";

const FaqList_02 = ({ hideTab = false }: { hideTab?: boolean }) => {
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof faqData>("category1");

  return (
    <>
      {/* タブナビゲーション */}
      {!hideTab && (
        <div className="flex justify-center gap-10 mb-8 border-t border-b border-[#EFEFEF]">
          {Object.entries(faqData).map(([key, category]) => (
            <button
              key={key}
              onClick={() => {
                setActiveCategory(key as keyof typeof faqData);
              }}
              className={`px-1 py-4 text-sm font-bold ${
                activeCategory === key
                  ? "bg-white text-accentColor border-b-4 border-accentColor"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      )}

      {/* FAQリスト */}
      <div className="mt-16 grid grid-cols-2 gap-10">
        {faqData[activeCategory].items.map((item, index) => (
          <div key={index}>
            <div className="flex items-center px-6 bg-accentColor rounded-t-lg text-white text-lg font-semibold h-[106px] ">
              <Image
                src="/common/question-white.svg"
                alt="?マーク"
                width={24}
                height={24}
                className="mr-2"
              />
              {item.question}
            </div>
            <div className="flex flex-col py-10 px-6 font-light bg-bgLightBlue rounded-b-lg">
              <div className="flex items-center">
                <Image
                  src="/common/answer-red.svg"
                  alt="回答マーク"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <h3 className="text-[#d93d69] text-lg font-semibold">
                  {item.answerTitle}
                </h3>
              </div>
              <p className="mt-2 pl-8">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FaqList_02;
