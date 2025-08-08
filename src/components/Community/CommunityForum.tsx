import React from 'react';
import { MessageCircle, Users, ThumbsUp } from 'lucide-react';

const CommunityForum: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <MessageCircle className="w-8 h-8 text-primary-600" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Topluluk Forumu</h1>
      </div>

      <div className="card p-6">
        <p className="text-gray-600 dark:text-gray-400">Topluluk forumu sayfası geliştiriliyor...</p>
      </div>
    </div>
  );
};

export default CommunityForum;