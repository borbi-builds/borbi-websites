import React from 'react';

export const Navbar: React.FC<any> = ({ logo, menuItems }) => (
  <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-white font-bold text-lg">{logo}</div>
      <div className="flex gap-8 hidden md:flex">
        {menuItems?.map((item: any, i: number) => (
          <a key={i} href={item.href} className="text-slate-300 hover:text-white transition">
            {item.label}
          </a>
        ))}
      </div>
    </div>
  </nav>
);
