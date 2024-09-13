// components/ui/button/ScrollButton.tsx

import Image from "next/image"

interface ScrollButtonProps {
  onClick: () => void
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ onClick }) => {
  return (
    <>
      <Image
        src="/common/scrolldown.svg"
        alt="スクロールボタン"
        width="80"
        height="80"
        className="cursor-pointer"
        priority
        onClick={onClick}
      />
    </>
  )
}

export default ScrollButton
