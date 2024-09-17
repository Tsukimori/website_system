// components/case/Case_02.tsx

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { microcms } from "@/lib/microcms"
import { Work } from "@/types"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"

interface NewsProps {
  limit?: number
}

const News_01 = ({ limit = 5 }: NewsProps) => {
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
            entitle="News"
            maintitle="お知らせ"
            entitleClassName="text-center"
            titleClassName="text-center"
          />

          {/* 横スクロールを有効化 */}
          <div className=" grid grid-cols-2">
            {contents.map((post: Work) => (
              <div
                key={post.id}
                className="bg-white text-black rounded-2xl py-10 px-5 md:p-16 flex-shrink-0 w-[600px] md:flex justify-between"
              >
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
                      alt="お知らせサムネイル"
                      width={350}
                      height={207}
                      className="w-full h-full rounded-2xl object-cover object-top"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </PageContent>
    </>
  )
}

export default News_01
