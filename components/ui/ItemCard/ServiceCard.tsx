// components/ui/itemCard/ServiceCard.tsx
import Image from "next/image"
import classNames from "classnames"
import ArrowRightLinkButton from "@/components/ui/button/ArroeRightLinkButton"

interface ServiceCardProps {
  id: number
  title: string
  description: string
  image: string // 画像パスを受け取る
  href: string // リンク先のURLを受け取る
  className?: string // 任意のクラス名を受け取る
  imageContainerClass?: string // 画像コンテナのクラスを受け取る
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  image,
  href,
  className = "",
  imageContainerClass = "", // デフォルトの画像コンテナのクラス
}) => {
  return (
    <div
      className={classNames("relative rounded-2xl overflow-hidden", className)}
    >
      <div
        className={classNames(
          "w-[560px] h-[480px] aspect-[1/1] relative",
          imageContainerClass
        )}
      >
        {" "}
        {/* 画像コンテナのクラスを受け取る */}
        <Image
          fill
          src={image} // 画像パスを動的に指定
          alt={`solution ${id}`}
          objectFit="cover" // 画像を親要素に合わせてトリミング
          className="block rounded-2xl" // 画像に角丸を適用
          priority
        />
      </div>

      <div
        className={classNames("space-y-3 p-4", {
          "w-[560px] h-[480px] rounded-2xl absolute inset-0 flex flex-col justify-end bg-black/50 text-white":
            className.includes("overlay"),
          "relative text-black": !className.includes("overlay"),
        })}
      >
        <div
          className={classNames("font-bold", {
            "text-white": className.includes("overlay"),
            "text-black": !className.includes("overlay"),
          })}
        >
          Solution0{id}
        </div>
        <div
          className={classNames("font-bold text-lg", {
            "text-white": className.includes("overlay"),
            "text-black": !className.includes("overlay"),
          })}
        >
          {title}
        </div>
        <div
          className={classNames({
            "text-white": className.includes("overlay"),
            "text-black": !className.includes("overlay"),
          })}
        >
          {description}
        </div>
        <ArrowRightLinkButton href={href} label="詳細を見る" />
      </div>
    </div>
  )
}

export default ServiceCard
