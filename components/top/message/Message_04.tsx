// components/message/Message_04.tsx

"use client";

import MoreLinkButton from "@/components/ui/button/MoreButton";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import PageContent from "@/components/ui/frame/PageContent";
import Image from "next/image";

// メッセージ
const Message_04 = () => {
  return (
    <>
      <PageContent>
        {/* widthがフルサイズでない場合は指定する */}
        <section className=" md:max-w-[1200px] mx-auto ">
          <div className=" flex justify-start">
            <ContentHeadline enTitle="Who we are" mainTitle="私たちについて" />
            <div>
              <h3 className=" w-[500px] text-5xl mt-4 ">見出しテキスト</h3>
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
      </PageContent>
    </>
  );
};

export default Message_04;
