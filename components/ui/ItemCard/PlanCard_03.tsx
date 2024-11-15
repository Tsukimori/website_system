// components/ui/itemCard/PlanCard_02.tsx
import Image from "next/image"
import Link from "next/link"

interface PlanCardProps {
  planName: string
  description: string
  price: string
  bgColor: string
  features: string[]
  link: string
  textColor?: string
}

const PlanCard = ({
  planName,
  description,
  price,
  bgColor,
  features,
  link,
  textColor = "text-white",
}: PlanCardProps) => {
  return (
    <div>
      <div className={`${bgColor} ${textColor} p-6 rounded-t-2xl`}>
        <h3>{planName}</h3>
        <p>{description}</p>
        <p>
          <span>￥</span>{price}
        </p>
        <Link href={link}>申し込む</Link>
      </div>
      <div></div>
    </div>
  )
}

export default PlanCard
