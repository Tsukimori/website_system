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
    <div className="flex flex-col md:flex-row-reverse justify-between items-center">
      <div className="relative w-full md:w-[714px] h-[250px] md:h-[475px] rounded-l-[10px]">
        <Image
          fill
          src={image}
          alt={title}
          objectFit="cover"
          className=""
          priority
        />
      </div>
      <div className="w-full md:w-[390px]">
        <p className="text-accentColor text-lg font-bold font-lato mt-6">
          Strength_{number}
        </p>
        <h3 className="my-3 md:my-6 text-[22px] font-medium text-accentColor">
          {title}
        </h3>
        <p className="">{description}</p>
      </div>
    </div>
  )
}

export default StrengthCard
