// ブログの型定義
export interface Blog {
  id: string
  title: string
  description: string
  content: string
  image?: {
    url: string
  }
  date: string
  category: string[]
}

// 事例の型定義
export type Work = {
  id: string
  title: string
  content: string
  date: string
  image?: {
    url: string
  }
  category: string[]
  fixed: boolean
}

export interface Download {
  id: string
  title: string
  content: string
  date: string
  image?: {
    url: string
  }
  link: string
  category: string[]
}

export interface TopContentProps {
  title: React.ReactNode
  subTitle?: React.ReactNode // オプショナルに変更
  titleEn?: string // オプショナルに変更
  imageSrc?: string
  body: string
  href: string | URL
  linkTitle?: string // オプショナルに変更
}

export interface TextProps {
  title: React.ReactNode
  subTitle: React.ReactNode
  number?: React.ReactNode // numberはオプショナル
  body?: React.ReactNode // bodyをオプショナルに変更
  titleElement?: React.ElementType
  subTitleElement?: React.ElementType
  numberElement?: React.ElementType
  bodyElement?: React.ElementType
}

export interface FrameProps {
  children: React.ReactNode
  className?: string
  id?: string // id属性を追加
}

export interface ButtonProps {
  children: React.ReactNode // ボタンの中身（テキストや要素など）
  className?: string // オプショナルなクラス名
  onClick?: () => void // クリックイベントハンドラー
  disabled?: boolean // disabledプロパティを追加
}
