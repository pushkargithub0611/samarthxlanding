
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "Bihar",
    computer: 0,
    internet: 1,
    library: 30,
    playground: 39
  },
  {
    name: "Rajasthan",
    computer: 0,
    internet: 0,
    library: 0,
    playground: 0
  },
  {
    name: "Tripura",
    computer: 1,
    internet: 0,
    library: 23,
    playground: 26
  },
  {
    name: "Maharashtra",
    computer: 169,
    internet: 6,
    library: 329,
    playground: 275
  },
  {
    name: "Gujarat",
    computer: 1,
    internet: 1,
    library: 1,
    playground: 1
  }
];

export const InfrastructureChart = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Infrastructure Distribution by State</h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" height={60} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="computer" name="Computers" fill="#3b82f6" />
            <Bar dataKey="internet" name="Internet" fill="#06b6d4" />
            <Bar dataKey="library" name="Library" fill="#8b5cf6" />
            <Bar dataKey="playground" name="Playground" fill="#22c55e" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
