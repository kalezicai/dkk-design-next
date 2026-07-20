"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number; y: number; vx: number; vy: number; size: number; alpha: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];
    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => { w = window.innerWidth; h = window.innerHeight; canvas!.width = w; canvas!.height = h; };
    const createParticles = () => {
      particles = [];
      for (let i = 0; i < 30; i++) {
        particles.push({
          x: Math.random() * w, y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 0.5, alpha: Math.random() * 0.3 + 0.05,
        });
      }
    };
    const draw = () => {
      ctx!.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx!.beginPath(); ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(201, 162, 76, ${p.alpha})`;
        ctx!.fill();
      }
      animId = requestAnimationFrame(draw);
    };

    resize(); createParticles(); draw();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 opacity-60" aria-hidden="true" />;
}
