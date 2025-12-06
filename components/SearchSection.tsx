import React, { useState, useRef } from 'react';
import { Search, Camera } from 'lucide-react';
import { Language } from '../types';
import { UI_STRINGS } from '../constants';

interface SearchSectionProps {
  onSearch: (query: string) => void;
  onImageUpload: (file: File) => void;
  language: Language;
}

const SearchSection: React.FC<SearchSectionProps> = ({ onSearch, onImageUpload, language }) => {
  const [inputValue, setInputValue] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const MAX_CHARS = 100;
  const MIN_CHARS = 2;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    
    // Strict character limit
    if (val.length <= MAX_CHARS) {
      setInputValue(val);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim().length >= MIN_CHARS) {
      onSearch(inputValue);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onImageUpload(e.target.files[0]);
    }
  };

  const t = UI_STRINGS;

  return (
    <div className="w-full max-w-[800px] px-6 mx-auto">
      <h1 className="text-3xl md:text-5xl font-extrabold text-center text-gray-800 mb-10 leading-tight">
        {t.titleLine1[language]} <br/>
        <span className="text-eco-primary">{t.titleLine2[language]}</span>
      </h1>

      <form onSubmit={handleSubmit} className="relative w-full group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="h-6 w-6 text-gray-600 group-focus-within:text-eco-primary transition-colors" />
        </div>
        
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={t.placeholder[language]}
          maxLength={MAX_CHARS}
          className="w-full pl-12 pr-14 py-4 md:py-6 bg-white border-2 border-transparent focus:border-eco-primary shadow-lg shadow-gray-200/50 rounded-full text-xl placeholder:text-gray-600 text-gray-900 font-bold focus:outline-none transition-all duration-300"
        />

        <div className="absolute inset-y-0 right-2 flex items-center">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="p-3 bg-gray-100 hover:bg-eco-primary text-gray-600 hover:text-white rounded-full transition-all duration-300"
            title="Scan Item"
          >
            <Camera className="h-6 w-6" />
          </button>
        </div>
        
        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          accept="image/*"
          onChange={handleFileChange}
        />
      </form>
      
      <div className="flex justify-center mt-4 px-2 w-full">
        <p className="text-gray-700 text-base font-bold text-center">
          {t.subtitle[language]}
        </p>
      </div>
    </div>
  );
};

export default SearchSection;