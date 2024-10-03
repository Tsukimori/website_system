// components/faq/faq_02.tsx

"use client"
import { useState } from "react"
import Image from "next/image"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import MoreButton from "@/components/ui/button/MoreButton"

const Faq_02 = () => {
  return (
    <PageContent className="bg-white">
      <section className="w-1200 mx-auto">
        <ContentHeadline
          entitle="FAQ"
          maintitle="よくある質問"
          entitleClassName="text-center"
          titleClassName="text-center"
        />
        <div className="mt-16 grid grid-cols-2 gap-10">
          <div>
            <div className="flex py-10 px-6">
              <Image
                src="/common/question-blue.svg"
                alt="?マーク"
                width={24}
                height={24}
                className="mr-2"
              />
              質問内容入ります質問内容入ります質問内容入ります質問内容入ります質問内容入ります
            </div>
            <div className="flex py-10 px-6">
              <Image
                src="/common/answer-red.svg"
                alt="?マーク"
                width={24}
                height={24}
                className="mr-2"
              />
              回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります入ります質問内容入ります質問内容入ります質問内容入ります
            </div>
          </div>
          <div>
            <div className="flex py-10 px-6">
              <Image
                src="/common/question-blue.svg"
                alt="?マーク"
                width={24}
                height={24}
                className="mr-2"
              />
              質問内容入ります質問内容入ります質問内容入ります質問内容入ります質問内容入ります
            </div>
            <div className="flex py-10 px-6">
              <Image
                src="/common/answer-red.svg"
                alt="?マーク"
                width={24}
                height={24}
                className="mr-2"
              />
              回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります入ります質問内容入ります質問内容入ります質問内容入ります
            </div>
          </div>
          <div>
            <div className="flex py-10 px-6">
              <Image
                src="/common/question-blue.svg"
                alt="?マーク"
                width={24}
                height={24}
                className="mr-2"
              />
              質問内容入ります質問内容入ります質問内容入ります質問内容入ります質問内容入ります
            </div>
            <div className="flex py-10 px-6">
              <Image
                src="/common/answer-red.svg"
                alt="?マーク"
                width={24}
                height={24}
                className="mr-2"
              />
              回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります入ります質問内容入ります質問内容入ります質問内容入ります
            </div>
          </div>
          <div>
            <div className="flex py-10 px-6">
              <Image
                src="/common/question-blue.svg"
                alt="?マーク"
                width={24}
                height={24}
                className="mr-2"
              />
              質問内容入ります質問内容入ります質問内容入ります質問内容入ります質問内容入ります
            </div>
            <div className="flex py-10 px-6">
              <Image
                src="/common/answer-red.svg"
                alt="?マーク"
                width={24}
                height={24}
                className="mr-2"
              />
              回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります回答内容入ります入ります質問内容入ります質問内容入ります質問内容入ります
            </div>
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <MoreButton className="text-accentColor border-accentColor" />
        </div>
      </section>
    </PageContent>
  )
}

export default Faq_02
