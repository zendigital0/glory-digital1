import React, { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Andi Pratama",
    role: "Direktur Solusi Digital",
    text: "Semenjak bekerja sama dengan GLORY DIGITAL, trafik organik kami meningkat tiga kali lipat. Pendekatan mereka bener-bener berbasis data.",
    image: "https://picsum.photos/seed/andi/100/100"
  },
  {
    id: 2,
    name: "Bambang Wijaya",
    role: "Founder, Hunian Nyaman",
    text: "Akhirnya nemu agensi SEO yang kasih hasil terukur. Kami melihat ROI 3,5x lipat dalam kuartal pertama bersama GLORY DIGITAL.",
    image: "https://picsum.photos/seed/bambang/100/100"
  },
  {
    id: 3,
    name: "Citra Lestari",
    role: "Manager Pesona Wisata",
    text: "Website kami jauh lebih kencang setelah optimasi teknis dari tim GLORY DIGITAL. Pengalaman user jadi makin smooth dan anti-lemot.",
    image: "https://picsum.photos/seed/citra/100/100"
  },
  {
    id: 4,
    name: "Dedi Setiawan",
    role: "CEO Toko Hijau Indonesia",
    text: "Ranking kata kunci utama kami naik ke halaman satu cuma dalam 2 bulan. Strategi konten GLORY DIGITAL emang tajam banget.",
    image: "https://picsum.photos/seed/dedi/100/100"
  },
  {
    id: 5,
    name: "Eka Putri",
    role: "Owner Toko Bunga Abadi",
    text: "Local SEO dari GLORY DIGITAL beneran bawa banyak pembeli ke toko kami di Malang. Hasilnya nyata dan kerasa di omzet!",
    image: "https://picsum.photos/seed/eka/100/100"
  },
  {
    id: 6,
    name: "Fajar Ramadhan",
    role: "Ops Manager Jelajah Bromo",
    text: "Sangat profesional dan transparan. Laporan bulanan GLORY DIGITAL detail banget, jadi kami tahu budget-nya lari ke mana saja.",
    image: "https://picsum.photos/seed/fajar/100/100"
  },
  {
    id: 7,
    name: "Gita Permata",
    role: "Founder Sehat Selalu",
    text: "GLORY DIGITAL ngubah total cara kami jualan lewat SEO. Mereka nggak cuma janji manis, tapi kasih bukti pertumbuhan trafik.",
    image: "https://picsum.photos/seed/gita/100/100"
  },
  {
    id: 8,
    name: "Hadi Saputra",
    role: "CEO Warisan Batik",
    text: "Investasi terbaik kami tahun ini adalah kerja sama dengan GLORY DIGITAL. Konversi penjualan lewat web meningkat drastis.",
    image: "https://picsum.photos/seed/hadi/100/100"
  },
  {
    id: 9,
    name: "Indah Kusuma",
    role: "CTO Kode Kreatif",
    text: "Audit teknis dari GLORY DIGITAL mendalam banget. Mereka nemu masalah krusial yang sebelumnya diabaikan agensi lain.",
    image: "https://picsum.photos/seed/indah/100/100"
  },
  {
    id: 10,
    name: "Joko Susilo",
    role: "Owner Seduhan Nusantara",
    text: "Bangun branding bareng GLORY DIGITAL asik banget. Mereka paham visi lokal kopi kami dan bantu bawa ke pasar nasional.",
    image: "https://picsum.photos/seed/joko/100/100"
  },
  {
    id: 11,
    name: "Kartika Sari",
    role: "Director Properti Utama",
    text: "Lead yang masuk ke website kami jauh lebih berkualitas sekarang. GLORY DIGITAL tahu cara targetin orang yang tepat.",
    image: "https://picsum.photos/seed/kartika/100/100"
  },
  {
    id: 12,
    name: "Lutfi Hakim",
    role: "Founder Cantik Alami",
    text: "Tim GLORY DIGITAL kreatif banget dalam strategi konten. Blog kami sekarang bener-bener nunjukin identitas brand kami.",
    image: "https://picsum.photos/seed/lutfi/100/100"
  },
  {
    id: 13,
    name: "Mega Utami",
    role: "Manager Logistik Cepat",
    text: "Optimasi dari GLORY DIGITAL nyelametin performa situs kami pas peak season. Nggak ada lagi drama server down atau lemot.",
    image: "https://picsum.photos/seed/mega/100/100"
  },
  {
    id: 14,
    name: "Nurul Hidayah",
    role: "Lead Creative Mode Gaya",
    text: "Brand awareness kami naik pesat berkat strategi multi-channel dari GLORY DIGITAL. Partner yang bener-bener bisa diandalkan.",
    image: "https://picsum.photos/seed/nurul/100/100"
  },
  {
    id: 15,
    name: "Oki Prayoga",
    role: "Head of Growth Belajar Cerdas",
    text: "GLORY DIGITAL kasih insight data yang akurat banget. Kami sekarang berani ambil keputusan bisnis karena ada data rill-nya.",
    image: "https://picsum.photos/seed/oki/100/100"
  },
  {
    id: 16,
    name: "Panji Wicaksono",
    role: "Founder Bugar Mandiri",
    text: "Saya rekomendasiin banget GLORY DIGITAL buat siapa saja yang mau hasil nyata dalam waktu singkat. Pelayanannya juara!",
    image: "https://picsum.photos/seed/panji/100/100"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 2000); 
      return () => clearInterval(interval);
    }
  }, [isPaused, nextSlide]);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter italic">
          Apa Kata <span className="text-primary underline decoration-wavy">Mereka</span>
        </h2>
      </div>

      <div 
        className="relative flex justify-center items-center h-450px"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative w-full max-w-5xl flex justify-center items-center">
          {testimonials.map((t, index) => {
            let position = index - activeIndex;
            if (index === 0 && activeIndex === testimonials.length - 1) position = 1;
            if (index === testimonials.length - 1 && activeIndex === 0) position = -1;

            const isCenter = index === activeIndex;
            const isVisible = position >= -1 && position <= 1;

            return (
              <div 
                key={t.id}
                className={`absolute transition-all duration-700 ease-out flex flex-col items-center
                  ${isCenter ? 'z-30 opacity-100 scale-100' : 'z-10 opacity-30 scale-75'}
                  ${!isVisible && 'pointer-events-none opacity-0'}
                `}
                style={{
                  transform: `translateX(${position * 110}%)`, 
                }}
              >
                <div className="relative w-[320px] md:w-500px shrink-0 rounded-[3rem] bg-linear-to-br from-[#1a2e22] to-[#112217] p-10 border border-white/5 shadow-2xl group">
                  <span className={`material-symbols-outlined absolute top-8 right-8 text-8xl pointer-events-none transition-all duration-500
                    ${isCenter ? 'text-primary/10 scale-110' : 'text-white/5 scale-100'}
                  `}>
                    format_quote
                  </span>

                  <div className="relative z-10 space-y-6">
                    <div className="flex gap-1 text-primary justify-center md:justify-start">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <span key={i} className="material-symbols-outlined text-sm">star</span>
                      ))}
                    </div>

                    <p className={`text-lg md:text-xl text-white font-medium leading-relaxed italic text-center md:text-left
                      ${isCenter ? 'opacity-100' : 'opacity-60'}
                    `}>
                      "{t.text}"
                    </p>

                    <div className="flex items-center gap-4 pt-4 justify-center md:justify-start border-t border-white/5">
                      <div className={`w-14 h-14 rounded-full border-2 overflow-hidden transition-colors duration-500
                        ${isCenter ? 'border-primary' : 'border-white/10'}
                      `}>
                        <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="text-left">
                        <p className="text-white font-black text-lg leading-tight">{t.name}</p>
                        <p className="text-primary/60 font-bold text-xs uppercase tracking-widest mt-1">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-2 mt-10 max-w-2xl mx-auto px-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              activeIndex === index ? 'w-8 bg-primary' : 'w-1.5 bg-white/20'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;