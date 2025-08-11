"use client";

import { SITE_TITLE, JOB_TITLE } from "@/consts";

export default function KeyVisual() {
  return (
    <section
      id="home"
      className="relative flex h-screen items-center justify-center overflow-hidden text-center text-white bg-gradient-bg"
    >
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* メインコンテンツ */}
      <div className="max-w-3xl px-4 z-[2]">
        <h1
          className="mb-4 text-4xl font-bold bg-gradient-text bg-clip-text text-transparent
          animate-[fadeInUp_1s_ease-in-out]"
        >
          {SITE_TITLE}
        </h1>
        <p
          className="text-lg tracking-[0.15em] w-[0%] whitespace-nowrap overflow-hidden border-r-[0.15em] border-secondary
          animate-typing"
          style={{ margin: "0 auto" }}
        >
          {JOB_TITLE}
        </p>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[30px] h-[50px] border-2 border-white rounded-[15px] z-[2]">
        <div className="w-[2px] h-[10px] mx-auto mt-[5px] bg-white animate-[scrolling_1.5s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}
