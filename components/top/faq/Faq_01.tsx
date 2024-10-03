// components/faq/faq_01.tsx

"use client"
import { useState } from "react"
import Image from "next/image"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import MoreButton from "@/components/ui/button/MoreButton"

const questions = [
  { question: "質問1質問1質問1質問1質問1質問1質問1質問1質問1質問1質問1質問1質問1質問1質問1質問1質問1質問1", answer: "回答1が入ります" },
  { question: "質問2", answer: "回答2が入ります" },
  { question: "質問3", answer: "回答3が入ります" },
  { question: "質問4", answer: "回答4が入ります" },
]

const Faq_01 = () => {
  // 開閉状態を管理するフック
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <PageContent className="bg-white">
      <section className="w-1200 mx-auto">
        <ContentHeadline
          entitle="FAQ"
          maintitle="よくある質問"
          entitleClassName="text-center"
          titleClassName="text-center"
        />
        <div className="mt-16">
          {questions.map((item, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <div
                className="flex justify-between py-6 px-10 bg-bgLightBlue cursor-pointer "
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex">
                  <Image
                    src="/common/question-blue.svg"
                    alt="?マーク"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  {item.question}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                >
                  <path
                    d="M2 14H26"
                    stroke="#4270ED"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className={openIndex === index ? "hidden" : ""}
                  />
                  <path
                    d="M14 26L14 2"
                    stroke="#4270ED"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              {/* アコーディオンの内容 */}
              {openIndex === index && (
                <div className=" py-6 px-10 bg-white border  flex">
                    <Image
                src="/common/answer-red.svg"
                alt="?マーク"
                width={24}
                height={24}
                className="mr-2"
              />
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <MoreButton className="text-accentColor border-accentColor" />
        </div>
      </section>
    </PageContent>
  )
}

export default Faq_01
