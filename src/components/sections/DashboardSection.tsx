import React from 'react';
import { Card } from '@/components/ui/card';
import { StatsOverview } from '@/components/dashboard/StatsOverview';
import { feature } from 'topojson-client';
import { indiaGeoData } from '@/data/indiaGeoData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const DashboardSection = () => {
  // Convert TopoJSON to GeoJSON
  const features = feature(indiaGeoData, indiaGeoData.objects.india).features;
  const data = features.map(f => ({
    id: f.properties.id,
    value: f.properties.totalSchools,
    name: f.properties.name,
    primarySchools: f.properties.primarySchools,
    secondarySchools: f.properties.secondarySchools
  }));

  const totalSchools = data.reduce((acc, curr) => acc + curr.value, 0);
  const totalPrimary = data.reduce((acc, curr) => acc + curr.primarySchools, 0);
  const totalSecondary = data.reduce((acc, curr) => acc + curr.secondarySchools, 0);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-primary mb-2">UDISE+ School Statistics Dashboard</h2>
          <p className="text-secondary mb-6">Comprehensive overview of educational institutions across states</p>
          
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-white border-purple-100">
              <h4 className="text-sm font-medium text-purple-600 mb-1">Total Schools</h4>
              <p className="text-2xl font-bold text-purple-900">{totalSchools.toLocaleString()}</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-white border-blue-100">
              <h4 className="text-sm font-medium text-blue-600 mb-1">Primary Schools</h4>
              <p className="text-2xl font-bold text-blue-900">{totalPrimary.toLocaleString()}</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-cyan-50 to-white border-cyan-100">
              <h4 className="text-sm font-medium text-cyan-600 mb-1">Secondary Schools</h4>
              <p className="text-2xl font-bold text-cyan-900">{totalSecondary.toLocaleString()}</p>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="col-span-2 p-6 bg-white shadow-sm">
            <h3 className="text-xl font-bold mb-2">School Distribution by State</h3>
            <p className="text-secondary mb-4">Comparison of primary and secondary schools across states</p>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 70 }}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis 
                    dataKey="name" 
                    angle={-45}
                    textAnchor="end"
                    height={70}
                    interval={0}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Legend />
                  <Bar 
                    dataKey="primarySchools" 
                    name="Primary Schools" 
                    fill="#8B5CF6" 
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar 
                    dataKey="secondarySchools" 
                    name="Secondary Schools" 
                    fill="#0EA5E9" 
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
          <StatsOverview data={data} />
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;