"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import HeaderLink from "@/components/HeaderLink";
import { SITE_TITLE, NAV_ITEMS, GITHUB_URL } from "@/consts";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuContentRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // モーダルの外側をクリックした際、メニューを閉じる
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuContentRef.current &&
        !menuContentRef.current.contains(event.target as Node) &&
        !menuButtonRef.current?.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    // クリーンアップ関数
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-8">
      <nav className="flex items-center justify-between py-4 md:px-4">
        <h2>
          <Link
            href="/"
            className="text-white no-underline m-0 text-base font-bold"
          >
            {SITE_TITLE}
          </Link>
        </h2>

        <div
          ref={menuContentRef}
          className={`
            md:block
            ${
              isMenuOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-2.5"
            }
            fixed md:static top-[4.5rem] left-4 right-4 md:top-auto md:left-auto md:right-auto
            bg-card-bg md:bg-transparent rounded-3xl md:rounded-none
            pt-12 pb-8 md:p-0 md:pt-0
            z-50 md:z-auto
            transition-all duration-200
            md:opacity-100 md:visible md:translate-y-0
            shadow-[0_4px_6px_rgba(0,0,0,0.1)] md:shadow-none
          `}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="メニューを閉じる"
            className="absolute top-4 right-4 bg-transparent border-none cursor-pointer text-text md:hidden"
          >
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                fill="currentColor"
              />
            </svg>
          </button>

          <ul className="flex justify-center md:gap-8 gap-6 m-0 p-0 list-none static translate-x-0 md:absolute md:left-[-55vw]">
            {NAV_ITEMS.map((path) => (
              <li key={path}>
                <HeaderLink href={`/${path}`}>
                  {path === ""
                    ? "Home"
                    : path.charAt(0).toUpperCase() + path.slice(1)}
                </HeaderLink>
              </li>
            ))}
          </ul>

          <div className="h-8 flex items-center justify-center mt-8 md:mt-0">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="h-8"
            >
              <svg
                viewBox="0 0 16 16"
                aria-hidden="true"
                width="32"
                height="32"
              >
                <path
                  fill="currentColor"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="md:hidden">
          <button
            ref={menuButtonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
            className="flex items-center bg-card-bg text-text px-4 py-1 rounded-full text-sm font-medium cursor-pointer shadow-[0_4px_6px_rgba(0,0,0,0.1)] border border-black/20"
          >
            MENU
            <svg viewBox="0 0 8 6" className="ml-3 h-auto w-2 stroke-text">
              <path
                d="M1.75 1.75 4 4.25l2.25-2.5"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* オーバーレイ */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 ${
          isMenuOpen ? "block" : "hidden"
        } md:hidden`}
        onClick={() => setIsMenuOpen(false)}
      />
    </header>
  );
}
