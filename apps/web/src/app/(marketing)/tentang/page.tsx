import React from 'react';

export default function TentangPage() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <h1 className="text-6xl font-bold mb-8 italic">Misi Kami adalah <span className="text-indigo-400">Keabadian</span> Digital Anda.</h1>
          <p className="text-white/60 text-xl leading-relaxed">
            Aftelife lahir dari pemikiran sederhana: Di dunia yang semakin digital, mengapa "harta" dan "kenangan" kita seringkali hilang begitu saja saat kita tiada?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
           <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Visi Kami</h2>
              <p className="text-white/40 leading-relaxed mb-6">
                 Kami ingin menjadi standar dunia dalam pengelolaan warisan digital. Kami percaya bahwa setiap orang berhak memiliki kendali penuh atas bagaimana mereka diingat dan bagaimana aset digital mereka didistribusikan.
              </p>
              <div className="h-1 w-20 bg-indigo-600 rounded-full" />
           </div>
           <div className="p-12 bg-white/[0.02] border border-white/5 rounded-[60px] italic text-white/40 text-center">
              "Kematian hanyalah awal dari sebuah cerita yang belum selesai. Kami di sini untuk memastikan cerita itu tersampaikan."
           </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
           {[
              { title: 'Privasi Mutlak', desc: 'Kami tidak bisa melihat data Anda. Titik.' },
              { title: 'Teknologi Masa Depan', desc: 'Menggunakan blockchain dan enkripsi tercanggih.' },
              { title: 'Sentuhan Manusia', desc: 'Dibuat dengan rasa empati terhadap keluarga yang ditinggalkan.' }
           ].map((item, i) => (
              <div key={i} className="space-y-4">
                 <h4 className="text-xl font-bold text-indigo-400">{item.title}</h4>
                 <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
           ))}
        </div>
      </div>
    </div>
  );
}
