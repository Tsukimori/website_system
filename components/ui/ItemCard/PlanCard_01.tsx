// components/ui/itemCard/PlanCard_01.tsx
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
      <ul className="mt-[2px] bg-white border border-[#EFEFEF] p-6 font-light text-[#393939] space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex item-center">
            <svg
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-1 mr-2"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 2.86421L10.0927 16L0 6.46719L3.19315 3.60298L10.0927 10.1198L20.8069 0L24 2.86421Z"
                fill="#4270ED"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PlanCard
