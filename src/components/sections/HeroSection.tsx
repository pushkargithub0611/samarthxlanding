import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transforming School Management with
            <span className="text-accent"> SamarthX</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Comprehensive ERP solution for Indian schools under the Ministry of Education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-blue-500 text-white">
              Request Demo
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-blue-50">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;