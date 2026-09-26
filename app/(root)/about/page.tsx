import type { Metadata } from "next";
import { AboutCommunity } from "@/components/about/AboutCommunity";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutJourney } from "@/components/about/AboutJourney";
import { AboutStats } from "@/components/about/AboutStats";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutValues } from "@/components/about/AboutValues";
import CTASection from "@/components/home/CTASection";
import { Testimonials } from "@/components/home/Testimonials";
import ROUTES from "@/constants/routes";

const description =
  "পড়াতে চাই একটি অনলাইন শিক্ষা প্ল্যাটফর্ম — যাচাইকৃত শিক্ষক ও মেন্টরের সাথে সরাসরি যুক্ত হয়ে লাইভ ১-অন-১ ক্লাস, ব্যাচ ক্লাস ও পরামর্শ নিন। আমাদের গল্প, ভিত্তি ও লক্ষ্য জেনে নিন।";

export const metadata: Metadata = {
  title: "About Porate Chai — পড়াতে চাই",
  description,
  alternates: { canonical: ROUTES.ABOUT },
  openGraph: {
    title: "About Porate Chai — পড়াতে চাই",
    description,
    url: ROUTES.ABOUT,
    siteName: "Porate Chai",
    locale: "bn_BD",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div id="about-root">
      <AboutHero />
      <AboutStory />
      <AboutStats />
      <AboutValues />
      <AboutJourney />
      <AboutCommunity />
      <Testimonials />
      <CTASection />
    </div>
  );
}
