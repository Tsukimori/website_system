// components/ui/frame/ContentHeadline.tsx
import classNames from "classnames"

interface ContentHeadlineProps {
  maintitle: React.ReactNode
  subtitle?: React.ReactNode
  entitle: string

  parentDirectoryName?: string
  parentDirectoryLink?: string
  className?: string // 親要素のclassName
  titleClassName?: string // h1用のclassName
  entitleClassName?: string // h2用のclassName
}

const ContentHeadline: React.FC<ContentHeadlineProps> = ({
  maintitle,
  subtitle,
  entitle,
  className = "",
  titleClassName = "",
  entitleClassName = "",
}) => {
  return (
    <section className={classNames("md:w-1200 mb-16 tracking-wide", className)}>
      <h3 className={classNames("text-lg text-accentColor font-bold font-poppins", entitleClassName)}>
        {entitle}
      </h3>
      <h1 className={classNames("text-[28px] font-bold", titleClassName)}>{maintitle}</h1>
      <h2>{subtitle}</h2>
    </section>
  )
}

export default ContentHeadline
