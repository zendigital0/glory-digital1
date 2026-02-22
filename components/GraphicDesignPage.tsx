import React, { useState, useEffect, useCallback } from 'react';
import { sanitizeDropboxUrl } from '../utils/dropbox';

interface GraphicDesignPageProps {
  onBack: () => void;
}

interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  img: string;
}

const initialPortfolio: PortfolioItem[] = [
  { "id": 1, "category": "Logo", "title": "Apex Tech Identity", "img": "https://www.dropbox.com/scl/fi/1kgfr9k5krwudgoihluux/apex.jpg?rlkey=l2bqhdd4xauzomcm3x4lpa2wv&st=jsl1mnu8&dl=0" },
  { "id": 2, "category": "Logo", "title": "Lumina Studio", "img": "https://www.dropbox.com/scl/fi/sxw0i90kfy6vj9dg1h90q/lumina.jpg?rlkey=4i19fva8gjttxjpm2po94oksi&st=wau1c4hg&dl=0" },
  { "id": 3, "category": "Logo", "title": "Zenith Real Estate", "img": "https://www.dropbox.com/scl/fi/58pcfrq882zudd509bbo4/zenith.jpg?rlkey=wt3zdydg2dv9pkibuyzxe4sc9&st=vyfwp2yx&dl=0" },
  { "id": 13, "category": "Logo", "title": "Organic Food Co.", "img": "https://www.dropbox.com/scl/fi/18az11avvssg5i8198zf8/organic.jpg?rlkey=6zx7gbma4616jnadw63g3z20m&st=nt0zymwi&dl=0" },
  { "id": 4, "category": "Banner", "title": "E-Commerce Summer Sale", "img": "https://www.dropbox.com/scl/fi/exk0el8xcgm9q6u03on6m/summer-sale.jpg?rlkey=j7hjyh5h5qxbbmr1n47oo1y4t&st=ssxno304&dl=0" },
  { "id": 5, "category": "Banner", "title": "SaaS Hero Section", "img": "https://www.dropbox.com/scl/fi/unw2cankb8wy6ia88qyq8/saas-hero.jpg?rlkey=xehza8m3unk84rxex4xc07kwm&st=67ylnyj9&dl=0" },
  { "id": 6, "category": "Banner", "title": "Social Media Campaign", "img": "https://www.dropbox.com/scl/fi/vighrd5hhdk09cbx4k271/social-media.jpg?rlkey=em8xb0956kr81obdzibt29su6&st=1fh6ssm9&dl=0" },
  { "id": 14, "category": "Banner", "title": "Digital Ads Set", "img": "https://www.dropbox.com/scl/fi/yrxbecv4cek2cg9qme40l/ads-set.jpg?rlkey=e45u7o64oohg0nahvm8qyeq8k&st=ijqwz2y7&dl=0" },
  { "id": 7, "category": "Poster", "title": "Digital Future Event", "img": "https://www.dropbox.com/scl/fi/y9rnoabyvpd0a63k3xnzj/digital-future.jpg?rlkey=00uvqg7ykxs1lh4mpgb64tf3r&st=u5hvjpsx&dl=0" },
  { "id": 8, "category": "Poster", "title": "Minimalist Art Expo", "img": "https://www.dropbox.com/scl/fi/lfpj810rvzslbuqyf7j5z/minimalist-art-expo.jpg?rlkey=6gmx9k15rt4lykbzftfexu1m5&st=obhgl43s&dl=0" },
  { "id": 9, "category": "Poster", "title": "Tech Conference 2024", "img": "https://www.dropbox.com/scl/fi/x9ugnc7stejne26rzykxl/tech-conference.jpg?rlkey=v2m2z3smwmdt2arlrbhpid5hj&st=sr5i0xub&dl=0" },
  { "id": 15, "category": "Poster", "title": "Modern Concept Flyer", "img": "https://www.dropbox.com/scl/fi/r15ou6e35d5ykzyuxfd55/flayer-concept.jpg?rlkey=jzmh9rk202isrh96015uge3nl&st=uq0vexq9&dl=0" },
  { "id": 10, "category": "Pamphlet", "title": "Corporate Profile", "img": "https://www.dropbox.com/scl/fi/q2dg9osg74cprjpd9m32e/pamflet-coorporation.jpg?rlkey=oivnbkerm2anfsg8sadwngbzu&st=km2n9pnt&dl=0" },
  { "id": 11, "category": "Pamphlet", "title": "Service Catalogue", "img": "https://www.dropbox.com/scl/fi/13a182s04l93doe9rb1ev/service-catalogue.jpg?rlkey=yp1mo8ej0yrtd9hvcmxws7bef&st=p2zg7m0q&dl=0" },
  { "id": 12, "category": "Pamphlet", "title": "Event Guide", "img": "https://www.dropbox.com/scl/fi/4r18k7721ju411qbusarm/pamflet-event-guide.jpg?rlkey=mp01y3lm476jhi0nlyz28gdn0&st=7d45pqtg&dl=0" },
  { "id": 16, "category": "Pamphlet", "title": "Exclusive Brochure", "img": "https://www.dropbox.com/scl/fi/xu9omoymq4lqyrgsihm8z/pamflet-exclusive-brochure.jpg?rlkey=171p4li1n55idiwbq8ti5sgki&st=wn2p3kbs&dl=0" }
];


