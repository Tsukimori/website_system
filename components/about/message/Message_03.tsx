// components/message/Message_03.tsx

"use client";

import MoreLinkButton from "@/components/ui/button/MoreButton";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import SectionContent from "@/components/ui/frame/SectionContent";
import Image from "next/image";

// メッセージ
const Message_03 = () => {
  return (
    <>
      <SectionContent className="![padding-bottom:0]">
        {/* widthがフルサイズでない場合は指定する */}
        <section className=" md:max-w-[1200px] mx-auto ">
          {/* <ContentHeadline
            entitle="Who we are"
            maintitle="私たちについて"
            entitleClassName="text-center"
            titleClassName="text-center"
          /> */}
          <div className=" md:mt-16 md:flex justify-start md:space-x-20 border-b-2 pb-24">
            <div className="md:w-[600px] ">
              <h3 className="text-3xl md:text-5xl  font-light leading-relaxed md:leading-[64px] mt-10 md:mt-0">
                見出しテキスト
                <br />
                はいります見出し
              </h3>
              <p className="mt-10 leading-relaxed md:leading-[250%] md:text-lg">
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
                <br />
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。{" "}
                <br />
                メッセージはいります。メッセージはいります。
                <br />
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。{" "}
                <br />
                メッセージはいります。メッセージはいります。
              </p>
              {/* <MoreLinkButton
                href="/"
                className="mt-10 text-accentColor border-accentColor"
              /> */}
            </div>
            <div className=" md:w-[520px] h-[300px] md:h-[761px] relative">
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
      </SectionContent>
    </>
  );
};

export default Message_03;
