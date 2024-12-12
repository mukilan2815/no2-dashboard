import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { MapPin, Layers, Download, Filter, Upload } from 'lucide-react';
import MapComponent from '../components/map/MapComponent';
import { processTiffFile, TiffData } from '../utils/tiffProcessor';

const MapView = () => {
  const [tiffData, setTiffData] = useState<TiffData | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setIsLoading(true);
      const data = await processTiffFile(file);
      setTiffData(data);
    } catch (error) {
      console.error('Error uploading file:', error);
      // Here you would typically show an error message to the user
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Spatial Analysis</h2>
          <p className="mt-1 text-sm text-gray-500">
            High-resolution NO₂ concentration distribution across the monitored region
          </p>
        </div>
        <div className="flex space-x-3">
          <label className="cursor-pointer">
            <input
              type="file"
              accept=".tif,.tiff"
              className="hidden"
              onChange={handleFileUpload}
              disabled={isLoading}
            />
            <Button variant="outline" size="sm" as="span">
              <Upload className="w-4 h-4 mr-2" />
              Upload TIFF
            </Button>
          </label>
          <Button variant="outline" size="sm">
            <Layers className="w-4 h-4 mr-2" />
            Layer Controls
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
          <Button variant="primary" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Apply Filters
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <Card className="col-span-3 h-[calc(100vh-12rem)]">
          <CardContent className="p-0">
            {isLoading ? (
              <div className="h-full flex items-center justify-center bg-gray-100">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="mt-4 text-gray-600">Processing TIFF file...</p>
                </div>
              </div>
            ) : (
              <div className="h-full">
                <MapComponent tiffData={tiffData} />
              </div>
            )}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <h3 className="text-sm font-medium">Legend</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">High</span>
                  <div className="w-24 h-4 bg-gradient-to-r from-red-500 to-yellow-500 rounded" />
                  <span className="text-sm text-gray-600">&gt;100 µg/m³</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Medium</span>
                  <div className="w-24 h-4 bg-gradient-to-r from-yellow-500 to-green-500 rounded" />
                  <span className="text-sm text-gray-600">50-100 µg/m³</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Low</span>
                  <div className="w-24 h-4 bg-gradient-to-r from-green-500 to-blue-500 rounded" />
                  <span className="text-sm text-gray-600">&lt;50 µg/m³</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {tiffData && (
            <Card>
              <CardHeader>
                <h3 className="text-sm font-medium">Statistics</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Mean NO₂</span>
                    <span className="text-sm font-medium">
                      {(tiffData.data.reduce((a, b) => a + b, 0) / tiffData.data.length).toFixed(2)} µg/m³
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Resolution</span>
                    <span className="text-sm font-medium">
                      {tiffData.width}x{tiffData.height}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Sample Points</span>
                    <span className="text-sm font-medium">{tiffData.data.length}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapView;