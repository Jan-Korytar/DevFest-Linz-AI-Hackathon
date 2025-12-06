import React from 'react';
import { HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { UI_STRINGS } from '../constants';

interface AmbiguityCardProps {
  query: string;
  alternatives: string[];
  onSelectAlternative: (selected: string) => void;
  onReset: () => void;
  language: Language;
}

const AmbiguityCard: React.FC<AmbiguityCardProps> = ({ query, alternatives, onSelectAlternative, onReset, language }) => {
  const t = UI_STRINGS;
  
  return (
    <div className="w-full max-w-md px-6 animate-fade-in-up">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 p-8 text-center">
        
        <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
          <HelpCircle size={32} strokeWidth={2.5} />
        </div>

        <h2 className="text-2xl font-extrabold text-gray-950 mb-2">
          {t.ambiguousTitle[language]}
        </h2>
        <p className="text-gray-800 font-semibold mb-6 text-lg">
          {t.ambiguousDesc[language]} "<span className="font-extrabold text-gray-950">{query}</span>". {t.pleaseClarify[language]}
        </p>

        <div className="space-y-3 mb-6">
          {alternatives.map((option) => (
            <button
              key={option}
              onClick={() => onSelectAlternative(option)}
              className="w-full py-4 px-4 bg-gray-50 hover:bg-eco-primary hover:text-white text-gray-900 font-bold rounded-xl transition-all duration-200 border border-gray-300 capitalize text-lg"
            >
              {option}
            </button>
          ))}
        </div>

        <button
          onClick={onReset}
          className="text-base text-gray-700 font-bold hover:text-eco-slate underline py-2"
        >
          {t.cancel[language]}
        </button>
      </div>
    </div>
  );
};

export default AmbiguityCard;