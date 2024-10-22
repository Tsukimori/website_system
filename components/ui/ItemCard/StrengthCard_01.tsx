// components/ui/itemCard/StrengthCard_01.tsx
import Image from "next/image"
import Link from "next/link"

interface StrengthCardProps {
  number: string
  title: string
  description: string
  image: string
}

const StrengthCard = ({
  number,
  title,
  description,
  image,
}: StrengthCardProps) => {
  return (
    <div>
      <div className="flex justify-center">
        <p className="text-accentColor text-[40px] font-spectral italic  leading-[60px] flex justify-center items-center pb-2 border-b-2 border-accentColor w-16">
          {number}
        </p>
      </div>
      <h3 className="my-6 text-lg font-semibold text-center">{title}</h3>
      <div className="relative w-full h-[300px]">
        <Image
          fill
          src={image}
          alt={title}
          objectFit="cover"
          className=""
          priority
        />
      </div>
      <p className="font-light mt-6">{description}</p>
    </div>
  )
}

export default StrengthCard
