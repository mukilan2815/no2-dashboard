import React from 'react';
import { Card, CardHeader, CardContent } from './Card';

interface DataPoint {
  x: number;
  y: number;
}

interface ScientificChartProps {
  title: string;
  subtitle?: string;
  data?: DataPoint[];
  xLabel?: string;
  yLabel?: string;
  type: 'line' | 'scatter' | 'bar';
  height?: string;
}

const ScientificChart: React.FC<ScientificChartProps> = ({
  title,
  subtitle,
  xLabel,
  yLabel,
  type,
  height = 'h-96'
}) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col space-y-1">
          <h3 className="text-lg font-semibold">{title}</h3>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
      </CardHeader>
      <CardContent>
        <div className={`${height} relative`}>
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center space-y-2">
              <p className="text-gray-500">Visualization placeholder for {type} chart</p>
              {(xLabel || yLabel) && (
                <p className="text-sm text-gray-400">
                  {xLabel && `X: ${xLabel}`} {yLabel && `Y: ${yLabel}`}
                </p>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScientificChart;