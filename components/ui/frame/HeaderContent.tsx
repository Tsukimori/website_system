// components/ui/frame/HeaderContent.tsx

import React, { ReactNode } from "react"
import classNames from "classnames"

interface HeaderContentProps {
  children: ReactNode
  className?: string
}

const HeaderContent: React.FC<HeaderContentProps> = ({
  children,
  className,
}) => {
  return (
    <>
      <header
        className={classNames(
          "w-[1400px] h-20 mx-auto text-[#393939] tracking-wide",
          className
        )}
      >
        <section className="flex items-center justify-between ">
          {children}
        </section>
      </header>
    </>
  )
}

export default HeaderContent
