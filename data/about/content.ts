import ROUTES from "@/constants/routes";
import type {
  AboutAudience,
  AboutHeroHighlight,
  AboutMilestone,
  AboutPillar,
  AboutStat,
  AboutValue,
} from "./types";

// ============================================================
// ABOUT PAGE CONTENT — every string the /about page renders
// lives here so the sections stay purely presentational.
// ============================================================

export const aboutHeroHighlights: AboutHeroHighlight[] = [
  { id: "verified", label: "যাচাইকৃত শিক্ষক ও মেন্টর" },
  { id: "live", label: "লাইভ ১-অন-১ ও ব্যাচ ক্লাস" },
  { id: "escrow", label: "এসক্রো সুরক্ষিত পেমেন্ট" },
  { id: "anywhere", label: "যেকোনো জায়গা থেকে শেখা" },
];

export const aboutStory = {
  paragraphs: [
    "পড়াতে চাই শুরু হয়েছিল একটি সহজ প্রশ্ন থেকে — দেশের শিক্ষার্থীরা কেন ঠিকমতো শিক্ষক পায় না? ক্যাম্পাসে, ফেসবুক গ্রুপে বা আশেপাশে কারও কাছে ক্লাস নিতে গেলেও অনেক সময় পড়ে যায়। আমরা ঠিক এই ফাঁকটাই পূরণ করতে বানিয়েছি।",
    "আমরা বিশ্বাস করি, ভালো শিক্ষা ঘটে সরাসরি সংযোগে — যখন শিক্ষার্থী নিজের গতিতে শেখে, প্রশ্ন করে, ভুল করে এবং আবার চেষ্টা করে। তাই আমাদের প্ল্যাটফর্মে রেকর্ড করা ভিডিও নয়, সত্যিকারের লাইভ ক্লাসই মূল বিষয়।",
    "আজ ঢাকা থেকে শুরু করে দেশের ৬৪ জেলার শিক্ষার্থী ও শিক্ষকরা পড়াতে চাইয়ের সাথে যুক্ত। প্রতিটি শিক্ষককে যাচাই করা হয়, প্রতিটি পেমেন্ট এসক্রোতে সুরক্ষিত থাকে, আর প্রতিটি ক্লাস শেষে রিভিউ ও রেটিং তৈরি হয়।",
  ],
  quote: "আমরা শুধু ক্লাস বিক্রি করি না — আমরা শেখার একটি পরিচিত, নির্ভরযোগ্য ও টেকসই ব্যবস্থা তৈরি করি।",
};

export const aboutPillars: AboutPillar[] = [
  {
    id: "mission",
    icon: "mission",
    label: "আমাদের লক্ষ্য",
    title: "প্রতিটি শিক্ষার্থীর কাছে সঠিক শিক্ষক",
    body: "যে কোনো শিক্ষার্থী যেন তার পছন্দের শিক্ষক খুঁজে নিয়ে নিজের সুবিধামতো সময়ে ক্লাস করতে পারে — কোনো আর্থিক বা ভৌগতিক বাধা ছাড়াই।",
    tone: "primary",
  },
  {
    id: "vision",
    icon: "vision",
    label: "আমাদের দৃষ্টিভঙ্গি",
    title: "দেশের সেরা শিক্ষকদের একটি শিক্ষা নেটওয়ার্ক",
    body: "যেখানে জ্ঞান ছড়িয়ে পড়ে, প্রতিটি শিক্ষক তার সম্মান পায় এবং প্রতিটি শিশু তার নিজস্ব গতিতে এগিয়ে যায়।",
    tone: "deep-blue",
  },
];

export const aboutStats: AboutStat[] = [
  { id: "educators", value: "2,400+", label: "যাচাইকৃত শিক্ষক", hint: "Verified educators" },
  { id: "sessions", value: "48K+", label: "সম্পন্ন লাইভ ক্লাস", hint: "Live sessions delivered" },
  { id: "districts", value: "64", label: "জেলায় পৌঁছেছি", hint: "Districts across Bangladesh" },
  { id: "rating", value: "4.9", label: "গড় সেশন রেটিং", hint: "Average session rating" },
];

export const aboutValues: AboutValue[] = [
  {
    id: "verified",
    icon: "shield",
    title: "শুধু যাচাইকৃত শিক্ষক",
    titleEn: "Verified educators only",
    description:
      "প্রতিটি মেন্টরকে আমরা যাচাই করি — শিক্ষাগত যোগ্যতা, অভিজ্ঞতা ও পরিচয় যাচাই সম্পন্ন হওয়ার পরেই তিনি প্ল্যাটফর্মে ক্লাস নিতে পারেন।",
    tag: "Verified • Qualified",
    tone: "primary",
  },
  {
    id: "direct",
    icon: "users",
    title: "সরাসরি সংযোগ",
    titleEn: "Direct, no middleman",
    description:
      "শিক্ষার্থী সরাসরি শিক্ষকের সাথে যোগাযোগ করে — কোনো দালাল নেই, কোনো লুকানো ফি নেই, আর সময় ও মূল্য দুটোই আপনার নিয়ন্ত্রণে।",
    tag: "Student ↔ Teacher",
    tone: "green",
  },
  {
    id: "escrow",
    icon: "wallet",
    title: "নিরাপদ পেমেন্ট",
    titleEn: "Escrow protected",
    description:
      "পেমেন্ট ক্লাস সম্পন্ন হওয়ার পর মেন্টরকে রিলিজ হয়। ক্লাস না হলে টাকাও ফেরত পাওয়া যায় — দুই পক্ষই নিরাপদ থাকে।",
    tag: "No class = no payment",
    tone: "deep-blue",
  },
  {
    id: "anywhere",
    icon: "globe",
    title: "যেকোনো জায়গা থেকে",
    titleEn: "Learn from anywhere",
    description:
      "দেশ বা বিদেশ — একটি স্টেবাইল ইন্টারনেট সংযোগ যথেষ্ট। লাইভ ক্লাস, নোট শেয়ারিং আর রিভিউ সবই একই জায়গায়।",
    tag: "Anywhere • Anytime",
    tone: "orange",
  },
];

