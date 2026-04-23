import React from 'react';
import { 
  LayoutGrid, 
  User, 
  Settings, 
  Globe, 
  Users, 
  ClipboardList, 
  BadgeCheck, 
  ShieldCheck, 
  MessageSquare,
  ExternalLink
} from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid },
    { id: 'profile', label: 'Mi Perfil', icon: User },
    { id: 'settings', label: 'Configuración', icon: Settings },
    { id: 'public-league', label: 'Liga pública', icon: Globe },
    { id: 'users', label: 'Usuarios', icon: Users },
    { id: 'requests', label: 'Solicitudes', icon: ClipboardList },
    { id: 'roles', label: 'Roles', icon: BadgeCheck },
    { id: 'permissions', label: 'Permisos', icon: ShieldCheck },
    { id: 'pqrs', label: 'PQRS', icon: MessageSquare },
  ];

  return (
    <aside className="h-screen w-72 fixed left-0 top-0 border-r border-[#e1e8ef] bg-white flex flex-col py-8 z-50 overflow-hidden select-none">
      {/* Logo Section */}
      <div className="flex justify-center mb-12 px-6">
        <div className="relative">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqn_q8uD6mckXaKtsvjtQVTkA9XavBsjg1v8toYv04DFnNVnXdiMtmRo9oqt-05D2bVK_LEuiV899SBOChg3qvo0rARW2jys8nepbPkhB-ufAzn7h14mTVqv7yZZoQEDxrKEuyFJMcfz83sS9IJNJQBwGduyuxvFFC1G8OgWKwMdyjVlu46E_wi4eZ0GIwyI1_cYDov9vap0Os5n5HINmUoBTurxKh99LUnheAOw_gf1ukVgHdYBghuy8NUP1kUWDGUu8ciA0Kil4h" 
            alt="Athletics Runner Logo"
            className="w-20 h-20 object-contain drop-shadow-sm"
          />
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-3 space-y-1 overflow-y-auto no-scrollbar">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={cn(
              "w-full flex items-center gap-4 px-5 py-3.5 font-bold text-[15px] transition-all rounded-xl",
              activeTab === item.id 
                ? "bg-[#e8f5e9] text-[#5AAC32]" 
                : "text-[#7b8fa3] hover:bg-gray-50 active:translate-x-0.5"
            )}
          >
            <item.icon className={cn(
              "w-5 h-5 transition-colors",
              activeTab === item.id ? "text-[#5AAC32]" : "text-[#7b8fa3]"
            )} />
            {item.label}
          </button>
        ))}
      </nav>

      {/* Footer / External Link */}
      <div className="px-3 mt-4 pt-4 border-t border-gray-100">
        <button className="w-full flex items-center gap-4 px-5 py-4 text-[#7b8fa3] font-bold text-[15px] hover:bg-gray-50 rounded-xl transition-all">
          <ExternalLink className="w-5 h-5" />
          Ver sitio
        </button>
      </div>
    </aside>
  );
}

