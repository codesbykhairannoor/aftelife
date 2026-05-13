import React from 'react';

export default function KeamananPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Unique Hero: Keamanan (Command Center Style) */}
      <section className="relative pt-40 pb-40 px-6 overflow-hidden border-b border-white/5">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-500/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-12">
             {/* Custom SVG Icon 4: Security Node */}
             <div className="relative group">
                <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full animate-pulse" />
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 relative transition-transform duration-700 group-hover:rotate-90">
                   <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                   <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
                   <path d="M12 9v6M9 12h6" strokeWidth="2" />
                </svg>
             </div>
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black tracking-[0.3em] uppercase mb-8">
             Protokol Keamanan Level Tinggi
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">Benteng Pertahanan <br /> Untuk Eksistensi Digital Anda.</h1>
          <p className="text-xl text-white/40 max-w-3xl mx-auto leading-relaxed font-light mb-12">
             Kami menggabungkan kriptografi mutakhir dengan arsitektur terdesentralisasi untuk menciptakan sistem penyimpanan yang mustahil ditembus.
          </p>
          
          <div className="flex flex-wrap justify-center gap-12 pt-12 border-t border-white/5 opacity-40">
             {['AES-256-GCM', 'TLS 1.3', 'IPFS NETWORK', 'ZERO KNOWLEDGE'].map(tag => (
               <span key={tag} className="text-[10px] font-black tracking-widest uppercase">{tag}</span>
             ))}
          </div>
        </div>
      </section>

      {/* Security Pillars */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
             {/* Pilar 1: Enkripsi */}
             <div className="p-16 bg-white/[0.02] border border-white/5 rounded-[60px] group hover:bg-white/[0.04] transition-all">
                <div className="flex items-center gap-6 mb-12">
                   <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                   </div>
                   <h3 className="text-3xl font-bold">Enkripsi AES-256</h3>
                </div>
                <p className="text-white/40 text-lg leading-relaxed mb-12 font-light">
                   Data Anda dienkripsi menggunakan standar militer sebelum meninggalkan perangkat Anda. Tidak ada data mentah yang pernah menyentuh internet.
                </p>
                <div className="space-y-4">
                   {[
                     'Kunci pribadi dikelola sepenuhnya oleh pengguna.',
                     'Enkripsi ujung-ke-ujung (End-to-End Encryption).',
                     'Rotasi kunci otomatis untuk keamanan maksimal.'
                   ].map((point, i) => (
                     <div key={i} className="flex gap-4 items-center p-5 bg-white/[0.01] rounded-2xl border border-white/5">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="text-sm font-medium text-white/70">{point}</span>
                     </div>
                   ))}
                </div>
             </div>

             {/* Pilar 2: Desentralisasi */}
             <div className="p-16 bg-white/[0.02] border border-white/5 rounded-[60px] group hover:bg-white/[0.04] transition-all">
                <div className="flex items-center gap-6 mb-12">
                   <div className="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                   </div>
                   <h3 className="text-3xl font-bold">Arsitektur IPFS</h3>
                </div>
                <p className="text-white/40 text-lg leading-relaxed mb-12 font-light">
                   Penyimpanan terdesentralisasi memastikan data Anda tidak bergantung pada satu server pusat yang rentan terhadap serangan.
                </p>
                <div className="space-y-4">
                   {[
                     'Distribusi data global tanpa server pusat.',
                     'Redundansi data otomatis di ribuan node.',
                     'Integritas data terverifikasi secara matematis.'
                   ].map((point, i) => (
                     <div key={i} className="flex gap-4 items-center p-5 bg-white/[0.01] rounded-2xl border border-white/5">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <span className="text-sm font-medium text-white/70">{point}</span>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Philosophy: Zero Knowledge */}
      <section className="py-40 bg-black/20 border-y border-white/5">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-10">Filosofi Zero-Knowledge</h2>
            <p className="text-xl text-white/40 leading-relaxed font-light mb-20">
               Kami membangun sistem yang tidak memungkinkan kami sendiri untuk melihat data Anda. Kepercayaan dibangun di atas ketidakmampuan teknis untuk berbuat curang.
            </p>
            <div className="grid md:grid-cols-3 gap-12">
               {[
                 { t: 'Privasi Total', d: 'Kami tidak menyimpan kata sandi atau kunci pemulihan Anda.', i: '🤫' },
                 { t: 'Kode Terbuka', d: 'Modul kriptografi kami dapat diaudit oleh siapapun kapanpun.', i: '📂' },
                 { t: 'Keamanan Lapis 3', d: 'Tiga lapis autentikasi untuk setiap rilis data wasiat.', i: '🔑' }
               ].map((item, i) => (
                 <div key={i} className="text-center">
                    <div className="text-5xl mb-6">{item.i}</div>
                    <h5 className="font-bold mb-2">{item.t}</h5>
                    <p className="text-sm text-white/30 font-light leading-relaxed">{item.d}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Visual Data Flow Section */}
      <section className="py-40">
         <div className="max-w-7xl mx-auto px-6">
            <div className="p-20 bg-white/[0.01] border border-white/10 rounded-[64px] flex flex-col items-center">
               <h2 className="text-3xl font-bold mb-20">Alur Keamanan End-to-End</h2>
               <div className="flex flex-col md:flex-row items-center gap-12 w-full justify-center">
                  <div className="flex flex-col items-center gap-4">
                     <div className="w-20 h-20 bg-indigo-600 rounded-3xl flex items-center justify-center text-3xl">📱</div>
                     <span className="text-[10px] font-black uppercase tracking-widest text-white/30">Local Device</span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-indigo-600 to-emerald-500 hidden md:block" />
                  <div className="flex flex-col items-center gap-4">
                     <div className="w-24 h-24 bg-emerald-600 rounded-full flex items-center justify-center text-4xl shadow-[0_0_50px_rgba(16,185,129,0.3)] animate-pulse">🔐</div>
                     <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Enkripsi AES</span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-emerald-500 to-blue-500 hidden md:block" />
                  <div className="flex flex-col items-center gap-4">
                     <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-3xl">🪐</div>
                     <span className="text-[10px] font-black uppercase tracking-widest text-white/30">IPFS Node</span>
                  </div>
               </div>
               <p className="mt-20 text-xs text-white/20 font-bold tracking-[0.2em] uppercase max-w-xl text-center leading-relaxed">Data Anda tidak pernah tersimpan secara utuh di server manapun. Anda adalah satu-satunya pemegang kunci.</p>
            </div>
         </div>
      </section>

      {/* Final Transparency Statement */}
      <div className="pb-32 text-center opacity-20">
         <div className="max-w-4xl mx-auto px-6">
            <p className="text-[10px] leading-relaxed uppercase tracking-[0.4em] font-black mb-8 px-6">
               Aftelife mengikuti standar industri tertinggi termasuk GDPR, SOC2 (On-going), dan audit eksternal berkala. Keamanan Anda adalah prioritas absolut kami.
            </p>
         </div>
      </div>
    </div>
  );
}
