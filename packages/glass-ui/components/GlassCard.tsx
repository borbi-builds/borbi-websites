import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { colors, borderRadius, effects, spacing } from '../design-tokens';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hover = true,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -4, transition: { duration: 0.3 } } : {}}
      className={`
        relative p-6 rounded-lg
        backdrop-blur-[20px]
        border border-white/10
        bg-white/5
        hover:bg-white/8
        transition-all duration-300
        ${className}
      `}
      style={{
        background: colors.glass,
        backdropFilter: effects.backdropFilter,
        borderColor: colors.borders.light,
      }}
    >
      {children}
    </motion.div>
  );
};
