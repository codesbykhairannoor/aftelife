import React from 'react';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0f172a] text-[#f8fafc] font-sans selection:bg-indigo-500/30">
      {/* Navigation Bar (Bahasa Indonesia) */}
      <nav className="fixed top-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <a href="/" className="flex items-center gap-2 cursor-pointer">
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/20">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Aftelife</span>
            </a>
            
            <div className="hidden lg:flex items-center gap-8">
              {[
                { name: 'Fitur', href: '/fitur' },
                { name: 'Keamanan', href: '/keamanan' },
                { name: 'Harga', href: '/harga' },
                { name: 'FAQ', href: '/faq' },
                { name: 'Tentang Kami', href: '/tentang' }
              ].map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-medium text-white/60 hover:text-indigo-400 transition-colors">
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="/dashboard" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Masuk</a>
            <button className="px-6 py-2.5 bg-indigo-600 text-white text-sm font-bold rounded-full hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer (Bahasa Indonesia) */}
      <footer className="py-20 border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start">
             <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold">A</div>
                <span className="text-lg font-bold tracking-tight text-white">Aftelife</span>
             </div>
             <p className="text-white/40 text-sm leading-relaxed">
                Mengamankan warisan digital Anda untuk generasi mendatang. Aman, terenkripsi, dan terpercaya.
             </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Produk</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="/fitur" className="hover:text-indigo-400">Fitur Utama</a></li>
              <li><a href="/keamanan" className="hover:text-indigo-400">Keamanan</a></li>
              <li><a href="/harga" className="hover:text-indigo-400">Paket Harga</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Perusahaan</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="/tentang" className="hover:text-indigo-400">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-indigo-400">Kontak</a></li>
              <li><a href="#" className="hover:text-indigo-400">Karir</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Bantuan</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="/faq" className="hover:text-indigo-400">FAQ</a></li>
              <li><a href="#" className="hover:text-indigo-400">Privasi</a></li>
              <li><a href="#" className="hover:text-indigo-400">Syarat & Ketentuan</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-white/20 text-xs tracking-widest">© 2026 Aftelife Digital Legacy. Amankan selamanya.</p>
        </div>
      </footer>
    </div>
  );
}
