import React, { useState } from 'react';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import ResultCard from './components/ResultCard';
import AmbiguityCard from './components/AmbiguityCard';
import ScanningLoader from './components/ScanningLoader';
import Footer from './components/Footer';
import InfoModal from './components/InfoModal';
import { CityKey, AnalysisResult, Language, BinDefinition } from './types';
import { findBinForItem, processImage } from './services/recyclingService';
import { CITY_RULES, UI_STRINGS } from './constants';
import { GENERAL_RULES } from './data_general_rules';
import { ExternalLink, Battery, Droplet, Milk, Package, Wine, Leaf, Smartphone, Shirt, Coins, Pill, Lightbulb } from 'lucide-react';

type AppState = 'idle' | 'scanning' | 'result' | 'ambiguous' | 'not-found';

const App: React.FC = () => {
  const [currentCity, setCurrentCity] = useState<CityKey>('linz');
  const [language, setLanguage] = useState<Language>('en');
  const [appState, setAppState] = useState<AppState>('idle');
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [lastQuery, setLastQuery] = useState<string>('');
  
  // Info Modal State
  const [infoModal, setInfoModal] = useState<{ title: string; content: React.ReactNode } | null>(null);

  const t = UI_STRINGS;

  const handleCityChange = async (city: CityKey) => {
    setCurrentCity(city);
    if (appState === 'result' && lastQuery) {
      setAppState('scanning'); 
      const newResult = await findBinForItem(city, lastQuery, language);
      handleAnalysisResult(newResult, lastQuery);
    }
  };

  const handleLanguageToggle = () => {
    const newLang = language === 'en' ? 'de' : 'en';
    setLanguage(newLang);
    // Optional: Reset state when changing language to avoid confusing results
    // setAppState('idle');
    // setLastQuery('');
  };

  const handleAnalysisResult = (res: AnalysisResult | null, query: string) => {
    if (!res) {
      setAppState('not-found');
      return;
    }

    if (res.alternatives && res.alternatives.length > 1) {
      setResult(res);
      setAppState('ambiguous');
    } else if (res.bins && res.bins.length > 0) {
      setResult(res);
      setAppState('result');
    } else {
      setAppState('not-found');
    }
  };

  const handleSearch = async (query: string, cityOverride?: CityKey) => {
    const cityToUse = cityOverride || currentCity;
    setLastQuery(query);
    setAppState('scanning');

    try {
      const foundResult = await findBinForItem(cityToUse, query, language);
      handleAnalysisResult(foundResult, query);
    } catch (error) {
      console.error("Search error:", error);
      setAppState('not-found');
    }
  };

  const handleImageUpload = async (file: File) => {
    setAppState('scanning');
    try {
      const foundResult = await processImage(file, currentCity, language);
      if (foundResult) {
        setLastQuery(foundResult.matchedItemName);
        handleAnalysisResult(foundResult, foundResult.matchedItemName);
      } else {
        setAppState('not-found');
      }
    } catch (error) {
      console.error(error);
      setAppState('not-found');
    }
  };

  const handleAlternativeSelect = (selectedOption: string) => {
    handleSearch(selectedOption);
  };

  const handleReset = () => {
    setAppState('idle');
    setResult(null);
    setLastQuery('');
  };

  // Modal Handlers
  const closeInfoModal = () => setInfoModal(null);

  const renderInstructionText = (text: string) => {
    return text.split('\n').map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return <div key={i} className="h-3" />; // Spacer
      
      if (trimmed.startsWith('•')) {
         return (
           <div key={i} className="flex gap-3 mb-2 pl-1">
             <span className="text-eco-primary font-extrabold shrink-0 text-lg">•</span>
             <span className="text-gray-900 font-semibold leading-relaxed">{trimmed.substring(1).trim()}</span>
           </div>
         );
      }
      
      if (trimmed.endsWith(':') || trimmed.endsWith('!')) {
         return <h3 key={i} className="font-bold text-gray-950 mt-5 mb-2 text-lg">{trimmed}</h3>;
      }
      
      return <p key={i} className="mb-2 text-gray-900 font-medium leading-relaxed">{trimmed}</p>;
    });
  };

  const openBinDetails = (bin: BinDefinition) => {
    const content = bin.detailedInstructions 
      ? bin.detailedInstructions[language] 
      : (language === 'en' ? "No specific handling instructions available." : "Keine spezifischen Handhabungshinweise verfügbar.");

    const websiteUrl = CITY_RULES[currentCity].officialWebsite;

    setInfoModal({
      title: bin.name[language],
      content: (
        <div className="flex flex-col">
          <div className="mb-6">
            {renderInstructionText(content)}
          </div>
          
          {websiteUrl && (
            <div className="mt-2 pt-4 border-t border-gray-200">
               <a 
                 href={websiteUrl} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center justify-center gap-2 w-full py-4 bg-gray-50 hover:bg-eco-bg text-eco-primary font-extrabold rounded-xl transition-all border border-gray-300 hover:border-eco-primary shadow-sm hover:shadow-md group"
               >
                 <span>{t.officialWebsiteLabel[language]}</span>
                 <ExternalLink size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform"/>
               </a>
            </div>
          )}
        </div>
      )
    });
  };

  const openAbout = () => setInfoModal({
    title: t.about[language],
    content: (
      <div className="space-y-4 text-gray-900 font-medium leading-relaxed">
        <p>
          {language === 'en' 
            ? "RecycleAT is an AI-powered recycling assistant designed specifically for the AI DevFest in Linz on 6.12.2025." 
            : "RecycleAT ist ein KI-gestützter Recycling-Assistent, der speziell für das AI DevFest in Linz am 6.12.2025 entwickelt wurde."}
        </p>
        <p className="text-xs text-gray-600 mt-4 font-bold">Version 1.2.0 (DevFest Edition)</p>
      </div>
    )
  });

  const openHowItWorks = () => setInfoModal({
    title: t.howItWorks[language],
    content: (
      <div className="space-y-4 text-gray-900 font-medium leading-relaxed">
        <p>
          {language === 'en' 
            ? "We check your searched term against an official database to find the closest match. We then tell you exactly which bin to use and give you practical tips from our database, matched using AI." 
            : "Wir prüfen deinen Suchbegriff gegen eine offizielle Datenbank, um den besten Treffer zu finden. Dann sagen wir dir genau, welche Tonne du verwenden sollst und geben dir praktische Tipps aus unserer Datenbank, passend ausgewählt durch KI."}
        </p>
        <ol className="list-decimal pl-5 space-y-2">
           <li><strong className="text-gray-950">{language === 'en' ? "Identify" : "Erkennen"}:</strong> Google Gemini AI.</li>
           <li><strong className="text-gray-950">{language === 'en' ? "Match" : "Zuordnen"}:</strong> {language === 'en' ? "Official Database Match." : "Offizieller Datenbankabgleich."}</li>
           <li><strong className="text-gray-950">{language === 'en' ? "Sort" : "Trennen"}:</strong> {language === 'en' ? "We provide practical, AI-selected tips." : "Wir geben praktische, KI-ausgewählte Tipps."}</li>
        </ol>
      </div>
    )
  });

  const openPrivacy = () => setInfoModal({
    title: t.privacy[language],
    content: (
      <div className="space-y-4 text-gray-900 font-medium leading-relaxed">
        <p>
          {language === 'en' 
            ? "We do not collect any personal data. All calls to the Google Gemini API are anonymized, and no images or text are stored by this application." 
            : "Wir sammeln keine persönlichen Daten. Alle Aufrufe an die Google Gemini API sind anonymisiert, und weder Bilder noch Text werden von dieser Anwendung gespeichert."}
        </p>
      </div>
    )
  });

  const openSpecialRules = () => {
    setInfoModal({
      title: t.specialRules[language],
      content: (
        <div className="space-y-6">
          {GENERAL_RULES.map((rule) => {
             // Dynamic icon matching
             let IconComponent = Milk;
             if (rule.icon === 'Battery') IconComponent = Battery;
             if (rule.icon === 'Droplet') IconComponent = Droplet;
             if (rule.icon === 'Package') IconComponent = Package;
             if (rule.icon === 'Wine') IconComponent = Wine;
             if (rule.icon === 'Leaf') IconComponent = Leaf;
             if (rule.icon === 'Smartphone') IconComponent = Smartphone;
             if (rule.icon === 'Shirt') IconComponent = Shirt;
             if (rule.icon === 'Coins') IconComponent = Coins;
             if (rule.icon === 'Pill') IconComponent = Pill;
             if (rule.icon === 'Lightbulb') IconComponent = Lightbulb;

             return (
               <div key={rule.id} className="bg-gray-50 rounded-2xl p-5 flex gap-4 items-start border border-gray-200">
                 <div className="bg-white p-2.5 rounded-full shadow-sm shrink-0 text-eco-primary mt-0.5 border border-gray-200">
                   <IconComponent size={24} strokeWidth={2.5} />
                 </div>
                 <div>
                   <h3 className="font-extrabold text-gray-950 mb-1 text-lg">{rule.title[language]}</h3>
                   <p className="text-gray-800 font-medium text-sm leading-relaxed">{rule.description[language]}</p>
                 </div>
               </div>
             );
          })}
        </div>
      )
    });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-[#F9F9F7] transition-colors duration-500">
      <Header 
        currentCity={currentCity} 
        onCityChange={handleCityChange} 
        language={language}
        onLanguageToggle={handleLanguageToggle}
      />

      <main className="flex-grow flex flex-col items-center justify-center w-full max-w-4xl mx-auto pb-10">
        
        {appState === 'idle' && (
          <div className="animate-fade-in w-full flex justify-center">
            <SearchSection 
              onSearch={handleSearch} 
              onImageUpload={handleImageUpload} 
              language={language}
            />
          </div>
        )}

        {appState === 'scanning' && (
          <ScanningLoader cityName={CITY_RULES[currentCity].name} language={language} />
        )}

        {appState === 'ambiguous' && result?.alternatives && (
          <AmbiguityCard 
            query={lastQuery}
            alternatives={result.alternatives}
            onSelectAlternative={handleAlternativeSelect}
            onReset={handleReset}
            language={language}
          />
        )}

        {appState === 'result' && result && result.bins && (
          <ResultCard 
            bins={result.bins} 
            itemName={result.matchedItemName} 
            originalQuery={lastQuery}
            onReset={handleReset} 
            language={language}
            onShowDetails={openBinDetails}
            helpfulTip={result.helpfulTip}
          />
        )}

        {appState === 'not-found' && (
           <div className="text-center px-6 animate-fade-in">
             <div className="bg-white p-8 rounded-3xl shadow-lg max-w-md mx-auto border border-gray-200">
               <span className="text-5xl mb-6 block">🤔</span>
               <h2 className="text-2xl font-extrabold text-gray-950 mb-3">{t.notFoundTitle[language]}</h2>
               <p className="text-gray-800 font-semibold mb-8 text-lg">{t.notFoundDesc[language]} "<span className="text-gray-950 font-bold">{lastQuery}</span>" {t.in[language]} {CITY_RULES[currentCity].name}.</p>
               <button 
                 onClick={handleReset}
                 className="px-8 py-3 bg-eco-primary text-white rounded-full font-bold hover:bg-opacity-90 transition shadow-lg shadow-eco-primary/30"
               >
                 {t.tryAgain[language]}
               </button>
             </div>
           </div>
        )}

      </main>

      <Footer 
        onOpenAbout={openAbout}
        onOpenHowItWorks={openHowItWorks}
        onOpenPrivacy={openPrivacy}
        onOpenSpecialRules={openSpecialRules}
        language={language}
      />

      <InfoModal 
        isOpen={!!infoModal} 
        onClose={closeInfoModal} 
        title={infoModal?.title || ""}
      >
        {infoModal?.content}
      </InfoModal>
    </div>
  );
};

export default App;