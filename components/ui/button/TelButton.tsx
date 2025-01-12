//components/ui/button/TelButton.tsx
import Link from "next/link"
import { PhoneIcon } from "@heroicons/react/24/outline"
import CompanyInfo from "@/components/ui/navigation/CompanyInfo"

const TelButton = ({ className = "" }: { className?: string }) => {
  const { companyTel, companyTelHref } = CompanyInfo[0]
  return (
    <Link
      href={companyTelHref}
      className={`bg-black text-white cursor-pointer flex items-center justify-center w-full px-10 font-semibold h-10 ${className}`}
    >
      <PhoneIcon className="w-4 h-4 mr-1" />
      {companyTel}
    </Link>
  )
}

export default TelButton
