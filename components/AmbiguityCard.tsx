import React from 'react';
import { HelpCircle } from 'lucide-react';

interface AmbiguityCardProps {
  query: string;
  alternatives: string[];
  onSelectAlternative: (selected: string) => void;
  onReset: () => void;
}

const AmbiguityCard: React.FC<AmbiguityCardProps> = ({ query, alternatives, onSelectAlternative, onReset }) => {
  return (
    <div className="w-full max-w-md px-6 animate-fade-in-up">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-8 text-center">
        
        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <HelpCircle size={32} />
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Which one?
        </h2>
        <p className="text-gray-500 mb-6">
          We found multiple matches for "<span className="font-semibold">{query}</span>". Please clarify:
        </p>

        <div className="space-y-3 mb-6">
          {alternatives.map((option) => (
            <button
              key={option}
              onClick={() => onSelectAlternative(option)}
              className="w-full py-3 px-4 bg-gray-50 hover:bg-eco-primary hover:text-white text-gray-700 font-medium rounded-xl transition-all duration-200 border border-gray-100"
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>

        <button
          onClick={onReset}
          className="text-sm text-gray-400 hover:text-eco-slate underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AmbiguityCard;