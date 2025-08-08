import React from 'react';
import { Shield, Lock, Eye } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Shield className="w-8 h-8 text-primary-600" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Gizlilik Politikası</h1>
      </div>

      <div className="card p-6">
        <div className="prose dark:prose-invert max-w-none">
          <h2>Gizlilik Politikası</h2>
          <p>Bu gizlilik politikası, 1M2A Medya Organizasyon Yazılım tarafından geliştirilen BioSynaptic platformu için geçerlidir.</p>
          
          <h3>Toplanan Bilgiler</h3>
          <p>Platformumuz, hizmet kalitesini artırmak için gerekli kişisel bilgileri toplar ve işler.</p>
          
          <h3>Bilgi Güvenliği</h3>
          <p>Tüm verileriniz en yüksek güvenlik standartlarıyla korunmaktadır.</p>
          
          <h3>İletişim</h3>
          <p>Gizlilik politikası ile ilgili sorularınız için info@1m2a.com adresinden bizimle iletişime geçebilirsiniz.</p>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
            Geliştirici: 1M2A Medya Organizasyon Yazılım
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;