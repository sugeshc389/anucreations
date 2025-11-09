
import React from 'react';

const GalleryImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="overflow-hidden rounded-lg shadow-lg shadow-black/30">
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
    />
  </div>
);

const Gallery: React.FC = () => {
  const images = [
    { src: 'https://picsum.photos/seed/mountain1/800/600', alt: 'Dramatic mountain landscape' },
    { src: 'https://picsum.photos/seed/wedding1/800/600', alt: 'Happy couple on their wedding day' },
    { src: 'https://picsum.photos/seed/forest/800/600', alt: 'Misty forest path' },
    { src: 'https://picsum.photos/seed/wedding2/800/600', alt: 'Wedding ceremony details' },
    { src: 'https://picsum.photos/seed/coast/800/600', alt: 'Rocky coastline at sunset' },
    { src: 'https://picsum.photos/seed/cityscape/800/600', alt: 'City street at night' },
    { src: 'https://picsum.photos/seed/couple/800/600', alt: 'Couple portrait in nature' },
    { src: 'https://picsum.photos/seed/mountain2/800/600', alt: 'Snowy mountain peak' },
    { src: 'https://picsum.photos/seed/bride/800/600', alt: 'Bride smiling' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {images.map((image, index) => (
          <GalleryImage key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
