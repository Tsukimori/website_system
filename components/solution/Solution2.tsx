"use client"

import Image from "next/image"

// メッセージ
const Solution2 = () => {
  return (
    <div className="max-w-screen-lg mx-auto my-10 space-y-10">
      <div className="font-bold text-2xl text-center">事業内容</div>

      <div className="grid grid-cols-2 gap-10">
        {[1, 2, 3, 4].map((i) => (
          <div key={i}>
            <div className="aspect-[1/1] relative overflow-hidden">
              <Image
                fill
                src="/solution/solution2.png"
                alt="solution"
                className="object-cover rounded-lg"
              />
            </div>

            <div className="space-y-3">
              <div className="font-bold text-blue-500">Solution0{i}</div>
              <div className="font-bold text-lg">事業内容0{i}</div>
              <div>見出しテキストはいります。見出しテキストはいります。</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Solution2
