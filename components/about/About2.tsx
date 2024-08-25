"use client"

import Image from "next/image"

// 私たちについて
const About2 = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-10 space-y-10">
      <div className="font-bold text-2xl max-w-screen-xl mx-auto">
        私たちについて
      </div>

      <Image src="/about/about2.png" alt="about" width={1440} height={400} />
    </div>
  )
}

export default About2
