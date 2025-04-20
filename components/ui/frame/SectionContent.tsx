// components/ui/frame/SectionContent.tsx

import React, { ReactNode } from "react";
import classNames from "classnames";

interface SectionContentProps {
  children: ReactNode;
  className?: string;
}

const SectionContent: React.FC<SectionContentProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={classNames(
        "mx-auto py-14 md:py-24 px-4 md:px-0 overflow-x-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};

export default SectionContent;
