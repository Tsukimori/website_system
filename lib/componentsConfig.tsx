import Header_01 from "@/components/header/Header_01"
import Header_02 from "@/components/header/Header_02"
import Header_03 from "@/components/header/Header_03"
import Header_04 from "@/components/header/Header_04"
import About1 from "@/components/about/About1"
import About2 from "@/components/about/About2"
import Footer1 from "@/components/footer/Footer1"
import Footer2 from "@/components/footer/Footer2"
import KeyVisual_01 from "@/components/kv/KeyVisual_01"
import KeyVisual_02 from "@/components/kv/KeyVisual_02"
import Kv3 from "@/components/kv/Kv3"
import KeyVisual_04 from "@/components/kv/KeyVisual_04"
// import Kv5 from "@/components/kv/Kv5"
// import Kv6 from "@/components/kv/Kv6"
// import Kv7 from "@/components/kv/Kv7"
// import Kv8 from "@/components/kv/Kv8"
// import Kv9 from "@/components/kv/Kv9"
import Message1 from "@/components/message/Message1"
import Message2 from "@/components/message/Message2"
import Message3 from "@/components/message/Message3"
import Solution1 from "@/components/solution/Solution1"
import Solution2 from "@/components/solution/Solution2"

// セクション情報とコンポーネントのマッピングの型定義
interface SectionOption {
  id: string
  src: string
  alt: string
}

interface SectionInfo {
  title: string
  options: SectionOption[]
  components: { [key: string]: JSX.Element }
}

interface PageConfig {
  sections: { [key: string]: SectionInfo }
}

interface ComponentsConfig {
  [key: string]: PageConfig
}

// ページ情報とコンポーネントのマッピング
export const componentsConfig: ComponentsConfig = {
  Home: {
    sections: {
      header: {
        title: "ヘッダー",
        options: [
          { id: "Header_01", src: "/admin/1.png", alt: "Header_01" },
          { id: "Header_02", src: "/admin/2.png", alt: "Header_02" },
          { id: "Header_03", src: "/admin/3.png", alt: "Header_03" },
          { id: "Header_04", src: "/admin/4.png", alt: "Header_04" },
        ],
        components: {
          Header_01: <Header_01 />,
          Header_02: <Header_02 />,
          Header_03: <Header_03 />,
          Header_04: <Header_04 />,
        },
      },
      kv: {
        title: "キービジュアル",
        options: [
          { id: "KeyVisual_01", src: "/admin/1.png", alt: "KeyVisual_01" },
          { id: "KeyVisual_02", src: "/admin/2.png", alt: "KeyVisual_02" },
          { id: "Kv3", src: "/admin/3.png", alt: "Kv3" },
          { id: "KeyVisual_04", src: "/admin/4.png", alt: "KeyVisual_04" },
          // { id: "Kv5", src: "/admin/5.png", alt: "Kv5" },
          // { id: "Kv6", src: "/admin/6.png", alt: "Kv6" },
          // { id: "Kv7", src: "/admin/7.png", alt: "Kv7" },
          // { id: "Kv8", src: "/admin/8.png", alt: "Kv8" },
          // { id: "Kv9", src: "/admin/9.png", alt: "Kv9" },
        ],
        components: {
          KeyVisual_01: <KeyVisual_01 />,
          KeyVisual_02: <KeyVisual_02 />,
          Kv3: <Kv3 />,
          KeyVisual_04: <KeyVisual_04 />,
          // Kv5: <Kv5 />,
          // Kv6: <Kv6 />,
          // Kv7: <Kv7 />,
          // Kv8: <Kv8 />,
          // Kv9: <Kv9 />,
        },
      },
      message: {
        title: "メッセージ",
        options: [
          { id: "Message1", src: "/admin/1.png", alt: "Message1" },
          { id: "Message2", src: "/admin/2.png", alt: "Message2" },
          { id: "Message3", src: "/admin/3.png", alt: "Message3" },
        ],
        components: {
          Message1: <Message1 />,
          Message2: <Message2 />,
          Message3: <Message3 />,
        },
      },
      solution: {
        title: "サービス",
        options: [
          { id: "Solution1", src: "/admin/1.png", alt: "Solution1" },
          { id: "Solution2", src: "/admin/2.png", alt: "Solution2" },
        ],
        components: {
          Solution1: <Solution1 />,
          Solution2: <Solution2 />,
        },
      },
      footer: {
        title: "フッター",
        options: [
          { id: "Footer1", src: "/admin/1.png", alt: "Footer1" },
          { id: "Footer2", src: "/admin/2.png", alt: "Footer2" },
        ],
        components: {
          Footer1: <Footer1 />,
          Footer2: <Footer2 />,
        },
      },
    },
  },
  About: {
    sections: {
      header: {
        title: "ヘッダー",
        options: [
          { id: "Header_01", src: "/admin/1.png", alt: "Header_01" },
          { id: "Header_02", src: "/admin/2.png", alt: "Header_02" },
          { id: "Header_03", src: "/admin/3.png", alt: "Header_03" },
          { id: "Header_04", src: "/admin/4.png", alt: "Header_04" },
        ],
        components: {
          Header_01: <Header_01 />,
          Header_02: <Header_02 />,
          Header_03: <Header_03 />,
          Header_04: <Header_04 />,
        },
      },
      about: {
        title: "メッセージ",
        options: [
          { id: "About1", src: "/admin/1.png", alt: "About1" },
          { id: "About2", src: "/admin/2.png", alt: "About2" },
        ],
        components: {
          About1: <About1 />,
          About2: <About2 />,
        },
      },
      footer: {
        title: "フッター",
        options: [
          { id: "Footer1", src: "/admin/1.png", alt: "Footer1" },
          { id: "Footer2", src: "/admin/2.png", alt: "Footer2" },
        ],
        components: {
          Footer1: <Footer1 />,
          Footer2: <Footer2 />,
        },
      },
    },
  },
  // ここに新しいページを追加していく
}
