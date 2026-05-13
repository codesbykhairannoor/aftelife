import React from 'react';

export default function FAQPage() {
  const faqCategories = [
    {
      name: 'Paling Banyak Ditanyakan',
      questions: [
        { q: 'Apa itu Aftelife?', a: 'Aftelife adalah platform digital legacy yang memungkinkan Anda mengamankan pesan, aset digital, dan informasi rahasia untuk diberikan kepada orang tercinta di masa depan.' },
        { q: 'Bagaimana cara kerjanya?', a: 'Anda mengisi brankas, menunjuk wali, dan mengatur sistem check-in. Jika Anda berhenti aktif, sistem akan memverifikasi kondisi Anda dan menjalankan wasiat Anda.' }
      ]
    },
    {
      name: 'Keamanan Data',
      questions: [
        { q: 'Bagaimana data saya dienkripsi?', a: 'Kami menggunakan standar AES-256-GCM. Data dienkripsi langsung di perangkat Anda sebelum diunggah ke jaringan kami.' },
        { q: 'Apa itu Zero-Knowledge?', a: 'Artinya kami sama sekali tidak tahu apa isi data Anda. Kami tidak punya kunci cadangan untuk membuka file Anda.' }
      ]
    },
    {
      name: 'Wali Dan Ahli Waris',
      questions: [
        { q: 'Berapa banyak Wali yang saya butuhkan?', a: 'Kami menyarankan minimal 2 wali untuk sistem konsensus yang lebih adil dan aman.' },
        { q: 'Dapatkah saya mengganti Wali?', a: 'Tentu saja. Anda bisa mengubah daftar wali Anda kapan saja melalui dashboard.' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Unique Hero: FAQ (Search-Centric Hero) */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-500/10 blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
           {/* Custom SVG Icon 6: The Search Magnifier */}
           <div className="flex justify-center mb-10">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
                 <circle cx="11" cy="11" r="8" />
                 <line x1="21" y1="21" x2="16.65" y2="16.65" />
                 <path d="M11 8v6M8 11h6" strokeWidth="1" opacity="0.5" />
              </svg>
           </div>

           <h1 className="text-4xl md:text-5xl font-bold mb-8">Pusat Bantuan Dan Informasi.</h1>
           <p className="text-xl text-white/40 leading-relaxed font-light mb-16">
              Temukan jawaban atas pertanyaan Anda tentang masa depan digital Anda.
           </p>

           <div className="max-w-2xl mx-auto relative group">
              <input type="text" placeholder="Cari pertanyaan... (misal: enkripsi, wali, harga)" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 outline-none focus:border-indigo-500/50 transition-all text-lg font-light shadow-2xl backdrop-blur-md" />
              <div className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 group-hover:text-white transition-colors">🔍</div>
           </div>
        </div>
      </section>

      {/* FAQ Categories & Questions */}
      <section className="py-32 px-6 bg-[#0a0f1d]">
        <div className="max-w-4xl mx-auto space-y-24">
          {faqCategories.map((cat, idx) => (
            <div key={idx}>
               <h2 className="text-[10px] font-black tracking-[0.4em] text-indigo-500 mb-12 uppercase border-b border-white/5 pb-4 inline-block">{cat.name}</h2>
               <div className="space-y-4">
                  {cat.questions.map((item, i) => (
                    <div key={i} className="group p-10 bg-white/[0.01] border border-white/5 rounded-[40px] hover:bg-white/[0.03] transition-all">
                       <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-indigo-400 transition-colors flex justify-between items-center">
                          {item.q}
                          <span className="text-white/10 group-hover:rotate-180 transition-transform text-sm">▼</span>
                       </h3>
                       <p className="text-white/40 leading-relaxed text-lg font-light">
                          {item.a}
                       </p>
                    </div>
                  ))}
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Need Help? */}
      <section className="py-40 border-t border-white/5">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Masih Ada Pertanyaan?</h2>
            <p className="text-lg text-white/40 mb-16 leading-relaxed font-light">
               Tim ahli kami siap membantu Anda 24/7. Hubungi kami melalui kanal komunikasi resmi di bawah ini.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
               <div className="p-12 bg-white/[0.02] border border-white/5 rounded-[48px] text-left group hover:bg-indigo-600 transition-all cursor-pointer">
                  <div className="text-4xl mb-6">📧</div>
                  <h4 className="text-xl font-bold mb-2">Email Dukungan</h4>
                  <p className="text-sm text-white/30 group-hover:text-white/70 font-medium">Dapatkan balasan dalam waktu kurang dari 24 jam.</p>
               </div>
               <div className="p-12 bg-white/[0.02] border border-white/5 rounded-[48px] text-left group hover:bg-indigo-600 transition-all cursor-pointer">
                  <div className="text-4xl mb-6">💬</div>
                  <h4 className="text-xl font-bold mb-2">Obrolan Langsung</h4>
                  <p className="text-sm text-white/30 group-hover:text-white/70 font-medium">Hubungkan langsung dengan agen spesialis kami.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Glossary Section */}
      <section className="py-32 bg-black/20 border-y border-white/5">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-xs font-black tracking-[0.4em] text-white/20 mb-12 uppercase text-center">Glosarium Istilah</h2>
            <div className="grid md:grid-cols-2 gap-12">
               {[
                 { t: 'Vault', d: 'Brankas digital terenkripsi yang berisi data sensitif pengguna.' },
                 { t: 'Guardian', d: 'Seseorang yang ditunjuk untuk memverifikasi inaktivitas pengguna.' },
                 { t: 'Check-in', d: 'Tindakan verifikasi harian/berkala untuk membuktikan pengguna masih aktif.' },
                 { t: 'Smart Trigger', d: 'Mekanisme otomatis yang merilis data berdasarkan kondisi yang ditentukan.' }
               ].map((term, i) => (
                 <div key={i} className="p-8 bg-white/[0.01] border border-white/5 rounded-3xl">
                    <h5 className="font-bold text-indigo-400 mb-2 uppercase text-xs tracking-widest">{term.t}</h5>
                    <p className="text-sm text-white/30 font-light leading-relaxed">{term.d}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Footer Info */}
      <div className="pb-32 text-center pt-20">
         <div className="max-w-4xl mx-auto px-6 opacity-20 hover:opacity-50 transition-opacity">
            <p className="text-[10px] leading-relaxed uppercase tracking-[0.4em] font-black mb-8 px-6">
               Halaman FAQ ini diperbarui secara berkala mengikuti perkembangan sistem Aftelife. Seluruh jawaban bersifat informatif.
            </p>
         </div>
      </div>
    </div>
  );
}
