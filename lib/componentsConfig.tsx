import Header_01 from "@/components/header/Header_01"
import Header_02 from "@/components/header/Header_02"
import Header_03 from "@/components/header/Header_03"
import Header_04 from "@/components/header/Header_04"
import About1 from "@/components/about/About1"
import About2 from "@/components/about/About2"
import Footer1 from "@/components/footer/Footer1"
import Footer2 from "@/components/footer/Footer2"
import KeyVisual_01 from "@/components/top/kv/KeyVisual_01"
import KeyVisual_02 from "@/components/top/kv/KeyVisual_02"
import KeyVisual_03 from "@/components/top/kv/KeyVisual_03"
import KeyVisual_04 from "@/components/top/kv/KeyVisual_04"
import KeyVisual_05 from "@/components/top/kv/KeyVisual_05"
import KeyVisual_06 from "@/components/top/kv/KeyVisual_06"
import Message_01 from "@/components/top/message/Message_01"
import Message_02 from "@/components/top/message/Message_02"
import Message_03 from "@/components/top/message/Message_03"
import Message_04 from "@/components/top/message/Message_04"
import Service_01 from "@/components/top/service/Service_01"
import Service_02 from "@/components/top/service/Service_02"
import Service_03 from "@/components/top/service/Service_03"
import Service_04 from "@/components/top/service/Service_04"

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
          { id: "KeyVisual_03", src: "/admin/3.png", alt: "KeyVisual_03" },
          { id: "KeyVisual_04", src: "/admin/4.png", alt: "KeyVisual_04" },
          { id: "KeyVisual_05", src: "/admin/5.png", alt: "KeyVisual_05" },
          { id: "KeyVisual_06", src: "/admin/6.png", alt: "KeyVisual_06" },
        ],
        components: {
          KeyVisual_01: <KeyVisual_01 />,
          KeyVisual_02: <KeyVisual_02 />,
          KeyVisual_03: <KeyVisual_03 />,
          KeyVisual_04: <KeyVisual_04 />,
          KeyVisual_05: <KeyVisual_05 />,
          KeyVisual_06: <KeyVisual_06 />,
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
          { id: "Message_01", src: "/admin/1.png", alt: "Message_01" },
          { id: "Message_02", src: "/admin/2.png", alt: "Message_02" },
          { id: "Message_03", src: "/admin/3.png", alt: "Message_03" },
          { id: "Message_04", src: "/admin/4.png", alt: "Message_04" },
        ],
        components: {
          Message_01: <Message_01 />,
          Message_02: <Message_02 />,
          Message_03: <Message_03 />,
          Message_04: <Message_04 />,
        },
      },
      service: {
        title: "サービス",
        options: [
          { id: "Service_01", src: "/admin/1.png", alt: "Service_01" },
          { id: "Service_02", src: "/admin/2.png", alt: "Service_02" },
          { id: "Service_03", src: "/admin/3.png", alt: "Service_03" },
          { id: "Service_04", src: "/admin/4.png", alt: "Service_04" },
        ],
        components: {
          Service_01: <Service_01 />,
          Service_02: <Service_02 />,
          Service_03: <Service_03 />,
          Service_04: <Service_04 />,
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
