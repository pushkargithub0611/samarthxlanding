
import { School, BookmarkCheck, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const compliancePoints = [
  "Automated UDISE+ report generation",
  "Real-time data synchronization",
  "Compliance monitoring dashboard",
  "Error-free submissions"
];

const UDISESection = () => {
  const { toast } = useToast();

  const handleLearnMore = () => {
    toast({
      title: "UDISE+ Documentation",
      description: "Redirecting to UDISE+ official website...",
      duration: 2000,
    });
    window.open("https://udiseplus.gov.in/#/en/home", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-blue-50 py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">UDISE+ Compliant</h2>
            <p className="text-gray-600 mb-6">
              Seamlessly integrate with UDISE+ for automated reporting and compliance with Ministry of Education standards.
            </p>
            <ul className="space-y-4 mb-8">
              {compliancePoints.map((item, index) => (
                <li key={index} className="flex items-center">
                  <BookmarkCheck className="w-5 h-5 text-blue-500 mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button
              onClick={handleLearnMore}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
            >
              Learn More About UDISE+ <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex justify-center">
            <School className="w-64 h-64 text-blue-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UDISESection;
