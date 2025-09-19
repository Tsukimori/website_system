import MoreButton from "@/components/ui/button/MoreButton"
import Image from "next/image"

interface AboutSection_01Props {
  title: string // 見出しテキスト
  description: string // 本文
  buttonHref?: string // ボタンリンク先（任意）
  imageUrl?: string // 画像URL（任意）
  position?: string // 役職（任意）
  name?: string // 氏名（任意）
}

const AboutSection_01 = ({
  title,
  description,
  buttonHref,
  imageUrl,
  position,
  name,
}: AboutSection_01Props) => {
  // 文字列内の\nを<br />に変換する関数
  const convertNewLines = (text: string) => {
    return text.split("\\n").map((line, i) => (
      <span key={i}>
        {line}
        {i !== text.split("\\n").length - 1 && <br />}
      </span>
    ))
  }

  return (
    <>
      <div className="md:flex items-start justify-between md:max-w-[1240px] mx-auto gap-10 text-white px-5">
        <h3 className="w-full md:max-w-[500px] text-2xl md:text-[40px] leading-relaxed md:leading-[160%] tracking-[0.03em]">
          {convertNewLines(title)}
        </h3>
        <div>
          <p className="w-full md:max-w-[660px] leading-relaxed md:leading-[45px] text-base md:text-lg mt-10 md:mt-0 whitespace-pre-line tracking-[0.03em]">
            {description}
          </p>
          {(position || name) && (
            <p className="mt-10 text-base md:text-lg leading-[250%] tracking-[0.03em]">
              {position}
              <br />
              {name}
            </p>
          )}
          {buttonHref && (
            <MoreButton
              href={buttonHref}
              className="mt-10 text-accentColor border-accentColor"
            >
              About us
            </MoreButton>
          )}
        </div>
      </div>
      <section className="md:w-full h-[250px] md:h-[480px] mx-auto mt-10 md:mt-[120px]  flex justify-center relative ">
        <Image
          src="/top/message/message_img.png"
          alt="message"
          fill
          className="object-cover rounded-t-[40px]"
        />
      </section>
    </>
  )
}

export default AboutSection_01
