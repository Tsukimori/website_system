import Link from "next/link"

// テキストを自由に設定できるボタン
// 背景ブルー　テキストホワイト
const FreeButtonBlue = ({
  className = "",
  text,
  href,
}: {
  className?: string
  text: string
  href: string
}) => {
  return (
    <Link
      href={href} 
      className={`bg-accentColor text-white cursor-pointer flex items-center justify-center w-[350px] py-4 font-semibold rounded-full ${className}`} 
    >
      {text}
    </Link>
  )
}

export default FreeButtonBlue
