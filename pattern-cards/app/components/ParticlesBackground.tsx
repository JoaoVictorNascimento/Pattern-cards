'use client';

import { useEffect, useRef } from 'react';
import particlesConfig from '../particlesjs-config.json';

interface ParticlesConfig {
  particles: {
    number: { value: number; density: { enable: boolean; value_area: number } };
    color: { value: string };
    shape: { type: string; stroke: { width: number; color: string }; polygon: { nb_sides: number }; image: { src: string; width: number; height: number } };
    opacity: { value: number; random: boolean; anim: { enable: boolean; speed: number; opacity_min: number; sync: boolean } };
    size: { value: number; random: boolean; anim: { enable: boolean; speed: number; size_min: number; sync: boolean } };
    line_linked: { enable: boolean; distance: number; color: string; opacity: number; width: number };
    move: { enable: boolean; speed: number; direction: string; random: boolean; straight: boolean; out_mode: string; bounce: boolean; attract: { enable: boolean; rotateX: number; rotateY: number } };
  };
  interactivity: {
    detect_on: string;
    events: { onhover: { enable: boolean; mode: string }; onclick: { enable: boolean; mode: string }; resize: boolean };
    modes: { grab: { distance: number; line_linked: { opacity: number } }; bubble: { distance: number; size: number; duration: number; opacity: number; speed: number }; repulse: { distance: number; duration: number }; push: { particles_nb: number }; remove: { particles_nb: number } };
  };
  retina_detect: boolean;
}

declare global {
  interface Window {
    particlesJS: (id: string, config: ParticlesConfig) => void;
  }
}

export default function ParticlesBackground() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadParticles = async () => {
      if (typeof window !== 'undefined' && particlesRef.current) {
        try {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
          script.onload = () => {
            if (window.particlesJS) {
              window.particlesJS('particles-js', particlesConfig);
            }
          };
          document.head.appendChild(script);
        } catch (error) {
          console.error('Erro ao carregar particles.js:', error);
        }
      }
    };

    loadParticles();
  }, []);

  return (
    <div 
      id="particles-js" 
      ref={particlesRef}
      className="fixed inset-0 z-0"
      style={{ 
        background: '#1f1d1d',
        width: '100%',
        height: '100%'
      }}
    />
  );
} 