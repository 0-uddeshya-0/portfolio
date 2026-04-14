import { useEffect, useRef } from 'react';

/**
 * Small cursor-following sage tint (multiply blend) — subtle darkening near the pointer,
 * similar in spirit to glasshire.de: rest of the page stays unchanged.
 */
export function SpotlightCursorWebGL() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = layerRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.display = 'none';
      return;
    }

    const onMove = (e: PointerEvent) => {
      el.style.setProperty('--spot-x', `${e.clientX}px`);
      el.style.setProperty('--spot-y', `${e.clientY}px`);
    };

    el.style.setProperty('--spot-x', `${window.innerWidth / 2}px`);
    el.style.setProperty('--spot-y', `${window.innerHeight / 2}px`);

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <div
      ref={layerRef}
      className="pointer-events-none fixed inset-0 z-[25] spotlight-cursor-layer"
      aria-hidden
    />
  );
}
