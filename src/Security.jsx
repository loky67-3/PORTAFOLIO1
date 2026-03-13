import { useEffect } from 'react';

/*
  GUÍA RÁPIDA DE SEGURIDAD Y ANTI-DDOS
  
  Hola! Este archivo no añade una función visual, pero es una guía importante.
  
  Un ataque DDoS (Ataque de Denegación de Servicio) es como si miles de personas
  falsas intentaran entrar a tu sitio al mismo tiempo para que los visitantes
  reales no puedan pasar.
  
  Este tipo de ataque se detiene ANTES de que llegue a tu servidor. El código de
  tu página (React, Javascript) se ejecuta en el navegador del visitante, por lo
  que no puede detener un ataque DDoS.
  
  La solución real es usar un servicio externo que actúe como un "escudo".
  
  =============================================================================
  SOLUCIÓN RECOMENDADA: USA CLOUDFLARE (TIENE UN PLAN GRATUITO)
  =============================================================================
  
  Cloudflare es un servicio que se pone entre tus visitantes y tu servidor.
  Filtra el tráfico malo y solo deja pasar a los visitantes reales. Es la
  herramienta más popular y efectiva para esto.
  
  ¿Cómo configurarlo?
  
  1.  **Crea una cuenta en Cloudflare:**
      Ve a `cloudflare.com` y regístrate gratis.
  
  2.  **Añade tu sitio web:**
      Cloudflare te pedirá el dominio de tu página (ej: `mi-pagina.com`).
  
  3.  **Cambia los "Nameservers" (Servidores de Nombres):**
      - Cloudflare te dará dos "nombres de servidor" (parecen `ana.ns.cloudflare.com`).
      - Ve al lugar donde compraste tu dominio (GoDaddy, Namecheap, etc.) y reemplaza los que tienes por los que te dio Cloudflare.
  
  Una vez hecho esto, tu sitio estará protegido automáticamente contra la mayoría de ataques DDoS.
*/

const Security = () => null; // Este componente no renderiza nada.

export default Security;