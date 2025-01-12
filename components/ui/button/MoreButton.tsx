// components/ui/button/MoreLinkButton.tsx

import Link from "next/link"
import classNames from "classnames" 

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
      className={classNames(
        "border rounded-full cursor-pointer flex items-center justify-center w-full md:w-[350px] h-12 md:h-[58px] font-semibold relative group",
        className 
      )}
    >
      もっと見る
    </Link>
  )
}

export default MoreLinkButton
