// components/ui/frame/FirstViewContent.tsx

import React, { ReactNode } from "react"
import classNames from "classnames"

interface FirstViewContentProps {
  children: ReactNode
  className?: string
}

const FirstViewContent: React.FC<FirstViewContentProps> = ({
  children,
  className,
}) => {
  return (
    <div className={classNames("w-full h-screen ", className)}>{children}</div>
  )
}

export default FirstViewContent
