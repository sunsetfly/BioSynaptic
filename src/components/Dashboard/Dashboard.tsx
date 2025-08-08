import React from 'react';
import { TrendingUp, Users, Calendar, Award, Clock, Star } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Çevrimiçi Doktorlar', value: '5.569', color: 'text-blue-600' },
    { icon: Calendar, label: 'Çevrimiçi Hastalar', value: '23.051', color: 'text-green-600' },
    { icon: Award, label: 'Aktif Konsültasyonlar', value: '170', color: 'text-purple-600' },
    { icon: Clock, label: 'Bugün Yeni Kayıtlar', value: '26', color: 'text-orange-600' },
  ];

  const recentActivity = [
    { type: 'consultation', patient: 'Ahmet K.', time: '2 dakika önce', status: 'active' },
    { type: 'message', patient: 'Fatma S.', time: '5 dakika önce', status: 'new' },
    { type: 'appointment', patient: 'Mehmet Y.', time: '10 dakika önce', status: 'scheduled' },
    { type: 'consultation', patient: 'Ayşe D.', time: '15 dakika önce', status: 'completed' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Hoş Geldiniz, Dr. Emre Savsar!</h1>
            <p className="text-blue-100">BioSynaptic'e hoş geldiniz. Bugün nasıl yardımcı olabiliriz?</p>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2 mb-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">Expert</span>
            </div>
            <div className="text-sm text-blue-100">2500 puan</div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full bg-gray-100 dark:bg-gray-700 ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Global Platform Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Global Platform</h2>
          <TrendingUp className="w-6 h-6" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div className="text-2xl font-bold">5.569</div>
            <div className="text-sm text-purple-100">Çevrimiçi Doktorlar</div>
          </div>
          <div>
            <div className="text-2xl font-bold">23.051</div>
            <div className="text-sm text-purple-100">Çevrimiçi Hastalar</div>
          </div>
          <div>
            <div className="text-2xl font-bold">170</div>
            <div className="text-sm text-purple-100">Aktif Konsültasyonlar</div>
          </div>
          <div>
            <div className="text-2xl font-bold">26</div>
            <div className="text-sm text-purple-100">Bugün Yeni Kayıtlar</div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-purple-400">
          <a href="/global-stats" className="text-purple-100 hover:text-white text-sm font-medium">
            Detaylı İstatistikler →
          </a>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Son Aktiviteler</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                <div className={`w-2 h-2 rounded-full ${
                  activity.status === 'active' ? 'bg-green-500' :
                  activity.status === 'new' ? 'bg-blue-500' :
                  activity.status === 'scheduled' ? 'bg-yellow-500' : 'bg-gray-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {activity.patient}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activity.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                  activity.status === 'new' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                  activity.status === 'scheduled' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                  'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                }`}>
                  {activity.status === 'active' ? 'Aktif' :
                   activity.status === 'new' ? 'Yeni' :
                   activity.status === 'scheduled' ? 'Planlandı' : 'Tamamlandı'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Hızlı Eylemler</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-3 rounded-lg bg-blue-50 dark:bg-blue-900 hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors">
              <div className="font-medium text-blue-900 dark:text-blue-100">Yeni Konsültasyon</div>
              <div className="text-sm text-blue-600 dark:text-blue-300">Hasta ile görüşme başlat</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg bg-green-50 dark:bg-green-900 hover:bg-green-100 dark:hover:bg-green-800 transition-colors">
              <div className="font-medium text-green-900 dark:text-green-100">İlaç Ara</div>
              <div className="text-sm text-green-600 dark:text-green-300">İlaç rehberinde arama yap</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg bg-purple-50 dark:bg-purple-900 hover:bg-purple-100 dark:hover:bg-purple-800 transition-colors">
              <div className="font-medium text-purple-900 dark:text-purple-100">Eğitim Materyali</div>
              <div className="text-sm text-purple-600 dark:text-purple-300">Yeni kurs ve makaleleri incele</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;