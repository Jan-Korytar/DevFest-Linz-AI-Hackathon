import React from 'react';
import { Language } from '../types';
import { UI_STRINGS } from '../constants';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenHowItWorks: () => void;
  onOpenAbout: () => void;
  onOpenSpecialRules: () => void;
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenHowItWorks, onOpenAbout, onOpenSpecialRules, language }) => {
  const t = UI_STRINGS;
  
  return (
    <footer className="w-full py-8 text-center text-gray-400 text-sm mt-auto">
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-3 px-4">
        <button onClick={onOpenSpecialRules} className="text-eco-primary font-semibold hover:text-eco-secondary transition-colors focus:outline-none">{t.specialRules[language]}</button>
        <button onClick={onOpenHowItWorks} className="hover:text-eco-primary transition-colors focus:outline-none">{t.howItWorks[language]}</button>
        <button onClick={onOpenAbout} className="hover:text-eco-primary transition-colors focus:outline-none">{t.about[language]}</button>
        <button onClick={onOpenPrivacy} className="hover:text-eco-primary transition-colors focus:outline-none">{t.privacy[language]}</button>
      </div>
      <p>&copy; {new Date().getFullYear()} RecycleAT. {t.footerText[language]}</p>
    </footer>
  );
};

export default Footer;