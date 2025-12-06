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
  
  const WORD_LIMIT = 5;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    // Check word count
    const words = val.trim().split(/\s+/);
    
    // Allow typing if under limit, or if deleting (length getting smaller)
    if (words.length <= WORD_LIMIT || val.length < inputValue.length) {
      setInputValue(val);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
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
    <div className="w-full max-w-xl px-6 mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-eco-slate mb-8 leading-tight">
        {t.titleLine1[language]} <br/>
        <span className="text-eco-primary">{t.titleLine2[language]}</span>
      </h1>

      <form onSubmit={handleSubmit} className="relative w-full group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="h-6 w-6 text-gray-400 group-focus-within:text-eco-primary transition-colors" />
        </div>
        
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={t.placeholder[language]}
          className="w-full pl-12 pr-14 py-4 md:py-5 bg-white border-2 border-transparent focus:border-eco-primary shadow-lg shadow-gray-200/50 rounded-full text-lg placeholder:text-gray-400 focus:outline-none transition-all duration-300"
        />

        <div className="absolute inset-y-0 right-2 flex items-center">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="p-3 bg-gray-100 hover:bg-eco-primary text-gray-500 hover:text-white rounded-full transition-all duration-300"
            title="Scan Item"
          >
            <Camera className="h-5 w-5" />
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
      
      <div className="flex justify-center mt-2 px-2 w-full">
        <p className="text-gray-400 text-sm font-medium text-center">
          {t.subtitle[language]}
        </p>
      </div>
    </div>
  );
};

export default SearchSection;