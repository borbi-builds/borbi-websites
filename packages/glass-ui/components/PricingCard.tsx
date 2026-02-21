import React from 'react';
import { GlassCard } from './GlassCard';

export const PricingCard: React.FC<any> = ({ title, price, features }) => (
  <GlassCard>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-2xl font-bold text-blue-400 mb-4">{price}</p>
    <ul className="space-y-2">
      {features?.map((f: string, i: number) => (
        <li key={i} className="text-slate-300 text-sm">
          ✓ {f}
        </li>
      ))}
    </ul>
  </GlassCard>
);
