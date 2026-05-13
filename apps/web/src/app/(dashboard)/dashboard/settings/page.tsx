'use client';

import React, { useState, useEffect } from 'react';

export default function SettingsPage() {
  const [interval, setInterval] = useState(30);
  const [lastCheckIn, setLastCheckIn] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const savedInterval = localStorage.getItem('aftelife_dms_interval');
    const savedCheckIn = localStorage.getItem('aftelife_last_checkin');
    
    if (savedInterval) setInterval(parseInt(savedInterval));
    if (savedCheckIn) setLastCheckIn(savedCheckIn);
    else {
       const now = new Date().toLocaleString('id-ID');
       setLastCheckIn(now);
       localStorage.setItem('aftelife_last_checkin', now);
    }
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('aftelife_dms_interval', interval.toString());
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const handleCheckIn = () => {
    const now = new Date().toLocaleString('id-ID');
    setLastCheckIn(now);
    localStorage.setItem('aftelife_last_checkin', now);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <div className="max-w-4xl space-y-12">
      <div>
         <h1 className="text-3xl font-bold text-white mb-2">Pengaturan Dead Man's Switch</h1>
         <p className="text-slate-500">Konfigurasi bagaimana sistem memantau aktivitas Anda.</p>
      </div>

      {isSuccess && (
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-2xl text-center font-bold animate-pulse">
           ✓ Perubahan berhasil disimpan!
        </div>
      )}

      {/* Check-in Status Card */}
      <div className="p-10 bg-gradient-to-br from-indigo-900/20 to-transparent border border-white/5 rounded-[48px] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
         <div>
            <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] mb-4 block">Status Keberadaan</span>
            <h2 className="text-4xl font-bold text-white mb-2">Sistem Aktif</h2>
            <p className="text-slate-400 font-light">Terakhir diverifikasi pada: <span className="text-white font-medium">{lastCheckIn}</span></p>
         </div>
         <button 
            onClick={handleCheckIn}
            className="px-10 py-5 bg-indigo-600 text-white rounded-[24px] font-black text-xl hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20 active:scale-95"
         >
            Saya Masih Hidup
         </button>
      </div>

      {/* Configuration Form */}
      <form onSubmit={handleSave} className="space-y-8 p-10 bg-white/[0.01] border border-white/5 rounded-[48px]">
         <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Konfigurasi Interval</h3>
            <div className="space-y-4">
               <label className="text-sm font-medium text-slate-400 block">Interval Inaktivitas (Hari)</label>
               <input 
                  type="range" 
                  min="1" 
                  max="365" 
                  value={interval}
                  onChange={(e) => setInterval(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-500"
               />
               <div className="flex justify-between text-[10px] font-black text-slate-600 uppercase tracking-widest">
                  <span>1 Hari</span>
                  <span className="text-indigo-400 text-lg">{interval} Hari</span>
                  <span>365 Hari</span>
               </div>
            </div>
         </div>

         <div className="p-6 bg-amber-500/5 border border-amber-500/20 rounded-3xl">
            <p className="text-xs text-amber-500/80 leading-relaxed font-light">
               <span className="font-bold">Perhatian:</span> Jika Anda tidak melakukan check-in selama lebih dari <span className="font-bold">{interval} hari</span>, sistem akan memulai prosedur verifikasi wali secara otomatis.
            </p>
         </div>

         <button type="submit" className="w-full py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-bold hover:bg-white/10 transition-all">
            Simpan Konfigurasi
         </button>
      </form>

      {/* Danger Zone */}
      <div className="p-10 border border-red-500/20 rounded-[48px] bg-red-500/[0.02] space-y-6">
         <h3 className="text-xl font-bold text-red-500">Zona Bahaya</h3>
         <div className="flex items-center justify-between">
            <div>
               <h4 className="font-bold text-white mb-1">Nonaktifkan Dead Man's Switch</h4>
               <p className="text-xs text-slate-500 font-light">Semua pesan dan brankas tidak akan pernah dirilis.</p>
            </div>
            <button className="px-6 py-2 border border-red-500/50 text-red-500 rounded-xl text-xs font-bold hover:bg-red-500 hover:text-white transition-all">
               Nonaktifkan
            </button>
         </div>
      </div>
    </div>
  );
}
