"use client";

import { useStore } from "@/store/useStore";
import { Download, Upload, Trash2 } from "lucide-react";
import Link from "next/link";

// ナビゲーション
const Navigation = () => {
  const selectedSections = useStore((state) => state.selectedSections);
  const clearSections = useStore((state) => state.clearSections);
  const importSections = useStore((state) => state.importSections);

  // エクスポート: JSONデータとして状態をエクスポートする
  const handleExport = () => {
    const dataStr = JSON.stringify(selectedSections);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
    const exportFileDefaultName = "デザイン.json";
    const linkElement = document.createElement("a");

    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  };

  // インポート: JSONファイルをインポートし、状態を更新する
  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();

    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      fileReader.onload = (e) => {
        if (e.target && typeof e.target.result === "string") {
          try {
            const importedData = JSON.parse(e.target.result);
            importSections(importedData);
            event.target.value = "";
          } catch (error) {
            console.error("Invalid JSON format:", error);
          }
        }
      };
      fileReader.readAsText(file);
    }
  };

  return (
    <div className="border-b h-12 fixed z-50 bg-gray-50 w-full text-sm">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between h-full px-4">
        <div className="flex items-center space-x-4">
          <Link href="/admin">
            <div>ホーム</div>
          </Link>
          <Link href="/admin/blog">
            <div>記事一覧</div>
          </Link>
          <Link href="/admin/blog/blogDetail">
            <div>記事詳細</div>
          </Link>
          <Link href="/admin/about">
            <div>私たちについて</div>
          </Link>
          <Link href="/admin/price">
            <div>料金プラン</div>
          </Link>
          <Link href="/admin/faq">
            <div>よくある質問</div>
          </Link>
          <Link href="/admin/contact">
            <div>お問い合わせ</div>
          </Link>
          <Link href="/admin/service">
            <div>事業内容</div>
          </Link>
          <Link href="/admin/privacy">
            <div>プライバシーポリシー</div>
          </Link>
          <Link href="/admin/site">
            <div>サイトポリシー</div>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={handleExport}
            className="px-2 py-1 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200 rounded"
          >
            <Download size={18} />
          </button>

          <label className="cursor-pointer px-2 py-1 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200 rounded">
            <Upload size={18} />
            <input
              type="file"
              accept=".json"
              onChange={handleImport}
              className="hidden"
            />
          </label>

          <button
            onClick={clearSections}
            className="px-2 py-1 hover:bg-red-100 hover:text-red-600 transition-colors duration-200 rounded"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
