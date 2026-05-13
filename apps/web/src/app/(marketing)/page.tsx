import React from 'react';

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-[#0f172a] min-h-screen">
      {/* Custom Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-indigo-500/10 to-transparent blur-[120px] pointer-events-none" />
      
      {/* Unique Hero: Home (Glow Minimalist) */}
      <section className="relative pt-40 pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Custom SVG Icon 1: The Infinite Loop */}
          <div className="flex justify-center mb-10">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-500 drop-shadow-[0_0_15px_rgba(79,70,229,0.5)]">
               <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" fill="currentColor" opacity="0.2"/>
               <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-xs font-bold mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_indigo]" />
            Masa Depan Digital Anda Terjamin
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight text-white max-w-4xl mx-auto">
            Abadikan setiap langkah perjalanan <br />
            digital Anda selamanya.
          </h1>

          <p className="text-lg md:text-xl text-white/40 mb-12 max-w-2xl mx-auto leading-relaxed">
            Aftelife adalah jembatan aman untuk menyampaikan pesan dan aset digital Anda kepada orang-orang tercinta tepat pada waktunya.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
            <button className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20">
              Mulai Secara Gratis
            </button>
            <button className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
              Pelajari Cara Kerja
            </button>
          </div>

          {/* Home Stats Display */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-4xl mx-auto py-12 border-t border-white/5">
             {[
               { val: '10k+', label: 'Pengguna' },
               { val: '256-bit', label: 'Enkripsi' },
               { val: '99.9%', label: 'Uptime' },
               { val: '24/7', label: 'Support' }
             ].map((stat, i) => (
               <div key={i} className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-white mb-1">{stat.val}</span>
                  <span className="text-[10px] tracking-[0.2em] font-bold text-white/20 uppercase">{stat.label}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-black/20">
         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
            <div className="relative group">
               <div className="absolute inset-0 bg-indigo-600/20 blur-[80px] rounded-full group-hover:bg-indigo-600/30 transition-all duration-1000" />
               {/* Custom SVG Icon 2: The Core Shield */}
               <div className="relative p-16 bg-[#1e293b]/50 border border-white/5 rounded-[48px] flex justify-center">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white opacity-40">
                    <path d="M12 2L3 7v9c0 5.5 4.5 10 9 10s9-4.5 9-10V7l-9-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22c3.314 0 6-2.686 6-6V8.5L12 5.167 6 8.5V16c0 3.314 2.686 6 6 6z" fill="currentColor" fillOpacity="0.1"/>
                    <path d="M12 11v4M12 15l-1-1M12 15l1-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
               </div>
            </div>
            <div>
               <h2 className="text-4xl font-bold mb-8 leading-tight">Misi kami adalah memberikan ketenangan pikiran bagi Anda.</h2>
               <p className="text-lg text-white/40 mb-10 leading-relaxed font-light">
                  Kami memahami bahwa aset digital Anda—dari kenangan keluarga hingga kunci dompet kripto—adalah bagian tak terpisahkan dari identitas Anda. Kami hadir untuk melindunginya.
               </p>
               <div className="space-y-8">
                  {[
                    { t: 'Kerahasiaan Mutlak', d: 'Hanya Anda dan penerima yang ditunjuk yang bisa mengakses data.', icon: '🔒' },
                    { t: 'Teknologi Terpercaya', d: 'Infrastruktur terdesentralisasi yang tidak bergantung pada satu server.', icon: '🌐' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start">
                       <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-2xl shrink-0">{item.icon}</div>
                       <div>
                          <h4 className="text-xl font-bold mb-2">{item.t}</h4>
                          <p className="text-sm text-white/40 leading-relaxed">{item.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-32 border-y border-white/5">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
               <div className="max-w-xl">
                  <h2 className="text-4xl font-bold mb-4">Suara dari mereka yang telah mempercayakan warisannya.</h2>
                  <p className="text-white/40">Kepercayaan adalah pondasi dari setiap baris kode yang kami buat.</p>
               </div>
               <button className="px-8 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-bold transition-all border border-white/10">Baca Semua Kisah</button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { name: 'Andi Pratama', role: 'Investor Kripto', quote: 'Aftelife memberi saya ketenangan. Sekarang saya tahu istri saya bisa mengakses data saya jika terjadi sesuatu.' },
                 { name: 'Siti Aminah', role: 'Ibu Rumah Tangga', quote: 'Saya sudah merekam pesan suara untuk ulang tahun ke-17 anak saya. Aftelife membantu saya tetap hadir.' },
                 { name: 'Budi Santoso', role: 'Wirausaha', quote: 'Sistem ini sangat cerdas. Sangat membantu dalam manajemen aset bisnis keluarga yang kompleks.' }
               ].map((testi, i) => (
                 <div key={i} className="p-10 bg-white/[0.02] border border-white/5 rounded-[40px] hover:bg-white/[0.04] transition-all flex flex-col h-full">
                    <p className="text-lg text-white/60 mb-10 leading-relaxed flex-1 font-light">"{testi.quote}"</p>
                    <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                       <div className="w-12 h-12 bg-indigo-600/20 rounded-full flex items-center justify-center font-bold text-indigo-400">{testi.name[0]}</div>
                       <div>
                          <h5 className="font-bold text-white">{testi.name}</h5>
                          <span className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold">{testi.role}</span>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Use Case Grid */}
      <section className="py-32">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
               <h2 className="text-4xl font-bold mb-4">Didesain untuk berbagai kebutuhan.</h2>
               <p className="text-white/40">Satu platform, perlindungan tanpa batas.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                 { t: 'Keluarga', i: '👨‍👩‍👧‍👦', d: 'Simpan album kenangan dan pesan wasiat untuk anak cucu.' },
                 { t: 'Kripto', i: '₿', d: 'Amankan kunci pribadi dompet kripto dan aset digital Anda.' },
                 { t: 'Bisnis', i: '🏢', d: 'Warisan kredensial akun bisnis dan dokumen legal penting.' },
                 { t: 'Pribadi', i: '👤', d: 'Pesan rahasia atau permintaan terakhir yang ingin disampaikan.' }
               ].map((use, i) => (
                 <div key={i} className="p-8 bg-white/[0.01] border border-white/5 rounded-[32px] hover:border-indigo-500/30 transition-all group">
                    <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{use.i}</div>
                    <h3 className="text-xl font-bold mb-4">{use.t}</h3>
                    <p className="text-sm text-white/40 leading-relaxed font-light">{use.d}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-40">
         <div className="max-w-5xl mx-auto px-6 relative">
            <div className="absolute inset-0 bg-indigo-600 blur-[150px] opacity-10" />
            <div className="relative p-20 bg-gradient-to-br from-indigo-900/40 to-transparent border border-white/5 rounded-[64px] text-center">
               <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">Siap untuk mengamankan <br /> warisan digital Anda hari ini?</h2>
               <p className="text-xl text-white/40 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                  Bergabunglah dengan ribuan orang yang telah memastikan masa depan digital mereka bersama Aftelife.
               </p>
               <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <button className="px-12 py-5 bg-white text-indigo-900 rounded-2xl font-bold text-xl hover:scale-[1.02] transition-all shadow-2xl">
                     Buat Akun Sekarang
                  </button>
                  <button className="px-12 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-xl hover:bg-white/10 transition-all">
                     Hubungi Tim Kami
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* Bottom Disclaimer */}
      <section className="pb-24 pt-0">
         <div className="max-w-4xl mx-auto px-6 text-center opacity-20 hover:opacity-50 transition-opacity">
            <p className="text-[10px] leading-relaxed uppercase tracking-[0.3em] font-bold">
               Aftelife adalah platform digital yang menggunakan enkripsi standar industri. Kami tidak bertanggung jawab atas isi data yang disimpan oleh pengguna. Keamanan kunci pribadi adalah tanggung jawab penuh pengguna. Seluruh transmisi data dilakukan melalui protokol aman.
            </p>
         </div>
      </section>
    </div>
  );
}
