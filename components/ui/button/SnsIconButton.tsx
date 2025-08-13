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
      <Image src={src} alt={alt} width={24} height={24} className="w-6 h-6" />
    </Link>
  )
}

export default SnsIconButton
