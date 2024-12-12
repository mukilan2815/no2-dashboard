import React from 'react';
import { Card } from './Card';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon: LucideIcon;
  description?: string;
  trend?: {
    value: number;
    period: string;
    isPositive: boolean;
  };
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  unit,
  icon: Icon,
  description,
  trend,
  className = ''
}) => {
  return (
    <Card className={`${className} hover:shadow-md transition-shadow`}>
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <div className="mt-2 flex items-baseline">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                {value}
              </h3>
              {unit && <span className="ml-1 text-sm text-gray-500">{unit}</span>}
            </div>
            {description && (
              <p className="mt-1 text-sm text-gray-500">{description}</p>
            )}
          </div>
          <div className="p-3 bg-blue-50 rounded-lg">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
        </div>
        {trend && (
          <div className="mt-4">
            <div className={`flex items-center text-sm ${
              trend.isPositive ? 'text-green-600' : 'text-red-600'
            }`}>
              <span className="font-medium">
                {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
              </span>
              <span className="ml-1 text-gray-500">vs {trend.period}</span>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default MetricCard;