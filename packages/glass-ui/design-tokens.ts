/**
 * Glass UI Design Tokens
 * Central reference for colors, typography, and spacing
 */

export const colors = {
  background: '#0f172a', // Deep slate
  glass: 'rgba(255, 255, 255, 0.05)',
  glassHover: 'rgba(255, 255, 255, 0.08)',
  glassBorder: 'rgba(255, 255, 255, 0.1)',
  text: {
    primary: '#f1f5f9', // Off-white body
    heading: '#ffffff', // White headers
    muted: '#94a3b8',
  },
  accent: {
    blue: '#0ea5e9', // Electric blue
    green: '#10b981', // Emerald
    amber: '#f59e0b', // Amber
  },
  borders: {
    light: 'rgba(255, 255, 255, 0.1)',
    medium: 'rgba(255, 255, 255, 0.15)',
  },
};

export const typography = {
  fonts: {
    display: "'Inter', sans-serif", // Bold for headers
    body: "'Inter', sans-serif", // Regular for body
    mono: "'JetBrains Mono', monospace", // Code/pricing
  },
  sizes: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
  },
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.6, // Spec: 1.6x for readability
    relaxed: 1.8,
  },
};

export const spacing = {
  xs: '0.25rem', // 4px
  sm: '0.5rem', // 8px
  md: '1rem', // 16px
  lg: '1.5rem', // 24px
  xl: '2rem', // 32px
  '2xl': '3rem', // 48px
  '3xl': '4rem', // 64px
};

export const borderRadius = {
  sm: '8px',
  md: '12px', // Standard (spec)
  lg: '16px', // Hero (spec)
  full: '9999px',
};

export const effects = {
  blur: '20px', // Spec: 20px blur
  backdropFilter: 'blur(20px)',
  glassOpacity: 0.05,
  transition: '0.3s ease-in-out', // Smooth transitions
  zIndex: {
    base: 1,
    dropdown: 100,
    modal: 1000,
    tooltip: 1100,
  },
};

export const shadows = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
};
