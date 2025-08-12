import Image from "next/image";
import Link from "next/link";
import FormattedDate from "@/components/blog/FormattedDate";
import { getPostSlugs } from "@/lib/mdx";
import { SITE_TITLE, BASE_URL } from "@/consts";

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}) {
  try {
    const resolvedParams = await params;
    const post = await getPostSlugs(resolvedParams.slug.join("/"));

    return {
      title: { default: `${post.meta.title} | ${SITE_TITLE}` },
      description: post.meta.description,
      openGraph: {
        url: `${BASE_URL}/blog/${post.meta.slug}`,
        title: `${post.meta.title} | ${SITE_TITLE}`,
        description: post.meta.description,
        images: [
          {
            url: `${BASE_URL}/${post.meta.heroImage}`,
            width: 1200,
            height: 630,
            alt: "OG Image",
          },
        ],
      },
      twitter: {
        title: `${post.meta.title} | ${SITE_TITLE}`,
        description: post.meta.description,
        images: [`${BASE_URL}/${post.meta.heroImage}`],
      },
    };
  } catch (error) {
    console.error("記事の取得に失敗しました:", error);
    return {
      title: "記事が見つかりませんでした",
      description: "記事が見つかりませんでした",
    };
  }
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string[] };
}) {
  try {
    const resolvedParams = await params;
    const post = await getPostSlugs(resolvedParams.slug.join("/"));
    const { title, pubDate, updatedDate, heroImage } = post.meta;

    return (
      <>
        <div className="mb-8">
          <Image
            src={heroImage}
            alt=""
            width={1020}
            height={510}
            className="mx-auto rounded-xl shadow-lg"
          />
        </div>

        <div className="text-center mb-8">
          <div className="text-caption mb-2">
            <FormattedDate date={new Date(pubDate)} />
            {updatedDate && (
              <div className="italic">
                Last updated on <FormattedDate date={new Date(updatedDate)} />
              </div>
            )}
          </div>
          <h1 className="mb-4">{title}</h1>
          <hr className="my-4" />
        </div>

        {post.content}
      </>
    );
  } catch (error) {
    console.error("記事の取得に失敗しました:", error);

    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <h1 className="text-3xl font-bold mb-4">記事が見つかりませんでした</h1>
        <p className="text-gray-400 mb-8">
          お探しの記事は存在しないか、削除された可能性があります。
        </p>
        <Link
          href="/blog"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          ブログ一覧に戻る
        </Link>
      </div>
    );
  }
}
