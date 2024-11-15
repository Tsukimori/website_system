// ccomponents/ui/main/module

import React from "react"
import { Search } from "lucide-react"

type SearchBoxProps = {
  searchQuery: string
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onSearchClick: () => void
  bgColor?: string
}

const SearchBox = ({
  searchQuery,
  onSearchChange,
  onSearchClick,
  bgColor = "#F5F5F5",
}: SearchBoxProps) => {
  return (
    <>
      <input
        type="text"
        placeholder="キーワードで調べる"
        value={searchQuery}
        onChange={onSearchChange}
        className={`rounded-l-full px-5 py-4 w-full bg-[${bgColor}]`}
      />
      <button
        onClick={onSearchClick}
        className="bg-[#40BB88] rounded-r-full px-8 py-2 text-white"
      >
        <Search className="w-7 h-7" />
      </button>
    </>
  )
}

export default SearchBox