export const aboutMilestones: AboutMilestone[] = [
  {
    id: "spark",
    year: "২০২৪",
    title: "একটি ভাবনা",
    description:
      "পড়াতে চাই নামে একটি ছোট উদ্যোগ হিসেবে শুরু। প্রথম কাজ ছিল এমন একটি প্ল্যাটফর্ম তৈরি, যেখানে ছাত্র ও শিক্ষক সরাসরি যুক্ত হতে পারে।",
    status: "done",
  },
  {
    id: "verification",
    year: "২০২৫",
    title: "ভেরিফিকেশন ও বিকাশ",
    description:
      "শিক্ষক যাচাই, প্রোফাইল সিস্টেম ও নিরাপদ বুকিং ফ্লো চালু হয়। প্রথম ১,০০০ জন শিক্ষার্থী এবং ২০০ জন মেন্টর প্ল্যাটফর্মে যুক্ত হন।",
    status: "done",
  },
  {
    id: "classes",
    year: "২০২৬",
    title: "গিগ ও ব্যাচ ক্লাস",
    description:
      "১-অন-১ গিগ এবং কোহর্ট ব্যাচ ক্লাস যুক্ত হয়। এখন শিক্ষার্থী চাইলে শুধু একটি সেশন নয়, ধারাবাহিক সিলেবাসও ধরতে পারে।",
    status: "active",
  },
  {
    id: "next",
    year: "আসন্ন",
    title: "পরবর্তী ধাপ",
    description:
      "মোবাইল অ্যাপ, কমপ্লিশন সার্টিফিকেশন ও শিক্ষক ইনকাম ড্যাশবোর্ড — বিদেশি শিক্ষার্থীদের জন্য বিশেষ অভিজ্ঞতা নিয়ে কাজ চলছে।",
    status: "next",
  },
];

export const aboutAudiences: AboutAudience[] = [
  {
    id: "students",
    icon: "student",
    role: "শিক্ষার্থী",
    roleEn: "For students",
    description:
      "যে বিষয়ে পড়তে চান, সেই বিষয়ের অভিজ্ঞ শিক্ষক খুঁজে নিন এবং নিজের সুবিধামতো সময়ে ক্লাস বুক করুন।",
    points: [
      "যাচাইকৃত শিক্ষক খুঁজে নিন",
      "নিজের সময় অনুযায়ী ক্লাস বুক করুন",
      "লাইভ ক্লাসে অংশ নিন ও রিভিউ দিন",
    ],
    tags: ["গণিত", "পদার্থবিজ্ঞান", "ইংরেজি", "IELTS", "কম্পিউটার প্রোগ্রামিং"],
    cta: { label: "ক্লাস খুঁজুন", href: ROUTES.MARKETPLACE, variant: "primary" },
    tone: "primary",
  },
  {
    id: "educators",
    icon: "educator",
    role: "শিক্ষক ও মেন্টর",
    roleEn: "For educators",
    description:
      "আপনার জ্ঞানকে একটি সুন্দর প্রোফাইলে তুলে ধরুন, ঘরে বসেই ক্লাস বিক্রি করুন এবং নিজের শিক্ষার্থী ও আয় সামলান।",
    points: [
      "প্রোফাইল, বিষয় ও মূল্য নির্ধারণ করুন",
      "অনলাইনেই ক্লাস ও ব্যাচ বিক্রি করুন",
      "আয়, রিভিউ ও স্টুডেন্ট ম্যানেজ করুন",
    ],
    tags: ["১-অন-১ ক্লাস", "ব্যাচ ক্লাস", "ক্যারিয়ার গাইডেন্স"],
    cta: { label: "শিক্ষক হিসেবে যোগ দিন", href: ROUTES.AUTH.SIGN_UP, variant: "secondary" },
    tone: "green",
  },
  {
    id: "institutions",
    icon: "institution",
    role: "অভিভাবক ও প্রতিষ্ঠান",
    roleEn: "For schools & institutions",
    description:
      "স্কুল, কলেজ বা প্রতিষ্ঠান হিসেবে যাচাইকৃত শিক্ষক নিয়োগ ও একাধিক শিক্ষার্থীর বুকিং এক জায়গা থেকে সামলান।",
    points: [
      "যাচাইকৃত শিক্ষকের তালিকা দেখুন",
      "একাধিক শিক্ষার্থীর বুকিং ম্যানেজ করুন",
      "অগ্রগতি ও রিপোর্ট সহজে দেখুন",
    ],
    tags: ["স্কুল", "কলেজ", "কোচিং সেন্টার"],
    cta: { label: "যোগাযোগ করুন", href: ROUTES.SUPPORT, variant: "secondary" },
    tone: "deep-blue",
  },
];
