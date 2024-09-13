import Kv1 from "@/components/kv/KeyVisual_01"
import KeyVisual_02 from "@/components/kv/KeyVisual_02"
import Message1 from "@/components/message/Message1"
import Message2 from "@/components/message/Message2"
import Solution1 from "@/components/solution/Solution1"
import Solution2 from "@/components/solution/Solution2"

// メインページ
const HomePage = () => {
  return (
    <div>
      {/* <Kv1 /> */}
      <KeyVisual_02 />
      {/* <Message1 /> */}
      <Message2 />
      {/* <Solution1 /> */}
      <Solution2 />
    </div>
  )
}

export default HomePage
