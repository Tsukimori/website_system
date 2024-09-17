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

const Blog_05 = ({ limit = 9 }: BlogProps) => {
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
        <section className="w-1200 mx-auto md:flex justify-between gap-x-20">
          <div className="w-[300px]">
            <ContentHeadline
              entitle="Blog"
              maintitle="ブログ"
              entitleClassName=""
              titleClassName=""
            />
            <div className="mt-16">
              <MoreButton className="text-accentColor border-accentColor" />
            </div>
          </div>
          <div className="w-[820px]  space-y-10 ">
            {contents.map((post: Work) => (
              <div key={post.id} className="w-full flex space-x-6">
                <p className="text-xs ">{post.date}</p>
                <p className="mt-2 text-[#5f5f5f] text-xs">
                  {Array.isArray(post.category) && post.category.length > 0
                    ? post.category.join(", ")
                    : "カテゴリーなし"}
                </p>
                <p className="text-lg font-bold">{post.title}</p>
                <p className="mt-2 text-[#5f5f5f] text-xs ">
                  {contents[0].title}
                </p>
              </div>
            ))}
          </div>
        </section>
      </PageContent>
    </>
  )
}

export default Blog_05
