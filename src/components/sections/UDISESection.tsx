import { School, BookmarkCheck } from "lucide-react";

const compliancePoints = [
  "Automated UDISE+ report generation",
  "Real-time data synchronization",
  "Compliance monitoring dashboard",
  "Error-free submissions"
];

const UDISESection = () => {
  return (
    <section className="bg-purple-50 py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">UDISE+ Compliant</h2>
            <p className="text-gray-600 mb-6">
              Seamlessly integrate with UDISE+ for automated reporting and compliance with Ministry of Education standards.
            </p>
            <ul className="space-y-4">
              {compliancePoints.map((item, index) => (
                <li key={index} className="flex items-center">
                  <BookmarkCheck className="w-5 h-5 text-purple-600 mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <School className="w-64 h-64 text-purple-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UDISESection;