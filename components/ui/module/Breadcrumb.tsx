// components/ui/main/module/Breadcrumb.tsx

import Link from "next/link"
import { ChevronRight } from "react-feather"

interface BreadcrumbProps {
  maintitle: React.ReactNode;
  parentDirectoryName?: string
  parentDirectoryLink?: string
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  maintitle,
  parentDirectoryName,
  parentDirectoryLink,
}) => {
  return (
    <div className="text-sm text-white mb-3 flex items-center space-x-1 flex-wrap">
      <Link href="/">トップページ</Link>
      <ChevronRight className="w-4 h-4" />
      {parentDirectoryName && parentDirectoryLink && (
        <>
          <Link href={parentDirectoryLink}>{parentDirectoryName}</Link>
          <ChevronRight className="w-4 h-4" />
        </>
      )}
      <div>{maintitle}</div>
    </div>
  )
}

export default Breadcrumb
