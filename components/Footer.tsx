
import React from 'react';
import { InstagramIcon, TwitterIcon, FacebookIcon } from './icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-gray-400 hover:text-forest-light transition">
            <span className="sr-only">Instagram</span>
            <InstagramIcon />
          </a>
          <a href="#" className="text-gray-400 hover:text-forest-light transition">
            <span className="sr-only">Twitter</span>
            <TwitterIcon />
          </a>
          <a href="#" className="text-gray-400 hover:text-forest-light transition">
            <span className="sr-only">Facebook</span>
            <FacebookIcon />
          </a>
        </div>
        <p>&copy; {currentYear} Anu Creations. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
