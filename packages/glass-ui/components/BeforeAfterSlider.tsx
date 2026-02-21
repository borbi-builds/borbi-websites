import React, { useRef, useState, useCallback, memo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { colors } from '../design-tokens';

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeElement?: ReactNode;
  afterElement?: ReactNode;
  alt?: string;
  height?: number | string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = memo(({
  beforeImage,
  afterImage,
  beforeElement,
  afterElement,
  alt = 'Before and after comparison',
  height = 400,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(50);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  }, [isDragging, updatePosition]);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const renderBefore = beforeElement || (
    <img src={beforeImage} alt={`${alt} - before`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" draggable={false} />
  );

  const renderAfter = afterElement || (
    <img src={afterImage} alt={`${alt} - after`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" draggable={false} />
  );

  return (
    <div
      ref={containerRef}
      className={`relative select-none overflow-hidden rounded-lg cursor-ew-resize ${className}`}
      style={{ height }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      role="slider"
      aria-label={alt}
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') setPosition((p) => Math.max(0, p - 2));
        if (e.key === 'ArrowRight') setPosition((p) => Math.min(100, p + 2));
      }}
    >
      {/* After (full background) */}
      <div className="absolute inset-0">
        {renderAfter}
      </div>

      {/* Before (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <div className="absolute inset-0" style={{ width: containerRef.current?.offsetWidth || '100%', minWidth: '100%' }}>
          {renderBefore}
        </div>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 z-10"
        style={{
          left: `${position}%`,
          transform: 'translateX(-50%)',
          background: 'white',
          boxShadow: '0 0 8px rgba(0,0,0,0.5)',
        }}
      />

      {/* Drag handle */}
      <motion.div
        className="absolute top-1/2 z-20 flex items-center justify-center"
        style={{ left: `${position}%`, transform: 'translate(-50%, -50%)' }}
        animate={{ scale: isDragging ? 1.2 : 1 }}
        transition={{ duration: 0.15 }}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/30"
          style={{ background: 'rgba(255,255,255,0.2)' }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 4L3 10L7 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 4L17 10L13 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </motion.div>

      {/* Labels */}
      <div className="absolute top-3 left-3 z-10 px-2 py-1 rounded text-xs font-semibold uppercase tracking-wider"
        style={{ background: 'rgba(0,0,0,0.6)', color: '#ef4444', backdropFilter: 'blur(4px)' }}>
        Before
      </div>
      <div className="absolute top-3 right-3 z-10 px-2 py-1 rounded text-xs font-semibold uppercase tracking-wider"
        style={{ background: colors.accent.blue, color: 'white' }}>
        After
      </div>
    </div>
  );
});

BeforeAfterSlider.displayName = 'BeforeAfterSlider';
