
import { Card } from "@/components/ui/card";
import { School, Droplets, Lightbulb, Accessibility } from "lucide-react";

const StatCard = ({ title, value, icon: Icon, color }: { 
  title: string; 
  value: number; 
  icon: any; 
  color: string;
}) => (
  <Card className="p-6 flex items-start gap-4">
    <div className={`p-3 rounded-lg ${color}`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <p className="text-sm font-medium text-muted-foreground">{title}</p>
      <h4 className="text-2xl font-bold mt-1">{value.toLocaleString()}</h4>
    </div>
  </Card>
);

export const SchoolInfrastructureStats = () => {
  const totalSchools = 848;
  const schoolsWithWater = 774;
  const schoolsWithElectricity = 717;
  const schoolsWithRamps = 729;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="Total Schools"
        value={totalSchools}
        icon={School}
        color="bg-blue-500"
      />
      <StatCard
        title="Clean Water Access"
        value={schoolsWithWater}
        icon={Droplets}
        color="bg-cyan-500"
      />
      <StatCard
        title="Electricity Access"
        value={schoolsWithElectricity}
        icon={Lightbulb}
        color="bg-yellow-500"
      />
      <StatCard
        title="Accessible (Ramps)"
        value={schoolsWithRamps}
        icon={Accessibility}
        color="bg-green-500"
      />
    </div>
  );
};
