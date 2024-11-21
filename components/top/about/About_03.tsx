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
          <div className=" flex justify-start">
            <ContentHeadline entitle="Who we are" maintitle="私たちについて" />
            <div>
              <h3 className=" w-[500px] text-5xl mt-4 font-light leading-[64px]">見出しテキスト<br/>はいります見出し</h3>
              <p className=" w-[660px] mt-10 leading-[45px] text-lg">
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。
              </p>
              <MoreLinkButton href="/" className="mt-10 text-accentColor border-accentColor" />
            </div>
          </div>
        </section>
      </PageContent>
    </>
  )
}

export default About_03
