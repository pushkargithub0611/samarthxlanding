import { Card } from '@/components/ui/card';
import type { SchoolData } from '@/types/dashboard';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

interface StatsOverviewProps {
  data: Array<{
    id: string;
    value: number;
    name: string;
    primarySchools: number;
    secondarySchools: number;
  }>;
}

export const StatsOverview = ({ data }: StatsOverviewProps) => {
  // Sort data by total schools
  const sortedData = [...data].sort((a, b) => b.value - a.value);

  return (
    <Card className="p-6 bg-white shadow-sm">
      <h3 className="text-xl font-bold mb-2">State-wise Analysis</h3>
      <p className="text-secondary mb-4">Detailed breakdown by state</p>
      <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
        {sortedData.map((state, index) => {
          const primaryPercentage = ((state.primarySchools / state.value) * 100).toFixed(1);
          const secondaryPercentage = ((state.secondarySchools / state.value) * 100).toFixed(1);
          
          return (
            <div 
              key={state.id} 
              className="p-4 rounded-lg transition-colors hover:bg-gray-50"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">{state.name}</h4>
                  <p className="text-sm text-gray-500">Rank #{index + 1}</p>
                </div>
                <span className="text-lg font-bold text-gray-900">
                  {state.value.toLocaleString()}
                </span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-purple-600">Primary Schools</span>
                    <span className="font-medium">{primaryPercentage}%</span>
                  </div>
                  <div className="h-2 bg-purple-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-purple-600 rounded-full"
                      style={{ width: `${primaryPercentage}%` }}
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-blue-600">Secondary Schools</span>
                    <span className="font-medium">{secondaryPercentage}%</span>
                  </div>
                  <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: `${secondaryPercentage}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};