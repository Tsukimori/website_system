// components/blog/blogDetail/BlogDetail_02.tsx
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { blogsFetch } from "@/lib/api/blogsFetch"
import { Cms } from "@/types"

interface BlogDetailProps {
  params: {
    id: string
  }
}

export default async function BlogDetail_02({ params }: BlogDetailProps) {
  const { id } = params

  try {
    const post = await blogsFetch.get(id)
    if (!post) notFound()

    // 関連記事取得（同カテゴリーで最新順）
    let relatedPosts: Cms[] = []
    if (Array.isArray(post.category) && post.category.length > 0) {
      const allSameCategory = await blogsFetch.list(100)
      relatedPosts = allSameCategory
        .filter(
          (p) =>
            p.id !== id &&
            Array.isArray(p.category) &&
            p.category.includes(post.category![0])
        )
        .slice(0, 5)
    }

    return (
      <div className="bg-bgLightBlue pb-24">
        {post.image && (
          <div className="w-full h-[40vh] max-h-[480px] relative">
            <Image
              src={post.image.url}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="max-w-[1200px] mx-auto mt-10 md:mt-24 px-3">
          <article className="bg-white p-5 md:p-16">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-2">
              <div className="flex gap-2 flex-wrap">
                {Array.isArray(post.category) && post.category.length > 0 ? (
                  post.category.map((cat, i) => (
                    <span
                      key={i}
                      className="text-accentColor text-xs border border-accentColor rounded-[15px] px-3 py-1"
                    >
                      {cat}
                    </span>
                  ))
                ) : (
                  <span className="text-accentColor text-xs border border-accentColor rounded-[15px] px-3 py-1">
                    カテゴリーなし
                  </span>
                )}
              </div>
              {post.date && (
                <time className="text-gray-500 text-sm">
                  {new Date(post.date)
                    .toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })
                    .replace(/\//g, ".")}
                </time>
              )}
            </div>

            <h1 className="text-xl md:text-3xl font-bold mb-10 md:mb-24 pb-10 border-b border-accentColor">
              {post.title}
            </h1>

            <div
              className="prose max-w-none prose-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {relatedPosts.length > 0 && (
            <section className="mt-10 md:mt-24 bg-white p-5 md:p-16">
              <h2 className="text-2xl mb-6 text-accentColor">関連記事</h2>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.id}`}
                    className="bg-white overflow-hidden duration-300"
                  >
                    {relatedPost.image && (
                      <div className="relative w-full pt-[56.25%] rounded-[15px] overflow-hidden md:h-[180px]">
                        <Image
                          src={relatedPost.image.url}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      {relatedPost.date && (
                        <time className="text-xs block">
                          {new Date(relatedPost.date)
                            .toLocaleDateString("ja-JP", {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                            })
                            .replace(/\//g, ".")}
                        </time>
                      )}
                      <p className="text-lg font-semibold line-clamp-2 mt-1">
                        {relatedPost.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    )
  } catch (error) {
    console.error("Failed to fetch blog post:", error)
    notFound()
  }
}
