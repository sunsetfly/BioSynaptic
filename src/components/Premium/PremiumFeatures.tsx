import React from 'react';
import { Crown, Star, Zap } from 'lucide-react';

const PremiumFeatures: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Crown className="w-8 h-8 text-primary-600" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Premium Özellikler</h1>
      </div>

      <div className="card p-6">
        <p className="text-gray-600 dark:text-gray-400">Premium özellikler sayfası geliştiriliyor...</p>
      </div>
    </div>
  );
};

export default PremiumFeatures;