import Link from "next/link"

// テキストを自由に設定できるボタン
// 背景ホワイト　テキストブルー
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
      className={`bg-white text-accentColor cursor-pointer flex items-center justify-center w-[350px] py-4 font-semibold rounded-full ${className}`} 
    >
      {text}
    </Link>
  )
}

export default FreeButtonBlue
