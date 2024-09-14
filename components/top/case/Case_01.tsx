// components/case/Case_01.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { microcms } from "@/lib/microcms"
import { Work } from "@/types"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Navigation, Pagination } from "swiper/modules"

interface CaseProps {
  limit?: number
}

const Case_01 = ({ limit = 5 }: CaseProps) => {
  const [contents, setContents] = useState<Work[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getWorks = async () => {
      try {
        const data = await microcms.get({
          endpoint: "works",
          queries: { limit },
        })
        if (data && Array.isArray(data.contents)) {
          setContents(data.contents)
        } else {
          console.error("Unexpected data format:", data)
        }
      } catch (error) {
        console.error("Failed to fetch works:", error)
      }
      setLoading(false)
    }

    getWorks()
  }, [limit])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>
  }

  return (
    <>
      <PageContent>
        <section className="w-1200 mx-auto space-y-10">
          <ContentHeadline
            entitle="Case study"
            maintitle="導入事例"
            entitleClassName="text-center"
            titleClassName="text-center"
          />

          {/* Swiperの設定 */}
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1} // 1つのスライドを表示
            navigation // ナビゲーション矢印を有効化
            pagination={{ clickable: true }} // ページネーションを有効化
            loop={true} // ループさせる
          >
            {contents.map((post: Work) => (
              <SwiperSlide key={post.id}>
                <div className="bg-white text-black rounded-2xl py-10 px-5 md:p-16 flex-shrink-0 w-[600px] md:flex justify-between">
                  <div className="md:w-[272px] flex flex-col justify-between">
                    <div>
                      <p className="inline-block bg-black text-xs text-center px-2 py-1 text-white">
                        {Array.isArray(post.category) && post.category.length > 0
                          ? post.category.join(", ")
                          : "カテゴリーなし"}
                      </p>
                      <p className="text-lg text-black mt-2 font-bold">
                        {post.title}
                      </p>
                    </div>
                    <p className="mt-2 text-gray-400 ">{post.content}</p>
                  </div>
                  <div className="w-full md:w-[350px] h-[207px] border border-gray-300 rounded-2xl mt-5 md:mt-0">
                    {post.image && (
                      <Image
                        src={post.image.url}
                        alt="制作物サムネイル"
                        width={350}
                        height={207}
                        className="w-full h-full rounded-2xl object-cover object-top"
                      />
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </PageContent>
    </>
  )
}

export default Case_01
