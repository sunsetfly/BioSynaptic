import React from 'react';
import { User, Edit, Camera } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <User className="w-8 h-8 text-primary-600" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Profil</h1>
      </div>

      <div className="card p-6">
        <p className="text-gray-600 dark:text-gray-400">Profil sayfası geliştiriliyor...</p>
      </div>
    </div>
  );
};

export default Profile;