
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RegisteredSchoolsSection from "@/components/sections/RegisteredSchoolsSection";

export default function Schools() {
  return (
    <>
      <Navigation />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow pt-24">
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-primary mb-2">Your Registered Schools</h2>
              <p className="text-secondary mb-8">View and manage your registered educational institutions</p>
              <RegisteredSchoolsSection />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
