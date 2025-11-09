
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src="https://picsum.photos/seed/headshot/400/400"
            alt="Anup, the photographer"
            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-gray-700 shadow-lg shadow-black/40"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-forest-light mb-4">Anup</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Hello! I'm Anup, a passionate photographer with a love for the untamed beauty of landscapes and the intimate moments of weddings. My journey into photography began with a desire to freeze fleeting moments and tell stories that words couldn't capture.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Whether I'm hiking to a remote peak for the perfect sunrise or quietly documenting the joyous tears at a ceremony, my goal is the same: to create authentic, emotive, and timeless images that you'll cherish for a lifetime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
