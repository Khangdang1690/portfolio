"use client";

import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to match window size
    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // We now know canvas and ctx are defined in this scope
    // Using type assertion
    const safeCanvas = canvas as HTMLCanvasElement;
    const safeCtx = ctx as CanvasRenderingContext2D;

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * safeCanvas.width;
        this.y = Math.random() * safeCanvas.height;
        this.size = Math.random() * 2.5 + 0.5; // Increased size for better visibility
        this.speedX = Math.random() * 0.7 - 0.35; // Slightly faster movement
        this.speedY = Math.random() * 0.7 - 0.35;
        // Increased opacity from 0.2 to 0.4 for better visibility
        this.color = `rgba(215, 38, 61, ${Math.random() * 0.4 + 0.1})`; 
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > safeCanvas.width) this.x = 0;
        else if (this.x < 0) this.x = safeCanvas.width;

        if (this.y > safeCanvas.height) this.y = 0;
        else if (this.y < 0) this.y = safeCanvas.height;
      }

      draw() {
        safeCtx.fillStyle = this.color;
        safeCtx.beginPath();
        safeCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        safeCtx.fill();
      }
    }

    // Create particle array - increase particle count
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(Math.max(window.innerWidth / 8, 100), 180); // More particles
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      safeCtx.clearRect(0, 0, safeCanvas.width, safeCanvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      // Connect particles with lines
      connectParticles();
      
      requestAnimationFrame(animate);
    };

    // Connect particles with lines if they're close enough - increased distance and opacity
    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) { // Increased connection distance
            // Increased opacity from 0.1 to 0.15
            safeCtx.strokeStyle = `rgba(215, 38, 61, ${0.15 - distance/1000})`;
            safeCtx.lineWidth = 0.6; // Thicker lines
            safeCtx.beginPath();
            safeCtx.moveTo(particlesArray[a].x, particlesArray[a].y);
            safeCtx.lineTo(particlesArray[b].x, particlesArray[b].y);
            safeCtx.stroke();
          }
        }
      }
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-[1]" // Ensure z-index is appropriate
      aria-hidden="true"
    />
  );
} 