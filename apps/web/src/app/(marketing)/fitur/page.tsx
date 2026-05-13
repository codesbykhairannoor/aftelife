import React from 'react';

export default function FiturPage() {
  const mainFeatures = [
    {
      title: 'Brankas Multimedia Aman',
      desc: 'Simpan kenangan paling berharga Anda dalam format foto resolusi tinggi, video 4k, dan dokumen penting tanpa khawatir bocor.',
      detail: 'Setiap file dipecah menjadi fragmen terenkripsi dan disebar ke jaringan terdesentralisasi. Tidak ada server tunggal yang menyimpan file utuh Anda.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      ),
      color: 'text-blue-400 bg-blue-500/10'
    },
    {
      title: "Dead Man's Switch Pro",
      desc: 'Sistem pemantauan aktivitas paling canggih yang menggunakan deteksi cerdas untuk memastikan status keberadaan Anda.',
      detail: 'Dapat dikonfigurasi mulai dari harian, mingguan, hingga bulanan. Dilengkapi dengan masa tenggang (grace period) yang fleksibel.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      color: 'text-indigo-400 bg-indigo-500/10'
    },
    {
      title: 'Kloning Suara AI Premium',
      desc: 'Abadikan suara Anda selamanya. AI kami akan mempelajari intonasi dan emosi suara Anda untuk membacakan pesan warisan.',
      detail: 'Proses training suara dilakukan secara privat. Hasil suara hanya bisa digunakan untuk membacakan pesan yang Anda tulis sebelumnya.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" />
        </svg>
      ),
      color: 'text-purple-400 bg-purple-500/10'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Unique Hero: Fitur (Split Layout) */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
           <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black tracking-widest uppercase mb-8">
                 Eksplorasi Teknologi
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Instrumen Masa Depan <br /> Untuk Warisan Digital Anda.</h1>
              <p className="text-xl text-white/40 leading-relaxed font-light mb-12">
                 Setiap fitur di Aftelife dirancang dengan presisi matematis dan empati manusia untuk memastikan memori Anda tidak pernah pudar oleh waktu.
              </p>
              <div className="flex gap-6">
                 <button className="px-8 py-4 bg-indigo-600 rounded-xl font-bold hover:bg-indigo-500 transition-all">Pelajari Lebih Lanjut</button>
                 <div className="flex -space-x-3 items-center">
                    {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0f172a] bg-slate-800" />)}
                    <span className="pl-6 text-xs text-white/20 font-bold tracking-widest uppercase">Dipercaya 10k+ Pengguna</span>
                 </div>
              </div>
           </div>
           <div className="relative">
              <div className="absolute inset-0 bg-indigo-600/20 blur-[100px] rounded-full" />
              {/* Custom SVG Graphic: Feature Hub */}
              <div className="relative p-12 bg-white/[0.02] border border-white/5 rounded-[60px] aspect-square flex items-center justify-center">
                 <svg width="240" height="240" viewBox="0 0 100 100" className="text-indigo-500/30">
                    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="4 4" />
                    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" fill="none" />
                    <circle cx="50" cy="50" r="10" fill="currentColor" fillOpacity="0.2" />
                    <rect x="45" y="45" width="10" height="10" fill="currentColor" rx="2" className="animate-pulse" />
                    {/* Floating nodes */}
                    <circle cx="20" cy="30" r="4" fill="currentColor" fillOpacity="0.8" />
                    <circle cx="80" cy="40" r="5" fill="currentColor" fillOpacity="0.6" />
                    <circle cx="40" cy="85" r="3" fill="currentColor" fillOpacity="0.4" />
                 </svg>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl">💎</div>
              </div>
           </div>
        </div>
      </section>

      {/* Main Features Detail */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            {mainFeatures.map((f, i) => (
              <div key={i} className="group p-12 bg-white/[0.01] border border-white/5 rounded-[50px] hover:bg-white/[0.03] transition-all flex flex-col h-full">
                <div className={`w-16 h-16 ${f.color} rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform`}>
                  {f.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6">{f.title}</h3>
                <p className="text-white/40 mb-10 leading-relaxed font-light flex-1">{f.desc}</p>
                <div className="pt-8 border-t border-white/5 text-sm text-indigo-400 font-medium">
                   {f.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive: Technical Flow */}
      <section className="py-32 bg-black/20 border-y border-white/5">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
               <h2 className="text-4xl font-bold mb-4">Sistem Yang Selalu Siaga.</h2>
               <p className="text-white/40 max-w-2xl mx-auto font-light">Algoritma cerdas kami memantau keberadaan Anda dengan presisi tinggi dan keamanan berlapis.</p>
            </div>
            <div className="grid lg:grid-cols-4 gap-8">
               {[
                 { step: '01', title: 'Aktivitas Rutin', desc: 'Sistem mencatat interaksi rutin Anda di platform Aftelife.', icon: '⚡' },
                 { step: '02', title: 'Ambang Batas', desc: 'Jika inaktivitas terdeteksi melewati batas yang ditentukan.', icon: '⏲️' },
                 { step: '03', title: 'Verifikasi Wali', desc: 'Guardians dihubungi untuk konfirmasi dokumen legal.', icon: '🛂' },
                 { step: '04', title: 'Eksekusi Aman', desc: 'Data dirilis secara aman kepada penerima wasiat Anda.', icon: '🔓' }
               ].map((item, i) => (
                 <div key={i} className="relative p-10 bg-white/[0.02] border border-white/5 rounded-[40px] group overflow-hidden">
                    <span className="absolute -top-4 -right-4 text-8xl font-black text-white/[0.03] group-hover:text-white/[0.05] transition-colors">{item.step}</span>
                    <div className="text-4xl mb-8">{item.icon}</div>
                    <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                    <p className="text-sm text-white/40 leading-relaxed font-light">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Voice Archiving Detail */}
      <section className="py-40 px-6">
         <div className="max-w-5xl mx-auto text-center">
            {/* Custom SVG Icon 3: Soundwave */}
            <div className="flex justify-center mb-10">
               <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-500">
                  {[...Array(20)].map((_, i) => (
                    <rect key={i} x={i * 6} y={10 + Math.random() * 20} width="2" height={5 + Math.random() * 25} fill="currentColor" rx="1" className="animate-pulse" />
                  ))}
               </svg>
            </div>
            <h2 className="text-4xl font-bold mb-8">Suara Anda Adalah Warisan Tak Ternilai.</h2>
            <p className="text-lg text-white/40 mb-20 leading-relaxed font-light">
               Teknologi Voice Cloning kami mampu menangkap esensi suara Anda—nada, emosi, dan keunikan cara Anda berbicara untuk menyampaikan pesan terakhir dengan sempurna.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
               {[
                 { t: 'Emosi Presisi', d: 'AI kami mendeteksi nuansa emosi dalam teks untuk disesuaikan dengan nada suara Anda.', i: '🧠' },
                 { t: 'Kualitas Studio', d: 'Output audio dengan standar industri (48khz) untuk kejernihan maksimal.', i: '💎' }
               ].map((v, i) => (
                 <div key={i} className="p-10 bg-white/[0.02] border border-white/5 rounded-[40px] hover:border-indigo-500/20 transition-all flex gap-8 items-center">
                    <div className="text-4xl">{v.i}</div>
                    <div>
                       <h5 className="font-bold mb-2">{v.t}</h5>
                       <p className="text-sm text-white/40 font-light">{v.d}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Comparison Table */}
      <section className="py-32 bg-[#0a0f1d] border-y border-white/5">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-16 text-center">Kenapa Memilih Aftelife?</h2>
            <div className="overflow-hidden border border-white/5 rounded-[40px]">
               <table className="w-full text-left">
                  <thead>
                     <tr className="bg-white/5 text-[10px] font-black tracking-[0.4em] uppercase text-white/20">
                        <th className="p-8">Kapabilitas</th>
                        <th className="p-8">Alternatif</th>
                        <th className="p-8 text-indigo-400">Aftelife</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm text-white/60">
                     {[
                       { f: 'Smart Trigger', c: 'Manual', a: 'Otomatis' },
                       { f: 'Storage', c: 'Centralized', a: 'Decentralized' },
                       { f: 'Privacy', c: 'Limited', a: 'Zero-Knowledge' },
                       { f: 'Encryption', c: 'Standard', a: 'AES-256-GCM' }
                     ].map((row, i) => (
                       <tr key={i} className="border-t border-white/5 hover:bg-white/[0.01]">
                          <td className="p-8 font-bold">{row.f}</td>
                          <td className="p-8">{row.c}</td>
                          <td className="p-8 text-indigo-400 font-black">{row.a}</td>
                       </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* Footer CTA */}
      <section className="py-40 text-center">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-10">Mulai Membangun Warisan Anda.</h2>
            <p className="text-white/40 mb-12 font-light text-xl">Daftar sekarang dan nikmati semua fitur premium secara gratis selama 30 hari.</p>
            <button className="px-12 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:scale-[1.05] transition-all">
               Mulai Eksplorasi Sekarang
            </button>
         </div>
      </section>
    </div>
  );
}
