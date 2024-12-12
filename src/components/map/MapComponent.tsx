import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Rectangle, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { TiffData } from '../../utils/tiffProcessor';

interface MapComponentProps {
  tiffData?: TiffData;
}

const MapComponent: React.FC<MapComponentProps> = ({ tiffData }) => {
  const defaultCenter = [0, 0];
  const defaultZoom = 2;

  const getColor = (value: number) => {
    // Color scale for NO2 concentration (µg/m³)
    if (value > 100) return '#ef4444'; // High (red)
    if (value > 50) return '#f59e0b';  // Medium (amber)
    return '#10b981';                  // Low (green)
  };

  const renderHeatmap = () => {
    if (!tiffData) return null;

    const { data, width, height, bounds } = tiffData;
    const cellWidth = (bounds[2] - bounds[0]) / width;
    const cellHeight = (bounds[3] - bounds[1]) / height;

    return data.map((value, index) => {
      const col = index % width;
      const row = Math.floor(index / width);
      
      const west = bounds[0] + col * cellWidth;
      const north = bounds[3] - row * cellHeight;
      const east = west + cellWidth;
      const south = north - cellHeight;

      return (
        <Rectangle
          key={index}
          bounds={[[south, west], [north, east]]}
          pathOptions={{
            color: getColor(value),
            weight: 1,
            fillOpacity: 0.5
          }}
        >
          <Popup>
            NO₂ Concentration: {value.toFixed(2)} µg/m³
          </Popup>
        </Rectangle>
      );
    });
  };

  return (
    <MapContainer
      center={defaultCenter}
      zoom={defaultZoom}
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {renderHeatmap()}
    </MapContainer>
  );
};

export default MapComponent;