import React from 'react';

export const FAQ: React.FC<any> = ({ items }) => (
  <div className="space-y-4">
    {items?.map((item: any, i: number) => (
      <details key={i} className="group bg-white/5 rounded-lg p-4 cursor-pointer">
        <summary className="text-white font-semibold">{item.q}</summary>
        <p className="text-slate-300 mt-2 text-sm">{item.a}</p>
      </details>
    ))}
  </div>
);
