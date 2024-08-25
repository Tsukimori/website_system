import Kv1 from "@/components/kv/Kv1"
import Kv2 from "@/components/kv/Kv2"
import Message1 from "@/components/message/Message1"
import Message2 from "@/components/message/Message2"
import Solution1 from "@/components/solution/Solution1"
import Solution2 from "@/components/solution/Solution2"

// メインページ
const HomePage = async () => {
  return (
    <div className="space-y-20 mb-20">
      {/* <Kv1 /> */}
      <Kv2 />
      {/* <Message1 /> */}
      <Message2 />
      {/* <Solution1 /> */}
      <Solution2 />
    </div>
  )
}

export default HomePage
