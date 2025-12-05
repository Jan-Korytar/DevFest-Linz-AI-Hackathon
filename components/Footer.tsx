import React from 'react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenHowItWorks: () => void;
  onOpenAbout: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenHowItWorks, onOpenAbout }) => {
  return (
    <footer className="w-full py-8 text-center text-gray-400 text-sm mt-auto">
      <div className="flex justify-center gap-6 mb-2">
        <button onClick={onOpenAbout} className="hover:text-eco-primary transition-colors focus:outline-none">About</button>
        <button onClick={onOpenHowItWorks} className="hover:text-eco-primary transition-colors focus:outline-none">How it works</button>
        <button onClick={onOpenPrivacy} className="hover:text-eco-primary transition-colors focus:outline-none">Privacy</button>
      </div>
      <p>&copy; {new Date().getFullYear()} RecycleAT. Built for a greener Austria.</p>
    </footer>
  );
};

export default Footer;