import { Card } from '@/components/ui/card';
import type { SchoolData } from '@/types/dashboard';

interface StatsOverviewProps {
  data: Array<{
    id: string;
    value: number;
    name: string;
    primarySchools: number;
    secondarySchools: number;
  }>;
}

export const StatsOverview = ({ data }: StatsOverviewProps) => (
  <Card className="p-6">
    <h3 className="text-xl font-bold mb-4">School Statistics Overview</h3>
    <div className="space-y-4">
      {data.map((state) => (
        <div key={state.id} className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-lg">{state.name}</h4>
          <div className="mt-2 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Schools:</span>
              <span className="font-medium">{state.value.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Primary:</span>
              <span className="font-medium">{state.primarySchools.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Secondary:</span>
              <span className="font-medium">{state.secondarySchools.toLocaleString()}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Card>
);