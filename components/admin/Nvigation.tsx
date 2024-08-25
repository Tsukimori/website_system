"use client"

import Link from "next/link"

// ナビゲーション
const Navigation = () => {
  return (
    <header className="border-b h-12 fixed z-10 bg-gray-50 w-full text-sm">
      <div className="max-w-screen-xl mx-auto flex items-center justify-center h-full">
        <div className="flex items-center space-x-2">
          <Link href="/admin">
            <div>ホーム</div>
          </Link>
          <Link href="/admin/about">
            <div>私たちについて</div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navigation
