// components/ui/frame/KeyVisualContent.tsx
import classNames from "classnames";
import Image from "next/image";

interface KeyVisualContentProps {
  className?: string;
}

const KeyVisualContent: React.FC<KeyVisualContentProps> = ({ className }) => {
  return (
    <div className={classNames("relative w-full", className)}>
      <Image
        src="/kv/Kv_img.png"
        alt="kv"
        layout="fill" // 画像のサイズは親要素にフィット
        objectFit="cover" // 画像を親要素に合わせてトリミング
        priority
      />
      {/* 黒30%のオーバーレイ */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
    </div>
  );
};

export default KeyVisualContent;
