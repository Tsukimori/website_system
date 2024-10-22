// components/ui/button/ArrowRightLinkButton.tsx

import Link from "next/link"
import { ChevronRight } from 'lucide-react';

interface ArrowRightLinkButtonProps {
  href: string
  label: string
}

const ArrowRightLinkButton: React.FC<ArrowRightLinkButtonProps> = ({
  href,
  label,
}) => {
  return (
    <Link href={href} className="absolute right-0 top-1/4">
      <p className="w-8 h-8 flex justify-center items-center bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
        {label}<ChevronRight size={12} color="white" />
      </p>
    </Link>
  )
}

export default ArrowRightLinkButton
