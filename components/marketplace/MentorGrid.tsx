import { MentorCard, type MentorProps } from "@/components/MentorCard";

type Props = {
  mentors: MentorProps[];
  className?: string;
};

/**
 * MentorGrid — responsive layout for mentor cards.
 * - Smaller screens: a single column of full-width horizontal cards.
 * - sm and up: vertical cards in an auto-filling grid capped at 2 columns.
 *   Cards never drop below 330px, so a third column is never produced —
 *   where 2 won't fit, it falls back to 1.
 */
export function MentorGrid({ mentors, className }: Props) {
  return (
    <div className={className}>
      {/* Small screens — 1 column of horizontal cards */}
      <div className="flex flex-col gap-4 sm:hidden">
        {mentors.map((mentor) => (
          <MentorCard key={mentor.id} {...mentor} orientation="horizontal" />
        ))}
      </div>

      {/* sm+ — vertical cards, auto 1/2/3 columns with a 330px minimum */}
      <div className="hidden gap-5 sm:grid sm:grid-cols-[repeat(auto-fill,minmax(330px,1fr))]">
        {mentors.map((mentor) => (
          <MentorCard key={mentor.id} {...mentor} />
        ))}
      </div>
    </div>
  );
}
