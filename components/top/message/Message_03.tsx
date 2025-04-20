// components/message/Message_03.tsx

"use client";

import MoreLinkButton from "@/components/ui/button/MoreButton";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import PageContent from "@/components/ui/frame/PageContent";
import Image from "next/image";

// メッセージ
const Message_03 = () => {
  return (
    <>
      <PageContent>
        {/* widthがフルサイズでない場合は指定する */}
        <section className=" md:max-w-[1200px] mx-auto ">
          <ContentHeadline enTitle="Who we are" mainTitle="私たちについて" />
          <div className=" mt-16 flex justify-start space-x-20">
            <div className="w-[600px]">
              <h3 className="text-5xl ">見出しテキスト</h3>
              <p>
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。
              </p>
              <MoreLinkButton href="/" />
            </div>
            <div className=" w-[520px] h-[767px] relative">
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
  );
};

export default Message_03;
