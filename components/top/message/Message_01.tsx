// components/message/Message_01.tsx

"use client"

import Image from "next/image"

// メッセージ
const Message_01 = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-10 space-y-10">
      <div className="font-bold text-2xl max-w-screen-lg mx-auto">
        私たちについて
      </div>

      <div className="grid grid-cols-2 gap-5 max-w-screen-lg mx-auto">
        <div className="text-2xl">見出しテキストはいります見出し</div>

        <div>
          メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
          メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
          メッセージはいります。メッセージはいります。
          メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
          メッセージはいります。メッセージはいります。
        </div>
      </div>

      <Image
        src="/message/message1.png"
        alt="message"
        width={1360}
        height={480}
      />
    </div>
  )
}

export default Message_01
