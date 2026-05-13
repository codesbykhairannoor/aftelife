'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { name: 'Ringkasan', path: '/dashboard', icon: '📊' },
    { name: 'Brankas Rahasia', path: '/dashboard/vault', icon: '🔐' },
    { name: 'Wali Saya', path: '/dashboard/guardians', icon: '🛡️' },
    { name: 'Pesan Masa Depan', path: '/dashboard/messages', icon: '📩' },
    { name: 'Pengaturan DMS', path: '/dashboard/settings', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full bg-[#0f172a] border-r border-white/5 transition-all duration-300 z-50 ${isSidebarOpen ? 'w-72' : 'w-20'}`}>
        <div className="p-6 mb-10 flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-600/20">A</div>
          {isSidebarOpen && <span className="text-xl font-bold tracking-tight text-white">Aftelife</span>}
        </div>

        <nav className="px-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-4 px-4 py-4 rounded-2xl transition-all group ${
                  isActive 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                    : 'hover:bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                {isSidebarOpen && <span className="font-medium">{item.name}</span>}
                {isActive && isSidebarOpen && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
              </Link>
            );
          })}
        </nav>

        {/* User Profile Mini */}
        <div className="absolute bottom-0 left-0 w-full p-6 border-t border-white/5">
           <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 border border-white/10" />
              {isSidebarOpen && (
                <div className="flex-1 overflow-hidden">
                   <p className="text-sm font-bold text-white truncate">User Axioo</p>
                   <p className="text-[10px] text-slate-500 truncate">Status: Aktif</p>
                </div>
              )}
           </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className={`transition-all duration-300 ${isSidebarOpen ? 'ml-72' : 'ml-20'}`}>
        {/* Top Navbar */}
        <header className="h-20 bg-[#020617]/50 backdrop-blur-xl border-b border-white/5 px-8 flex items-center justify-between sticky top-0 z-40">
           <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
           >
              {isSidebarOpen ? '◀' : '▶'}
           </button>

           <div className="flex items-center gap-6">
              <div className="hidden md:flex flex-col items-end">
                 <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Sistem Normal</span>
                 <span className="text-xs text-slate-500 tracking-tighter">Terakhir Check-in: 2 Jam Yang Lalu</span>
              </div>
              <button className="px-5 py-2 bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 rounded-xl text-xs font-bold hover:bg-indigo-600 hover:text-white transition-all">
                 Check-in Sekarang
              </button>
           </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
