// components/ui/itemCard/StrengthCard_04.tsx
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
    <div className="flex flex-row-reverse justify-between items-center">
      <div className="relative w-[714px] h-[475px] rounded-l-[10px]">
        <Image
          fill
          src={image}
          alt={title}
          objectFit="cover"
          className="rounded-l-[10px]"
          priority
        />
      </div>
      <div className="w-[390px]">
        <p className="text-accentColor text-lg font-extrabold font-lato mt-6">
          Feauture_{number}
        </p>
        <h3 className="mt-2 text-[22px] font-semibold text-accentColor">{title}</h3>
        <p className="font-light mt-6">{description}</p>
      </div>
    </div>
  )
}

export default StrengthCard
