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
  showButton?: boolean // ボタンの表示を制御するプロパティを追加
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  image,
  href,
  className = "",
  imageContainerClass = "",
  showButton = true, // デフォルトでボタンを表示する設定
}) => {
  return (
    <div className={classNames("relative overflow-hidden", className)}>
      <div
        className={classNames(
          {
            "h-[400px]": !className.includes("overlay"),
            "h-[600px]": className.includes("overlay"),
          },
          "w-full aspect-[1/1] relative",
          imageContainerClass
        )}
      >
        <Image
          fill
          src={image}
          alt={`solution ${id}`}
          objectFit="cover"
          className="block"
          priority
        />
      </div>

      <div
        className={classNames("space-y-3 ", {
          "w-full h-[600px] rounded-2xl absolute inset-0 flex flex-col justify-center items-center bg-black/50 text-white":
            className.includes("overlay"),
          "relative text-black": !className.includes("overlay"),
        })}
      >
        <div
          className={classNames("font-medium text-[22px] font-lato text-center", {
            "text-white": className.includes("overlay"),
            "text-baseColor": !className.includes("overlay"),
          })}
        >
          {title}
        </div>
        <div
          className={classNames({
            "text-white": className.includes("overlay"),
            "text-baseColor": !className.includes("overlay"),
          })}
        >
          {description}
        </div>
        {showButton && ( // showButtonがtrueの場合のみ表示
          <div
            className={classNames({
              hidden: className.includes("overlay"),
              "text-black": !className.includes("overlay"),
            })}
          >
            <ArrowRightLinkButton href={href} label="" />
          </div>
        )}
      </div>
    </div>
  )
}

export default ServiceCard
