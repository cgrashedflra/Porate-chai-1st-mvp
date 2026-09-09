import CTASection from "@/components/home/CTASection";
import FeaturedClasses from "@/components/home/FeaturedClasses";
import FeaturedMentors from "@/components/home/FeaturedMentors";
import ForMentorsSection from "@/components/home/ForMentorsSection";
import Herosection from "@/components/home/Herosection";
import HowItWorks from "@/components/home/HowItWorks";
import PopularSubjects from "@/components/home/PopularSubjects";
import ValueFeatures from "@/components/home/ValueFeatures";

export default function Home() {
  return (
    <div id="homepage-root" className="min-h-screen">
      <Herosection />
      <ValueFeatures />
      <HowItWorks />
      <FeaturedMentors />
      <PopularSubjects />
      <FeaturedClasses />
      <ForMentorsSection />
      <CTASection />
    </div>
  );
}
