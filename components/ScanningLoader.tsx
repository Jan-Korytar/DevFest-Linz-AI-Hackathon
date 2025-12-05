import React from 'react';
import { Loader2 } from 'lucide-react';

interface ScanningLoaderProps {
  cityName: string;
}

const ScanningLoader: React.FC<ScanningLoaderProps> = ({ cityName }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 text-center animate-pulse">
      <div className="relative mb-8">
        <div className="w-20 h-20 bg-eco-primary/20 rounded-full flex items-center justify-center">
          <Loader2 className="w-10 h-10 text-eco-primary animate-spin" />
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-eco-slate mb-2">Identifying item...</h3>
      <p className="text-gray-400">Checking local rules for {cityName}</p>
    </div>
  );
};

export default ScanningLoader;
