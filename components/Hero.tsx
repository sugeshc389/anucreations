
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
      <img
        src="https://picsum.photos/seed/wild/1920/1080"
        alt="Dramatic landscape"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative z-20 px-4">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-widest leading-tight mb-4">
          Anu Creations
        </h1>
        <p className="text-lg md:text-2xl font-light mb-8">
          Capturing the Wild | Landscape & Wedding Photography
        </p>
        <a
          href="#gallery"
          className="bg-forest hover:bg-forest-dark text-white font-bold py-3 px-8 rounded-full text-lg uppercase transition duration-300 ease-in-out transform hover:scale-105"
        >
          View My Work
        </a>
      </div>
    </div>
  );
};

export default Hero;
