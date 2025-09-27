import Link from "next/link"
import Image from "next/image"

interface SnsIconButtonProps {
  href: string
  src: string
  alt: string
  className?: string
}

const SnsIconButton = ({
  href,
  src,
  alt,
  className = "",
}: SnsIconButtonProps) => {
  return (
    <Link
      href={href}
      className={`inline-block p-[15px] ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative w-[30px] h-[30px]">
        <Image src={src} alt={alt} fill className="object-contain" />
      </div>
    </Link>
  )
}

export default SnsIconButton
