// components/blog/Blog_02.tsx

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { microcms } from "@/lib/microcms";
import { Work } from "@/types";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import PageContent from "@/components/ui/frame/PageContent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { CirclePlay, PauseCircle } from "lucide-react"; // Lucideアイコンをインポート
import MoreButton from "@/components/ui/button/MoreButton";

// Swiper stylesをインポート
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface BlogProps {
  limit?: number;
}

const Blog_02 = ({ limit = 5 }: BlogProps) => {
  const [contents, setContents] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true); // 再生/一時停止状態を管理
  const swiperRef = useRef<any>(null); // Swiperインスタンスへの参照

  useEffect(() => {
    const getWorks = async () => {
      try {
        const data = await microcms.get({
          endpoint: "works",
          queries: { limit },
        });
        if (data && Array.isArray(data.contents)) {
          setContents(data.contents);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Failed to fetch works:", error);
      }
      setLoading(false);
    };

    getWorks();
  }, [limit]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  // 再生/一時停止ボタンのクリックイベント
  const handlePlayPause = () => {
    if (isPlaying) {
      swiperRef.current?.autoplay.stop(); // 自動再生を停止
    } else {
      swiperRef.current?.autoplay.start(); // 自動再生を再開
    }
    setIsPlaying(!isPlaying); // 状態を切り替える
  };

  return (
    <>
      <PageContent className="bg-bgLightBlue">
        <section className="md:max-w-[1200px] mx-auto relative">
          <ContentHeadline
            enTitle="Blog"
            mainTitle="ブログ"
            enTitleClassName=""
            titleClassName=""
          />

          {/* Swiper を追加 */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]} // Autoplayモジュールを追加
            spaceBetween={10}
            slidesPerView={1.3}
            centeredSlides={true}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000, // 3秒ごとに自動スライド
              disableOnInteraction: false, // ユーザーが操作しても自動再生が停止しない
            }}
            breakpoints={{
              768: {
                slidesPerView: 1.5, // 768px以上では1.5スライド表示
                spaceBetween: 40, // 768px以上ではスライド間の余白を広げる
              },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)} // Swiperインスタンスを取得して参照に保存
            className="mt-16"
          >
            {/* 全てのコンテンツをループで表示 */}
            {contents.map((post: Work) => (
              <SwiperSlide key={post.id} className="w-[700px]">
                <div className="md:w-[800px] h-[250px] md:h-[400px] relative">
                  <div className="w-full h-[250px] md:h-[400px] mt-5 md:mt-0">
                    {post.image && (
                      <Image
                        src={post.image.url}
                        alt="制作物サムネイル"
                        width={370}
                        height={223}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 w-full md:w-[400px] bg-black/50 py-3 md:py-8 px-3 md:px-10 text-white">
                    <p className="md:text-lg font-bold min-h-12 md:min-h-0">
                      {post.title}
                    </p>
                    <p className="mt-2 md:mt-4 text-white text-xs min-h-8 md:min-h-0">
                      #
                      {Array.isArray(post.category) && post.category.length > 0
                        ? post.category.join(", ")
                        : "カテゴリーなし"}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ページネーションと一時停止ボタン */}
          <div className="absolute right-4 md:right-60 -bottom-3 z-10">
            <div className="swiper-pagination"></div>{" "}
            {/* Swiperのページネーション */}
            <button onClick={handlePlayPause} className="focus:outline-none ">
              {/* 再生/一時停止アイコンの切り替え */}
              {isPlaying ? (
                <PauseCircle size={30} className="text-gray-600" />
              ) : (
                <CirclePlay size={30} className="text-gray-600" />
              )}
            </button>
          </div>
        </section>
        <div className="flex justify-center mt-16">
          <MoreButton className="text-accentColor border-accentColor" />
        </div>
      </PageContent>
    </>
  );
};

export default Blog_02;
