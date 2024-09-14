// components/service/Service_03.tsx
"use client"

import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import ServiceCard from "@/components/ui/ItemCard/ServiceCard"
import { serviceData } from "@/components/data/top/ServiceData"

const Service_03 = () => {
  // 表示するサービス数をserviceDataのIDを指定して表示
  const serviceIdsToDisplay = [1, 2, 3, 4, 5]

  // 指定したIDに基づいてデータをフィルタリング
  const servicesToDisplay = serviceData.filter((service) =>
    serviceIdsToDisplay.includes(service.id)
  )

  return (
    <>
      <PageContent>
        <section className="w-1200 mx-auto space-y-10">
          <ContentHeadline
            entitle="Service"
            maintitle="事業内容"
            entitleClassName="text-center"
            titleClassName="text-center"
          />

          <div className="grid grid-cols-2 gap-10">
            {servicesToDisplay.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                image={service.image} // 画像パスを渡す
                href={service.href} // リンク先を渡す
                className="overlay" // テキストを画像の上に配置するためにpositionを指定
              />
            ))}
          </div>
        </section>
      </PageContent>
    </>
  )
}

export default Service_03
