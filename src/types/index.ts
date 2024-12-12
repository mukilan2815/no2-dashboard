export interface AirQualityData {
  latitude: number;
  longitude: number;
  no2Level: number;
  timestamp: string;
}

export interface MapViewProps {
  data: AirQualityData[];
}

export interface ChartProps {
  data: AirQualityData[];
}