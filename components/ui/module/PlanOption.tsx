"use client"
import Link from "next/link"
import Image from "next/image"

const PlanOption = () => {
  return (
    <section className="w-1200 mx-auto py-24">
      <h3>オプション</h3>
      <p>様々な料金プランをご用意しております。</p>
      <div className="grid grid-cols-5 gap-x-2">
        <div className="">
          <Image
            src="/plan/option01.png"
            alt="オプションイメージ"
            width={120}
            height={120}
            className="mr-2"
          />
          <h4>オプション1</h4>
          <p>
            <span>￥</span>0,000
          </p>
        </div>
        <div>
          <Image
            src="/plan/option01.png"
            alt="オプションイメージ"
            width={120}
            height={120}
            className="mr-2"
          />
          <h4>オプション1</h4>
          <p>
            <span>￥</span>0,000
          </p>
        </div>
        <div>
          <Image
            src="/plan/option01.png"
            alt="オプションイメージ"
            width={120}
            height={120}
            className="mr-2"
          />
          <h4>オプション1</h4>
          <p>
            <span>￥</span>0,000
          </p>
        </div>
        <div>
          <Image
            src="/plan/option01.png"
            alt="オプションイメージ"
            width={120}
            height={120}
            className="mr-2"
          />
          <h4>オプション1</h4>
          <p>
            <span>￥</span>0,000
          </p>
        </div>
        <div>
          <Image
            src="/plan/option01.png"
            alt="オプションイメージ"
            width={120}
            height={120}
            className="mr-2"
          />
          <h4>オプション1</h4>
          <p>
            <span>￥</span>0,000
          </p>
        </div>
      </div>
    </section>
  )
}

export default PlanOption
