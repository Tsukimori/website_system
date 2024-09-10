//components/ui/button/ContactButton.tsx
import Link from "next/link"
import { EnvelopeIcon } from "@heroicons/react/24/outline"

const ContactButton = () => {
  return (
    <Link
      href="/contact"
      className="bg-accentColor text-white cursor-pointer flex items-center w-full h-20 px-10 font-semibold"
    >
      <EnvelopeIcon className="w-4 h-4 ml-1" />
      お問い合わせ
    </Link>
  )
}

export default ContactButton

