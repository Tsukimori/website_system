// components/ui/button/ArrowRightLinkButton.tsx

import Link from "next/link"

interface ArrowRightLinkButtonProps {
  href: string
  label: string
}

const ArrowRightLinkButton: React.FC<ArrowRightLinkButtonProps> = ({
  href,
  label,
}) => {
  return (
    <Link href={href}>
      <p className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        {label}
      </p>
    </Link>
  )
}

export default ArrowRightLinkButton
