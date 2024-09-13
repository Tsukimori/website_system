// components/ui/frame/KeyVisualContent.tsx

import Image from "next/image"

interface KeyVisualContentProps {
  className?: string;
}

const KeyVisualContent: React.FC<KeyVisualContentProps> = ({ className }) => {
  return (
    <div className={`relative w-full ${className}`}>
      <Image
        src="/kv/Kv_img.png"
        alt="kv"
        layout="fill" // 画像のサイズは親要素にフィット
        objectFit="cover" // 画像を親要素に合わせてトリミング
        priority
      />
    </div>
  )
}

export default KeyVisualContent
