import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="cartoon-footer">
      {/* Marca de fondo gigante */}
      <div className="footer-brand-bg">NB</div>
      
      <div className="footer-content">
        <h2 className="footer-title">CONTACTANOS</h2>
        <a href="tel:+523122213326" className="footer-contact-info">
          <i className="fa-solid fa-phone-volume"></i> +52 312 221 33 26
        </a>
        
        <div className="footer-icons">
        </div>

        <p className="footer-mini-text">DISEÑO CHARLY. © 2026 NB Design.</p>
      </div>
    </footer>
  );
          /*<a href="#" className="icon-box whatsapp"><i className="fa-brands fa-whatsapp"></i></a>
          <a href="#" className="icon-box facebook"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#" className="icon-box instagram"><i className="fa-brands fa-instagram"></i></a>
          <a href="#" className="icon-box tiktok"><i className="fa-brands fa-tiktok"></i></a>
          <a href="#" className="icon-box google"><i className="fa-brands fa-google"></i></a>
          <a href="#" className="icon-box amazon"><i className="fa-brands fa-amazon"></i></a>
          <a href="#" className="icon-box twitter"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="#" className="icon-box youtube"><i className="fa-brands fa-youtube"></i></a>
          <a href="#" className="icon-box linkedin"><i className="fa-brands fa-linkedin-in"></i></a>*/
};

export default Footer;