import React from 'react';
import { MessageSquare, Video, Phone, Clock } from 'lucide-react';

const Appointments: React.FC = () => {
  const appointments = [
    { id: 1, patient: 'Ahmet K.', time: '09:00', type: 'video', status: 'upcoming' },
    { id: 2, patient: 'Fatma S.', time: '10:30', type: 'message', status: 'active' },
    { id: 3, patient: 'Mehmet Y.', time: '14:00', type: 'phone', status: 'completed' },
    { id: 4, patient: 'Ayşe D.', time: '15:30', type: 'video', status: 'upcoming' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <MessageSquare className="w-8 h-8 text-primary-600" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Konsültasyon</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Bugünkü Randevular</h2>
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${
                    appointment.type === 'video' ? 'bg-blue-100 dark:bg-blue-900' :
                    appointment.type === 'message' ? 'bg-green-100 dark:bg-green-900' :
                    'bg-purple-100 dark:bg-purple-900'
                  }`}>
                    {appointment.type === 'video' ? <Video className="w-5 h-5 text-blue-600 dark:text-blue-400" /> :
                     appointment.type === 'message' ? <MessageSquare className="w-5 h-5 text-green-600 dark:text-green-400" /> :
                     <Phone className="w-5 h-5 text-purple-600 dark:text-purple-400" />}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">{appointment.patient}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{appointment.time}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  appointment.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                  appointment.status === 'upcoming' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                  'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                }`}>
                  {appointment.status === 'active' ? 'Aktif' :
                   appointment.status === 'upcoming' ? 'Yaklaşan' : 'Tamamlandı'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Hızlı Eylemler</h2>
          <div className="space-y-3">
            <button className="w-full p-4 text-left bg-blue-50 dark:bg-blue-900 hover:bg-blue-100 dark:hover:bg-blue-800 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <Video className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <div className="font-medium text-blue-900 dark:text-blue-100">Video Konsültasyon</div>
                  <div className="text-sm text-blue-600 dark:text-blue-300">Hasta ile görüntülü görüşme başlat</div>
                </div>
              </div>
            </button>
            <button className="w-full p-4 text-left bg-green-50 dark:bg-green-900 hover:bg-green-100 dark:hover:bg-green-800 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-6 h-6 text-green-600 dark:text-green-400" />
                <div>
                  <div className="font-medium text-green-900 dark:text-green-100">Mesaj Konsültasyonu</div>
                  <div className="text-sm text-green-600 dark:text-green-300">Yazılı konsültasyon başlat</div>
                </div>
              </div>
            </button>
            <button className="w-full p-4 text-left bg-purple-50 dark:bg-purple-900 hover:bg-purple-100 dark:hover:bg-purple-800 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <div>
                  <div className="font-medium text-purple-900 dark:text-purple-100">Randevu Planla</div>
                  <div className="text-sm text-purple-600 dark:text-purple-300">Gelecek randevu planla</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;