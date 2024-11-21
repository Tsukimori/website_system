// components/ui/frame/PageContent.tsx

import React, { ReactNode } from "react"
import classNames from "classnames"

interface PageContentProps {
  children: ReactNode
  className?: string
}

const PageContent: React.FC<PageContentProps> = ({ children, className }) => {
  return (
    <div className={classNames(" mx-auto py-14 md:py-24 border-b-2 px-4 md:px-0", className)}>
      {children}
    </div>
  )
}

export default PageContent
