// components/ui/button/MoreLinkButton.tsx

import Link from "next/link"
import classNames from "classnames"

const MoreLinkButton = ({
  href = "/", // デフォルトの href を "/" に設定
  className = "",
  children = "もっと見る", // デフォルトのテキスト
}: {
  href?: string
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <Link
      href={href}
      className={classNames(
        "border border-white text-white font-en tracking-[0.03em] cursor-pointer flex items-center justify-between w-full md:w-[350px] px-6 py-4 relative group",
        className
      )}
    >
      <span>{children}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M6.25 12H17.75" stroke="white" />
        <path d="M13.75 8L17.75 12L13.75 16" stroke="white" />
        <circle cx="12" cy="12" r="11.5" stroke="white" />
      </svg>
    </Link>
  )
}

export default MoreLinkButton
