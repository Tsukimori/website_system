// components/message/About_01.tsx

"use client"

import MoreLinkButton from "@/components/ui/button/MoreButton"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import Image from "next/image"

// メッセージ
const About_01 = () => {
  return (
    <>
      <PageContent>
        {/* widthがフルサイズでない場合は指定する */}
        <section className=" w-1200 mx-auto ">
          <ContentHeadline entitle="Who we are" maintitle="私たちについて" />
          <div className=" flex justify-start">
            <h3 className=" w-[500px] text-5xl font-light leading-[64px]">
              見出しテキスト
              <br />
              はいります見出し
            </h3>
            <div>
              <p className=" w-[660px] leading-[45px] text-lg">
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。
              </p>
              <MoreLinkButton
                href="/"
                className="mt-10 text-accentColor border-accentColor  "
              />
            </div>
          </div>
        </section>
        <section className="w-[95%] h-[380px] mx-auto mt-24  flex justify-center relative">
          <Image
            src="/top/message/message_img.png"
            alt="message"
            layout="fill" // 画像のサイズは親要素にフィット
            objectFit="cover" // 画像を親要素に合わせてトリミング
            className="block"
          />
        </section>
      </PageContent>
    </>
  )
}

export default About_01
