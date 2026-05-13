import React from 'react';

export default function HargaPage() {
  const plans = [
    {
      name: 'Gratis',
      price: '0',
      desc: 'Sempurna untuk langkah awal mengamankan rahasia digital paling krusial.',
      features: [
        'Penyimpanan Aman 1 GB',
        '1 Wali Terverifikasi',
        '3 Pesan Masa Depan',
        'Enkripsi AES-256',
        'Akses Web & Mobile',
        'Check-in Harian'
      ],
      cta: 'Mulai Sekarang',
      popular: false,
      color: 'border-white/5 bg-white/[0.01]'
    },
    {
      name: 'Premium',
      price: '185rb',
      sub: '/ bln',
      desc: 'Proteksi lengkap untuk seluruh aset digital dan memori keluarga Anda.',
      features: [
        'Penyimpanan Aman 50 GB',
        'Wali Tak Terbatas',
        'Pesan Tak Terbatas',
        'Kloning Suara AI',
        'Dukungan Prioritas',
        'Multi-Perangkat',
        'Laporan Kesehatan',
        'Mode Liburan'
      ],
      cta: 'Pilih Premium',
      popular: true,
      color: 'border-indigo-500 bg-indigo-600'
    },
    {
      name: 'Legacy',
      price: '2.5jt',
      sub: 'Sekali Bayar',
      desc: 'Investasi seumur hidup untuk memastikan warisan tetap hidup selamanya.',
      features: [
        'Storage Tak Terbatas',
        'Fitur Premium Selamanya',
        'Retensi Data 50 Tahun',
        'Bantuan Legal Dasar',
        'Sertifikat Fisik',
        'Konsultasi Privasi',
        'Akses Fitur Beta',
        'Tanpa Biaya Tahunan'
      ],
      cta: 'Dapatkan Legacy',
      popular: false,
      color: 'border-amber-500/30 bg-white/[0.01]'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Unique Hero: Harga (Floating Card Hero) */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-indigo-600/5 blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
           {/* Custom SVG Icon 5: The Pricing Diamond */}
           <div className="flex justify-center mb-10">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
                 <path d="M6 3h12l4 6-10 12L2 9z" />
                 <path d="M11 3l-4 6 5 12" />
                 <path d="M13 3l4 6-5 12" />
                 <path d="M2 9h20" />
              </svg>
           </div>
           
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black tracking-widest uppercase mb-8">
              Pilihan Paket Terbaik
           </div>
           
           <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Investasi Abadi Untuk <br /> Kenangan Dan Aset Anda.</h1>
           <p className="text-xl text-white/40 leading-relaxed font-light mb-12 max-w-2xl mx-auto">
              Pilih paket yang paling sesuai dengan visi warisan digital Anda. Transparan, aman, dan tanpa biaya tersembunyi.
           </p>

           {/* Toggle Visual Only */}
           <div className="flex items-center justify-center gap-4 mb-20">
              <span className="text-sm font-bold text-white">Bulanan</span>
              <div className="w-12 h-6 bg-indigo-600 rounded-full p-1 flex justify-end">
                 <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
              </div>
              <span className="text-sm font-bold text-white/40">Tahunan</span>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-[10px] font-black rounded-md uppercase">Hemat 20%</span>
           </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, i) => (
              <div key={i} className={`flex flex-col p-12 rounded-[50px] border ${plan.color} relative transition-all duration-500 hover:translate-y-[-10px] shadow-2xl`}>
                 {plan.popular && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white text-indigo-600 px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase shadow-2xl">
                       Rekomendasi
                    </div>
                 )}
                 <div className="mb-10">
                    <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                    <div className="flex items-baseline gap-2 mb-6">
                       <span className="text-5xl font-black text-white">{plan.price}</span>
                       <span className={`text-sm ${plan.popular ? 'text-white/60' : 'text-white/30'}`}>{plan.sub}</span>
                    </div>
                    <p className={`text-sm leading-relaxed ${plan.popular ? 'text-white/80' : 'text-white/40'} font-light`}>
                       {plan.desc}
                    </p>
                 </div>
                 
                 <div className="space-y-5 mb-16 flex-1">
                    {plan.features.map(f => (
                      <div key={f} className="flex items-center gap-4 text-sm font-medium">
                         <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? 'bg-white/20 text-white' : 'bg-indigo-500/20 text-indigo-400'}`}>
                            <span className="text-[10px] font-bold">✓</span>
                         </div>
                         <span className={plan.popular ? 'text-white/90' : 'text-white/60'}>{f}</span>
                      </div>
                    ))}
                 </div>

                 <button className={`w-full py-6 rounded-[24px] font-bold text-xl transition-all shadow-sm ${plan.popular ? 'bg-white text-indigo-600 hover:bg-slate-50' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}`}>
                    {plan.cta}
                 </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Detail */}
      <section className="py-40 bg-black/20 border-y border-white/5">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-16 text-center">Perbandingan Detail</h2>
            <div className="overflow-hidden border border-white/5 rounded-[40px] bg-white/[0.01]">
               <table className="w-full text-left">
                  <thead>
                     <tr className="bg-white/5 text-[10px] font-black tracking-widest uppercase text-white/20">
                        <th className="p-8">Fitur</th>
                        <th className="p-8">Premium</th>
                        <th className="p-8">Legacy</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm text-white/60">
                     {[
                       { f: 'Bantuan Hukum', p: 'Optional', l: 'Gratis' },
                       { f: 'Priority Queue', p: 'Ya', l: 'Elite' },
                       { f: 'Hardware Key', p: 'Optional', l: 'Gratis' },
                       { f: 'Dedicated Agent', p: 'Tidak', l: 'Ya' }
                     ].map((row, i) => (
                       <tr key={i} className="border-t border-white/5 hover:bg-white/[0.01]">
                          <td className="p-8 font-bold">{row.f}</td>
                          <td className="p-8">{row.p}</td>
                          <td className="p-8 text-indigo-400 font-bold">{row.l}</td>
                       </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* B2B Section */}
      <section className="py-40 px-6">
         <div className="max-w-5xl mx-auto p-20 bg-white/[0.01] border border-white/5 rounded-[64px] text-center">
            <h2 className="text-4xl font-bold mb-8">Solusi Untuk Korporasi.</h2>
            <p className="text-lg text-white/40 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
               Dapatkan infrastruktur warisan digital kustom untuk firma hukum, asuransi, atau institusi perbankan Anda.
            </p>
            <button className="px-12 py-5 bg-white text-indigo-900 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-all">Hubungi Tim Sales</button>
         </div>
      </section>

      {/* Bottom Payment Info */}
      <div className="pb-32 text-center opacity-20">
         <div className="max-w-4xl mx-auto px-6">
            <p className="text-[10px] leading-relaxed uppercase tracking-[0.4em] font-black mb-8 px-6">
               Seluruh transaksi diamankan dengan enkripsi end-to-end. Harga di atas sudah termasuk pajak dan biaya layanan infrastruktur IPFS.
            </p>
         </div>
      </div>
    </div>
  );
}
