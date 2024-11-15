// components/ui/main/frame/PageContainer.tsx

import React, { ReactNode } from "react"
import classNames from "classnames"

interface PageContainerProps {
  children: ReactNode
  className?: string
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className,
}) => {
  return (
    <article className={classNames("bg-white w-full h-full", className)}>
      {children}
    </article>
  )
}

export default PageContainer
