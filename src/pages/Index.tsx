import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import UDISESection from "@/components/sections/UDISESection";
import CTASection from "@/components/sections/CTASection";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <UDISESection />
      <CTASection />
    </div>
  );
}