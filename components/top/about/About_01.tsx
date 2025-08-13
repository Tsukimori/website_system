// components/message/About_01.tsx

"use client"

import MoreLinkButton from "@/components/ui/button/MoreButton"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import Image from "next/image"
import AboutSection from "@/components/ui/module/AboutSection_01"
import SectionContent from "@/components/ui/frame/SectionContent"

// メッセージ
const About_01 = () => {
  return (
    <>
      <SectionContent id="about" className="!pb-0 !px-0" variant="dot">
        {/* widthがフルサイズでない場合は指定する */}
        <section className="w-full md:max-w-[1240px] mx-auto px-5">
          <ContentHeadline
            enTitle="Who we are"
            mainTitle="私たちについて"
            enTitleClassName=""
            titleClassName=""
          />
        </section>
        <AboutSection
          title="日本を代表する\n
人事・組織の変革支援\n
パートナーとして、\n
あらゆる企業の\n
人的資本経営を後押しする"
          description={`企業の経営戦略に基づき、「人と組織」に関する課題を解決し、組織の成長と持続的な競争力強化を支援します！

企業の成長戦略を人事面からサポートします！
人材のポテンシャルを最大限に引き出します！
企業の持続的な成長を支えます！
採用戦略から採用計画などワンストップでサポートします！`}
          buttonHref="/about"
          // 以下は任意
          // imageUrl="/path/to/image.jpg"
          // position="代表取締役"
          // name="山田太郎"
        />
      </SectionContent>
    </>
  )
}

export default About_01
