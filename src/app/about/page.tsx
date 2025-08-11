import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import MainContainer from "@/components/MainContainer";
import Timeline from "@/components/about/Timeline";
import { SITE_TITLE, JOB_TITLE } from "@/consts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `About | ${SITE_TITLE}`,
  description:
    "ゼノクリース合同会社の代表として、Web エンジニア・UX デザイナー・IT コンサルタントなど、多岐に渡って活動中。教育系の事業の経験もあり、現在はスタディングテックの講師も務めている。",
};

export default function About() {
  const myName = "齋藤 智樹 - Saito Tomoki";

  return (
    <div>
      <MainContainer>
        <PageTitle title="About" />
        <div className="flex flex-col md:flex-row items-center mb-12">
          <Image
            src="/blog-placeholder-about.jpg"
            alt={myName}
            width={150}
            height={150}
            className="rounded-full object-cover md:mr-8 mb-6 md:mb-0 w-[120px] h-[120px] md:w-[150px] md:h-[150px]"
          />
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">{myName}</h2>
            <p className="text-lg text-secondary">{JOB_TITLE}</p>
          </div>
        </div>

        <section className="mb-12">
          <h3 className="text-2xl font-bold text-primary mb-4">プロフィール</h3>
          <p className="mb-4">1996年9月20日生まれ、福島県郡山市出身。</p>
          <p>
            ゼノクリース合同会社の代表として、Web エンジニア・UX デザイナー・IT
            コンサルタントなど、多岐に渡って活動中。
            <br />
            教育系の事業の経験もあり、現在は{" "}
            <a
              href="https://studying.jp/"
              target="_blank"
              rel="noopener"
              className="text-primary hover:underline"
            >
              スタディングテック
            </a>
            の講師も務めている。
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-primary mb-4">経歴</h3>
          <Timeline date="2021年 - 現在" title="ゼノクリース合同会社 代表">
            <p>
              より仕事の幅を広げるために、フリーランスエンジニアから法人化をする。
              <br />
              これまでの実績を活かし、幅広いサービスを提供している。
            </p>
            <ul>
              <li>Web サイト・アプリケーション制作</li>
              <li>DX コンサル（業務効率化・自動化）</li>
              <li>データ分析と見える化（BI 構築）</li>
            </ul>
            <p>など</p>
          </Timeline>

          <Timeline date="2020 - 2021年" title="フリーランスエンジニア">
            <p>
              大学卒業後、学生自体から従事していた塾や予備校の仕事を継続しつつ、そのままフリーランスエンジニアとして活動を始める。
            </p>
          </Timeline>

          <Timeline
            date="2016 - 2020年"
            title="慶應義塾大学 理工学部 数理科学科"
          >
            <p>大学では統計学を専攻。サークルは茶道とパソコンを掛け持ち。</p>
          </Timeline>

          <Timeline date="2012 - 2015年" title="福島県立 安積高校">
            <p>吹奏楽部でトランペットに明け暮れる。</p>
          </Timeline>
        </section>
      </MainContainer>
    </div>
  );
}
