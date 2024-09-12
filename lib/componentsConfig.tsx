import Header1 from "@/components/header/Header1"
import Header2 from "@/components/header/Header2"
import Header3 from "@/components/header/Header3"
import Header4 from "@/components/header/Header4"
import About1 from "@/components/about/About1"
import About2 from "@/components/about/About2"
import Footer1 from "@/components/footer/Footer1"
import Footer2 from "@/components/footer/Footer2"
import Kv1 from "@/components/kv/Kv1"
import Kv2 from "@/components/kv/Kv2"
import Kv3 from "@/components/kv/Kv3"
import Kv4 from "@/components/kv/Kv4"
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
          { id: "Header1", src: "/admin/1.png", alt: "Header1" },
          { id: "Header2", src: "/admin/2.png", alt: "Header2" },
          { id: "Header3", src: "/admin/3.png", alt: "Header3" },
          { id: "Header4", src: "/admin/4.png", alt: "Header4" },
        ],
        components: {
          Header1: <Header1 />,
          Header2: <Header2 />,
          Header3: <Header3 />,
          Header4: <Header4 />,
        },
      },
      kv: {
        title: "キービジュアル",
        options: [
          { id: "Kv1", src: "/admin/1.png", alt: "Kv1" },
          { id: "Kv2", src: "/admin/2.png", alt: "Kv2" },
          { id: "Kv3", src: "/admin/3.png", alt: "Kv3" },
          { id: "Kv4", src: "/admin/4.png", alt: "Kv4" },
          // { id: "Kv5", src: "/admin/5.png", alt: "Kv5" },
          // { id: "Kv6", src: "/admin/6.png", alt: "Kv6" },
          // { id: "Kv7", src: "/admin/7.png", alt: "Kv7" },
          // { id: "Kv8", src: "/admin/8.png", alt: "Kv8" },
          // { id: "Kv9", src: "/admin/9.png", alt: "Kv9" },
        ],
        components: {
          Kv1: <Kv1 />,
          Kv2: <Kv2 />,
          Kv3: <Kv3 />,
          Kv4: <Kv4 />,
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
          { id: "Header1", src: "/admin/1.png", alt: "Header1" },
          { id: "Header2", src: "/admin/2.png", alt: "Header2" },
          { id: "Header3", src: "/admin/3.png", alt: "Header3" },
          { id: "Header4", src: "/admin/4.png", alt: "Header4" },
        ],
        components: {
          Header1: <Header1 />,
          Header2: <Header2 />,
          Header3: <Header3 />,
          Header4: <Header4 />,
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
