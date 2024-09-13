// components/ui/main/frame/PageContent.tsx

import React, { ReactNode } from "react"
import classNames from "classnames"

interface PageContentProps {
  children: ReactNode
  className?: string
}

const PageContent: React.FC<PageContentProps> = ({ children, className }) => {
  return (
    <section className={classNames("py-10 md:py-20", className)}>
      {children}
    </section>
  )
}

export default PageContent
