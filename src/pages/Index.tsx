
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import UDISESection from "@/components/sections/UDISESection";
import CTASection from "@/components/sections/CTASection";
import DashboardSection from "@/components/sections/DashboardSection";
import RegisteredSchoolsSection from "@/components/sections/RegisteredSchoolsSection";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export default function Index() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      <Navigation />
      <div className="flex flex-col min-h-screen">
        <main>
          <HeroSection />
          <DashboardSection />
          {isAuthenticated && (
            <section className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-primary mb-2">Your Registered Schools</h2>
                <p className="text-secondary mb-8">View and manage your registered educational institutions</p>
                <RegisteredSchoolsSection />
              </div>
            </section>
          )}
          <FeaturesSection />
          <UDISESection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}
