import React from 'react';
import { GlassButton } from './GlassButton';

export const CTA: React.FC<any> = ({ title, description, buttonText, buttonHref }) => (
  <div className="text-center py-16">
    <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
    <p className="text-slate-300 mb-8 max-w-2xl mx-auto">{description}</p>
    <GlassButton variant="primary" size="lg" href={buttonHref}>
      {buttonText}
    </GlassButton>
  </div>
);
