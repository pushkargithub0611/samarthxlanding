import React, { useState } from 'react';
import { feature } from 'topojson-client';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { indiaGeoData } from '@/data/indiaGeoData';
import { ChoroplethMap } from '@/components/dashboard/ChoroplethMap';
import { StatsOverview } from '@/components/dashboard/StatsOverview';
import type { CustomFeature } from '@/types/dashboard';

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
          <ChoroplethMap 
            data={data}
            features={features}
            onFeatureClick={handleClick}
          />
          <StatsOverview data={data} />
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;