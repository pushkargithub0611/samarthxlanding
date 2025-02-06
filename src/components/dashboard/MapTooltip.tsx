import { School, GraduationCap } from 'lucide-react';
import type { CustomFeature } from '@/types/dashboard';

interface MapTooltipProps {
  feature: CustomFeature;
}

export const MapTooltip = ({ feature }: MapTooltipProps) => (
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
);