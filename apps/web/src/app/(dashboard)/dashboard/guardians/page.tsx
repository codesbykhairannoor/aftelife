'use client';

import React, { useState, useEffect } from 'react';

interface Guardian {
  id: string;
  name: string;
  email: string;
  relation: string;
  status: 'Aktif' | 'Menunggu';
  addedAt: string;
}

export default function GuardiansPage() {
  const [guardians, setGuardians] = useState<Guardian[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [relation, setRelation] = useState('Keluarga');
  const [isAdding, setIsAdding] = useState(false);

  // Load data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('aftelife_guardians');
    if (saved) {
      try {
        setGuardians(JSON.parse(saved));
      } catch (e) {
        console.error('Gagal memuat data wali', e);
      }
    }
  }, []);

  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem('aftelife_guardians', JSON.stringify(guardians));
  }, [guardians]);

  const handleAddGuardian = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    const newGuardian: Guardian = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      relation,
      status: 'Menunggu',
      addedAt: new Date().toLocaleDateString('id-ID'),
    };

    setGuardians([newGuardian, ...guardians]);
    setName('');
    setEmail('');
    setIsAdding(false);
  };

  const deleteGuardian = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus wali ini?')) {
      setGuardians(guardians.filter(g => g.id !== id));
    }
  };

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-end">
        <div>
           <h1 className="text-3xl font-bold text-white mb-2">Wali Saya (Guardians)</h1>
           <p className="text-slate-500">Tentukan orang kepercayaan yang akan memverifikasi status Anda.</p>
        </div>
        <button 
          onClick={() => setIsAdding(!isAdding)}
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-500 transition-all flex items-center gap-2 shadow-lg shadow-indigo-600/20"
        >
          {isAdding ? 'Batal' : '＋ Tambah Wali'}
        </button>
      </div>

      {/* Form Tambah Wali */}
      {isAdding && (
        <form onSubmit={handleAddGuardian} className="p-8 bg-[#0f172a] border border-indigo-500/30 rounded-[32px] space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
           <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                 <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Nama Lengkap</label>
                 <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama wali Anda"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500 transition-all"
                    required
                 />
              </div>
              <div className="space-y-2">
                 <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Alamat Email</label>
                 <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@contoh.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500 transition-all"
                    required
                 />
              </div>
              <div className="space-y-2">
                 <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Hubungan</label>
                 <select 
                    value={relation}
                    onChange={(e) => setRelation(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500 transition-all appearance-none"
                 >
                    <option value="Keluarga">Keluarga</option>
                    <option value="Pasangan">Pasangan</option>
                    <option value="Teman Dekat">Teman Dekat</option>
                    <option value="Pengacara">Pengacara</option>
                 </select>
              </div>
           </div>
           <button type="submit" className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl">
              Kirim Undangan Konfirmasi Wali
           </button>
        </form>
      )}

      {/* List Wali */}
      <div className="grid md:grid-cols-2 gap-6">
        {guardians.length === 0 ? (
          <div className="col-span-full py-20 text-center bg-white/[0.01] border border-dashed border-white/10 rounded-[40px]">
             <div className="text-5xl mb-6 opacity-20">👥</div>
             <p className="text-slate-500 font-medium">Anda belum memiliki wali.</p>
             <p className="text-xs text-slate-600 mt-1">Tambahkan minimal 2 wali untuk keamanan optimal.</p>
          </div>
        ) : (
          guardians.map((g) => (
            <div key={g.id} className="p-8 bg-[#0f172a] border border-white/5 rounded-[40px] group hover:border-indigo-500/50 transition-all flex items-center justify-between">
               <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-600/10 flex items-center justify-center text-2xl">👤</div>
                  <div>
                     <h3 className="text-lg font-bold text-white mb-1">{g.name}</h3>
                     <p className="text-sm text-slate-500 mb-2">{g.email}</p>
                     <div className="flex gap-3 items-center">
                        <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{g.relation}</span>
                        <span className={`px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest ${g.status === 'Aktif' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'}`}>
                           {g.status}
                        </span>
                     </div>
                  </div>
               </div>
               <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-10 h-10 bg-white/5 text-slate-400 rounded-xl flex items-center justify-center hover:bg-white/10 transition-all">✏️</button>
                  <button 
                    onClick={() => deleteGuardian(g.id)}
                    className="w-10 h-10 bg-red-500/10 text-red-500 rounded-xl flex items-center justify-center hover:bg-red-500 hover:text-white transition-all"
                  >
                    🗑️
                  </button>
               </div>
            </div>
          ))
        )}
      </div>

      {/* FAQ Wali */}
      <div className="p-10 bg-indigo-500/5 border border-indigo-500/20 rounded-[40px]">
         <h4 className="text-xl font-bold text-indigo-400 mb-6">Mengapa Wali Sangat Penting?</h4>
         <div className="grid md:grid-cols-3 gap-8">
            {[
               { t: 'Verifikasi Manusia', d: 'Wali memastikan bahwa status inaktivitas Anda bukan karena kesalahan teknis.' },
               { t: 'Keamanan Berlapis', d: 'Sistem membutuhkan konfirmasi dari mayoritas wali sebelum merilis data.' },
               { t: 'Kontrol Penuh', d: 'Anda bisa menghapus atau mengganti wali Anda kapan saja sebelum sistem terpicu.' }
            ].map((f, i) => (
               <div key={i}>
                  <h5 className="font-bold text-white mb-2">{f.t}</h5>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">{f.d}</p>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
}
