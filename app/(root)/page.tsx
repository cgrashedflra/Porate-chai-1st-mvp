import CTASection from "@/components/home/CTASection";
import TopEducators from "@/components/home/TopEducators";
import ForEducatorsSection from "@/components/home/ForEducatorsSection";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import PopularSubjects from "@/components/home/PopularSubjects";
import BenefitsSection from "@/components/home/BenefitsSection";
import Testimonials from "@/components/home/Testimonials";
import TrustAndSafety from "@/components/home/TrustAndSafety";

export default function Home() {
  return (
    <div id="homepage-root" className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <PopularSubjects />
      <Testimonials />
      <HowItWorks />
      <TopEducators />
      <TrustAndSafety />
      <ForEducatorsSection />
      <CTASection />
    </div>
  );
}
