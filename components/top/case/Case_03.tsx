
// components/case/Case_03.tsx

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


interface CaseProps {
  limit?: number
}

const Case_03 = ({ limit = 3 }: CaseProps) => {
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
      <PageContent className="">
        <section className="md:w-1200 mx-auto space-y-10">
          <ContentHeadline
            entitle="Case study"
            maintitle="導入事例"
            entitleClassName=""
            titleClassName=""
          />

          <div className=" grid grid-cols-1 md:grid-cols-3 md:gap-x-10">
            {contents.map((post: Work) => (
              <div key={post.id} className="w-full">
                <div className="w-full  h-[250px]  rounded-[15px] mt-5 md:mt-0">
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
                <div className="bg-white p-6">
                  <p className="text-lg font-bold md:min-h-14">{post.title}</p>
                  <p className="mt-2 text-[#5f5f5f] text-xs">
                    {contents[0].title}
                  </p>
                  <Link
                    href="/"
                    className="mt-6 flex items-center text-accentColor font-semibold"
                  >
                    もっと見る
                    <ChevronRightIcon className="ml-1 w-4 h-6" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-16">
            <MoreButton className="text-accentColor border-accentColor" />
          </div>
        </section>
      </PageContent>
    </>
  )
}

export default Case_03

