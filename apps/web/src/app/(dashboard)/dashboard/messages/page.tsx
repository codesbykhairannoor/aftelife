'use client';

import React, { useState, useEffect } from 'react';

interface Message {
  id: string;
  recipient: string;
  subject: string;
  content: string;
  triggerDate: string;
  status: 'Dijadwalkan' | 'Terkirim';
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [triggerDate, setTriggerDate] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  // Load data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('aftelife_messages');
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        console.error('Gagal memuat data pesan', e);
      }
    }
  }, []);

  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem('aftelife_messages', JSON.stringify(messages));
  }, [messages]);

  const handleAddMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipient || !subject || !content) return;

    const newMessage: Message = {
      id: Math.random().toString(36).substr(2, 9),
      recipient,
      subject,
      content,
      triggerDate: triggerDate || 'Setelah Trigger DMS',
      status: 'Dijadwalkan',
    };

    setMessages([newMessage, ...messages]);
    setRecipient('');
    setSubject('');
    setContent('');
    setTriggerDate('');
    setIsAdding(false);
  };

  const deleteMessage = (id: string) => {
    if (confirm('Apakah Anda yakin ingin membatalkan pesan ini?')) {
      setMessages(messages.filter(m => m.id !== id));
    }
  };

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-end">
        <div>
           <h1 className="text-3xl font-bold text-white mb-2">Pesan Masa Depan</h1>
           <p className="text-slate-500">Kirimkan kata-kata terakhir atau instruksi penting kepada orang tercinta.</p>
        </div>
        <button 
          onClick={() => setIsAdding(!isAdding)}
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-500 transition-all flex items-center gap-2 shadow-lg shadow-indigo-600/20"
        >
          {isAdding ? 'Batal' : '＋ Jadwalkan Pesan'}
        </button>
      </div>

      {/* Form Tambah Pesan */}
      {isAdding && (
        <form onSubmit={handleAddMessage} className="p-8 bg-[#0f172a] border border-indigo-500/30 rounded-[32px] space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
           <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                 <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Email Penerima</label>
                 <input 
                    type="email" 
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    placeholder="email@penerima.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500 transition-all"
                    required
                 />
              </div>
              <div className="space-y-2">
                 <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Tanggal Kirim (Opsional)</label>
                 <input 
                    type="date" 
                    value={triggerDate}
                    onChange={(e) => setTriggerDate(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500 transition-all appearance-none"
                 />
                 <p className="text-[10px] text-slate-600 mt-1 pl-1">Kosongkan jika ingin dikirim segera setelah DMS terpicu.</p>
              </div>
           </div>
           <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Subjek Pesan</label>
              <input 
                type="text" 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Misal: Pesan Untuk Anakku Di Masa Depan"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500 transition-all"
                required
              />
           </div>
           <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Isi Pesan</label>
              <textarea 
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Tuliskan pesan Anda dengan sepenuh hati..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500 transition-all h-40 resize-none"
                required
              />
           </div>
           <button type="submit" className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl">
              Simpan & Jadwalkan Pesan
           </button>
        </form>
      )}

      {/* List Pesan */}
      <div className="space-y-4">
        {messages.length === 0 ? (
          <div className="py-20 text-center bg-white/[0.01] border border-dashed border-white/10 rounded-[40px]">
             <div className="text-5xl mb-6 opacity-20">✉️</div>
             <p className="text-slate-500 font-medium">Belum ada pesan yang dijadwalkan.</p>
          </div>
        ) : (
          messages.map((m) => (
            <div key={m.id} className="p-8 bg-[#0f172a] border border-white/5 rounded-[32px] group hover:border-indigo-500/50 transition-all flex items-center gap-8">
               <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-indigo-600/10 transition-all">📩</div>
               <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                     <h3 className="text-lg font-bold text-white">{m.subject}</h3>
                     <span className="px-2 py-0.5 bg-indigo-500/10 text-indigo-400 text-[8px] font-black uppercase tracking-widest rounded-md">
                        {m.status}
                     </span>
                  </div>
                  <div className="flex gap-6 text-xs text-slate-500 font-medium">
                     <span className="flex items-center gap-2">👤 {m.recipient}</span>
                     <span className="flex items-center gap-2">📅 {m.triggerDate}</span>
                  </div>
               </div>
               <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-10 h-10 bg-white/5 text-slate-400 rounded-xl flex items-center justify-center hover:bg-white/10 transition-all">✏️</button>
                  <button 
                    onClick={() => deleteMessage(m.id)}
                    className="w-10 h-10 bg-red-500/10 text-red-500 rounded-xl flex items-center justify-center hover:bg-red-500 hover:text-white transition-all"
                  >
                    🗑️
                  </button>
               </div>
            </div>
          ))
        )}
      </div>

      {/* Info Panel */}
      <div className="grid md:grid-cols-2 gap-8">
         <div className="p-8 bg-white/[0.01] border border-white/5 rounded-[40px]">
            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
               <span className="text-indigo-400">🕒</span> Pengiriman Berbasis Waktu
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
               Anda bisa mengatur pesan untuk dikirim pada tanggal tertentu di masa depan, misalnya pada hari ulang tahun anak Anda sepuluh tahun dari sekarang.
            </p>
         </div>
         <div className="p-8 bg-white/[0.01] border border-white/5 rounded-[40px]">
            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
               <span className="text-emerald-400">⚡</span> Pengiriman Berbasis Trigger
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
               Pesan ini akan otomatis dikirimkan segera setelah sistem mengonfirmasi inaktivitas Anda melalui mekanisme Dead Man's Switch.
            </p>
         </div>
      </div>
    </div>
  );
}
