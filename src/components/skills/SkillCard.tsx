import { Icon } from "@iconify/react";
// [astro-icon を使ってアイコンを表示する](https://github.com/natemoo-re/astro-icon)
// [アイコンはここから探す](https://icon-sets.iconify.design/skill-icons/?category=Programming)
import { experienceLevels, levelLevels, interestLevels } from "@/consts";
import { type SkillProps } from "@/types/skills";
import Bar from "@/components/skills/Bar";

const MAX_SCORE = 5;
const calcPercentage = (score: number) => (score / MAX_SCORE) * 100;

export default function SkillCard({
  name,
  icon,
  description,
  experience,
  level,
  interest,
}: SkillProps) {
  return (
    <div className="bg-card-bg rounded-lg p-6 shadow-md">
      <div className="flex gap-6 items-center mb-4">
        <div className="h-10">
          <Icon icon={icon} width={40} height={40} />
        </div>
        <h3 className="text-lg text-text m-0">{name}</h3>
      </div>

      <div className="space-y-4">
        <p className="text-sm text-text mb-4">{description}</p>

        <div className="space-y-2">
          <span className="text-xs text-caption">
            経験値 :{" "}
            {experienceLevels[experience as keyof typeof experienceLevels]}
          </span>
          <Bar percentage={calcPercentage(experience)} color="bg-green-500" />
        </div>

        <div className="space-y-2">
          <span className="text-xs text-caption">
            習熟度 : {levelLevels[level as keyof typeof levelLevels]}
          </span>
          <Bar percentage={calcPercentage(level)} color="bg-blue-500" />
        </div>

        <div className="space-y-2">
          <span className="text-xs text-caption">
            関心度 : {interestLevels[interest as keyof typeof interestLevels]}
          </span>
          <Bar percentage={calcPercentage(interest)} color="bg-yellow-400" />
        </div>
      </div>
    </div>
  );
}
