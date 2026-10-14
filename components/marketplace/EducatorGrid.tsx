import { EducatorCard, type EducatorCardProps } from "@/components/EducatorCard";

type Props = {
  educators: EducatorCardProps[];
  className?: string;
};

/**
 * EducatorGrid — responsive layout for educator cards.
 * Always the same vertical card: 1 column on small screens,
 * then an auto-filling grid capped at a 330px minimum card width,
 * so columns are only added once a card stays comfortably readable.
 * Where 330px won't fit twice, it falls back to 1 column.
 */
export function EducatorGrid({ educators, className }: Props) {
  return (
    <div
      className={`grid grid-cols-1 items-stretch gap-4 sm:grid-cols-[repeat(auto-fill,minmax(330px,1fr))] sm:gap-5 ${className ?? ""}`}
    >
      {educators.map((educator) => (
        <EducatorCard key={educator.id} {...educator} />
      ))}
    </div>
  );
}
