import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-purple-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Transform Your School Management?
        </h2>
        <p className="text-white/90 mb-8 text-lg">
          Join hundreds of schools already using SamarthX for efficient administration
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Schedule Demo
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-purple-700">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;