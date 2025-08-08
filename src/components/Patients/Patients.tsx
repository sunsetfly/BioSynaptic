import React from 'react';
import { Users, Search, Filter, Plus } from 'lucide-react';

const Patients: React.FC = () => {
  const patients = [
    { id: 1, name: 'Ahmet Kaya', age: 45, condition: 'Hipertansiyon', lastVisit: '2024-01-15', status: 'active' },
    { id: 2, name: 'Fatma Şahin', age: 32, condition: 'Diyabet', lastVisit: '2024-01-14', status: 'follow-up' },
    { id: 3, name: 'Mehmet Yılmaz', age: 58, condition: 'Kalp Hastalığı', lastVisit: '2024-01-13', status: 'critical' },
    { id: 4, name: 'Ayşe Demir', age: 28, condition: 'Astım', lastVisit: '2024-01-12', status: 'stable' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Users className="w-8 h-8 text-primary-600" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Vakalar</h1>
        </div>
        <button className="btn-primary flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Yeni Vaka</span>
        </button>
      </div>

      <div className="card p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Hasta ara..."
              className="input-field pl-10"
            />
          </div>
          <button className="btn-secondary flex items-center space-x-2">
            <Filter className="w-5 h-5" />
            <span>Filtrele</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Hasta</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Yaş</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Durum</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Son Ziyaret</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-gray-100">Durum</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-3 px-4 text-gray-900 dark:text-gray-100">{patient.name}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{patient.age}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{patient.condition}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{patient.lastVisit}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      patient.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      patient.status === 'follow-up' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                      patient.status === 'critical' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                      'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {patient.status === 'active' ? 'Aktif' :
                       patient.status === 'follow-up' ? 'Takip' :
                       patient.status === 'critical' ? 'Kritik' : 'Stabil'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Patients;