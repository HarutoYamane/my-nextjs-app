import type { SkillProps } from "@/types/skills";

export const SITE_TITLE = "Tomoki Saito's Portfolio";
export const SITE_DESCRIPTION = "齋藤 智樹のポートフォリオサイトです。";
export const JOB_TITLE = "Web Developer & UX Designer";
export const GITHUB_URL = "https://github.com/Tomoki-Saito";

// 環境ごとに異なるので process.env で取得する
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const NAV_ITEMS = ["", "about", "skills", "blog", "contact"];

// 経験値
export const experienceLevels = {
  1: "1 年未満",
  2: "1 〜 2 年",
  3: "2 〜 3 年",
  4: "3 〜 5 年",
  5: "5 年以上",
} as const;

// 習熟度
export const levelLevels = {
  1: "入門",
  2: "基本",
  3: "応用",
  4: "実践",
  5: "熟練",
} as const;

// 関心度
export const interestLevels = {
  1: "関心なし",
  2: "あまり関心なし",
  3: "普通",
  4: "好き",
  5: "大好き",
} as const;

export const skillCategories: { name: string; skills: SkillProps[] }[] = [
  {
    name: "フロントエンド",
    skills: [
      {
        name: "HTML",
        icon: "skill-icons:html",
        description:
          "セマンティックなマークアップとアクセシビリティを重視した実装も得意です",
        experience: 5,
        level: 5,
        interest: 3,
      },
      {
        name: "CSS",
        icon: "skill-icons:css",
        description: "Flexbox, Grid などのデザインを重視した実装も得意です",
        experience: 5,
        level: 5,
        interest: 3,
      },
      {
        name: "JavaScript",
        icon: "skill-icons:javascript",
        description: "ES6+ の構文を使用した実装も得意です",
        experience: 5,
        level: 4,
        interest: 4,
      },
      {
        name: "Astro",
        icon: "skill-icons:astro",
        description: "Astro を使用した実装も得意です",
        experience: 2,
        level: 3,
        interest: 5,
      },
    ],
  },
  {
    name: "バックエンド",
    skills: [
      {
        name: "Node.js",
        icon: "skill-icons:nodejs-dark",
        description: "ツールの作成やアプリの開発に使っています",
        experience: 4,
        level: 3,
        interest: 3,
      },
      {
        name: "Express",
        icon: "skill-icons:expressjs-dark",
        description: "Node.js を使って API を開発するのに使っています",
        experience: 2,
        level: 2,
        interest: 3,
      },
    ],
  },
  {
    name: "データベース",
    skills: [
      {
        name: "PostgreSQL",
        icon: "skill-icons:postgresql-dark",
        description: "RDB を使う際に選んでいます",
        experience: 4,
        level: 3,
        interest: 3,
      },
      {
        name: "MongoDB",
        icon: "skill-icons:mongodb",
        description: "NoSQL を使う際に選んでいます",
        experience: 3,
        level: 3,
        interest: 3,
      },
    ],
  },
  {
    name: "DevOps・インフラ",
    skills: [
      {
        name: "Google Cloud",
        icon: "skill-icons:gcp-dark",
        description:
          "Cloud Functions でのバッジ処理や Cloud Run でのアプリの公開に使っています",
        experience: 4,
        level: 2,
        interest: 5,
      },
      {
        name: "GitHub",
        icon: "skill-icons:github-dark",
        description:
          "ソースコードの管理に使っています。自動化のために GitHub Action も使っています。",
        experience: 5,
        level: 3,
        interest: 5,
      },
      {
        name: "Docker",
        icon: "skill-icons:docker",
        description:
          "サーバサイドのアプリを Cloud Run にデプロイする際に使っています",
        experience: 4,
        level: 3,
        interest: 3,
      },
    ],
  },
];
