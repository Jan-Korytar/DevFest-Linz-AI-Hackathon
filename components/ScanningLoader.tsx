import React from 'react';
import { Loader2 } from 'lucide-react';
import { Language } from '../types';
import { UI_STRINGS } from '../constants';

interface ScanningLoaderProps {
  cityName: string;
  language: Language;
}

const ScanningLoader: React.FC<ScanningLoaderProps> = ({ cityName, language }) => {
  const t = UI_STRINGS;
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 text-center animate-pulse">
      <div className="relative mb-8">
        <div className="w-20 h-20 bg-eco-primary/20 rounded-full flex items-center justify-center">
          <Loader2 className="w-10 h-10 text-eco-primary animate-spin" strokeWidth={2.5} />
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.identifying[language]}</h3>
      <p className="text-gray-800 font-semibold text-lg">{t.checkingRules[language]} {cityName}</p>
    </div>
  );
};

export default ScanningLoader;