// components/ui/itemCard/StrengthCard_02.tsx
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
      <div className="relative">
        <div className="relative w-[720px] h-[500px]">
          <Image
            fill
            src={image}
            alt={title}
            objectFit="cover"
            className=""
            priority
          />
        </div> 
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[560px] h-[376px] p-16 bg-white/80 backdrop-blur-sm flex-col justify-start items-start gap-6 inline-flex">
          <p className="text-accentColor text-lg font-extrabold font-poppins">
            Point{number}
          </p>
          <h3 className="text-[22px] font-medium text-accentColor pb-6 border-b border-accentColor">{title}</h3>
        <p className="font-light">{description}</p>
        </div>
        
      </div>
    </div>
  )
}

export default StrengthCard
