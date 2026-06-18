"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  color: string;
  alpha: number;
  targetAlpha: number;
  speed: number;
};

const COLORS = [
  "rgba(37, 99, 235,",   // blue
  "rgba(6, 182, 212,",   // cyan
  "rgba(99, 102, 241,",  // indigo
  "rgba(139, 92, 246,",  // violet
];

export default function PixelCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const frameRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const GRID = 28;
    let W = 0, H = 0;

    function init() {
      W = canvas!.width = canvas!.offsetWidth;
      H = canvas!.height = canvas!.offsetHeight;

      particlesRef.current = [];
      const cols = Math.ceil(W / GRID) + 1;
      const rows = Math.ceil(H / GRID) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (Math.random() > 0.55) continue;
          const x = c * GRID + Math.random() * 6 - 3;
          const y = r * GRID + Math.random() * 6 - 3;
          const color = COLORS[Math.floor(Math.random() * COLORS.length)];
          particlesRef.current.push({
            x, y, baseX: x, baseY: y,
            size: Math.random() * 1.5 + 0.5,
            color,
            alpha: Math.random() * 0.35 + 0.05,
            targetAlpha: Math.random() * 0.35 + 0.05,
            speed: Math.random() * 0.005 + 0.002,
          });
        }
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const RADIUS = 120;

      for (const p of particlesRef.current) {
        const dx = mx - p.baseX;
        const dy = my - p.baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < RADIUS) {
          const force = (1 - dist / RADIUS);
          p.x = p.baseX - dx * force * 0.25;
          p.y = p.baseY - dy * force * 0.25;
          p.alpha = Math.min(0.9, p.alpha + force * 0.08);
        } else {
          p.x += (p.baseX - p.x) * 0.08;
          p.y += (p.baseY - p.y) * 0.08;
          p.alpha += (p.targetAlpha - p.alpha) * p.speed;
        }

        if (Math.random() < 0.002) {
          p.targetAlpha = Math.random() * 0.4 + 0.05;
        }

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = `${p.color}${p.alpha})`;
        ctx!.fill();
      }

      frameRef.current = requestAnimationFrame(draw);
    }

    const onMouse = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const onResize = () => { init(); };
    const ro = new ResizeObserver(onResize);
    ro.observe(canvas);

    canvas.addEventListener("mousemove", onMouse);
    window.addEventListener("mousemove", onMouse);

    init();
    draw();

    return () => {
      cancelAnimationFrame(frameRef.current);
      ro.disconnect();
      canvas.removeEventListener("mousemove", onMouse);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%", display: "block" }}
      aria-hidden="true"
    />
  );
}
