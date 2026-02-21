import React from 'react';

export const Footer: React.FC<any> = ({ companyName, links, email }) => (
  <footer className="bg-black/50 border-t border-white/10 py-12">
    <div className="max-w-6xl mx-auto px-6">
      <p className="text-white font-bold mb-4">{companyName}</p>
      <p className="text-slate-400 mb-6">Email: {email}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        {links?.map((group: any, i: number) => (
          <div key={i}>
            <h4 className="text-white font-semibold mb-3">{group.title}</h4>
            <ul className="space-y-2">
              {group.items?.map((item: any, j: number) => (
                <li key={j}>
                  <a href={item.href} className="text-slate-400 hover:text-white transition">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-slate-600 text-sm border-t border-white/10 pt-6">
        © {new Date().getFullYear()} {companyName}. All rights reserved.
      </p>
    </div>
  </footer>
);
