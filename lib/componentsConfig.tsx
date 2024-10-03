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
import About_01 from "@/components/top/about/About_01"
import About_02 from "@/components/top/about/About_02"
import About_03 from "@/components/top/about/About_03"
import About_04 from "@/components/top/about/About_04"
import Message_01 from "@/components/top/message/Message_01"
import Message_02 from "@/components/top/message/Message_02"
import Message_03 from "@/components/top/message/Message_03"
import Message_04 from "@/components/top/message/Message_04"
import Service_01 from "@/components/top/service/Service_01"
import Service_02 from "@/components/top/service/Service_02"
import Service_03 from "@/components/top/service/Service_03"
import Service_04 from "@/components/top/service/Service_04"
import News_01 from "@/components/top/news/News_01"
import News_02 from "@/components/top/news/News_02"
import News_03 from "@/components/top/news/News_03"
import News_04 from "@/components/top/news/News_04"
import News_05 from "@/components/top/news/News_05"
import Case_01 from "@/components/top/case/Case_01"
import Case_02 from "@/components/top/case/Case_02"
import Case_03 from "@/components/top/case/Case_03"
import Case_04 from "@/components/top/case/Case_04"
import Case_05 from "@/components/top/case/Case_05"
import Blog_01 from "@/components/top/blog/Blog_01"
import Blog_02 from "@/components/top/blog/Blog_02"
import Blog_03 from "@/components/top/blog/Blog_03"
import Blog_04 from "@/components/top/blog/Blog_04"
import Blog_05 from "@/components/top/blog/Blog_05"
import Plan_01 from "@/components/top/plan/Plan_01"
import Plan_02 from "@/components/top/plan/Plan_02"
import Plan_03 from "@/components/top/plan/Plan_03"
import Plan_04 from "@/components/top/plan/Plan_04"
import Faq_01 from "@/components/top/faq/Faq_01"
import Faq_02 from "@/components/top/faq/Faq_02"
import Flow_01 from "@/components/top/flow/Flow_01"
import Flow_02 from "@/components/top/flow/Flow_02"

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
        },
      },
      about: {
        title: "私たちについて",
        options: [
          { id: "About_01", src: "/admin/1.png", alt: "About_01" },
          { id: "About_02", src: "/admin/2.png", alt: "About_02" },
          { id: "About_03", src: "/admin/3.png", alt: "About_03" },
          { id: "About_04", src: "/admin/4.png", alt: "About_04" },
        ],
        components: {
          About_01: <About_01 />,
          About_02: <About_02 />,
          About_03: <About_03 />,
          About_04: <About_04 />,
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
      news: {
        title: "お知らせ",
        options: [
          { id: "News_01", src: "/admin/1.png", alt: "News_01" },
          { id: "News_02", src: "/admin/2.png", alt: "News_02" },
          { id: "News_03", src: "/admin/3.png", alt: "News_03" },
          { id: "News_04", src: "/admin/4.png", alt: "News_04" },
          { id: "News_05", src: "/admin/5.png", alt: "News_05" },
        ],
        components: {
          News_01: <News_01 />,
          News_02: <News_02 />,
          News_03: <News_03 />,
          News_04: <News_04 />,
          News_05: <News_05 />,
        },
      },
      case: {
        title: "導入事例",
        options: [
          { id: "Case_01", src: "/admin/1.png", alt: "Case_01" },
          { id: "Case_02", src: "/admin/2.png", alt: "Case_02" },
          { id: "Case_03", src: "/admin/3.png", alt: "Case_03" },
          { id: "Case_04", src: "/admin/4.png", alt: "Case_04" },
          { id: "Case_05", src: "/admin/5.png", alt: "Case_05" },
        ],
        components: {
          Case_01: <Case_01 />,
          Case_02: <Case_02 />,
          Case_03: <Case_03 />,
          Case_04: <Case_04 />,
          Case_05: <Case_05 />,
        },
      },
      blog: {
        title: "ブログ",
        options: [
          { id: "Blog_01", src: "/admin/1.png", alt: "Blog_01" },
          { id: "Blog_02", src: "/admin/2.png", alt: "Blog_02" },
          { id: "Blog_03", src: "/admin/3.png", alt: "Blog_03" },
          { id: "Blog_04", src: "/admin/4.png", alt: "Blog_04" },
          { id: "Blog_05", src: "/admin/5.png", alt: "Blog_05" },
        ],
        components: {
          Blog_01: <Blog_01 />,
          Blog_02: <Blog_02 />,
          Blog_03: <Blog_03 />,
          Blog_04: <Blog_04 />,
          Blog_05: <Blog_05 />,
        },
      },
      plan: {
        title: "料金プラン",
        options: [
          { id: "Plan_01", src: "/admin/1.png", alt: "Plan_01" },
          { id: "Plan_02", src: "/admin/2.png", alt: "Plan_02" },
          { id: "Plan_03", src: "/admin/3.png", alt: "Plan_03" },
          { id: "Plan_04", src: "/admin/4.png", alt: "Plan_04" },
        ],
        components: {
          Plan_01: <Plan_01 />,
          Plan_02: <Plan_02 />,
          Plan_03: <Plan_03 />,
          Plan_04: <Plan_04 />,
        },
      },
      faq: {
        title: "よくある質問",
        options: [
          { id: "Faq_01", src: "/admin/1.png", alt: "Faq_01" },
          { id: "Faq_02", src: "/admin/2.png", alt: "Faq_02" },
        ],
        components: {
          Faq_01: <Faq_01 />,
          Faq_02: <Faq_02 />,

        },
      },
      flow: {
        title: "ご利用の流れ",
        options: [
          { id: "Flow_01", src: "/admin/1.png", alt: "Flow_01" },
          { id: "Flow_02", src: "/admin/2.png", alt: "Flow_02" },
        ],
        components: {
          Flow_01: <Flow_01 />,
          Flow_02: <Flow_02 />,

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
