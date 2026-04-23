/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'profile', label: 'Mi Perfil' },
    { id: 'settings', label: 'Configuración' },
    { id: 'public-league', label: 'Liga pública' },
    { id: 'users', label: 'Usuarios' },
    { id: 'requests', label: 'Solicitudes' },
    { id: 'roles', label: 'Roles' },
    { id: 'permissions', label: 'Permisos' },
    { id: 'pqrs', label: 'PQRS' },
  ];

  const activeLabel = menuItems.find(item => item.id === activeTab)?.label || 'Dashboard';

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'profile':
        return <Profile />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)] text-center p-8">
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
              <Plus className="w-10 h-10 text-emerald-900 opacity-20" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Sección en Desarrollo</h3>
            <p className="text-on-surface-variant max-w-md">
              Estamos trabajando para brindarte la mejor experiencia en la gestión de **{activeTab.toUpperCase()}**.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-surface-bright selection:bg-secondary-container selection:text-secondary overflow-hidden">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-1 ml-72 h-screen flex flex-col overflow-hidden">
        <Header activeTitle={activeLabel} />
        
        <div className="flex-1 overflow-y-auto no-scrollbar p-0">
          {renderContent()}
        </div>
      </main>

      {/* Global Floating Action Button */}
      <button 
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#5AAC32] text-[#E7D916] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group"
        aria-label="Add new item"
      >
        <Plus className="w-8 h-8 group-hover:rotate-90 transition-transform duration-300" />
      </button>
    </div>
  );
}

