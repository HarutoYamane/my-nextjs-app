import { type BarProps } from "@/types/skills";

export default function Bar({ percentage, color }: BarProps) {
  return (
    <div className="h-2 bg-gray-200 rounded overflow-hidden">
      <div
        className={`h-full rounded transition-width duration-500 ease-in-out ${color}`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
