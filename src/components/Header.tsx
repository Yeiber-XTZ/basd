import React from 'react';
import { Settings, LogOut } from 'lucide-react';

interface HeaderProps {
  activeTitle: string;
}

export default function Header({ activeTitle }: HeaderProps) {
  return (
    <header className="flex justify-between items-center h-20 px-10 w-full sticky top-0 z-40 bg-white border-b border-[#e1e8ef] select-none">
      <div className="flex items-center gap-4">
        <h2 className="text-[22px] font-bold text-[#2d3e50]">{activeTitle}</h2>
        <span className="bg-[#5AAC32] text-white text-[11px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
          EN VIVO
        </span>
      </div>

      <div className="flex items-center gap-6">
        <button className="p-2 text-[#7b8fa3] hover:bg-gray-50 rounded-lg transition-all">
          <Settings className="w-6 h-6 stroke-[1.5]" />
        </button>
        
        <div className="h-10 w-[1.5px] bg-[#e1e8ef]"></div>
        
        <div className="flex items-center gap-5">
           <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center p-1.5 shadow-xs bg-white cursor-pointer hover:border-green-200 transition-all">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqn_q8uD6mckXaKtsvjtQVTkA9XavBsjg1v8toYv04DFnNVnXdiMtmRo9oqt-05D2bVK_LEuiV899SBOChg3qvo0rARW2jys8nepbPkhB-ufAzn7h14mTVqv7yZZoQEDxrKEuyFJMcfz83sS9IJNJQBwGduyuxvFFC1G8OgWKwMdyjVlu46E_wi4eZ0GIwyI1_cYDov9vap0Os5n5HINmUoBTurxKh99LUnheAOw_gf1ukVgHdYBghuy8NUP1kUWDGUu8ciA0Kil4h" 
              alt="Profile Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <button className="p-2 text-[#7b8fa3] hover:bg-gray-50 rounded-lg transition-all">
            <LogOut className="w-6 h-6 stroke-[1.5]" />
          </button>
        </div>
      </div>
    </header>
  );
}
