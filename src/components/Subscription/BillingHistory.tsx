import React from 'react';
import { CreditCard, Download, Calendar } from 'lucide-react';

const BillingHistory: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <CreditCard className="w-8 h-8 text-primary-600" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Fatura Geçmişi</h1>
      </div>

      <div className="card p-6">
        <div className="text-center py-12">
          <CreditCard className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 dark:text-gray-400 mb-2">Henüz fatura geçmişiniz bulunmuyor.</p>
          <p className="text-sm text-gray-400 dark:text-gray-500">
            Geliştirici: 1M2A Medya Organizasyon Yazılım
          </p>
        </div>
      </div>
    </div>
  );
};

export default BillingHistory;