import React from 'react';
import { Settings as SettingsIcon, User, Bell, Shield } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <SettingsIcon className="w-8 h-8 text-primary-600" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Ayarlar</h1>
      </div>

      <div className="card p-6">
        <p className="text-gray-600 dark:text-gray-400">Ayarlar sayfası geliştiriliyor...</p>
      </div>
    </div>
  );
};

export default Settings;