import { componentsConfig } from "@/lib/componentsConfig"
import React from "react"

interface BlogDetailPageProps {
  params: Promise<{ id: string }>
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
