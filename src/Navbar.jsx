import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        BN
      </div>

      {/* Menú para Escritorio */}
      <div className="desktop-nav">
        <ul className="nav-links">
          <li>Inicio</li>
          <li>Proyectos</li>
          <li>Servicios</li>
          <li>Contacto</li>
        </ul>
        <button className="nav-btn">
          Trabajar juntos
        </button>
      </div>

      {/* Menú Hamburguesa para Móvil */}
      <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className={`line line1 ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`line line2 ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`line line3 ${isMenuOpen ? 'open' : ''}`}></div>
      </div>

      {/* Panel del Menú Móvil */}
      <div className={`mobile-menu-panel ${isMenuOpen ? 'open' : ''}`}>
        <a href="#">Inicio</a>
        <a href="#">Proyectos</a>
        <a href="#">Servicios</a>
        <a href="#">Contacto</a>
      </div>
    </nav>
  )
}

export default Navbar