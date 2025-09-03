// app/(main)/Blog/[id]/page.tsx

import { headers } from 'next/headers'
import { componentsConfig } from '@/lib/componentsConfig'
import React from 'react'

type Props = {
  params: { id: string } 
}

export default async function Page({ params }: { params: { id: string } }) {
  const headersList = await headers()
  const pathname = headersList.get("x-pathname") || ""

  const sections = componentsConfig.BlogDetail.sections
  const defaultTemplate = sections.blogDetail.options[1].id
  const Component = sections.blogDetail.components[defaultTemplate]

  return Component
    ? React.cloneElement(Component as React.ReactElement, { params })
    : null
}
