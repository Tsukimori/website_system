// components/message/Message_01.tsx

"use client"

import MoreLinkButton from "@/components/ui/button/MoreButton"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import Image from "next/image"

// メッセージ
const Message_01 = () => {
  return (
    <>
      <PageContent>
        {/* widthがフルサイズでない場合は指定する */}
        <section className=" md:w-1200 mx-auto ">
          <ContentHeadline entitle="Who we are" maintitle="私たちについて" />
          <div className=" flex justify-start mt-16">
            <h3 className=" w-[500px] text-5xl ">見出しテキスト</h3>
            <div>
              <p className=" w-[660px]">
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。
              </p>
              <MoreLinkButton href="/" />
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

export default Message_01
