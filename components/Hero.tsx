
import React from 'react';

const Hero: React.FC = () => {
  const seoKeywords = ["KEYWORDS", "RANKING #1", "ORGANIC", "CTR", "INDEXING", "CORE WEB VITALS", "ROI"];

  return (
    <section className="relative px-6 pt-12 pb-24 text-center md:text-left overflow-hidden min-h-[80vh] flex items-center">
      {/* SEO Themed Background Image Layer */}
      <div className="absolute inset-0 pointer-events-none select-none">


        {/* Floating Search Icons & Keywords */}
        <div className="absolute inset-0 z-1 opacity-30">
          <span className="absolute top-10 left-[10%] material-symbols-outlined text-[120px] text-primary/10 animate-pulse">search</span>
          <span className="absolute bottom-20 right-[15%] material-symbols-outlined text-[150px] text-primary/5 animate-bounce" style={{ animationDuration: '6s' }}>trending_up</span>
          <span className="absolute top-1/4 right-[5%] material-symbols-outlined text-[80px] text-primary/10">travel_explore</span>
          <span className="absolute bottom-1/4 left-[5%] material-symbols-outlined text-[100px] text-primary/5">monitoring</span>
          
          <div className="absolute top-1/2 left-0 w-full h-fit flex gap-12 whitespace-nowrap -rotate-6 opacity-[0.03] select-none translate-y-20">
            {Array(10).fill(seoKeywords).flat().map((word, i) => (
              <span key={i} className="text-8xl font-black text-white">{word}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none z-1"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none z-1"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <div className="flex flex-col items-center md:items-start gap-8">
          <div className="flex items-center gap-2 px-4 py-1.5 bg-surface-dark/80 border border-primary/20 rounded-full w-fit backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Agensi SEO #1 di Asia</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-white drop-shadow-2xl">
              Dominasi Pencarian <br className="hidden md:block" />
              dengan <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-emerald-400">GLORY DIGITAL</span>
            </h1>
            <p className="text-gray-200 text-xl leading-relaxed max-w-xl mx-auto md:mx-0 font-medium drop-shadow-lg">
              Strategi SEO berbasis data untuk meningkatkan pendapatan bisnis Anda. Kami tidak menebak, kami merancang pertumbuhan untuk brand masa depan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto">
            <div className="flex items-center gap-4 text-sm font-semibold text-white">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img 
                    key={i}
                    alt={`CEO ${i}`} 
                    className="w-10 h-10 rounded-full border-2 border-background-dark ring-1 ring-white/10"
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
                  />
                ))}
              </div>
              <span className="opacity-90 drop-shadow-md">Dipercaya oleh 500+ CEO</span>
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="relative z-10 bg-surface-dark/60 backdrop-blur-xl border border-white/10 p-8 rounded-2rem shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
              <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold animate-bounce">
                Data Real-time
              </div>
            </div>
            <div className="space-y-6">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">trending_up</span>
                 </div>
                 <div>
                   <div className="text-xs text-text-muted font-bold uppercase tracking-wider">Proyeksi Pertumbuhan</div>
                   <div className="text-3xl font-black">+420%</div>
                 </div>
               </div>
               <div className="h-40 bg-background-dark/50 rounded-2xl border border-white/5 flex items-end justify-around p-4 gap-2">
                  {[40, 70, 45, 90, 65, 100, 85].map((h, i) => (
                    <div key={i} className="w-full bg-primary/20 rounded-t-lg transition-all duration-1000 group-hover:bg-primary/40" style={{ height: `${h}%` }}></div>
                  ))}
               </div>
            </div>
          </div>
          {/* Background shapes */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
