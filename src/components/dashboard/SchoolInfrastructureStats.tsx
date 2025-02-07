
import { Card } from "@/components/ui/card";
import { School, Droplets, Lightbulb, Accessibility, Building2, GraduationCap, Users2, BookOpen } from "lucide-react";

const StatCard = ({ title, value, icon: Icon, color, description }: { 
  title: string; 
  value: number; 
  icon: any; 
  color: string;
  description?: string;
}) => (
  <Card className="p-6 flex items-start gap-4">
    <div className={`p-3 rounded-lg ${color}`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <p className="text-sm font-medium text-muted-foreground">{title}</p>
      <h4 className="text-2xl font-bold mt-1">{value.toLocaleString()}</h4>
      {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
    </div>
  </Card>
);

export const SchoolInfrastructureStats = () => {
  const totalSchools = 848;
  const primarySchools = 450;
  const secondarySchools = 250;
  const higherSecondary = 148;
  const schoolsWithWater = 774;
  const schoolsWithElectricity = 717;
  const schoolsWithRamps = 729;
  const schoolsWithLibrary = 383;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="Total Schools"
        value={totalSchools}
        icon={School}
        color="bg-blue-500"
        description="Total registered schools"
      />
      <StatCard
        title="Primary Schools"
        value={primarySchools}
        icon={Building2}
        color="bg-purple-500"
        description="Classes 1-5"
      />
      <StatCard
        title="Secondary Schools"
        value={secondarySchools}
        icon={GraduationCap}
        color="bg-indigo-500"
        description="Classes 6-10"
      />
      <StatCard
        title="Higher Secondary"
        value={higherSecondary}
        icon={Users2}
        color="bg-violet-500"
        description="Classes 11-12"
      />
      <StatCard
        title="Clean Water Access"
        value={schoolsWithWater}
        icon={Droplets}
        color="bg-cyan-500"
        description={`${Math.round((schoolsWithWater/totalSchools) * 100)}% coverage`}
      />
      <StatCard
        title="Electricity Access"
        value={schoolsWithElectricity}
        icon={Lightbulb}
        color="bg-yellow-500"
        description={`${Math.round((schoolsWithElectricity/totalSchools) * 100)}% coverage`}
      />
      <StatCard
        title="Accessible (Ramps)"
        value={schoolsWithRamps}
        icon={Accessibility}
        color="bg-green-500"
        description={`${Math.round((schoolsWithRamps/totalSchools) * 100)}% coverage`}
      />
      <StatCard
        title="Libraries"
        value={schoolsWithLibrary}
        icon={BookOpen}
        color="bg-orange-500"
        description={`${Math.round((schoolsWithLibrary/totalSchools) * 100)}% coverage`}
      />
    </div>
  );
};
