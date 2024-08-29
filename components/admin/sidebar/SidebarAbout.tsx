"use client"

import Image from "next/image"

interface SidebarAboutProps {
  selectSection: (section: string, value: string) => void
  selectedSections: Record<string, string>
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
      {/* ヘッダー */}
      <div className="font-bold text-sm">ヘッダー</div>
      <div className="space-y-4">
        <div className="relative">
          <Image
            src="/admin/test1.png"
            alt="Header1"
            onClick={() => {
              selectSection("header", "Header1")
              scrollToSection("header-section")
            }}
            className={getImageClass(selectedSections["header"] === "Header1")}
            width={128}
            height={72}
          />
          <div
            className={overlayClass(selectedSections["header"] === "Header1")}
          ></div>
        </div>
        <div className="relative">
          <Image
            src="/admin/test2.png"
            alt="Header2"
            onClick={() => {
              selectSection("header", "Header2")
              scrollToSection("header-section")
            }}
            className={getImageClass(selectedSections["header"] === "Header2")}
            width={128}
            height={72}
          />
          <div
            className={overlayClass(selectedSections["header"] === "Header2")}
          ></div>
        </div>
      </div>

      {/* メッセージ */}
      <div className="font-bold text-sm">メッセージ</div>
      <div className="space-y-4">
        <div className="relative">
          <Image
            src="/admin/test1.png"
            alt="About1"
            onClick={() => {
              selectSection("about", "About1")
              scrollToSection("about-section")
            }}
            className={getImageClass(selectedSections["about"] === "About1")}
            width={128}
            height={72}
          />
          <div
            className={overlayClass(selectedSections["about"] === "About1")}
          ></div>
        </div>
        <div className="relative">
          <Image
            src="/admin/test2.png"
            alt="About2"
            onClick={() => {
              selectSection("about", "About2")
              scrollToSection("about-section")
            }}
            className={getImageClass(selectedSections["about"] === "About2")}
            width={128}
            height={72}
          />
          <div
            className={overlayClass(selectedSections["about"] === "About2")}
          ></div>
        </div>
      </div>

      {/* フッター */}
      <div className="font-bold text-sm">フッター</div>
      <div className="space-y-4">
        <div className="relative">
          <Image
            src="/admin/test1.png"
            alt="Footer1"
            onClick={() => {
              selectSection("footer", "Footer1")
              scrollToSection("footer-section")
            }}
            className={getImageClass(selectedSections["footer"] === "Footer1")}
            width={128}
            height={72}
          />
          <div
            className={overlayClass(selectedSections["footer"] === "Footer1")}
          ></div>
        </div>
        <div className="relative">
          <Image
            src="/admin/test2.png"
            alt="Footer2"
            onClick={() => {
              selectSection("footer", "Footer2")
              scrollToSection("footer-section")
            }}
            className={getImageClass(selectedSections["footer"] === "Footer2")}
            width={128}
            height={72}
          />
          <div
            className={overlayClass(selectedSections["footer"] === "Footer2")}
          ></div>
        </div>
      </div>
    </>
  )
}

export default SidebarAbout
