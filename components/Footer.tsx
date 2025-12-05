import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 text-center text-gray-400 text-sm">
      <div className="flex justify-center gap-6 mb-2">
        <a href="#" className="hover:text-eco-primary transition-colors">About</a>
        <a href="#" className="hover:text-eco-primary transition-colors">How it works</a>
        <a href="#" className="hover:text-eco-primary transition-colors">Privacy</a>
      </div>
      <p>&copy; {new Date().getFullYear()} RecycleAT. Built for a greener Austria.</p>
    </footer>
  );
};

export default Footer;
