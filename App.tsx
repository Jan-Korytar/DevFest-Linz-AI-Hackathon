import React, { useState } from 'react';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import ResultCard from './components/ResultCard';
import AmbiguityCard from './components/AmbiguityCard';
import ScanningLoader from './components/ScanningLoader';
import Footer from './components/Footer';
import InfoModal from './components/InfoModal';
import { CityKey, AnalysisResult } from './types';
import { findBinForItem, processImage } from './services/recyclingService';
import { CITY_RULES } from './constants';

type AppState = 'idle' | 'scanning' | 'result' | 'ambiguous' | 'not-found';

const App: React.FC = () => {
  // Default to Linz as requested
  const [currentCity, setCurrentCity] = useState<CityKey>('linz');
  const [appState, setAppState] = useState<AppState>('idle');
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [lastQuery, setLastQuery] = useState<string>('');
  
  // Info Modal State
  const [infoModal, setInfoModal] = useState<{ title: string; content: React.ReactNode } | null>(null);

  const handleCityChange = async (city: CityKey) => {
    setCurrentCity(city);
    // If we have a result, re-evaluate it for the new city
    if (appState === 'result' && lastQuery) {
      setAppState('scanning'); // Brief scan state for UX
      const newResult = await findBinForItem(city, lastQuery);
      handleAnalysisResult(newResult, lastQuery);
    }
  };

  const handleAnalysisResult = (res: AnalysisResult | null, query: string) => {
    if (!res) {
      setAppState('not-found');
      return;
    }

    // Check for ambiguity (alternatives)
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
      // Async search (now uses Gemini if needed)
      const foundResult = await findBinForItem(cityToUse, query);
      handleAnalysisResult(foundResult, query);
    } catch (error) {
      console.error("Search error:", error);
      setAppState('not-found');
    }
  };

  const handleImageUpload = async (file: File) => {
    setAppState('scanning');
    try {
      const foundResult = await processImage(file, currentCity);
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

  const openAbout = () => setInfoModal({
    title: "About RecycleAT",
    content: (
      <div className="space-y-4">
        <p>RecycleAT is an AI-powered recycling assistant designed specifically for Austrian cities.</p>
        <p>Our goal is to make recycling easier and more accurate for everyone, helping to reduce waste and protect our environment.</p>
        <p className="text-xs text-gray-400 mt-4">Version 1.1.0 (Austria Edition)</p>
      </div>
    )
  });

  const openHowItWorks = () => setInfoModal({
    title: "How it works",
    content: (
      <div className="space-y-4">
        <p>We use the official waste management rules provided by each supported city (Vienna, Graz, Linz, Salzburg) to ensure accuracy.</p>
        <h3 className="font-semibold text-gray-800 pt-2">Our process:</h3>
        <ol className="list-decimal pl-5 space-y-2">
           <li><strong>Identify:</strong> When you search for an item or upload a photo, we use advanced AI (Google Gemini) to identify exactly what the object is.</li>
           <li><strong>Match:</strong> We then match the identified item against the official city recycling rules for your specific location.</li>
           <li><strong>Sort:</strong> We tell you exactly which bin to use based on local regulations.</li>
        </ol>
      </div>
    )
  });

  const openPrivacy = () => setInfoModal({
    title: "Privacy Policy",
    content: (
      <div className="space-y-4">
        <p>We take your privacy seriously and believe in transparency.</p>
        <div className="bg-gray-50 p-4 rounded-xl space-y-3">
          <div>
            <h4 className="font-semibold text-eco-primary mb-1">No Data Collection</h4>
            <p>We do not collect, store, or share any personal user data. Your usage of this app is completely anonymous.</p>
          </div>
          <div>
            <h4 className="font-semibold text-eco-primary mb-1">Anonymized Processing</h4>
            <p>Your search queries and uploaded images are used strictly for identifying waste items. We send anonymized queries to Google Gemini models to provide the service.</p>
          </div>
          <div>
            <h4 className="font-semibold text-eco-primary mb-1">No Storage</h4>
            <p>Data is processed in real-time for the duration of your session and is not retained on our servers.</p>
          </div>
        </div>
      </div>
    )
  });

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-[#F9F9F7] transition-colors duration-500">
      <Header currentCity={currentCity} onCityChange={handleCityChange} />

      <main className="flex-grow flex flex-col items-center justify-center w-full max-w-4xl mx-auto pb-10">
        
        {appState === 'idle' && (
          <div className="animate-fade-in w-full flex justify-center">
            <SearchSection onSearch={handleSearch} onImageUpload={handleImageUpload} />
          </div>
        )}

        {appState === 'scanning' && (
          <ScanningLoader cityName={CITY_RULES[currentCity].name} />
        )}

        {appState === 'ambiguous' && result?.alternatives && (
          <AmbiguityCard 
            query={lastQuery}
            alternatives={result.alternatives}
            onSelectAlternative={handleAlternativeSelect}
            onReset={handleReset}
          />
        )}

        {appState === 'result' && result && result.bins && (
          <ResultCard 
            bins={result.bins} 
            itemName={result.matchedItemName} 
            originalQuery={lastQuery}
            onReset={handleReset} 
          />
        )}

        {appState === 'not-found' && (
           <div className="text-center px-6 animate-fade-in">
             <div className="bg-white p-8 rounded-3xl shadow-lg max-w-md mx-auto">
               <span className="text-4xl mb-4 block">🤔</span>
               <h2 className="text-xl font-bold text-gray-800 mb-2">Not sure about that one.</h2>
               <p className="text-gray-500 mb-6">We couldn't find a precise rule for "{lastQuery}" in {CITY_RULES[currentCity].name}.</p>
               <button 
                 onClick={handleReset}
                 className="px-6 py-3 bg-eco-primary text-white rounded-full font-medium hover:bg-opacity-90 transition"
               >
                 Try something else
               </button>
             </div>
           </div>
        )}

      </main>

      <Footer 
        onOpenAbout={openAbout}
        onOpenHowItWorks={openHowItWorks}
        onOpenPrivacy={openPrivacy}
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