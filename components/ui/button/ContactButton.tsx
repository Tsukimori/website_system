//components/ui/button/ContactButton.tsx
import Link from "next/link"
import { EnvelopeIcon } from "@heroicons/react/24/outline"

const ContactButton = ({ height = "h-20" }: { height?: string }) => {
  return (
    <Link
      href="/contact"
      className={`bg-accentColor text-white cursor-pointer flex items-center justify-center w-full px-10 font-semibold ${height}`}
    >
      <EnvelopeIcon className="w-4 h-4 mr-1" />
      お問い合わせ
    </Link>
  )
}

export default ContactButton


