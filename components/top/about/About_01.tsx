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
          {/* <ContentHeadline entitle="Who we are" maintitle="私たちについて" /> */}
          <div className=" flex justify-between">
            <h3 className=" w-[500px] text-5xl font-light leading-[64px]">
              無数の選択肢の中から
              <br />
              ベストな選択を
            </h3>
            <div>
              <p className=" w-[660px] leading-[45px] text-lg">
                経営者は日々悩んでいます。そして、日々決断しています。<br/><br/>
                
                一番成果が上がる選択はどれか。一番効率のいい選択はどれか。<br/>
                無数の選択肢の中からベストな選択ができるよう、<br/>
                常に試行錯誤し決断しています。<br/><br/>
                
                私たちはその決断が本当にベストなのか、検討しています。<br/>
                そして、その決断が本当のベストになるためのサポートを<br/>
                常に用意しています。<br/>
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
