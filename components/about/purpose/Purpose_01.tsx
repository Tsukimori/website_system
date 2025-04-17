// components/message/Purpose_01.tsx

"use client";

import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import SectionContent from "@/components/ui/frame/SectionContent";
import Image from "next/image";
import PurposeCard from "@/components/ui/ItemCard/PurposeCard";

const Purpose_01 = () => {
  const purposeData = {
    mission: {
      title: "Mission",
      headline: "見出しテキスト\nはいります見出し",
      description:
        "メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。",
    },
    vision: {
      title: "Vision",
      headline: "見出しテキスト\nはいります見出し",
      description:
        "メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。",
    },
    values: {
      title: "Value",
      values: [
        {
          title: "見出しテキストはいります見出し",
          description:
            "メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。",
        },
        {
          title: "見出しテキストはいります見出し",
          description:
            "メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。",
        },
        {
          title: "見出しテキストはいります見出し",
          description:
            "メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。",
        },
        {
          title: "見出しテキストはいります見出し",
          description:
            "メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。",
        },
        {
          title: "見出しテキストはいります見出し",
          description:
            "メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。",
        },
      ],
    },
  };

  return (
    <SectionContent>
      <section className="md:w-1200 mx-auto">
        <ContentHeadline
          entitle="Purpose"
          maintitle="私たちの想い"
          entitleClassName="text-center"
          titleClassName="text-center"
        />
        <ul className="space-y-16">
          <PurposeCard {...purposeData.mission} />
          <PurposeCard {...purposeData.vision} />
          <PurposeCard {...purposeData.values} />
        </ul>
        <div className="w-full h-[523px] relative rounded overflow-hidden">
          <Image
            src="/about/purpose.jpg"
            alt="message"
            layout="fill"
            objectFit="cover"
            className="block"
          />
        </div>
      </section>
    </SectionContent>
  );
};

export default Purpose_01;
