import React from 'react';
import { BinDefinition } from '../types';
import { ArrowLeft, RefreshCw, AlertCircle, Info } from 'lucide-react';

interface ResultCardProps {
  bins: BinDefinition[];
  itemName: string;
  originalQuery: string;
  onReset: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ bins, itemName, originalQuery, onReset }) => {
  const isMultiple = bins.length > 1;
  
  // Clean up strings for comparison to avoid false positives on simple case/trim differences
  const normalizedQuery = originalQuery.trim().toLowerCase();
  const normalizedItem = itemName.trim().toLowerCase();
  
  // Check if we found a "closest match" rather than an exact one
  // We consider it a fuzzy match if the strings are different AND the query isn't just a substring of the result
  const isFuzzyMatch = normalizedQuery !== normalizedItem && !normalizedItem.includes(normalizedQuery);

  return (
    <div className="w-full max-w-md px-6 animate-fade-in-up">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Top colored band (split if multiple) */}
        <div className="h-4 w-full flex">
          {bins.map((bin, idx) => (
             <div key={idx} className={`h-full flex-1 ${bin.color}`} />
          ))}
        </div>

        <div className="p-8 text-center flex flex-col items-center">
          
          <div className="flex justify-center gap-4 mb-6">
            {bins.map((bin, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center shadow-inner mb-2 ${bin.color}`}>
                   <RefreshCw className="text-white w-8 h-8 opacity-90" />
                </div>
                {isMultiple && <span className="text-xs font-bold text-gray-500 uppercase">{bin.name.split(' ')[0]}</span>}
              </div>
            ))}
          </div>

          {isFuzzyMatch && (
            <div className="mb-4 inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-xs font-medium border border-amber-100">
              <Info size={14} />
              <span>No exact match for "{originalQuery}". Showing:</span>
            </div>
          )}

          <h2 className="text-gray-500 font-medium text-sm uppercase tracking-wide mb-2">
            {isFuzzyMatch ? `"${itemName}" goes in` : `This goes in ${isMultiple ? 'either' : 'the'}`}
          </h2>
          
          <h1 className="text-2xl font-bold text-gray-800 mb-6 leading-tight">
            {bins.map(b => b.name).join(' or ')}
          </h1>

          <div className="bg-gray-50 px-6 py-4 rounded-2xl w-full mb-8 text-left">
            <p className="text-gray-600 mb-2 text-center">
              <span className="font-semibold text-gray-800 capitalize">{itemName}</span> {isMultiple ? 'can be disposed of in multiple ways.' : 'belongs in this category.'}
            </p>
            
            {/* Dynamic Hints based on Bin Type */}
            <div className="space-y-2 mt-4">
              {bins.some(b => b.name.toLowerCase().includes('asz') || b.name.toLowerCase().includes('center')) && (
                 <div className="flex items-start gap-2 text-xs text-gray-500">
                  <AlertCircle size={14} className="mt-0.5 shrink-0 text-orange-500" />
                  <p>Large quantities or hazardous materials should be taken to the Recycling Center (ASZ).</p>
                </div>
              )}
              
               {bins.some(b => b.name.toLowerCase().includes('plastic') || b.name.toLowerCase().includes('gelbe')) && (
                 <div className="flex items-start gap-2 text-xs text-gray-500">
                  <AlertCircle size={14} className="mt-0.5 shrink-0 text-yellow-500" />
                  <p>Please empty containers and crush bottles to save space.</p>
                </div>
              )}

              {bins.some(b => b.name.toLowerCase().includes('bio')) && (
                 <div className="flex items-start gap-2 text-xs text-gray-500">
                  <AlertCircle size={14} className="mt-0.5 shrink-0 text-green-700" />
                  <p>No plastic bags in the Bio bin (use cornstarch bags only if allowed).</p>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={onReset}
            className="flex items-center gap-2 text-eco-primary font-semibold hover:text-eco-secondary transition-colors"
          >
            <ArrowLeft size={18} />
            Scan another item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;