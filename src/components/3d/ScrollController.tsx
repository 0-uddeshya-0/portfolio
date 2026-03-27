import { useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { LegoScene } from './LegoCharacter';

interface ScrollControllerProps {
  className?: string;
}

export function ScrollController({ className = '' }: ScrollControllerProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isWalking, setIsWalking] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollY / docHeight : 0;
      
      setScrollProgress(Math.min(1, Math.max(0, progress)));
      
      // Determine if walking (scroll is changing)
      const isScrolling = Math.abs(scrollY - lastScrollY.current) > 0.5;
      setIsWalking(isScrolling);
      
      lastScrollY.current = scrollY;
      
      // Clear previous timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      // Stop walking after scroll stops
      scrollTimeout.current = setTimeout(() => {
        setIsWalking(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <div 
      className={`fixed inset-0 pointer-events-none z-30 ${className}`}
      style={{ height: '100vh' }}
    >
      <Canvas
        camera={{ position: [0, 2, 6], fov: 45 }}
        shadows
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <LegoScene scrollProgress={scrollProgress} isWalking={isWalking} />
      </Canvas>
    </div>
  );
}
