import React from 'react';
import { Upload, Database, FileType } from 'lucide-react';

const DataManagement = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Data Sources</h3>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            Drag and drop satellite data files, or click to select files
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
            Upload Files
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Recent Datasets</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <FileType className="text-blue-600" />
                <div>
                  <p className="font-medium">Satellite_Data_{i}.csv</p>
                  <p className="text-sm text-gray-500">2.4 GB • Uploaded 2 days ago</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Storage Usage</h3>
        <div className="flex items-center space-x-4">
          <Database className="h-8 w-8 text-blue-600" />
          <div className="flex-1">
            <div className="h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-blue-600 rounded-full" style={{ width: '65%' }}></div>
            </div>
            <div className="mt-2 flex justify-between text-sm">
              <span>65% used</span>
              <span>35% available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataManagement;