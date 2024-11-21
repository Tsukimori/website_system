// components/faq/Faq_02.tsx

"use client"
import { useState } from "react"
import Image from "next/image"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import MoreButton from "@/components/ui/button/MoreButton"

const questions = [
  { question: "質問1質問1質問1質問1質問1質問1質問1質問1質問1質問1質問1質問1質問1質問1質問1質問1質問1質問1", answerTitle: "回答1タイトルが入ります", answer: "回答1が入ります" },
  { question: "質問2",answerTitle: "回答2タイトルが入ります", answer: "回答2が入ります回答2が入ります回答2が入ります" },
  { question: "質問3",answerTitle: "回答3タイトルが入ります", answer: "回答3が入ります回答3が入ります回答3が入ります" },
  { question: "質問4",answerTitle: "回答4タイトルが入ります", answer: "回答4が入ります" },
]

const Faq_02 = () => {
  return (
    <PageContent className="bg-white">
      <section className="md:w-1200 mx-auto">
        <ContentHeadline
          entitle="FAQ"
          maintitle="よくある質問"
          entitleClassName="text-center"
          titleClassName="text-center"
        />
        <div className="mt-16 grid grid-cols-2 gap-10">
          {questions.map((item, index) => (
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
                  <h3 className="text-[#d93d69] text-lg font-semibold">{item.answerTitle}</h3>
                </div>
                <p className="mt-2 pl-8">{item.answer}</p> 
              </div>
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

export default Faq_02
