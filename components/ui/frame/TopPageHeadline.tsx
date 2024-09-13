// components/ui/frame/TopPageHeadline.tsx
import classNames from 'classnames';

interface TopPageHeadlineProps {
  maintitle: React.ReactNode;
  subtitle: string;
  parentDirectoryName?: string;
  parentDirectoryLink?: string;
  className?: string; // 親要素のclassName
  titleClassName?: string; // h1用のclassName
  subtitleClassName?: string; // h2用のclassName
}

const TopPageHeadline: React.FC<TopPageHeadlineProps> = ({
  maintitle,
  subtitle,
  parentDirectoryName,
  parentDirectoryLink,
  className = "",
  titleClassName = "",
  subtitleClassName = ""
}) => {
  return (
    <section className={classNames('w-[1200px]', className)}>
      {/* <Breadcrumb
        maintitle={maintitle}
        parentDirectoryName={parentDirectoryName}
        parentDirectoryLink={parentDirectoryLink}
      /> */}
      <h1 className={classNames('font-extrabold text-[80px] leading-[88px] font-lato tracking-[4px]', titleClassName)}>
        {maintitle}
      </h1>
      <h2 className={classNames('text-xl font-semibold mt-4', subtitleClassName)}>
        {subtitle}
      </h2>
    </section>
  )
}

export default TopPageHeadline;
