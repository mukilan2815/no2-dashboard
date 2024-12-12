import React from 'react';
import { BarChart2, TrendingUp, Wind } from 'lucide-react';

const Analytics = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Average NO₂ Level</p>
              <h3 className="text-2xl font-bold">42.5 µg/m³</h3>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Wind className="text-blue-600" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-green-500">↑ 2.1%</span>
            <span className="text-gray-500 ml-2">vs last month</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Data Points</p>
              <h3 className="text-2xl font-bold">8,542</h3>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <BarChart2 className="text-purple-600" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-gray-500">Last updated 2 hours ago</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Model Accuracy</p>
              <h3 className="text-2xl font-bold">94.2%</h3>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <TrendingUp className="text-green-600" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-green-500">↑ 1.2%</span>
            <span className="text-gray-500 ml-2">improvement</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg h-96">
          <h3 className="text-lg font-semibold mb-4">Temporal Analysis</h3>
          <div className="h-full flex items-center justify-center bg-gray-50 rounded">
            Time series chart placeholder
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg h-96">
          <h3 className="text-lg font-semibold mb-4">Spatial Distribution</h3>
          <div className="h-full flex items-center justify-center bg-gray-50 rounded">
            Heat map placeholder
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;