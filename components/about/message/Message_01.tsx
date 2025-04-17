// components/message/Message_01.tsx

"use client";

import MoreLinkButton from "@/components/ui/button/MoreButton";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import SectionContent from "@/components/ui/frame/SectionContent";
import Image from "next/image";

// メッセージ
const Message_01 = () => {
  return (
    <>
      <SectionContent className="pt-14 md:pt-24">
        {/* widthがフルサイズでない場合は指定する */}
        <section className="w-full md:w-1200 mx-auto">
          <ContentHeadline
            entitle="Message"
            maintitle="代表挨拶"
            entitleClassName="text-center"
            titleClassName="text-center"
          />
          <div className="md:flex justify-between">
            <h3 className="w-full md:w-[500px] text-3xl md:text-5xl font-light leading-relaxed md:leading-[84px] tracking-wide">
              見出しテキスト
              <br />
              はいります見出し
            </h3>
            <div>
              <p className="w-full md:w-[660px] leading-relaxed md:leading-[250%] md:text-lg mt-10 md:mt-3">
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
                <br />
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。
                <br />
                メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
                メッセージはいります。メッセージはいります。
              </p>
              <p className="mt-10 text-lg leading-[250%]">
              役職役職<br />
              氏名　氏名
              </p>
            </div>
          </div>
        </section>
      </SectionContent>
      <section className="md:w-[95%] h-[250px] md:h-[380px] mx-auto flex justify-center relative">
        <Image
          src="/top/message/message_img.png"
          alt="message"
          layout="fill" // 画像のサイズは親要素にフィット
          objectFit="cover" // 画像を親要素に合わせてトリミング
          className="block "
        />
      </section>
    </>
  );
};

export default Message_01;
