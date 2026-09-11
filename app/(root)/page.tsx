import CTASection from "@/components/home/CTASection";
import FeaturedClasses, { TopBatches } from "@/components/home/TopBatches";
import TopMentors from "@/components/home/TopMentors";
import ForMentorsSection from "@/components/home/ForMentorsSection";
import Herosection from "@/components/home/Herosection";
import HowItWorks from "@/components/home/HowItWorks";
import PopularSubjects from "@/components/home/PopularSubjects";
import BenefitsSection from "@/components/home/BenefitsSection";
import Testimonials from "@/components/home/Testimonials";
import TrustAndSafety from "@/components/home/TrustAndSafety";

export default function Home() {
  return (
    <div id="homepage-root" className="min-h-screen">
      <Herosection />
      <BenefitsSection />
      <PopularSubjects />
      <Testimonials />
      <HowItWorks />
      <TopMentors />
      <TopBatches />
      <TrustAndSafety />
      <ForMentorsSection />
      <CTASection />
    </div>
  );
}
