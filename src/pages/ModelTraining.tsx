import React from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import ScientificChart from '../components/ui/ScientificChart';
import { Brain, GitBranch, Settings, Play, Save } from 'lucide-react';

const ModelTraining = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Model Training</h2>
          <p className="mt-1 text-sm text-gray-500">
            Configure and train machine learning models for NO₂ concentration prediction
          </p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Save className="w-4 h-4 mr-2" />
            Save Configuration
          </Button>
          <Button variant="primary">
            <Play className="w-4 h-4 mr-2" />
            Start Training
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Training Progress</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <ScientificChart
                  title="Loss Function"
                  type="line"
                  xLabel="Epochs"
                  yLabel="Loss"
                  height="h-64"
                />
                <div className="grid grid-cols-4 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500">Current Epoch</p>
                    <p className="mt-1 text-xl font-semibold">45/100</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500">Training Loss</p>
                    <p className="mt-1 text-xl font-semibold">0.0234</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500">Validation Loss</p>
                    <p className="mt-1 text-xl font-semibold">0.0256</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500">Time Remaining</p>
                    <p className="mt-1 text-xl font-semibold">1h 23m</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Model Performance</h3>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <ScientificChart
                  title="Predicted vs Actual"
                  type="scatter"
                  xLabel="Actual Values"
                  yLabel="Predicted Values"
                  height="h-64"
                />
                <ScientificChart
                  title="Residual Plot"
                  type="scatter"
                  xLabel="Predicted Values"
                  yLabel="Residuals"
                  height="h-64"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Model Configuration</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Algorithm</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                    <option>Random Forest</option>
                    <option>XGBoost</option>
                    <option>Deep Neural Network</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Input Resolution</label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="number"
                      className="flex-1 rounded-l-md border-gray-300"
                      placeholder="10"
                    />
                    <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500">
                      km
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Target Resolution</label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="number"
                      className="flex-1 rounded-l-md border-gray-300"
                      placeholder="1"
                    />
                    <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500">
                      km
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Hyperparameters</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Learning Rate</label>
                  <input
                    type="number"
                    step="0.001"
                    className="mt-1 block w-full rounded-md border-gray-300"
                    placeholder="0.001"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Batch Size</label>
                  <input
                    type="number"
                    className="mt-1 block w-full rounded-md border-gray-300"
                    placeholder="32"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Max Epochs</label>
                  <input
                    type="number"
                    className="mt-1 block w-full rounded-md border-gray-300"
                    placeholder="100"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ModelTraining;