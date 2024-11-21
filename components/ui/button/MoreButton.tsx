// components/ui/button/MoreLinkButton.tsx

import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const MoreLinkButton = ({
  href = "/", // デフォルトの href を "/" に設定
  className = "",
}: {
  href?: string
  className?: string
}) => {
  return (
    <Link
      href={href}
      className={`bg-baseColor text-white cursor-pointer flex items-center justify-center w-full md:w-[350px] h-[58px] font-lato font-bold relative group ${className}`}
    >
      View more<ArrowRightIcon className="w-4 h-4 absolute top-1/2 right-[100px] -translate-y-1/2 group-hover:right-[90px]
       duration-300 transform ease-in-out" />
    </Link>
  )
}

export default MoreLinkButton
