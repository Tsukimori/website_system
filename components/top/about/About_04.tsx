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
          <div className=" md:mt-16 md:flex justify-start md:space-x-20">
            <div className="md:w-[600px]">
              <h3 className="text-3xl md:text-5xl font-light leading-relaxed md:leading-[64px]">
                見出しテキスト
                <br />
                はいります見出し
              </h3>
              <p className="mt-10 leading-relaxed md:leading-[45px] md:text-lg">
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
            <div className="w-full md:w-[520px] h-[300px] md:h-[761px] relative mt-10 md:mt-0">
              <Image
                src="/top/message/message_img.png"
                alt="message"
                width="520"
                height="761"
                className="block md:w-fit object-cover w-full h-full"
              />
            </div>
          </div>
        </section>
      </PageContent>
    </>
  )
}

export default About_04
