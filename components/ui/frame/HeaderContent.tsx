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
          " h-20 text-[#393939] tracking-wide px-4 md:px-0",
          className
        )}
      >
        <section className="w-full md:w-[1400px]  mx-auto flex items-center justify-between ">
          {children}
        </section>
      </header>
    </>
  )
}

export default HeaderContent
