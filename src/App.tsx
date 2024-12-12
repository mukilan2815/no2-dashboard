import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MapView from "./pages/MapView";
import Overview from "./pages/dashboard/Overview";
import Alerts from "./pages/dashboard/Alerts";
import Analytics from "./pages/Analytics";
import DataManagement from "./pages/DataManagement";
import ModelTraining from "./pages/ModelTraining";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/map" element={<MapView />} />
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/data" element={<DataManagement />} />
              <Route path="/training" element={<ModelTraining />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
