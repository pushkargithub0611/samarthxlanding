import type { ChoroplethBoundFeature } from '@nivo/geo';

export interface SchoolStats {
  count: number;
  name?: string;
}

export interface RegionData {
  [key: string]: SchoolStats;
}

export interface SchoolData {
  states: RegionData;
  districts: {
    [key: string]: RegionData;
  };
}

export interface FeatureProperties {
  id: string;
  name: string;
  totalSchools: number;
  primarySchools: number;
  secondarySchools: number;
}

export interface CustomFeature extends ChoroplethBoundFeature {
  properties: FeatureProperties;
}