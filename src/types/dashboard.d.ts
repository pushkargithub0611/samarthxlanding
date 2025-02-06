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