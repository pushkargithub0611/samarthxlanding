import React, { useState } from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';
import { feature } from 'topojson-client';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { indiaGeoData } from '@/data/indiaGeoData';
import type { SchoolData, RegionData } from '@/types/dashboard';

// Mock data - Replace with actual API data
const schoolData: SchoolData = {
  states: {
    'IN-MH': { count: 96000, name: 'Maharashtra' },
    'IN-UP': { count: 150000, name: 'Uttar Pradesh' },
    'IN-MP': { count: 80000, name: 'Madhya Pradesh' },
  },
  districts: {
    'maharashtra': {
      'mumbai': { count: 5000 },
      'pune': { count: 4500 },
    }
  }
};

const DashboardSection = () => {
  const [view, setView] = useState<'state' | 'district'>('state');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const handleClick = (feature: any) => {
    if (view === 'state' && feature.data) {
      setSelectedRegion(feature.data.name);
      setView('district');
    }
  };

  const features = feature(indiaGeoData, 'india').features;
  const data = Object.entries(schoolData.states).map(([id, data]) => ({
    id,
    value: data.count,
    name: data.name
  }));

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4">School Statistics Dashboard</h2>
          {view === 'district' && (
            <Button
              variant="outline"
              onClick={() => {
                setView('state');
                setSelectedRegion(null);
              }}
              className="mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to States View
            </Button>
          )}
        </div>

        <Card className="p-6">
          <div className="h-[600px]">
            <ResponsiveChoropleth
              data={data}
              features={features}
              margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
              colors="blues"
              domain={[0, 150000]}
              unknownColor="#666666"
              label="properties.name"
              valueFormat=".0f"
              projectionScale={1000}
              projectionTranslation={[0.5, 0.5]}
              projectionRotation={[0, 0, 0]}
              enableGraticule={true}
              graticuleLineColor="#dddddd"
              borderWidth={0.5}
              borderColor="#152538"
              onClick={handleClick}
              tooltip={({ feature }) => (
                <div className="bg-white p-2 shadow-lg rounded-lg">
                  <strong>{feature.data?.name}</strong>
                  <br />
                  Schools: {feature.data?.value?.toLocaleString() || 'N/A'}
                </div>
              )}
            />
          </div>
        </Card>

        {selectedRegion && (
          <Card className="mt-6 p-6">
            <h3 className="text-xl font-semibold mb-4">
              Districts in {selectedRegion}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(schoolData.districts[selectedRegion.toLowerCase()] || {}).map(([district, data]) => (
                <Card key={district} className="p-4">
                  <h4 className="font-medium">{district}</h4>
                  <p className="text-secondary">Schools: {data.count.toLocaleString()}</p>
                </Card>
              ))}
            </div>
          </Card>
        )}
      </div>
    </section>
  );
};

export default DashboardSection;