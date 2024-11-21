// components/message/About_04.tsx

"use client"

import MoreLinkButton from "@/components/ui/button/MoreButton"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import Image from "next/image"

// メッセージ
const About_04 = () => {
  return (
    <>
      <PageContent>
        {/* widthがフルサイズでない場合は指定する */}
        <section className=" md:w-1200 mx-auto ">
          <ContentHeadline entitle="Who we are" maintitle="私たちについて" />
          <div className=" mt-16 flex justify-start space-x-20">
            <div className="w-[600px]">
              <h3 className="text-5xl font-light leading-[64px]">
                見出しテキスト
                <br />
                はいります見出し
              </h3>
              <p className="mt-10 leading-[45px] text-lg">
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
                <br />
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。<br/>
                メッセージはいります。メッセージはいります。
                <br />
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。<br/>
                メッセージはいります。メッセージはいります。
              </p>
              <MoreLinkButton
                href="/"
                className="mt-10 text-accentColor border-accentColor"
              />
            </div>
            <div className=" w-[520px] h-[761px] relative">
              <Image
                src="/top/message/message_img.png"
                alt="message"
                layout="fill" // 画像のサイズは親要素にフィット
                objectFit="cover" // 画像を親要素に合わせてトリミング
                className="block"
              />
            </div>
          </div>
        </section>
      </PageContent>
    </>
  )
}

export default About_04
