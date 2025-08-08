import React from 'react';
import { HelpCircle, Mail, Phone, MessageSquare } from 'lucide-react';

const Support: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <HelpCircle className="w-8 h-8 text-primary-600" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Destek</h1>
      </div>

      <div className="card p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">İletişim Bilgileri</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-600" />
                <span className="text-gray-700 dark:text-gray-300">info@1m2a.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-600" />
                <span className="text-gray-700 dark:text-gray-300">0 (532) 232 45 31</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Geliştirici</h2>
            <p className="text-gray-700 dark:text-gray-300">1M2A Medya Organizasyon Yazılım</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;