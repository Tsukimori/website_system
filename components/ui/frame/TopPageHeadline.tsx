// components/ui/frame/TopPageHeadline.tsx
import classNames from "classnames";

interface TopPageHeadlineProps {
  mainTitle: React.ReactNode;
  subtitleTop?: React.ReactNode;
  subtitleBottom?: React.ReactNode;
  discription?: React.ReactNode;
  parentDirectoryName?: string;
  parentDirectoryLink?: string;
  className?: string; // 親要素のclassName
  titleClassName?: string; // h1用のclassName
  subtitleClassName?: string; // h2用のclassName
  discriptionClassName?: string; // p用のclassName
}

const TopPageHeadline: React.FC<TopPageHeadlineProps> = ({
  mainTitle,
  subtitleTop,
  subtitleBottom,
  discription,
  parentDirectoryName,
  parentDirectoryLink,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  discriptionClassName = "",
}) => {
  return (
    <section
      className={classNames(
        "md:md:max-w-[1200px] w-full px-4 md:px-0",
        className
      )}
    >
      {/* <Breadcrumb
        mainTitle={mainTitle}
        parentDirectoryName={parentDirectoryName}
        parentDirectoryLink={parentDirectoryLink}
      /> */}
      <h2
        className={classNames(
          "text-lg md:text-2xl font-bold mb-4 font-poppins leading-normal",
          subtitleClassName
        )}
      >
        {subtitleTop}
      </h2>
      <h1
        className={classNames(
          "text-4xl leading-normal md:text-[50px] md:leading-[88px] font-medium tracking-[4px]",
          titleClassName
        )}
      >
        {mainTitle}
      </h1>
      <h3 className={classNames("md:text-lg mt-4", subtitleClassName)}>
        {subtitleBottom}
      </h3>
      <p className={classNames("mt-4 md:text-lg ", discriptionClassName)}>
        {discription}
      </p>
    </section>
  );
};

export default TopPageHeadline;
