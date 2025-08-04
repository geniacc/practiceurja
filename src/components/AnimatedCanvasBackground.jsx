import React, { useEffect, useRef } from "react";
import "./AnimatedCanvasBackground.css";

export default function AnimatedCanvasBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // --- Configuration ---
    const config = {
      atomCount: 25, // Slightly more atoms for a fuller network
      atomSpeed: 0.2,
      nucleusColor: "rgba(255, 140, 0, 0.9)",
      electronColor: "rgba(128, 128, 128, 0.7)",
      orbitColor: "rgba(0, 0, 0, 0.08)",
      lineColor: "rgba(0, 0, 0, 0.06)", // Color for connecting lines
      connectionDistance: 250, // How close atoms need to be to connect
      mouseRepelRadius: 150, // The radius of the mouse's "energy field"
    };

    let atoms = [];
    const mouse = { x: null, y: null };

    // ✅ Track mouse movement
    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createAtoms();
    };

    const createAtoms = () => {
      atoms = Array.from({ length: config.atomCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * config.atomSpeed,
        vy: (Math.random() - 0.5) * config.atomSpeed,
        electrons: Array.from({ length: 1 + Math.floor(Math.random() * 2) }, (_, i) => ({
          radius: 20 + i * 10,
          angle: Math.random() * Math.PI * 2,
          speed: 0.004 + Math.random() * 0.005,
          size: 1.5 + Math.random() * 1,
        })),
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      atoms.forEach((atom) => {
        // ✅ Mouse repulsion logic
        if (mouse.x && mouse.y) {
          const dx = atom.x - mouse.x;
          const dy = atom.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < config.mouseRepelRadius) {
            const force = (config.mouseRepelRadius - distance) / config.mouseRepelRadius;
            atom.vx += (dx / distance) * force * 0.5;
            atom.vy += (dy / distance) * force * 0.5;
          }
        }
        
        // ✅ Add friction to slow down after being pushed
        atom.vx *= 0.98;
        atom.vy *= 0.98;
        
        atom.x += atom.vx;
        atom.y += atom.vy;

        if (atom.x < 0) atom.x = canvas.width;
        if (atom.x > canvas.width) atom.x = 0;
        if (atom.y < 0) atom.y = canvas.height;
        if (atom.y > canvas.height) atom.y = 0;

        // Draw orbit trails
        ctx.strokeStyle = config.orbitColor;
        ctx.lineWidth = 0.5;
        atom.electrons.forEach((e) => {
          ctx.beginPath();
          ctx.arc(atom.x, atom.y, e.radius, 0, 2 * Math.PI);
          ctx.stroke();
        });

        // Draw nucleus
        ctx.beginPath();
        ctx.arc(atom.x, atom.y, 3, 0, 2 * Math.PI);
        ctx.fillStyle = config.nucleusColor;
        ctx.fill();

        // Draw electrons and update their orbit
        atom.electrons.forEach((e) => {
          const electronX = atom.x + Math.cos(e.angle) * e.radius;
          const electronY = atom.y + Math.sin(e.angle) * e.radius;
          ctx.beginPath();
          ctx.arc(electronX, electronY, e.size, 0, 2 * Math.PI);
          ctx.fillStyle = config.electronColor;
          ctx.fill();
          e.angle += e.speed;
        });
      });
      
      // ✅ Draw connecting lines between atoms
      ctx.strokeStyle = config.lineColor;
      for (let i = 0; i < atoms.length; i++) {
        for (let j = i + 1; j < atoms.length; j++) {
          const dx = atoms[i].x - atoms[j].x;
          const dy = atoms[i].y - atoms[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < config.connectionDistance) {
            ctx.globalAlpha = 1 - (distance / config.connectionDistance);
            ctx.beginPath();
            ctx.moveTo(atoms[i].x, atoms[i].y);
            ctx.lineTo(atoms[j].x, atoms[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove); // Start tracking mouse
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove); // Stop tracking mouse
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="animated-bg-canvas" />;
}