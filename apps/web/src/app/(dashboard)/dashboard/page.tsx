'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DashboardSummary() {
  const [stats, setStats] = useState({
    vault: 0,
    guardians: 0,
    messages: 0,
    lastCheckIn: ''
  });

  useEffect(() => {
    const vault = JSON.parse(localStorage.getItem('aftelife_vault') || '[]');
    const guardians = JSON.parse(localStorage.getItem('aftelife_guardians') || '[]');
    const messages = JSON.parse(localStorage.getItem('aftelife_messages') || '[]');
    const lastCheckIn = localStorage.getItem('aftelife_last_checkin') || 'Belum Pernah';

    setStats({
      vault: vault.length,
      guardians: guardians.length,
      messages: messages.length,
      lastCheckIn
    });
  }, []);

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
           <h1 className="text-3xl font-bold text-white mb-2">Halo, User Axioo</h1>
           <p className="text-slate-500">Selamat datang kembali di pusat kendali warisan digital Anda.</p>
        </div>
        <div className="px-6 py-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-2xl text-sm font-bold flex items-center gap-3">
           <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
           Sistem Berjalan Normal
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { label: 'Aset Di Brankas', val: stats.vault, icon: '🔐', color: 'text-indigo-400', path: '/dashboard/vault' },
          { label: 'Wali Terverifikasi', val: stats.guardians, icon: '🛡️', color: 'text-emerald-400', path: '/dashboard/guardians' },
          { label: 'Pesan Terjadwal', val: stats.messages, icon: '📩', color: 'text-purple-400', path: '/dashboard/messages' }
        ].map((item, i) => (
          <Link key={i} href={item.path} className="p-10 bg-[#0f172a] border border-white/5 rounded-[48px] group hover:border-indigo-500/30 transition-all shadow-sm">
             <div className="text-4xl mb-6">{item.icon}</div>
             <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-2">{item.label}</p>
             <div className="flex items-end justify-between">
                <span className={`text-5xl font-black ${item.color}`}>{item.val}</span>
                <span className="text-indigo-500 font-bold group-hover:translate-x-2 transition-transform">Kelola →</span>
             </div>
          </Link>
        ))}
      </div>

      {/* Main Status Panel */}
      <div className="grid lg:grid-cols-2 gap-8">
         <div className="p-10 bg-gradient-to-br from-indigo-900/20 to-transparent border border-white/5 rounded-[56px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 text-9xl opacity-5 group-hover:scale-110 transition-transform duration-1000">⏲️</div>
            <div className="relative z-10">
               <h3 className="text-2xl font-bold mb-4">Dead Man's Switch</h3>
               <p className="text-slate-400 mb-10 leading-relaxed font-light">Sistem akan memicu protokol pelepasan data jika Anda tidak melakukan check-in dalam waktu yang ditentukan.</p>
               <div className="space-y-4 mb-10">
                  <div className="flex justify-between text-xs font-bold border-b border-white/5 pb-2">
                     <span className="text-slate-500 uppercase tracking-widest">Terakhir Check-in</span>
                     <span className="text-white">{stats.lastCheckIn}</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold border-b border-white/5 pb-2">
                     <span className="text-slate-500 uppercase tracking-widest">Status Verifikasi</span>
                     <span className="text-emerald-500">Tervalidasi</span>
                  </div>
               </div>
               <Link href="/dashboard/settings" className="block w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-center hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20">
                  Buka Pengaturan DMS
               </Link>
            </div>
         </div>

         <div className="p-10 bg-white/[0.01] border border-white/5 rounded-[56px] flex flex-col justify-between">
            <div>
               <h3 className="text-2xl font-bold mb-4">Aktivitas Terbaru</h3>
               <div className="space-y-6">
                  {[
                    { t: 'Login Berhasil', d: 'Hari ini, 10:24', icon: '🔑' },
                    { t: 'Check-in Otomatis', d: 'Kemarin, 22:15', icon: '✅' },
                    { t: 'Brankas Diperbarui', d: '2 hari yang lalu', icon: '💾' }
                  ].map((act, i) => (
                    <div key={i} className="flex gap-4 items-center">
                       <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">{act.icon}</div>
                       <div>
                          <p className="text-sm font-bold text-white">{act.t}</p>
                          <p className="text-[10px] text-slate-600 uppercase tracking-widest">{act.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            <button className="mt-10 text-xs font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-widest">Lihat Semua Aktivitas →</button>
         </div>
      </div>
    </div>
  );
}
