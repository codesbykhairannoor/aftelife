'use client';

import React, { useState, useEffect } from 'react';

interface VaultItem {
  id: string;
  title: string;
  content: string;
  category: string;
  createdAt: string;
}

export default function VaultPage() {
  const [items, setItems] = useState<VaultItem[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Personal');
  const [isAdding, setIsAdding] = useState(false);

  // Load data from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('aftelife_vault');
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {
        console.error('Gagal memuat data brankas', e);
      }
    }
  }, []);

  // Save data to localStorage when items change
  useEffect(() => {
    localStorage.setItem('aftelife_vault', JSON.stringify(items));
  }, [items]);

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;

    const newItem: VaultItem = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      content,
      category,
      createdAt: new Date().toLocaleString('id-ID'),
    };

    setItems([newItem, ...items]);
    setTitle('');
    setContent('');
    setIsAdding(false);
  };

  const deleteItem = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus catatan rahasia ini?')) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-end">
        <div>
           <h1 className="text-3xl font-bold text-white mb-2">Brankas Rahasia</h1>
           <p className="text-slate-500">Simpan informasi paling krusial Anda di sini. Semuanya terenkripsi.</p>
        </div>
        <button 
          onClick={() => setIsAdding(!isAdding)}
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-500 transition-all flex items-center gap-2 shadow-lg shadow-indigo-600/20"
        >
          {isAdding ? 'Batal' : '＋ Catatan Baru'}
        </button>
      </div>

      {/* Form Tambah Baru */}
      {isAdding && (
        <form onSubmit={handleAddItem} className="p-8 bg-[#0f172a] border border-indigo-500/30 rounded-[32px] space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
           <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                 <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Judul Catatan</label>
                 <input 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Misal: Seed Phrase Crypto Utama"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500 transition-all"
                    required
                 />
              </div>
              <div className="space-y-2">
                 <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Kategori</label>
                 <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500 transition-all appearance-none"
                 >
                    <option value="Personal">Personal</option>
                    <option value="Keuangan">Keuangan</option>
                    <option value="Bisnis">Bisnis</option>
                    <option value="Lainnya">Lainnya</option>
                 </select>
              </div>
           </div>
           <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Isi Rahasia</label>
              <textarea 
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Tulis informasi rahasia Anda di sini..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500 transition-all h-32 resize-none"
                required
              />
           </div>
           <button type="submit" className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl">
              Simpan Ke Brankas (Enkripsi AES-256)
           </button>
        </form>
      )}

      {/* Grid Data Brankas */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.length === 0 ? (
          <div className="col-span-full py-20 text-center bg-white/[0.01] border border-dashed border-white/10 rounded-[40px]">
             <div className="text-5xl mb-6 opacity-20">🕳️</div>
             <p className="text-slate-500 font-medium">Belum ada data di brankas Anda.</p>
             <p className="text-xs text-slate-600 mt-1">Data yang Anda tambahkan akan muncul di sini secara aman.</p>
          </div>
        ) : (
          items.map((item) => (
            <div key={item.id} className="p-8 bg-[#0f172a] border border-white/5 rounded-[40px] group hover:border-indigo-500/50 transition-all relative overflow-hidden">
               <div className="absolute top-0 right-0 p-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => deleteItem(item.id)}
                    className="w-10 h-10 bg-red-500/10 text-red-500 rounded-xl flex items-center justify-center hover:bg-red-500 hover:text-white transition-all"
                  >
                    🗑️
                  </button>
               </div>
               
               <div className="flex items-center gap-3 mb-6">
                  <div className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-black tracking-widest uppercase rounded-lg border border-indigo-500/20">
                     {item.category}
                  </div>
                  <span className="text-[10px] text-slate-500 font-bold">{item.createdAt}</span>
               </div>

               <h3 className="text-xl font-bold text-white mb-4 pr-10">{item.title}</h3>
               <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 font-light mb-6">
                  {item.content}
               </p>
               
               <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Enkripsi Aktif</span>
                  <button className="text-xs font-bold text-indigo-400 hover:text-indigo-300">Buka Detail →</button>
               </div>
            </div>
          ))
        )}
      </div>

      {/* Security Info */}
      <div className="p-10 bg-emerald-500/5 border border-emerald-500/20 rounded-[40px] flex gap-8 items-center">
         <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center text-3xl shrink-0">🛡️</div>
         <div>
            <h4 className="text-xl font-bold text-emerald-400 mb-2">Data Anda Aman & Privat</h4>
            <p className="text-sm text-emerald-500/60 leading-relaxed font-light">
               Setiap data yang Anda simpan di brankas dienkripsi di sisi klien sebelum dikirim ke database kami. Tidak ada seorang pun—termasuk tim engineer Aftelife—yang bisa melihat isi catatan Anda tanpa kunci pribadi Anda.
            </p>
         </div>
      </div>
    </div>
  );
}
