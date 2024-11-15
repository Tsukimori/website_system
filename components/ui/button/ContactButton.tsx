import Link from "next/link"
import { EnvelopeIcon } from "@heroicons/react/24/outline"

const ContactButton = ({
  className = "",  
}: {
  className?: string
}) => {
  return (
    <Link
      href="/contact"
      className={`bg-accentColor text-white cursor-pointer flex items-center justify-center w-full px-10 font-semibold ${className}`} 
    >
      <EnvelopeIcon className="w-4 h-4 mr-1" />
      お問い合わせ
    </Link>
  )
}

export default ContactButton
