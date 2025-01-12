// components/ui/itemCard/StrengthCard_03.tsx
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
      <p className="text-accentColor text-lg font-extrabold font-poppins mt-6">
        Feauture{number}
      </p>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="font-light mt-6">{description}</p>
    </div>
  )
}

export default StrengthCard
