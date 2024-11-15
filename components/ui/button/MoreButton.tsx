// components/ui/button/MoreLinkButton.tsx

import Link from "next/link"

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
      className={`border border-blue text-blue cursor-pointer rounded-full flex items-center justify-center w-[350px] h-[58px] font-semibold ${className}`}
    >
      もっと見る
    </Link>
  )
}

export default MoreLinkButton
