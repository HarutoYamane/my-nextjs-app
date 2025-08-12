import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { type Post } from "@/types/blog";

// マークダウンファイルのあるディレクトリ
const postsDirectory = path.join(process.cwd(), "src/content/blog");

// マーク(MDX)ファイルの取得
export async function getPostSlugs(slug: string): Promise<Post> {
  let fullPath = path.join(postsDirectory, `${slug}.mdx`);

  // マークダウンファイルが存在しない場合は、マークダウンファイルを取得
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(postsDirectory, `${slug}.md`);
  }

  // マークダウンファイルが存在しない場合は、エラーを投げる
  if (!fs.existsSync(fullPath)) {
    throw new Error(`記事が見つかりませんでした。${slug}`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");

  // マークダウンファイルのメタデータを解析し、フロントマター部分とコンテンツ部分に分割
  const { data, content } = matter(fileContents);

  const mdxSource = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          [
            await import("rehype-pretty-code").then((mod) => mod.default),
            { theme: "one-dark-pro", keepBackground: true },
          ],
        ],
      },
    },
  });

  // data オブジェクトに必要なプロパティが含まれていることを型チェック
  if (!data.title || !data.description || !data.pubDate || !data.heroImage) {
    throw new Error(
      `フロントマターに必要なプロパティが不足しています: ${slug}`
    );
  }

  return {
    meta: {
      slug,
      title: data.title,
      description: data.description,
      pubDate: data.pubDate,
      updatedDate: data.updatedDate,
      heroImage: data.heroImage,
    },
    content: mdxSource.content,
  };
}
