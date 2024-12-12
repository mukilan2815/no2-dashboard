import React from 'react';
import StatCard from '../../components/ui/StatCard';
import LineChart from '../../components/charts/LineChart';
import { Wind, Database, Brain, AlertTriangle } from 'lucide-react';

const Overview = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-6">
        <StatCard
          title="Average NO₂ Level"
          value="42.5 µg/m³"
          icon={Wind}
          trend={{ value: '↑ 2.1% vs last month', isPositive: false }}
          iconColor="text-blue-600"
          iconBgColor="bg-blue-100"
        />
        <StatCard
          title="Active Sensors"
          value="124"
          icon={Database}
          trend={{ value: '↑ 5 new today', isPositive: true }}
          iconColor="text-purple-600"
          iconBgColor="bg-purple-100"
        />
        <StatCard
          title="Model Accuracy"
          value="94.2%"
          icon={Brain}
          trend={{ value: '↑ 1.2% improvement', isPositive: true }}
          iconColor="text-green-600"
          iconBgColor="bg-green-100"
        />
        <StatCard
          title="Alerts"
          value="3"
          icon={AlertTriangle}
          iconColor="text-amber-600"
          iconBgColor="bg-amber-100"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <LineChart 
          title="NO₂ Concentration Trend"
          subtitle="Last 30 days"
        />
        <LineChart 
          title="Prediction Accuracy"
          subtitle="Model performance over time"
        />
      </div>
    </div>
  );
};

export default Overview;