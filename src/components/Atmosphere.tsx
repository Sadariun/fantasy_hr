import { useEffect, useRef } from 'react';

export default function Atmosphere() {
  const layerNearRef = useRef<HTMLDivElement>(null);
  const layerMidRef = useRef<HTMLDivElement>(null);
  const layerFarRef = useRef<HTMLDivElement>(null);

  // Cursor-based parallax effect – smooth via requestAnimationFrame
  useEffect(() => {
    const state = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Map cursor position to a small translation range (2% of viewport)
      state.targetX = (e.clientX - innerWidth / 2) * 0.02;
      state.targetY = (e.clientY - innerHeight / 2) * 0.02;
    };

    let rafId: number;
    const animate = () => {
      // Smoothly ease towards the target position
      state.x += (state.targetX - state.x) * 0.1;
      state.y += (state.targetY - state.y) * 0.1;

      if (layerFarRef.current) {
        layerFarRef.current.style.transform = `translate(${state.x}px, ${state.y}px)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Generate rune & ember elements only once on mount
  const runes = 'ᚠᚢᚦᚨᚱᚷᚹᛖᛟ'.split('');
  const runeSpans = Array.from({ length: 25 }).map((_, i) => {
    const char = runes[i % runes.length];
    const size = 20 + Math.random() * 44; // 20–64px
    const left = Math.random() * 100;
    const delay = Math.random() * 20;
    const duration = 35 + Math.random() * 25;
    return (
      <span
        key={`r${i}`}
        className="rune"
        style={{
          left: `${left}%`,
          fontSize: `${size}px`,
          animationDelay: `-${delay}s`,
          animationDuration: `${duration}s`,
        }}
      >
        {char}
      </span>
    );
  });

  const emberSpans = Array.from({ length: 40 }).map((_, i) => {
    const size = 4 + Math.random() * 6;
    const left = Math.random() * 100;
    const delay = Math.random() * 10;
    const duration = 8 + Math.random() * 8;
    const opacity = 0.5 + Math.random() * 0.4;
    return (
      <span
        key={`e${i}`}
        className="ember"
        style={{
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDelay: `-${delay}s`,
          animationDuration: `${duration}s`,
          opacity,
        }}
      />
    );
  });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none select-none" style={{ zIndex: 0 }}>
      {/* Parallax mountain layers */}
      <div
        ref={layerFarRef}
        className="parallax-layer opacity-60"
        style={{
          backgroundImage: "url('/background.jpg')",
          zIndex: 2,
        }}
      />
      <div
        ref={layerMidRef}
        className="parallax-layer opacity-70"
        style={{
          backgroundImage: "none",
          zIndex: 3,
        }}
      />
      <div
        ref={layerNearRef}
        className="parallax-layer opacity-80"
        style={{
          backgroundImage: "none",
          zIndex: 4,
        }}
      />

      {/* Floating runes */}
      <div className="absolute inset-0" style={{ zIndex: 7 }}>
        {runeSpans}
      </div>

      {/* Ember particles */}
      <div className="absolute inset-0" style={{ zIndex: 8 }}>
        {emberSpans}
      </div>
    </div>
  );
} 