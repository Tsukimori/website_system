"use client"

import Image from "next/image"

interface SidebarHomeProps {
  selectSection: (section: string, value: string) => void
  selectedSections: Record<string, string>
}

const SidebarHome = ({ selectSection, selectedSections }: SidebarHomeProps) => {
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

      {/* キービジュアル */}
      <div className="font-bold text-sm">キービジュアル</div>
      <div className="space-y-4">
        <div className="relative">
          <Image
            src="/admin/test1.png"
            alt="Kv1"
            onClick={() => {
              selectSection("kv", "Kv1")
              scrollToSection("kv-section")
            }}
            className={getImageClass(selectedSections["kv"] === "Kv1")}
            width={128}
            height={72}
          />
          <div className={overlayClass(selectedSections["kv"] === "Kv1")}></div>
        </div>
        <div className="relative">
          <Image
            src="/admin/test2.png"
            alt="Kv2"
            onClick={() => {
              selectSection("kv", "Kv2")
              scrollToSection("kv-section")
            }}
            className={getImageClass(selectedSections["kv"] === "Kv2")}
            width={128}
            height={72}
          />
          <div className={overlayClass(selectedSections["kv"] === "Kv2")}></div>
        </div>
      </div>

      {/* メッセージ */}
      <div className="font-bold text-sm">メッセージ</div>
      <div className="space-y-4">
        <div className="relative">
          <Image
            src="/admin/test1.png"
            alt="Message1"
            onClick={() => {
              selectSection("message", "Message1")
              scrollToSection("message-section")
            }}
            className={getImageClass(
              selectedSections["message"] === "Message1"
            )}
            width={128}
            height={72}
          />
          <div
            className={overlayClass(selectedSections["message"] === "Message1")}
          ></div>
        </div>
        <div className="relative">
          <Image
            src="/admin/test2.png"
            alt="Message2"
            onClick={() => {
              selectSection("message", "Message2")
              scrollToSection("message-section")
            }}
            className={getImageClass(
              selectedSections["message"] === "Message2"
            )}
            width={128}
            height={72}
          />
          <div
            className={overlayClass(selectedSections["message"] === "Message2")}
          ></div>
        </div>
      </div>

      {/* サービス */}
      <div className="font-bold text-sm">サービス</div>
      <div className="space-y-4">
        <div className="relative">
          <Image
            src="/admin/test1.png"
            alt="Solution1"
            onClick={() => {
              selectSection("solution", "Solution1")
              scrollToSection("solution-section")
            }}
            className={getImageClass(
              selectedSections["solution"] === "Solution1"
            )}
            width={128}
            height={72}
          />
          <div
            className={overlayClass(
              selectedSections["solution"] === "Solution1"
            )}
          ></div>
        </div>
        <div className="relative">
          <Image
            src="/admin/test2.png"
            alt="Solution2"
            onClick={() => {
              selectSection("solution", "Solution2")
              scrollToSection("solution-section")
            }}
            className={getImageClass(
              selectedSections["solution"] === "Solution2"
            )}
            width={128}
            height={72}
          />
          <div
            className={overlayClass(
              selectedSections["solution"] === "Solution2"
            )}
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

export default SidebarHome
