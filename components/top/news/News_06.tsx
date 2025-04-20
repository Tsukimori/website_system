// components/news/News_05.tsx

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { microcms } from "@/lib/microcms";
import { Work } from "@/types";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import PageContent from "@/components/ui/frame/PageContent";
import MoreButton from "@/components/ui/button/MoreButton";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

interface NewsProps {
  limit?: number;
}

const News_05 = ({ limit = 9 }: NewsProps) => {
  const [contents, setContents] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      <PageContent>
        <section className="md:max-w-[1200px] mx-auto md:flex justify-between gap-x-20">
          <div className="w-[300px]">
            <ContentHeadline
              enTitle="News"
              mainTitle="お知らせ"
              enTitleClassName=""
              titleClassName=""
            />
            <div className="mt-16">
              <MoreButton className="text-accentColor border-accentColor" />
            </div>
          </div>
          <div className="w-[820px]  space-y-5 ">
            {contents.map((post: Work) => (
              <div
                key={post.id}
                className="w-full flex space-x-6 border-b border-[#eeeeee] pb-5"
              >
                <p className="font-medium">{post.date}</p>
                <p className=" h-[25px] px-4 py-1 bg-accentColor rounded-[5px] text-white  justify-center items-center text-xs">
                  {Array.isArray(post.category) && post.category.length > 0
                    ? post.category.join(", ")
                    : "カテゴリーなし"}
                </p>
                <p className="text-lg font-bold">{post.title}</p>
              </div>
            ))}
          </div>
        </section>
      </PageContent>
    </>
  );
};

export default News_05;
