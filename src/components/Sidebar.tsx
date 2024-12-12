import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Map, 
  Bell, 
  BarChart2, 
  Database, 
  Brain, 
  Settings 
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: LayoutDashboard, label: 'Overview', path: '/' },
    { icon: Map, label: 'Map View', path: '/map' },
    { icon: Bell, label: 'Alerts', path: '/alerts' },
    { icon: BarChart2, label: 'Analytics', path: '/analytics' },
    { icon: Database, label: 'Data Management', path: '/data' },
    { icon: Brain, label: 'Model Training', path: '/training' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold">AirQuality AI</h1>
        <p className="text-gray-400 text-sm">ML-Powered Monitoring</p>
      </div>
      
      <nav className="space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;