const SmartImage: React.FC<{ 
  item: PortfolioItem, 
  priority: boolean,
  onOpen: () => void 
}> = ({ item, priority, onOpen }) => {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  return (
    <div 
      onClick={onOpen}
      className="group relative aspect-4/5 rounded-2rem md:rounded-[2.5rem] overflow-hidden bg-surface-dark border border-white/5 hover:border-blue-400/30 transition-all duration-500 cursor-pointer"
    >
      {/* 1. Shimmer/Skeleton Effect */}
      {status === 'loading' && (
        <div className="absolute inset-0 z-10 bg-surface-dark animate-pulse flex flex-col items-center justify-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10"></div>
          <div className="h-2 w-20 bg-white/5 rounded-full"></div>
        </div>
      )}

      {/* 2. Optimized Image Tag */}
      {status !== 'error' && (
        <img 
          src={item.img} 
          alt={item.title}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className={`w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out ${
            status === 'loaded' ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-110 blur-xl'
          }`}
        />
      )}

      {/* Overlay Info */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 z-20 bg-linear-to-t from-background-dark/90 via-background-dark/20 to-transparent translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1 inline-block">{item.category}</span>
        <h4 className="text-lg font-black text-white leading-tight">{item.title}</h4>
      </div>
    </div>
  );
};

const GraphicDesignPage: React.FC<GraphicDesignPageProps> = ({ onBack }) => {
  
  const [localPortfolio] = useState<PortfolioItem[]>(
    initialPortfolio.map(item => ({
      ...item,
      img: sanitizeDropboxUrl(item.img)
    }))
  );
  
  const [filter, setFilter] = useState('All');
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const categories = ['All', 'Logo', 'Banner', 'Poster', 'Pamphlet'];
  
  const filteredPortfolio = filter === 'All' 
    ? localPortfolio 
    : localPortfolio.filter(item => item.category === filter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Logo': return 'pentool';
      case 'Banner': return 'view_carousel';
      case 'Poster': return 'photo_size_select_actual';
      case 'Pamphlet': return 'menu_book';
      default: return 'design_services';
    }
  };

  const openModal = (idx: number) => {
    setSelectedIdx(idx);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedIdx(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev! + 1) % filteredPortfolio.length);
  }, [selectedIdx, filteredPortfolio.length]);

  const prevImage = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev! - 1 + filteredPortfolio.length) % filteredPortfolio.length);
  }, [selectedIdx, filteredPortfolio.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, nextImage, prevImage]);

  return (
    <section className="px-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between mb-12">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors group font-bold text-xs tracking-widest uppercase">
          <span className="material-symbols-outlined group-hover:-translate-x-2 transition-transform">arrow_back</span>
          <span>Kembali</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter">
              Desain Grafis <br/><span className="text-blue-400 italic">Berkelas</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
              Kami tidak sekadar menggambar kami merancang bahasa visual yang memperkuat otoritas brand Anda.
            </p>
          </div>
          <div className="flex gap-4 lg:justify-end">
            <div className="p-8 bg-surface-dark rounded-2rem border border-white/5 text-center min-w-140px">
              <div className="text-3xl font-black text-blue-400">1.2k+</div>
              <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Aset Dibuat</div>
            </div>
            <div className="p-8 bg-surface-dark rounded-2rem border border-white/5 text-center min-w-140px">
              <div className="text-3xl font-black text-white">100%</div>
              <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Custom Work</div>
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-white/5 pb-8">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Portfolio Showcase</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => { setFilter(cat); setSelectedIdx(null); }}
                  className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                    filter === cat 
                      ? 'bg-blue-400 text-background-dark' 
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Portfolio */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPortfolio.map((item, idx) => (
              <SmartImage 
                key={item.id}
                item={item}
                priority={idx < 4} 
                onOpen={() => openModal(idx)}
              />
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="relative rounded-[4rem] bg-linear-to-br from-blue-900/20 to-background-dark border border-white/10 p-12 md:p-24 text-center overflow-hidden">
          <div className="absolute inset-0 bg-blue-400/5 blur-[120px] pointer-events-none"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-white">Wujudkan Visi Visual Anda</h2>
            <button 
              onClick={() => window.open('https://wa.me/6285177470073', '_blank')}
              className="px-12 py-6 bg-blue-400 text-background-dark font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(96,165,250,0.2)]"
            >
              MULAI PROYEK DESAIN
            </button>
          </div>
        </div>
      </div>

      {/* Portfolio Modal / Carousel */}
      {selectedIdx !== null && (
        <div 
          className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8 bg-background-dark/95 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <button 
            onClick={closeModal}
            className="fixed top-6 right-6 z-110 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/10 transition-transform hover:rotate-90 shadow-2xl"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>

          <div 
            className="relative w-full max-w-6xl h-full flex flex-col items-center justify-center gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={prevImage} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-4 text-white/30 hover:text-primary transition-all hover:scale-110 z-10">
              <span className="material-symbols-outlined text-5xl md:text-7xl">chevron_left</span>
            </button>
            <button onClick={nextImage} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-4 text-white/30 hover:text-primary transition-all hover:scale-110 z-10">
              <span className="material-symbols-outlined text-5xl md:text-7xl">chevron_right</span>
            </button>

            <div className="relative w-full h-[60vh] md:h-75vh rounded-2rem md:rounded-3rem overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src={filteredPortfolio[selectedIdx].img} 
                alt={filteredPortfolio[selectedIdx].title}
                className="w-full h-full object-contain bg-surface-darker/50"
              />
            </div>

            <div className="text-center space-y-2">
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]">{filteredPortfolio[selectedIdx].category}</span>
              <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight">{filteredPortfolio[selectedIdx].title}</h3>
              <p className="text-gray-500 font-bold text-xs uppercase tracking-widest pt-2">{selectedIdx + 1} of {filteredPortfolio.length}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GraphicDesignPage;