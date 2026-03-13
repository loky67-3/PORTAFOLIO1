import React from 'react';
import './BrushSection.css';

const BrushSection = () => {
  return (
    <div className="new-brush-wrapper">      
      <section className="super-powers-section">
        {/* Elementos Decorativos de Fondo */}
        <div className="bg-doodle doodle-1">BAM!</div>
        <div className="bg-tape tape-long-1"></div>
        <div className="bg-character char-1">
            <i className="fa-solid fa-ghost"></i>
        </div>
        <div className="bg-doodle doodle-2">WOW!</div>
        {/* Elementos Turtle y Zigzag */}
        <div className="bg-turtle-shape shape-1"></div>
        <div className="bg-zigzag-line zigzag-1">
            <svg width="120" height="60" xmlns="http://www.w3.org/2000/svg">
                <path d="M 10 50 C 30 10, 50 10, 70 50 S 90 10, 110 50" stroke="#ffda06" stroke-width="8" fill="none" stroke-linecap="round"/>
            </svg>
        </div>
        <div className="bg-character char-2">
            <i className="fa-solid fa-turtle"></i>
        </div>
        <div className="bg-character char-3">
            <i className="fa-brands fa-tiktok"></i>
        </div>

        <h2 className="super-powers-title">NUESTRAS SERVICIOS</h2>
        
        <div className="powers-grid">
            {/* Item 1: DESIGN */}
            <div className="taped-item design-item">
                <div className="tape tape-1"></div>
                <div className="tape tape-2"></div>
                <div className="tape tape-3"></div>
                <div className="paper-note">
                    <h3>DISEÑO</h3>
                    <p>Interfaces que enamoran a primera vista y no se olvidan.</p>
                </div>
            </div>

            {/* Item 2: CODE */}
            <div className="taped-item code-item">
                <div className="tape tape-1"></div>
                <div className="tape tape-2"></div>
                <div className="tape tape-3"></div>
                <div className="paper-note">
                    <h3>CÓDIGO</h3>
                    <p>Líneas de poder para una velocidad brutal y sin errores.</p>
                </div>
            </div>

            {/* Item 3: MAGIC */}
            <div className="taped-item magic-item">
                <div className="tape tape-1"></div>
                <div className="tape tape-2"></div>
                <div className="tape tape-3"></div>
                <div className="paper-note">
                    <h3>TOQUE</h3>
                    <p>El toque secreto que hace que tu marca sea inolvidable.</p>
                </div>
            </div>
        </div>
    </section>

    </div>
  );
};

export default BrushSection;