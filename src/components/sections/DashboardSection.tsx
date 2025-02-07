
import { SchoolInfrastructureStats } from "@/components/dashboard/SchoolInfrastructureStats";
import { InfrastructureChart } from "@/components/dashboard/InfrastructureChart";
import { SchoolTypeDistribution } from "@/components/dashboard/SchoolTypeDistribution";

const DashboardSection = () => {
  return (
    <section className="py-16 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            School Infrastructure Dashboard
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive overview of educational infrastructure across India, showcasing key metrics and distribution of facilities.
          </p>
        </div>

        <div className="space-y-8">
          <SchoolInfrastructureStats />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <InfrastructureChart />
            </div>
            <div>
              <SchoolTypeDistribution />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
