// components/blog/Blog_05.tsx

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { microcms } from "@/lib/microcms"
import { Work } from "@/types"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import MoreButton from "@/components/ui/button/MoreButton"
import { ChevronRightIcon } from "@heroicons/react/24/outline"

interface BlogProps {
  limit?: number
}

const Blog_05 = ({ limit = 6 }: BlogProps) => {
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
        <section className="md:w-1200 mx-auto">
          <div className="md:w-[300px]">
            <ContentHeadline
              entitle="Blog"
              maintitle="ブログ"
              entitleClassName=""
              titleClassName=""
            />
          </div>
          <div className="mt-0 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-10 gap-x-10 md:gap-x-16">
            {contents.map((post: Work) => (
              <div key={post.id} className="w-full md:flex space-x-6">
                <div className="w-full md:w-[180px] h-[250px] md:h-[130px] mt-5 md:mt-0">
                  {post.image && (
                    <Image
                      src={post.image.url}
                      alt="制作物サムネイル"
                      width={370}
                      height={223}
                      className="w-full h-full rounded-2xl object-cover "
                    />
                  )}
                </div>
                <div className="mt-6">
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="mt-2 text-[#5f5f5f] text-xs ">
                    {contents[0].title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 md:mt-16 flex justify-center">
            <MoreButton className="text-accentColor border-accentColor" />
          </div>
        </section>
      </PageContent>
    </>
  )
}

export default Blog_05
