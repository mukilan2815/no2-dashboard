import React from 'react';
import { Card, CardContent } from './Card';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  iconColor?: string;
  iconBgColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  trend,
  iconColor = 'text-blue-600',
  iconBgColor = 'bg-blue-100'
}) => {
  return (
    <Card>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
          </div>
          <div className={`p-3 rounded-full ${iconBgColor}`}>
            <Icon className={iconColor} size={24} />
          </div>
        </div>
        {trend && (
          <div className="mt-4">
            <span className={trend.isPositive ? 'text-green-500' : 'text-red-500'}>
              {trend.value}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;