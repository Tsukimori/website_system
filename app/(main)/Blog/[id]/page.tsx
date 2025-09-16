"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useStore } from "@/store/useStore";
import { componentsConfig } from "@/lib/componentsConfig";

interface BlogDetailProps {
  params: {
    id: string;
  };
}

export default function BlogDetail({ params }: BlogDetailProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const selectedSections = useStore((state) => state.selectedSections);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return null;
  }

  // コンポーネントの設定を取得
  const sections = componentsConfig.BlogDetail.sections;
  
  // 選択されたテンプレートまたはデフォルトのテンプレートを使用
  const selectedComponent = selectedSections.blogDetail;
  const defaultTemplate = sections.blogDetail.options[1].id; // BlogDetail_02をデフォルトに
  const templateToUse = selectedComponent || defaultTemplate;

  const Component = sections.blogDetail.components[templateToUse];

  return Component
    ? React.cloneElement(Component as React.ReactElement, { params })
    : null;
}
