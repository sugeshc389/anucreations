
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="gallery" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <Gallery />
        </section>
        <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <About />
        </section>
        <section id="services" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <Services />
        </section>
        <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
