import { componentsConfig } from "@/lib/componentsConfig"
import { blogsFetch } from "@/lib/api/blogsFetch"
import React from "react"

interface BlogDetailPageProps {
  params: Promise<{ id: string }>
}

// 静的サイト生成用のパラメータ生成
export async function generateStaticParams() {
  try {
    const posts = await blogsFetch.list(100)
    return posts.map((post) => ({
      id: post.id,
    }))
  } catch (error) {
    console.error("Failed to generate static params for blog", error)
    return []
  }
}

const BlogDetailPage = async ({ params }: BlogDetailPageProps) => {
  const { id } = await params

  const sections = componentsConfig.BlogDetail.sections
  const defaultTemplate = sections.blogDetail.options[1].id
  const Component = sections.blogDetail.components[defaultTemplate]

  return Component
    ? React.cloneElement(Component as React.ReactElement, {
        params: { id },
      })
    : null
}

export default BlogDetailPage
