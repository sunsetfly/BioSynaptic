import React from 'react';
import { FileText, Scale, AlertTriangle } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <FileText className="w-8 h-8 text-primary-600" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Kullanım Şartları</h1>
      </div>

      <div className="card p-6">
        <div className="prose dark:prose-invert max-w-none">
          <h2>Kullanım Şartları</h2>
          <p>Bu kullanım şartları, 1M2A Medya Organizasyon Yazılım tarafından geliştirilen BioSynaptic platformu için geçerlidir.</p>
          
          <h3>Hizmet Kullanımı</h3>
          <p>Platform, tıbbi profesyoneller için tasarlanmış bir konsültasyon ve bilgi paylaşım platformudur.</p>
          
          <h3>Kullanıcı Sorumlulukları</h3>
          <p>Kullanıcılar, platformu etik kurallara uygun şekilde kullanmakla yükümlüdür.</p>
          
          <h3>Hizmet Değişiklikleri</h3>
          <p>Platform özellikleri ve hizmetleri önceden bildirimde bulunularak değiştirilebilir.</p>
          
          <h3>İletişim</h3>
          <p>Kullanım şartları ile ilgili sorularınız için info@1m2a.com adresinden bizimle iletişime geçebilirsiniz.</p>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
            Geliştirici: 1M2A Medya Organizasyon Yazılım
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;