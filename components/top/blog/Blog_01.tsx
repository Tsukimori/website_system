// components/blog/Blog_01.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { microcms } from "@/lib/microcms"
import { Work } from "@/types"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"

interface BlogProps {
  limit?: number
}

const Blog_01 = ({ limit = 5 }: BlogProps) => {
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
      <PageContent className="bg-bgLightBlue">
        <section className="w-1200 mx-auto">
          <ContentHeadline
            entitle="Blog"
            maintitle="ブログ"
            entitleClassName=""
            titleClassName=""
          />
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* 1番目のコンテンツ */}
              <div className="col-span-1 md:col-span-1 w-full h-[500px]">
                <div className="w-full h-[500px] mt-5 md:mt-0">
                  {contents[0].image && (
                    <Image
                      src={contents[0].image.url}
                      alt="制作物サムネイル"
                      width={370}
                      height={223}
                      className="w-full h-full rounded-t-2xl object-cover"
                    />
                  )}
                </div>
                <div className="bg-white p-6">
                  <p className="text-lg font-bold">{contents[0].title}</p>
                  <p className="mt-2 text-[#5f5f5f] text-xs">
                    #
                    {Array.isArray(contents[0].category) &&
                    contents[0].category.length > 0
                      ? contents[0].category.join(", ")
                      : "カテゴリーなし"}
                  </p>
                </div>
              </div>

              {/* 2番目以降のコンテンツ */}
              <div className="grid grid-cols-1">
                <div className="grid grid-cols-2 gap-10">
                  {contents.slice(1).map((post: Work) => (
                    <div key={post.id} className="w-full ">
                      <div className="w-full h-[150px] mt-5 md:mt-0">
                        {post.image && (
                          <Image
                            src={post.image.url}
                            alt="制作物サムネイル"
                            width={370}
                            height={223}
                            className="w-full h-full rounded-t-2xl object-cover"
                          />
                        )}
                      </div>
                      <div className="bg-white p-6">
                        <p className="text-lg font-bold">{post.title}</p>
                        <p className="mt-2 text-[#5f5f5f] text-xs">
                          #
                          {Array.isArray(post.category) &&
                          post.category.length > 0
                            ? post.category.join(", ")
                            : "カテゴリーなし"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageContent>
    </>
  )
}

export default Blog_01
