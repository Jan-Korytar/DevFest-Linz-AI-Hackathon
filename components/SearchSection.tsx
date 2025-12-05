import React, { useState, useRef } from 'react';
import { Search, Camera } from 'lucide-react';

interface SearchSectionProps {
  onSearch: (query: string) => void;
  onImageUpload: (file: File) => void;
}

const SearchSection: React.FC<SearchSectionProps> = ({ onSearch, onImageUpload }) => {
  const [inputValue, setInputValue] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  return (
    <div className="w-full max-w-xl px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-eco-slate mb-8 leading-tight">
        What are you <br/>
        <span className="text-eco-primary">throwing away?</span>
      </h1>

      <form onSubmit={handleSubmit} className="relative w-full group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="h-6 w-6 text-gray-400 group-focus-within:text-eco-primary transition-colors" />
        </div>
        
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="e.g. plastic bottle, newspaper..."
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

      <p className="text-center text-gray-400 mt-6 text-sm font-medium">
        Sort waste correctly in seconds.
      </p>
    </div>
  );
};

export default SearchSection;
