"use client"

import Link from "next/link"
import Image from "next/image"

// ヘッダー
const Header2 = () => {
  return (
    <header className="border-b py-2">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between text-sm">
        <div className="flex items-center space-x-5">
          <Link href="/">
            <Image src="/logo/logo1.svg" alt="logo" width={200} height={40} />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header2
