import React from 'react';
import { Card, CardHeader, CardContent } from '../ui/Card';

interface LineChartProps {
  title: string;
  subtitle?: string;
}

const LineChart: React.FC<LineChartProps> = ({ title, subtitle }) => {
  return (
    <Card className="h-96">
      <CardHeader>
        <h3 className="text-lg font-semibold">{title}</h3>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </CardHeader>
      <CardContent>
        <div className="h-full flex items-center justify-center bg-gray-50 rounded">
          <p className="text-gray-500">Chart visualization will be integrated here</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LineChart;