
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "Bihar",
    computer: 120,
    internet: 85,
    library: 230,
    playground: 190
  },
  {
    name: "Rajasthan",
    computer: 145,
    internet: 95,
    library: 210,
    playground: 180
  },
  {
    name: "Tripura",
    computer: 80,
    internet: 60,
    library: 123,
    playground: 126
  },
  {
    name: "Maharashtra",
    computer: 169,
    internet: 146,
    library: 329,
    playground: 275
  },
  {
    name: "Gujarat",
    computer: 130,
    internet: 110,
    library: 220,
    playground: 190
  }
];

export const InfrastructureChart = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6">School Infrastructure Distribution by State</h3>
      <div className="h-[500px]"> {/* Increased height for better visibility */}
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={data} 
            margin={{ 
              top: 20, 
              right: 30, 
              left: 40, // Increased left margin for Y-axis labels
              bottom: 70 // Increased bottom margin for X-axis labels
            }}
          >
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="name" 
              angle={-45} 
              textAnchor="end" 
              height={60} 
              interval={0} // Show all labels
              tick={{ 
                fontSize: 12,
                dy: 10 // Adjust vertical position of labels
              }}
            />
            <YAxis
              tick={{ 
                fontSize: 12 
              }}
              label={{ 
                value: 'Number of Schools', 
                angle: -90, 
                position: 'insideLeft',
                style: { textAnchor: 'middle' }
              }}
            />
            <Tooltip 
              cursor={{ fillOpacity: 0.1 }}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #ccc',
                borderRadius: '4px',
                padding: '8px'
              }}
            />
            <Legend 
              verticalAlign="top" 
              height={36}
              wrapperStyle={{
                paddingBottom: '20px'
              }}
            />
            <Bar dataKey="computer" name="Schools with Computers" fill="#3b82f6" />
            <Bar dataKey="internet" name="Schools with Internet" fill="#06b6d4" />
            <Bar dataKey="library" name="Schools with Library" fill="#8b5cf6" />
            <Bar dataKey="playground" name="Schools with Playground" fill="#22c55e" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
