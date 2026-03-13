import React from 'react';
import './ProjectsSection.css';

const projects = [
  {
    id: 1,
    title: 'MI PORTAFOLIO',
    desc: 'Tu identidad digital única. Diseño que impacta y convierte visitantes en clientes.',
    price: '$4,500 MXN',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop', // Imagen de código/setup
    colorClass: 'card-cyan',
    url: 'https://portafolio-hk55.onrender.com'
  },
  {
    id: 2,
    title: 'VIVERO DIGITAL',
    desc: 'E-commerce fresco y orgánico. La naturaleza al alcance de un clic.',
    price: '$6,800 MXN',
    img: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?q=80&w=2090&auto=format&fit=crop', // Imagen de plantas
    colorClass: 'card-green',
    url: 'https://plantas-8uw8.onrender.com'
  },
  {
    id: 3,
    title: 'CINE STREAM',
    desc: 'Plataforma de streaming personal. Potente, rápida y con diseño de cartelera.',
    price: '$8,500 MXN',
    img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop', // Imagen de cine
    colorClass: 'card-purple',
    url: 'https://system-pelis.onrender.com'
  }
];

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-header">MIS OBRAS CREATIVAS</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="comic-showcase-item"
            onClick={() => window.open(project.url, '_blank')}
            style={{ cursor: 'pointer' }}
          >
            {/* CINTA ADHESIVA POR TODOS LADOS (Mas cinta) */}
            <div className="tape-strip tape-top-left"></div>
            <div className="tape-strip tape-top-right"></div>
            <div className="tape-strip tape-bottom-center"></div>
            
            {/* IMAGEN ESTILO PÓSTER */}
            <div className="poster-image-frame">
              <img src={project.img} alt={project.title} />
              <div className="jagged-price-sticker">
                <span>{project.price}</span>
              </div>
            </div>

            {/* INFO ESTILO NOTA PEGADA */}
            <div className={`comic-info-sheet ${project.colorClass}`}>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <a 
                href={`https://wa.me/523122213326?text=Hola,%20me%20interesa%20el%20proyecto%20${project.title}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="square-comic-btn"
                onClick={(e) => e.stopPropagation()}
              >
                LO QUIERO <i className="fa-solid fa-fire"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;