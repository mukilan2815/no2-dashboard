import React from 'react';
import { Card, CardHeader, CardContent } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const alerts = [
  {
    id: 1,
    type: 'warning',
    message: 'High NO₂ concentration detected in Zone A',
    timestamp: '2 hours ago',
    status: 'active'
  },
  {
    id: 2,
    type: 'error',
    message: 'Sensor malfunction in Zone B',
    timestamp: '5 hours ago',
    status: 'investigating'
  },
  {
    id: 3,
    type: 'success',
    message: 'System update completed successfully',
    timestamp: '1 day ago',
    status: 'resolved'
  }
];

const Alerts = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Recent Alerts</h3>
            <Button variant="outline" size="sm">
              Mark All as Read
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  {alert.type === 'warning' && (
                    <AlertTriangle className="text-amber-500" />
                  )}
                  {alert.type === 'error' && (
                    <XCircle className="text-red-500" />
                  )}
                  {alert.type === 'success' && (
                    <CheckCircle className="text-green-500" />
                  )}
                  <div>
                    <p className="font-medium">{alert.message}</p>
                    <p className="text-sm text-gray-500">{alert.timestamp}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    alert.status === 'active' ? 'bg-amber-100 text-amber-700' :
                    alert.status === 'investigating' ? 'bg-blue-100 text-blue-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {alert.status}
                  </span>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Alerts;