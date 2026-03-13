import React from 'react';
import './NormalSection.css';

const NormalSection = () => {
  return (
    <section className="cartoon-chaos-section">
      {/* Elementos Decorativos de Fondo (Absolutos) */}
      <div className="deco-star deco-1">★</div>
      <div className="deco-star deco-2">✦</div>
      <div className="deco-circle deco-3"></div>

      <div className="chaos-container">
        
        {/* Título Principal Desestructurado */}
        <h2 className="chaos-title">
          <span className="word-1">DISEÑO</span>
          <span className="word-2">LOS</span>
          <span className="word-3">MEJORES</span>
        </h2>

        {/* Texto Estilo Graffiti / Sticker */}
        <div className="sticker-wrapper">
          <div className="sticker sticker-pink">
            ¡SIN ABURRIMIENTO!
          </div>
          <div className="sticker sticker-cyan">
            100% ACTITUD
          </div>
        </div>

        {/* Párrafo Suelto (Sin Card) */}
        <p className="chaos-text">
          El diseño web no tiene por qué ser cuadrado. 
          <br/>
          Mezclamos colores, formas y <strong>mucha locura</strong> para crear experiencias que se quedan en la mente.
        </p>

        {/* Iconos Flotantes */}
        <div className="floating-icons">
          <i className="fa-solid fa-bomb icon-float delay-1"></i>
          <i className="fa-solid fa-bolt icon-float delay-2"></i>
          <i className="fa-solid fa-eye icon-float delay-3"></i>
        </div>

      </div>

      {/* Tira en movimiento (Marquee) */}
      <div className="marquee-strip">
        <div className="marquee-content">
          <span>DISEÑO</span> • <span>CÓDIGO</span> • <span>ARTE</span> • <span>FUTURO</span> • 
          <span>DISEÑO</span> • <span>CÓDIGO</span> • <span>ARTE</span> • <span>FUTURO</span> •
          <span>DISEÑO</span> • <span>CÓDIGO</span> • <span>ARTE</span> • <span>FUTURO</span> •
        </div>
      </div>
    </section>
  );
};

export default NormalSection;