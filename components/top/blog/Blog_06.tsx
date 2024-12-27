// components/blog/Blog_06.tsx

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

const Blog_06 = ({ limit = 9 }: BlogProps) => {
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
        <section className="md:w-1200 mx-auto md:flex justify-between gap-x-20">
          <div className="md:w-[300px]">
            <ContentHeadline
              entitle="Blog"
              maintitle="ブログ"
              entitleClassName=""
              titleClassName=""
            />
            <div className="mt-0 md:mt-16">
              <MoreButton className="text-accentColor border-accentColor" />
            </div>
          </div>
          <div className="mt-10 md:mt-0 md:w-[820px]  space-y-5 ">
            {contents.map((post: Work) => (
              <div key={post.id} className="w-full md:flex md:space-x-6 border-b border-[#eeeeee] pb-5">
                <p className="font-medium">{post.date}</p>
                <p className="mt-1 md:mt-0 inline-block h-[25px] px-4 py-1 bg-accentColor rounded-[5px] text-white  justify-center items-center text-xs">
                  {Array.isArray(post.category) && post.category.length > 0
                    ? post.category.join(", ")
                    : "カテゴリーなし"}
                </p>
                <p className="text-lg font-bold">{post.title}</p>
              </div>
            ))}
          </div>
        </section>
      </PageContent>
    </>
  )
}

export default Blog_06
