// components/ui/frame/ContentHeadline.tsx
import React from "react";
import classNames from "classnames";
import { ContentHeadlineProps } from "@/types";
import Image from "next/image";

const ContentHeadline: React.FC<ContentHeadlineProps> = ({
  mainTitle,
  subTitle,
  enTitle,
  className = "",
  titleClassName = "",
  enTitleClassName = "",
  ImageSrc,
  ImageWidth,
  ImageHeight,
  id,
}) => {
  return (
    <section
      id={id}
      className={classNames("w-full md:max-w-1200 mb-16 tracking-wide", className)}
    >
      {ImageSrc && (
        <Image
          src={ImageSrc}
          width={ImageWidth}
          height={ImageHeight}
          alt={String(mainTitle)}
          className="mb-4"
        />
      )}
      <h3
        className={classNames(
          "text-lg text-accentColor font-bold font-poppins",
          enTitleClassName
        )}
      >
        {enTitle}
      </h3>
      <h1
        className={classNames(
          "text-[28px] md:text-[40px] font-bold",
          titleClassName
        )}
      >
        {mainTitle}
      </h1>
      {subTitle && <h2>{subTitle}</h2>}
    </section>
  );
};

export default ContentHeadline;
