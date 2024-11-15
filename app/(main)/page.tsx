import KeyVisual_01 from "@/components/top/kv/KeyVisual_01"
import KeyVisual_02 from "@/components/top/kv/KeyVisual_02"
import About_01 from "@/components/top/about/About_01"
import About_02 from "@/components/top/about/About_02"
import Service_01 from "@/components/top/service/Service_01"
import Service_02 from "@/components/top/service/Service_02"
import Case_01 from "@/components/top/case/Case_01"

// メインページ
const HomePage = () => {
  return (
    <div>
      {/* <KeyVisual_01 /> */}
      <KeyVisual_02 />
      {/* <About_01 /> */}
      <About_02 />
      {/* <Service_01 /> */}
      <Service_02 />
      <Case_01 />
    </div>
  )
}

export default HomePage
