import React, { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Loader from './Loader.jsx'; // Importamos el Loader
import Hero from './Hero.jsx';
import Navbar from './Navbar.jsx';
import Cards from './Cards.jsx';
import BrushSection from './BrushSection.jsx';
import NormalSection from './NormalSection.jsx';
import ProjectsSection from './ProjectsSection.jsx';
import Footer from './Footer.jsx';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula un tiempo de carga de 3 segundos
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <StrictMode>
      {loading ? <Loader /> : (
        <>
          <Navbar />
          <Hero />
          <Cards />
          <BrushSection />
          <NormalSection />
          <ProjectsSection />
          <Footer />
        </>
      )}
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<App />);
