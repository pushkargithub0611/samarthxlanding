import React from 'react';
import { Card } from '@/components/ui/card';
import { StatsOverview } from '@/components/dashboard/StatsOverview';
import { feature } from 'topojson-client';
import { indiaGeoData } from '@/data/indiaGeoData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4">UDISE+ School Statistics Dashboard</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="col-span-2 p-6">
            <h3 className="text-xl font-bold mb-4">School Distribution</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="primarySchools" fill="#4f46e5" name="Primary Schools" />
                  <Bar dataKey="secondarySchools" fill="#06b6d4" name="Secondary Schools" />
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