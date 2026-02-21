import React, { ReactNode } from 'react';
import { colors, typography, spacing } from '../design-tokens';

interface GlassButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = `
    inline-flex items-center justify-center
    font-semibold transition-all duration-300
    rounded-md
    cursor-pointer
    hover:scale-105
  `;

  const sizeStyles = {
    sm: `px-4 py-2 text-sm min-h-[32px]`,
    md: `px-6 py-3 text-base min-h-[44px]`, // 48px touch target
    lg: `px-8 py-4 text-lg min-h-[56px]`,
  };

  const variantStyles = {
    primary: `
      bg-blue-500/80 hover:bg-blue-600
      text-white
      border border-blue-400/30
    `,
    secondary: `
      bg-white/5 hover:bg-white/10
      text-white
      border border-white/20
    `,
    ghost: `
      bg-transparent
      text-white
      border border-white/30 hover:border-white/60
    `,
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} type={type} disabled={disabled} className={combinedStyles}>
      {children}
    </button>
  );
};
