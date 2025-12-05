import React from 'react';
import { Recycle } from 'lucide-react';
import { CITIES } from '../constants';
import { CityKey } from '../types';

interface HeaderProps {
  currentCity: string;
  onCityChange: (city: CityKey) => void;
}

const Header: React.FC<HeaderProps> = ({ currentCity, onCityChange }) => {
  const currentCityName = CITIES.find(c => c.id === currentCity)?.name || "Select City";

  return (
    <header className="flex items-center justify-between px-6 py-5 max-w-2xl mx-auto w-full">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-eco-primary rounded-full text-white">
          <Recycle size={20} />
        </div>
        <span className="font-bold text-lg text-eco-primary tracking-tight">RecycleAT</span>
      </div>

      <div className="relative group">
        <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium text-eco-slate border border-gray-100 hover:border-eco-primary transition-colors">
          <span>{currentCityName}</span>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
        </button>
        
        {/* Dropdown */}
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden transform origin-top-right">
          <div className="py-1">
            {CITIES.map((city) => (
              <button
                key={city.id}
                onClick={() => onCityChange(city.id as CityKey)}
                className={`block w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${currentCity === city.id ? 'text-eco-primary font-semibold bg-green-50' : 'text-gray-700'}`}
              >
                {city.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
