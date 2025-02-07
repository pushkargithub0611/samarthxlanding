
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const CTASection = () => {
  const { toast } = useToast();

  const handleDemoRequest = () => {
    toast({
      title: "Demo Requested",
      description: "Our team will contact you shortly to schedule a demo.",
      duration: 3000,
    });
  };

  const handleContactSales = () => {
    toast({
      title: "Contact Sales",
      description: "Connecting you with our sales team...",
      duration: 3000,
    });
  };

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-blue-600">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Transform Your School Management?
        </h2>
        <p className="text-white/90 mb-8 text-lg">
          Join hundreds of schools already using SamarthX for efficient administration
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-blue-500 hover:bg-gray-100"
            onClick={handleDemoRequest}
          >
            Schedule Demo
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600"
            onClick={handleContactSales}
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
