// components/ui/frame/PageHeadline.tsx

import Breadcrumb from "@/components/ui/module/Breadcrumb"

interface TopPageHeadlineProps {
  maintitle: React.ReactNode // string から変更
  subtitle: string
  parentDirectoryName?: string
  parentDirectoryLink?: string
}

const TopPageHeadline: React.FC<TopPageHeadlineProps> = ({
  maintitle,
  subtitle,
  parentDirectoryName,
  parentDirectoryLink,
}) => {
  return (
    <>
      <section className=" ">
        <Breadcrumb
          maintitle={maintitle}
          parentDirectoryName={parentDirectoryName}
          parentDirectoryLink={parentDirectoryLink}
        />
        <h1 className="font-extrabold text-[80px] leading-[88px] font-lato tracking-[4px]">
          {maintitle}
        </h1>
        <h2 className="text-xl font-semibold mt-4">{subtitle}</h2>
      </section>
    </>
  )
}

export default TopPageHeadline
