// フロントマターの型定義
export type Frontmatter = {
  title: string
  description: string
  pubDate: string
  updatedDate?: string
  heroImage: string
}

// 記事データの型定義
export type Post = {
  meta: { slug: string } & Frontmatter
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any
}
