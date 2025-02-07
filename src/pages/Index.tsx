
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import UDISESection from "@/components/sections/UDISESection";
import CTASection from "@/components/sections/CTASection";
import DashboardSection from "@/components/sections/DashboardSection";
import AccessibilityControls from "@/components/accessibility/AccessibilityControls";

export default function Index() {
  return (
    <>
      <Navigation />
      <div className="flex flex-col min-h-screen">
        <main>
          <HeroSection />
          <DashboardSection />
          <FeaturesSection />
          <UDISESection />
          <CTASection />
        </main>
        <Footer />
      </div>
      <AccessibilityControls />
    </>
  );
}
