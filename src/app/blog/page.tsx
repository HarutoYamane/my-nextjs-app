import Image from "next/image";
import Link from "next/link";
import MainContainer from "@/components/MainContainer";
import PageTitle from "@/components/PageTitle";
import FormattedDate from "@/components/blog/FormattedDate";
import { getAllPosts } from "@/lib/mdx";
import { SITE_TITLE, SITE_DESCRIPTION } from "@/consts";

export const metadata = {
  title: `Blog | ${SITE_TITLE}`,
  description: SITE_DESCRIPTION,
};

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <MainContainer>
      <PageTitle title="Blog" />
      <ul className="flex flex-wrap gap-8 list-none m-0 p-0">
        {posts.map((post, index) => (
          <li
            key={post.meta.slug}
            className={`mb-4 text-center w-full ${
              index === 0 ? "md:w-full" : "md:w-[calc(50%-1rem)]"
            }`}
          >
            <Link
              href={`/blog/${post.meta.slug}`}
              className="block transition-all duration-200 hover:text-accent"
            >
              <div className="relative mb-2">
                <Image
                  src={post.meta.heroImage}
                  alt={post.meta.title}
                  width={index === 0 ? 1020 : 720}
                  height={index === 0 ? 510 : 360}
                  className="rounded-xl transition-shadow duration-200 hover:shadow-lg"
                />
              </div>

              <h4
                className={`text-white ${index === 0 && "md:text-3xl"} text-xl`}
              >
                {post.meta.title}
              </h4>

              <p className="m-0 text-caption">
                <FormattedDate date={new Date(post.meta.pubDate)} />
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
}
