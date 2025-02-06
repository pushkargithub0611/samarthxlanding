import React, { useState } from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';
import { feature } from 'topojson-client';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, School, GraduationCap } from 'lucide-react';
import { indiaGeoData } from '@/data/indiaGeoData';
import type { SchoolData, RegionData } from '@/types/dashboard';

interface FeatureProperties {
  id: string;
  name: string;
  totalSchools: number;
  primarySchools: number;
  secondarySchools: number;
}

interface CustomFeature {
  properties: FeatureProperties;
}

const DashboardSection = () => {
  const [view, setView] = useState<'state' | 'district'>('state');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const handleClick = (feature: any) => {
    if (view === 'state' && feature.data) {
      setSelectedRegion(feature.data.name);
      setView('district');
    }
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 p-6">
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
                projectionTranslation={[0.5, 0.6]}
                projectionRotation={[78, 0, 0]}
                enableGraticule={true}
                graticuleLineColor="#dddddd"
                borderWidth={0.5}
                borderColor="#152538"
                onClick={handleClick}
                legends={[
                  {
                    anchor: 'bottom-left',
                    direction: 'column',
                    justify: true,
                    translateX: 20,
                    translateY: -20,
                    itemsSpacing: 0,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: 'left-to-right',
                    itemTextColor: '#444444',
                    itemOpacity: 0.85,
                    symbolSize: 18,
                    effects: [
                      {
                        on: 'hover',
                        style: {
                          itemTextColor: '#000000',
                          itemOpacity: 1
                        }
                      }
                    ]
                  }
                ]}
                tooltip={({ feature }: { feature: CustomFeature }) => (
                  <div className="bg-white p-4 shadow-lg rounded-lg">
                    <strong className="text-lg">{feature.properties.name}</strong>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center gap-2">
                        <School className="h-4 w-4 text-blue-500" />
                        <span>Total Schools: {feature.properties.totalSchools?.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-green-500" />
                        <span>Primary: {feature.properties.primarySchools?.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-purple-500" />
                        <span>Secondary: {feature.properties.secondarySchools?.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
          </Card>

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
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;