import React from "react"
import Image from "next/image"

interface HeadlineProps {
  title: React.ReactNode
  subTitle?: React.ReactNode // subTitleをオプショナルに変更
  number?: React.ReactNode // numberはオプショナル
  body?: React.ReactNode // bodyをオプショナルに変更
  ImageSrc: string
  ImageWidth: number
  ImageHeight: number
  titleElement?: React.ElementType
  subTitleElement?: React.ElementType
  numberElement?: React.ElementType
  bodyElement?: React.ElementType
}

const ContentHeadline: React.FC<HeadlineProps> = ({
  title,
  body,
  ImageSrc,
  ImageWidth,
  ImageHeight,
  titleElement: TitleTag = "h3",
  bodyElement: BodyTag = "p",
}) => (
  <div className="flex flex-col items-center justify-center mb-10">
    <div className="w-9 h-9">
      <Image
        src={ImageSrc}
        alt="イメージ画像"
        width={ImageWidth}
        height={ImageHeight}
        priority={true}
        className="w-full h-full object-contain"
      />
    </div>
    <TitleTag className="text-2xl md:text-[45px] font-bold leading-loose">
      {title}
    </TitleTag>
    {body && <BodyTag className="text-lg mt-6 text-center">{body}</BodyTag>}
  </div>
)

export default ContentHeadline
