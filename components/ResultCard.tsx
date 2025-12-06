import React from 'react';
import { BinDefinition, Language, BinIconType } from '../types';
import { UI_STRINGS } from '../constants';
import { ArrowLeft, RefreshCw, Info, ChevronRight, Leaf, Newspaper, Wine, Milk, Trash2, Battery, Box, Lightbulb } from 'lucide-react';

interface ResultCardProps {
  bins: BinDefinition[];
  itemName: string;
  originalQuery: string;
  onReset: () => void;
  language: Language;
  onShowDetails: (bin: BinDefinition) => void;
  helpfulTip?: import('../types').GeneralRule;
}

const ResultCard: React.FC<ResultCardProps> = ({ bins, itemName, originalQuery, onReset, language, onShowDetails, helpfulTip }) => {
  const isMultiple = bins.length > 1;
  const t = UI_STRINGS;
  
  const normalizedQuery = originalQuery.trim().toLowerCase();
  const normalizedItem = itemName.trim().toLowerCase();
  
  const isFuzzyMatch = normalizedQuery !== normalizedItem && !normalizedItem.includes(normalizedQuery);

  const getIcon = (type: BinIconType) => {
    switch (type) {
      case 'bio': return <Leaf className="text-white w-8 h-8 opacity-90" />;
      case 'paper': return <Newspaper className="text-white w-8 h-8 opacity-90" />;
      case 'glass': return <Wine className="text-white w-8 h-8 opacity-90" />;
      case 'plastic': return <Milk className="text-white w-8 h-8 opacity-90" />;
      case 'metal': return <Box className="text-white w-8 h-8 opacity-90" />; // Generic container for metal
      case 'rest': return <Trash2 className="text-white w-8 h-8 opacity-90" />;
      case 'asz': return <Battery className="text-white w-8 h-8 opacity-90" />;
      default: return <RefreshCw className="text-white w-8 h-8 opacity-90" />;
    }
  };

  return (
    <div className="w-full max-w-md px-6 animate-fade-in-up">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        
        <div className="h-4 w-full flex">
          {bins.map((bin, idx) => (
             <div key={idx} className={`h-full flex-1 ${bin.color}`} />
          ))}
        </div>

        <div className="p-8 text-center flex flex-col items-center">
          
          <div className="flex justify-center gap-4 mb-6 w-full">
            {bins.map((bin, idx) => (
              <button 
                key={idx} 
                onClick={() => onShowDetails(bin)}
                className="flex flex-col items-center group focus:outline-none"
                title="Click for detailed instructions"
              >
                <div className={`w-20 h-20 rounded-full flex items-center justify-center shadow-inner mb-2 ${bin.color} transform transition-transform group-hover:scale-105 relative`}>
                   {getIcon(bin.icon)}
                   <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm border border-gray-100">
                     <Info size={14} className="text-gray-400" />
                   </div>
                </div>
                {isMultiple && <span className="text-xs font-bold text-gray-500 uppercase">{bin.name[language].split(' ')[0]}</span>}
              </button>
            ))}
          </div>

          {isFuzzyMatch && (
            <div className="mb-4 inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-xs font-medium border border-amber-100">
              <Info size={14} />
              <span>{t.noExactMatch[language]} "{originalQuery}". {t.showing[language]}</span>
            </div>
          )}

          <h2 className="text-gray-500 font-medium text-sm uppercase tracking-wide mb-2">
            {isFuzzyMatch ? `"${itemName}" ${t.goesIn[language]}` : `${t.thisGoesIn[language]} ${isMultiple ? t.either[language] : t.the[language]}`}
          </h2>
          
          <h1 className="text-2xl font-bold text-gray-800 mb-6 leading-tight">
            {bins.map(b => b.name[language]).join(t.or[language])}
          </h1>

          <div className={`bg-gray-50 px-6 py-4 rounded-2xl w-full text-left transition-all ${helpfulTip ? 'mb-4' : 'mb-8'}`}>
            <p className="text-gray-600 mb-3 text-center">
              <span className="font-semibold text-gray-800 capitalize">{itemName}</span> {isMultiple ? t.multipleWays[language] : t.belongsIn[language]}
            </p>
            
            <div className="flex items-center justify-center border-t border-gray-200/50 pt-3">
               <button 
                 onClick={() => onShowDetails(bins[0])}
                 className="text-eco-primary text-sm font-medium flex items-center gap-1 hover:underline"
               >
                 {language === 'en' ? 'General rules' : 'Allgemeine Regeln'} <ChevronRight size={14} />
               </button>
            </div>
          </div>

          {helpfulTip && (
             <div className="w-full mb-8 bg-green-50/60 p-4 rounded-2xl border border-green-100 flex gap-4 text-left animate-fade-in-up items-start">
                <div className="text-eco-primary shrink-0 relative top-0.5">
                   <div className="relative">
                      <Lightbulb size={22} fill="currentColor" className="opacity-20" />
                      <Lightbulb size={22} className="absolute inset-0" />
                   </div>
                </div>
                <div>
                   <h4 className="font-bold text-eco-primary text-xs uppercase tracking-wider mb-1">
                      {language === 'en' ? 'Quick Tip' : 'Tipp'}
                   </h4>
                   <p className="text-eco-slate text-sm leading-relaxed">
                      {helpfulTip.description[language]}
                   </p>
                </div>
             </div>
          )}

          <button
            onClick={onReset}
            className="flex items-center gap-2 text-eco-primary font-semibold hover:text-eco-secondary transition-colors"
          >
            <ArrowLeft size={18} />
            {t.scanAnother[language]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;