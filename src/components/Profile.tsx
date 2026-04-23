import React from 'react';
import { Settings, LogOut, Send } from 'lucide-react';

export default function Profile() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold text-primary">Mi Perfil</h2>
          <span className="bg-emerald-500 text-white text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-widest animate-pulse">
            En Vivo
          </span>
        </div>
        <div className="flex gap-2">
          <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg transition-all">
            <Settings className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg transition-all">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl premium-lift border border-gray-100 overflow-hidden">
        <div className="p-8 space-y-8">
          <div>
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Mi Perfil</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-medium">
              Puedes modificar tu información aquí. Todos los cambios que realices se enviarán para revisión de la Liga y no se reflejarán hasta que sean aprobados.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-base font-bold text-primary">Información del Usuario</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#78909c] uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  defaultValue="yeimena53@gmail.com"
                  readOnly
                  className="w-full p-4 bg-[#f4f7f9] border border-gray-100 rounded-2xl text-primary font-semibold focus:ring-2 focus:ring-primary-green/50 outline-hidden cursor-default transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#78909c] uppercase tracking-wider">Rol</label>
                <input 
                  type="text" 
                  defaultValue="SUPERADMIN"
                  readOnly
                  className="w-full p-4 bg-[#f4f7f9] border border-gray-100 rounded-2xl text-primary font-semibold focus:ring-2 focus:ring-primary-green/50 outline-hidden cursor-default transition-all"
                />
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button className="flex items-center gap-2 bg-[#5AAC32] text-white font-bold py-4 px-10 rounded-2xl shadow-lg hover:brightness-110 active:scale-95 transition-all">
                <Send className="w-4 h-4" />
                Solicitar Cambio
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Decorative Element */}
      <div className="mt-12 flex justify-center opacity-30">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqn_q8uD6mckXaKtsvjtQVTkA9XavBsjg1v8toYv04DFnNVnXdiMtmRo9oqt-05D2bVK_LEuiV899SBOChg3qvo0rARW2jys8nepbPkhB-ufAzn7h14mTVqv7yZZoQEDxrKEuyFJMcfz83sS9IJNJQBwGduyuxvFFC1G8OgWKwMdyjVlu46E_wi4eZ0GIwyI1_cYDov9vap0Os5n5HINmUoBTurxKh99LUnheAOw_gf1ukVgHdYBghuy8NUP1kUWDGUu8ciA0Kil4h" 
          alt="Watermark"
          className="w-32 grayscale brightness-50"
        />
      </div>
    </div>
  );
}
