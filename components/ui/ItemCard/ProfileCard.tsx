// components/ui/itemCard/ProfileCard_01.tsx

import React from "react"

interface ProfileCardProps {
  label: string
  value: string
}

const ProfileCard = ({ label, value }: ProfileCardProps) => {
  return (
    <dl className="grid grid-cols-[150px_auto] gap-x-2 mb-4">
      <dt className="text-lg font-semibold flex items-baseline py-4 border-b border-[#eee]">
        {label}
      </dt>
      <dd className="font-light flex items-center py-4 border-b border-[#eee]">
        {value}
      </dd>
    </dl>
  )
}

export default ProfileCard
