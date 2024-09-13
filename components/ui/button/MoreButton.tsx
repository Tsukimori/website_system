import Link from "next/link"
import { EnvelopeIcon } from "@heroicons/react/24/outline"

const ContactButton = ({
  className = "",  
}: {
  className?: string
}) => {
  return (
    <Link
      href="/"
      className={`border border-white text-white cursor-pointer rounded-full flex items-center justify-center w-[350px] h-[58px] font-semibold ${className}`} 
    >
      もっと見る
    </Link>
  )
}

export default ContactButton
