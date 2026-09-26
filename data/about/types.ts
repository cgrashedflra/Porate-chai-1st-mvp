/** Brand colour family used to tint an about-page block. */
export type AboutTone = "primary" | "green" | "deep-blue" | "orange";

export type AboutIconName = "shield" | "users" | "wallet" | "globe";

export type AboutAudienceIconName = "student" | "educator" | "institution";

export type AboutPillarIconName = "mission" | "vision";

export interface AboutPillar {
  id: string;
  icon: AboutPillarIconName;
  label: string;
  title: string;
  body: string;
  tone: "primary" | "deep-blue";
}

export interface AboutHeroHighlight {
  id: string;
  label: string;
}

export interface AboutStat {
  id: string;
  value: string;
  label: string;
  hint: string;
}

export interface AboutValue {
  id: string;
  icon: AboutIconName;
  title: string;
  titleEn: string;
  description: string;
  tag: string;
  tone: AboutTone;
}

export type AboutMilestoneStatus = "done" | "active" | "next";

export interface AboutMilestone {
  id: string;
  year: string;
  title: string;
  description: string;
  status: AboutMilestoneStatus;
}

export interface AboutAudience {
  id: string;
  icon: AboutAudienceIconName;
  role: string;
  roleEn: string;
  description: string;
  points: string[];
  tags: string[];
  cta: { label: string; href: string; variant: "primary" | "secondary" };
  tone: AboutTone;
}
