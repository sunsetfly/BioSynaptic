import React from 'react';
import { UserCheck, Settings, CreditCard } from 'lucide-react';

const MembershipManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <UserCheck className="w-8 h-8 text-primary-600" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Üyelik Yönetimi</h1>
      </div>

      <div className="card p-6">
        <p className="text-gray-600 dark:text-gray-400">Üyelik yönetimi sayfası geliştiriliyor...</p>
      </div>
    </div>
  );
};

export default MembershipManagement;