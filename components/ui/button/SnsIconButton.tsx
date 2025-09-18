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
      className={`w-[60px] p-[15px] ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={src}
        alt={alt}
        width={30}
        height={30}
        className="w-[30px] h-[30px] object-contain"
      />
    </Link>
  )
}

export default SnsIconButton
