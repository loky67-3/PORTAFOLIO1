import { useEffect, useRef } from "react";

const Cards = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  // Lógica para el efecto de carrusel al bajar (Scroll Horizontal Sticky)
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const track = trackRef.current;

      if (section && track) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        // Calculamos cuánto hemos bajado dentro de la sección
        // El carrusel se moverá mientras estemos en esta sección enorme
        const start = sectionTop;
        const end = sectionTop + sectionHeight - windowHeight;

        if (scrollY >= start && scrollY <= end) {
          // Porcentaje de scroll completado (0 a 1)
          const progress = (scrollY - start) / (end - start);
          
          // Ancho total del track menos el ancho de la ventana
          const scrollWidth = track.scrollWidth - window.innerWidth;
          
          // Movemos el track hacia la izquierda
          const x = -(scrollWidth * progress);
          track.style.transform = `translateX(${x}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="carousel-section">
      
      {/* Contenedor Sticky: Se queda fijo mientras scrolleas */}
      <div className="carousel-sticky">
        
        <div ref={trackRef} className="carousel-track">
          
          {/* CARD 1 */}
          <article className="toon-card card-orange">
            <h3>DISEÑO<br/>UI/UX</h3>
            
            <p>
              Creamos experiencias visuales que definen marcas. Cada píxel está pensado para comunicar una historia única con elegancia y precisión moderna.
            </p>
            
            <div className="icon-row-10">
              <i className="fa-brands fa-figma"></i> <i className="fa-brands fa-sketch"></i>
              <i className="fa-solid fa-pen-nib"></i> <i className="fa-solid fa-vector-square"></i>
              <i className="fa-solid fa-palette"></i> <i className="fa-solid fa-image"></i>
              <i className="fa-solid fa-crop"></i> <i className="fa-solid fa-layer-group"></i>
              <i className="fa-solid fa-font"></i> <i className="fa-solid fa-bezier-curve"></i>
            </div>
          </article>

          {/* CARD 2 */}
          <article className="toon-card card-yellow">
            <h3>DEV<br/>FRONTEND</h3>

            <p>
              Arquitectura de software escalable y mantenible. Utilizamos las últimas tecnologías para construir aplicaciones web rápidas y robustas.
            </p>

            <div className="icon-row-10">
              <i className="fa-brands fa-react"></i> <i className="fa-brands fa-js"></i>
              <i className="fa-brands fa-html5"></i> <i className="fa-brands fa-css3-alt"></i>
              <i className="fa-brands fa-node"></i> <i className="fa-brands fa-sass"></i>
              <i className="fa-brands fa-git-alt"></i> <i className="fa-brands fa-npm"></i>
              <i className="fa-brands fa-vuejs"></i> <i className="fa-brands fa-angular"></i>
            </div>
          </article>

          {/* CARD 3 - ESPECIAL IMAGEN */}
          <article className="toon-card card-cyan">
            <h3>ARTE &<br/>CÓDIGO</h3>
            
            <p>
              La fusión perfecta entre estética y funcionalidad. Rompemos las barreras de lo convencional para ofrecer productos digitales memorables.
            </p>

            <div className="icon-row-10">
              <i className="fa-solid fa-wand-magic-sparkles"></i> <i className="fa-solid fa-lightbulb"></i>
              <i className="fa-solid fa-brain"></i> <i className="fa-solid fa-puzzle-piece"></i>
              <i className="fa-solid fa-eye"></i> <i className="fa-solid fa-camera"></i>
              <i className="fa-solid fa-film"></i> <i className="fa-solid fa-music"></i>
              <i className="fa-solid fa-microphone"></i> <i className="fa-solid fa-gamepad"></i>
            </div>
          </article>

          {/* CARD 4 */}
          <article className="toon-card card-green">
            <h3>POWER<br/>SPEED</h3>
            
            <p>
              Rendimiento optimizado al máximo nivel. Tiempos de carga instantáneos y fluidez absoluta en cada interacción del usuario.
            </p>

            <div className="icon-row-10">
              <i className="fa-solid fa-bolt"></i> <i className="fa-solid fa-gauge-high"></i>
              <i className="fa-solid fa-server"></i> <i className="fa-solid fa-database"></i>
              <i className="fa-solid fa-network-wired"></i> <i className="fa-solid fa-microchip"></i>
              <i className="fa-solid fa-satellite"></i> <i className="fa-solid fa-wifi"></i>
              <i className="fa-solid fa-signal"></i> <i className="fa-solid fa-battery-full"></i>
            </div>
          </article>

           {/* CARD 5 */}
           <article className="toon-card card-red">
            <h3>LOVE<br/>WORK</h3>
            
            <p>
              Dedicación absoluta en cada detalle. Trabajamos con pasión para entregar resultados que superan todas las expectativas.
            </p>

            <div className="icon-row-10">
              <i className="fa-solid fa-heart"></i> <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-thumbs-up"></i> <i className="fa-solid fa-hand-spock"></i>
              <i className="fa-solid fa-face-smile"></i> <i className="fa-solid fa-sun"></i>
              <i className="fa-solid fa-moon"></i> <i className="fa-solid fa-cloud"></i>
              <i className="fa-solid fa-fire"></i> <i className="fa-solid fa-water"></i>
            </div>
          </article>

           {/* CARD 6 - NUEVA */}
           <article className="toon-card card-pink">
            <h3>SEO &<br/>GROWTH</h3>
            
            <p>
              Impulsamos tu marca hacia la cima. Estrategias de posicionamiento y crecimiento real para que el mundo te vea.
            </p>

            <div className="icon-row-10">
              <i className="fa-solid fa-rocket"></i> <i className="fa-solid fa-magnifying-glass-chart"></i>
              <i className="fa-solid fa-chart-line"></i> <i className="fa-solid fa-bullhorn"></i>
              <i className="fa-solid fa-globe"></i> <i className="fa-solid fa-users"></i>
              <i className="fa-solid fa-sack-dollar"></i> <i className="fa-solid fa-chart-pie"></i>
              <i className="fa-solid fa-trophy"></i> <i className="fa-solid fa-target"></i>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}

export default Cards;
