"use client";
import { useEffect, useRef } from "react";
import { skillCategories } from "@/consts";
import SkillCard from "@/components/skills/SkillCard";

export default function SkillContainer() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".skill-card-wrapper");
            cards.forEach((card, index) => {
              card.classList.add("animate-fadeInUp");
              (card as HTMLElement).style.animationDelay = `${index * 0.15}s`;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid gap-8">
      {/* カテゴリー（フロントエンド・バックエンド等）ごとにセクションを作成する外側のループ処理 */}
      {skillCategories.map((category, categoryIndex) => (
        <section
          key={category.name}
          ref={(el) => {
            if (el) sectionRefs.current[categoryIndex] = el;
          }}
          className="bg-gradient-bg rounded-lg p-6"
        >
          <h2 className="text-2xl font-bold mb-4 text-text">{category.name}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {/* カテゴリー（フロントエンド・バックエンド等）ごとにスキルを作成する内側のループ処理 */}
            {category.skills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-card-wrapper opacity-0 translate-y-5"
                style={
                  {
                    "--animation-order": index,
                    animationFillMode: "forwards",
                  } as React.CSSProperties
                }
              >
                <SkillCard {...skill} />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
