import React, { useState } from 'react';
import { Check, Crown, Zap, Star } from 'lucide-react';

const PricingPlans: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Mevcut Plan',
      price: billingCycle === 'monthly' ? 0 : 0,
      period: billingCycle === 'monthly' ? '/ay' : '/yıl',
      description: 'Temel özellikler',
      features: [
        'Acil durum yardım sistemi',
        'Temel vaka görüntüleme',
        'Topluluk forumuna erişim',
        'Temel ilaç rehberi',
        'Günlük 5 mesaj',
      ],
      buttonText: 'Mevcut Plan',
      buttonVariant: 'secondary' as const,
      popular: false,
      icon: null,
    },
    {
      name: 'Plan Seç',
      price: billingCycle === 'monthly' ? 0 : 0,
      period: billingCycle === 'monthly' ? '/ay' : '/yıl',
      description: 'Tüm özellikler özellikleri',
      features: [
        'Tüm temel özellikler',
        'Sınırsız vaka görüntüleme',
        'Sınırsız konsültasyon',
        'Tüm araştırma erişimi',
        'Video görüşme (120 dk/ay)',
        'Gelişmiş istatistikler',
        'Sınırsız dosya depolama',
      ],
      buttonText: 'Plan Seç',
      buttonVariant: 'primary' as const,
      popular: true,
      icon: Zap,
      consultation: 'Konsültasyon/Ay:',
      videoCall: 'Video Görüşme:',
      storage: 'Depolama:',
    },
    {
      name: '👑 EN POPÜLER',
      price: billingCycle === 'monthly' ? 0 : 0,
      period: billingCycle === 'monthly' ? '/ay' : '/yıl',
      description: 'Tüm temel özellikler',
      features: [
        'Sınırsör konsültasyon',
        'Özel AI model eğitimi',
        'Sınırsız araştırma',
        'Mentor programı erişimi',
        'Çevrimiçi araştırma',
        'Gelişmiş analitikler',
        '24/7 öncelikli destek',
        '20GB dosya depolama',
        'Mentor programı erişimi',
        'Video görüşme (120 dk/ay)',
        'Çevrimiçi araştırma',
        'Gelişmiş analitikler',
      ],
      buttonText: 'Başla',
      buttonVariant: 'primary' as const,
      popular: false,
      icon: Crown,
      consultation: 'Konsültasyon/Ay:',
      videoCall: 'Video Görüşme:',
      storage: 'Depolama:',
    },
    {
      name: '',
      price: billingCycle === 'monthly' ? 0 : 0,
      period: billingCycle === 'monthly' ? '/ay' : '/yıl',
      description: 'Tüm premium özellikler',
      features: [
        'Sınırsız özellikler',
        'Özel AI modeli eğitimi',
        'Özel destek kanalı',
        'Kurumsal entegrasyon',
        'API erişimi',
        'Özel branding',
        'Sınırsız depolama',
        'Özel eğitim',
        'Sınırsız dospolama',
        'Özel branding',
      ],
      buttonText: 'İletişime Geç',
      buttonVariant: 'secondary' as const,
      popular: false,
      icon: Star,
      consultation: 'Konsültasyon/Ay:',
      videoCall: 'Video Görüşme:',
      storage: 'Depolama:',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Mevcut Planınız: Ücretsiz
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Aktif • Bitiş: 07.08.2026
        </p>
        <p className="text-right text-gray-900 dark:text-gray-100 mb-6">
          <span className="text-2xl font-bold">0,00 €/ay</span>
          <br />
          <span className="text-sm text-gray-500 dark:text-gray-400">Sonraki Ödeme: 06.09.2025</span>
        </p>
      </div>

      {/* Billing Toggle */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              billingCycle === 'monthly'
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm'
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            Aylık
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              billingCycle === 'yearly'
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm'
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            2 AY ÜCRETSİZ
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => {
          const Icon = plan.icon;
          return (
            <div
              key={index}
              className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? 'border-purple-500 dark:border-purple-400'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    👑 EN POPÜLER
                  </span>
                </div>
              )}

              <div className="p-6">
                <div className="text-center mb-6">
                  {Icon && (
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    {plan.price}€<span className="text-lg font-normal text-gray-500 dark:text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.consultation && (
                  <div className="space-y-2 mb-6 text-sm text-gray-600 dark:text-gray-400">
                    <div>{plan.consultation}</div>
                    <div>{plan.videoCall}</div>
                    <div>{plan.storage}</div>
                  </div>
                )}

                <button
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                    plan.buttonVariant === 'primary'
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Info */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
        <p>Tüm planlar 30 gün para iade garantisi ile gelir.</p>
        <p>İstediğiniz zaman iptal edebilirsiniz.</p>
      </div>
    </div>
  );
};

export default PricingPlans;