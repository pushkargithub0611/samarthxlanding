
import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Primary Schools', value: 450 },
  { name: 'Secondary Schools', value: 250 },
  { name: 'Higher Secondary', value: 148 }
];

const COLORS = ['#3b82f6', '#8b5cf6', '#06b6d4'];

export const SchoolTypeDistribution = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">School Type Distribution</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
