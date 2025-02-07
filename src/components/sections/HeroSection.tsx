
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const HeroSection = () => {
  const { toast } = useToast();

  const handleRequestDemo = () => {
    toast({
      title: "Demo Request",
      description: "Thank you for your interest! Our team will contact you shortly.",
      duration: 3000,
    });
  };

  const handleLearnMore = () => {
    toast({
      title: "Learn More",
      description: "Redirecting to our comprehensive documentation...",
      duration: 2000,
    });
  };

  return (
    <section className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transforming School Management with
            <span className="text-blue-500"> SamarthX</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Comprehensive ERP solution for Indian schools under the Ministry of Education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-500 hover:bg-blue-600 text-white"
              onClick={handleRequestDemo}
            >
              Request Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-500 text-blue-500 hover:bg-blue-50"
              onClick={handleLearnMore}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
