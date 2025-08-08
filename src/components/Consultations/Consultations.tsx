import React, { useState } from 'react';
import { Stethoscope, Search, Filter, Pill, AlertCircle } from 'lucide-react';

const Consultations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const medications = [
    { id: 1, name: 'Aspirin', category: 'Analjezik', dosage: '100mg', indication: 'Kalp koruma', sideEffects: 'Mide irritasyonu' },
    { id: 2, name: 'Metformin', category: 'Antidiyabetik', dosage: '500mg', indication: 'Tip 2 diyabet', sideEffects: 'Gastrointestinal' },
    { id: 3, name: 'Lisinopril', category: 'ACE İnhibitörü', dosage: '10mg', indication: 'Hipertansiyon', sideEffects: 'Kuru öksürük' },
    { id: 4, name: 'Atorvastatin', category: 'Statin', dosage: '20mg', indication: 'Yüksek kolesterol', sideEffects: 'Kas ağrısı' },
  ];

  const categories = ['all', 'Analjezik', 'Antidiyabetik', 'ACE İnhibitörü', 'Statin'];

  const filteredMedications = medications.filter(med => {
    const matchesSearch = med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         med.indication.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || med.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Stethoscope className="w-8 h-8 text-primary-600" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">İlaç Rehberi</h1>
      </div>

      <div className="card p-6">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="İlaç adı veya endikasyon ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="input-field md:w-48"
          >
            <option value="all">Tüm Kategoriler</option>
            {categories.slice(1).map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedications.map((medication) => (
            <div key={medication.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Pill className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">{medication.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{medication.category}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Doz:</span>
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">{medication.dosage}</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Endikasyon:</span>
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">{medication.indication}</span>
                </div>
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Yan Etkiler:</span>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">{medication.sideEffects}</span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-4 btn-primary text-sm">
                Detaylı Bilgi
              </button>
            </div>
          ))}
        </div>

        {filteredMedications.length === 0 && (
          <div className="text-center py-12">
            <Pill className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">Aradığınız kriterlere uygun ilaç bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Consultations;