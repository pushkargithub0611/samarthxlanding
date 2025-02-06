import { ResponsiveChoropleth } from '@nivo/geo';
import { Card } from '@/components/ui/card';
import { MapTooltip } from './MapTooltip';
import type { CustomFeature } from '@/types/dashboard';

interface ChoroplethMapProps {
  data: Array<{
    id: string;
    value: number;
    name: string;
    primarySchools: number;
    secondarySchools: number;
  }>;
  features: any[];
  onFeatureClick: (feature: any) => void;
}

export const ChoroplethMap = ({ data, features, onFeatureClick }: ChoroplethMapProps) => (
  <Card className="lg:col-span-2 p-6">
    <div style={{ height: '600px', width: '100%' }}>
      <ResponsiveChoropleth
        data={data}
        features={features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="blues"
        domain={[0, 150000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".0f"
        projectionScale={600}
        projectionTranslation={[0.5, 0.6]}
        projectionRotation={[78, 0, 0]}
        borderWidth={0.5}
        borderColor="#152538"
        onClick={onFeatureClick}
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
        tooltip={({ feature }) => <MapTooltip feature={feature as CustomFeature} />}
      />
    </div>
  </Card>
);