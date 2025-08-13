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
      className={`bg-accentColor text-white cursor-pointer flex items-center justify-center w-full px-10 py-4 rounded-full font-en text-lg tracking-[0.03em] ${className}`} 
    >
      <EnvelopeIcon className="w-4 h-4 mr-1" />
      Contact us
    </Link>
  )
}

export default ContactButton
