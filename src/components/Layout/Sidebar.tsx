import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, Users, Calendar, MessageSquare, Search, GraduationCap,
  Stethoscope, BarChart3, AlertTriangle, Globe, MessageCircle,
  Crown, UserCheck, HelpCircle, Settings, User, X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Ana Sayfa', path: '/' },
    { icon: Users, label: 'Vakalar', path: '/patients' },
    { icon: Stethoscope, label: 'İlaç Rehberi', path: '/consultations' },
    { icon: Search, label: 'Araştırmalar', path: '/research' },
    { icon: GraduationCap, label: 'Eğitim', path: '/education' },
    { icon: MessageSquare, label: 'Konsültasyon', path: '/appointments' },
    { icon: Calendar, label: 'Takvim', path: '/calendar' },
    { icon: BarChart3, label: 'Global İstatistikler', path: '/global-stats' },
    { icon: MessageCircle, label: 'Topluluk Forumu', path: '/community' },
    { icon: Crown, label: 'Premium Özellikler', path: '/premium' },
    { icon: UserCheck, label: 'Üyelik Yönetimi', path: '/membership' },
  ];

  const bottomMenuItems = [
    { icon: HelpCircle, label: 'Destek', path: '/support' },
    { icon: User, label: 'Profil', path: '/profile' },
    { icon: Settings, label: 'Ayarlar', path: '/settings' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">BS</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">BioSynaptic</span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`
                  flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200
                  ${isActive(item.path)
                    ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }
                `}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.label}
                {item.path === '/messages' && (
                  <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">2</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Weekly Stats */}
        <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-4 text-white">
            <h3 className="text-sm font-medium mb-2">Haftalık İstatistikler</h3>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span>Cases Reviewed</span>
                <span className="font-semibold">12</span>
              </div>
              <div className="flex justify-between">
                <span>Points Earned</span>
                <span className="font-semibold text-yellow-200">+85</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom menu */}
        <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
          {bottomMenuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`
                  flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200
                  ${isActive(item.path)
                    ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }
                `}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;