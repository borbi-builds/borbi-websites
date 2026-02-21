import React, { useEffect, useState, memo } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import { colors, typography } from '../design-tokens';

interface MetricsCounterProps {
  label: string;
  before?: string;
  after: string;
  icon?: string;
  duration?: number;
  className?: string;
}

function parseValue(str: string): { prefix: string; number: number; suffix: string; decimals: number } {
  const match = str.match(/^([^0-9]*?)([\d,]+\.?\d*)(.*)$/);
  if (!match) return { prefix: '', number: 0, suffix: str, decimals: 0 };

  const prefix = match[1];
  const numStr = match[2].replace(/,/g, '');
  const number = parseFloat(numStr) || 0;
  const suffix = match[3];
  const decPart = numStr.split('.')[1];
  const decimals = decPart ? decPart.length : 0;

  return { prefix, number, suffix, decimals };
}

function formatNumber(n: number, decimals: number): string {
  const fixed = n.toFixed(decimals);
  const [int, dec] = fixed.split('.');
  const withCommas = int.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return dec ? `${withCommas}.${dec}` : withCommas;
}

const AnimatedNumber: React.FC<{ value: number; decimals: number; prefix: string; suffix: string; isInView: boolean; duration: number }> = ({
  value, decimals, prefix, suffix, isInView, duration,
}) => {
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();
    let raf: number;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * value;
      setDisplay(formatNumber(current, decimals));

      if (progress < 1) raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value, decimals, duration]);

  return <span>{prefix}{display}{suffix}</span>;
};

export const MetricsCounter: React.FC<MetricsCounterProps> = memo(({
  label,
  before,
  after,
  icon,
  duration = 1.5,
  className = '',
}) => {
  const { ref, isInView } = useIntersectionObserver({ threshold: 0.3 });
  const parsed = parseValue(after);

  return (
    <div ref={ref} className={`text-center ${className}`}>
      {icon && <div className="text-2xl mb-2">{icon}</div>}

      {before && (
        <div className="text-sm mb-1" style={{ color: colors.text.muted }}>
          {before}
        </div>
      )}

      <div
        className="text-3xl font-bold tabular-nums"
        style={{ color: colors.accent.blue, fontFamily: typography.fonts.mono }}
      >
        <AnimatedNumber
          value={parsed.number}
          decimals={parsed.decimals}
          prefix={parsed.prefix}
          suffix={parsed.suffix}
          isInView={isInView}
          duration={duration}
        />
      </div>

      <div className="text-sm mt-1 font-medium" style={{ color: colors.text.muted }}>
        {label}
      </div>

      {before && (
        <div className="text-xs mt-1" style={{ color: colors.accent.green }}>
          ↑ from {before}
        </div>
      )}
    </div>
  );
});

MetricsCounter.displayName = 'MetricsCounter';
