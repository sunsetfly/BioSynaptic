import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Patients from './components/Patients/Patients';
import Appointments from './components/Appointments/Appointments';
import Consultations from './components/Consultations/Consultations';
import Messages from './components/Messages/Messages';
import Research from './components/Research/Research';
import Education from './components/Education/Education';
import Calendar from './components/Calendar/Calendar';
import GlobalStats from './components/GlobalStats/GlobalStats';
import CommunityForum from './components/Community/CommunityForum';
import PremiumFeatures from './components/Premium/PremiumFeatures';
import MembershipManagement from './components/Membership/MembershipManagement';
import Support from './components/Legal/Support';
import Settings from './components/Settings/Settings';
import Profile from './components/Profile/Profile';
import PricingPlans from './components/Subscription/PricingPlans';
import BillingHistory from './components/Subscription/BillingHistory';
import Privacy from './components/Legal/Privacy';
import Terms from './components/Legal/Terms';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header 
            onToggleSidebar={toggleSidebar}
            onToggleDarkMode={toggleDarkMode}
            darkMode={darkMode}
          />
          
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-900 p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/consultations" element={<Consultations />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/research" element={<Research />} />
              <Route path="/education" element={<Education />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/global-stats" element={<GlobalStats />} />
              <Route path="/community" element={<CommunityForum />} />
              <Route path="/premium" element={<PremiumFeatures />} />
              <Route path="/membership" element={<MembershipManagement />} />
              <Route path="/support" element={<Support />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/pricing" element={<PricingPlans />} />
              <Route path="/billing" element={<BillingHistory />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;