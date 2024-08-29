"use client"

import Image from "next/image"

interface SidebarAboutProps {
  selectSection: (section: string, value: string) => void
  selectedSections: Record<string, string>
}

// セクション情報のマッピング
const sectionInfo = {
  header: {
    title: "ヘッダー",
    options: [
      { id: "Header1", src: "/admin/test1.png", alt: "Header1" },
      { id: "Header2", src: "/admin/test2.png", alt: "Header2" },
    ],
  },
  about: {
    title: "メッセージ",
    options: [
      { id: "About1", src: "/admin/test1.png", alt: "About1" },
      { id: "About2", src: "/admin/test2.png", alt: "About2" },
    ],
  },
  footer: {
    title: "フッター",
    options: [
      { id: "Footer1", src: "/admin/test1.png", alt: "Footer1" },
      { id: "Footer2", src: "/admin/test2.png", alt: "Footer2" },
    ],
  },
}

const SidebarAbout = ({
  selectSection,
  selectedSections,
}: SidebarAboutProps) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const yOffset = -48 // 12 * 4 (mt-12 のスペースを考慮)
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  const getImageClass = (isSelected: boolean) =>
    `relative cursor-pointer object-cover ${
      isSelected ? "border-2 border-blue-300" : ""
    }`

  const overlayClass = (isSelected: boolean) =>
    isSelected
      ? "absolute inset-0 bg-blue-300 bg-opacity-50 pointer-events-none"
      : "absolute inset-0 pointer-events-none"

  return (
    <>
      {Object.entries(sectionInfo).map(([sectionKey, sectionData]) => (
        <div key={sectionKey}>
          <div className="font-bold text-sm">{sectionData.title}</div>
          <div className="space-y-4">
            {sectionData.options.map((option) => (
              <div key={option.id} className="relative">
                <Image
                  src={option.src}
                  alt={option.alt}
                  onClick={() => {
                    selectSection(sectionKey, option.id)
                    scrollToSection(`${sectionKey}-section`)
                  }}
                  className={getImageClass(
                    selectedSections[sectionKey] === option.id
                  )}
                  width={128}
                  height={72}
                />
                <div
                  className={overlayClass(
                    selectedSections[sectionKey] === option.id
                  )}
                ></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default SidebarAbout
