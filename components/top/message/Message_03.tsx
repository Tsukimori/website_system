// components/message/Message_03.tsx

"use client"

import Image from "next/image"

// メッセージ
const Message_03 = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-10 space-y-10">
      <div className="font-bold text-2xl max-w-screen-lg mx-auto">
        この文章はダミーです
      </div>

      <div className="grid grid-cols-2 gap-5 max-w-screen-lg mx-auto">
        <div className="text-2xl">この文章はダミーです。</div>

        <div>
          この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
        </div>
      </div>

      <Image
        src="/message/message3.png"
        alt="message"
        width={1360}
        height={480}
      />
    </div>
  )
}

export default Message_03
