// components/ui/itemCard/FlowCard_01.tsx
import Image from "next/image"
import Link from "next/link"

interface FlowCardProps {
  step: string
  number: string
  title: string
  description: string
  index: number // 新しく index プロパティを追加
}

const FlowCard = ({ step, number, title, description, index }: FlowCardProps) => {
  return (
    <div
      className={`relative border-2 border-accentColor rounded-xl p-6 flex justify-center flex-col items-center ${
        index === 4 || index === 8 // 4つ目と8つ目のindex（0始まりなので3と7）で after スタイルを除外
          ? ""
          : "after:content-[''] after:bg-[url('/flow/arrow-right.svg')] after:bg-no-repeat after:inline-block after:w-[20px] after:h-[40px] after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-[34px]"
      }`}
    >
      <p className="text-lg font-extrabold font-lato text-accentColor tracking-wide">{step}</p>
      <p className="text-5xl font-extrabold font-lato text-accentColor tracking-wider pt-1">{number}</p>
      <h3 className="text-lg font-semibold font-lato text-accentColor mt-4 tracking-wide">{title}</h3>
      <p className="font-light mt-2">{description}</p>
    </div>
  )
}

export default FlowCard
