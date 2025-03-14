// components/message/About_03.tsx

"use client"

import MoreLinkButton from "@/components/ui/button/MoreButton"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import Image from "next/image"

// メッセージ
const About_03 = () => {
  return (
    <>
      <PageContent>
        {/* widthがフルサイズでない場合は指定する */}
        <section className=" md:w-1200 mx-auto ">
          <div className=" md:flex justify-start">
            <ContentHeadline enTitle="Who we are" mainTitle="私たちについて" />
            <div>
              <h3 className="md:w-[500px] text-3xl md:text-5xl md:mt-4 font-light leading-relaxed md:leading-[64px]">
                見出しテキスト
                <br />
                はいります見出し
              </h3>
              <p className=" md:w-[660px] mt-10 leading-relaxed md:leading-[45px] md:text-lg">
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。
              </p>
              <MoreLinkButton
                href="/"
                className="mt-10 text-accentColor border-accentColor"
              />
            </div>
          </div>
        </section>
      </PageContent>
    </>
  )
}

export default About_03
