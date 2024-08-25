"use client"

import Image from "next/image"

// フッター
const Footer1 = () => {
  return (
    <footer className="border-t py-2">
      <div className="flex flex-col items-center justify-center text-sm space-y-5">
        <Image src="/logo/logo1.svg" alt="logo" width={200} height={40} />

        <div className="flex items-center space-x-5">
          <div>メニュー1</div>
          <div>メニュー2</div>
          <div>メニュー3</div>
          <div>メニュー4</div>
        </div>

        <div>©xxxx. ALL Rights Reserved.</div>
      </div>
    </footer>
  )
}

export default Footer1
