import type { Metadata } from 'next'
import MainContainer from '@/components/MainContainer'
import { SITE_TITLE, SITE_DESCRIPTION, BASE_URL } from '@/consts'

type Props = {
  children: React.ReactNode
  params: { [key: string]: string | string[] | undefined }
}

export const metadata: Metadata = {
  title: { default: `Blog | ${SITE_TITLE}`, template: `%s | ${SITE_TITLE}` },
  description: SITE_DESCRIPTION,
  openGraph: {
    url: `${BASE_URL}/blog`,
    title: `Blog | ${SITE_TITLE}`,
    description: SITE_DESCRIPTION,
    images: [{ url: `${BASE_URL}/blog-placeholder-1.jpg`, width: 1200, height: 630, alt: 'OG Image' }],
  },
  twitter: {
    title: `Blog | ${SITE_TITLE}`,
    description: SITE_DESCRIPTION,
    images: [`${BASE_URL}/blog-placeholder-1.jpg`],
  },
}

export default function BlogPostLayout({ children }: Props) {
  return (
    <MainContainer>
      <article className='max-w-[720px] mx-auto'>
        {/* ここに prose クラスを付けることで、 Tailwind CSS の Typography が適用される */}
        <div className='prose prose-invert'>{children}</div>
      </article>
    </MainContainer>
  )
}