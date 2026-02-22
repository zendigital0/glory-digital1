import React, { useState, useEffect } from 'react';

interface NavbarProps {
  isScrolled: boolean;
  onNavigate: (page: 'home' | 'service-web' | 'audit-improvement' | 'design-grafis' | 'redesign-web' | 'case-study' | 'process' | 'terms' | 'about') => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, onNavigate }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleMobileNav = (page: any) => {
    setTimeout(() => {
        onNavigate(page);
        setIsMobileMenuOpen(false);
    }, 150);
  };

  return (
    <>
      {/* 1. MAIN NAVIGATION BAR */}
      <nav className={`fixed top-0 left-0 right-0 z-60 transition-all duration-500 ${
        isScrolled ? 'bg-background-dark/80 backdrop-blur-md border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.2)]' : 'bg-transparent py-5'
      }`}>
        <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-[0.03]'}`}>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size:24px_24px"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer relative z-70" onClick={() => { onNavigate('home'); setIsMobileMenuOpen(false); }}>
            <div className="relative">
              <span className="material-symbols-outlined text-primary text-3xl transition-transform group-hover:rotate-12 duration-500">rocket_launch</span>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-white text-xl font-black tracking-tight uppercase transition-all duration-500">GLORY DIGITAL</h2>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
             <button onClick={() => onNavigate('case-study')} className="text-white/80 hover:text-primary transition-all">Studi Kasus</button>
             <button onClick={() => onNavigate('process')} className="text-white/80 hover:text-primary transition-all">Proses</button>
             <button onClick={() => window.open('https://wa.me/6285177470073', '_blank')} className="px-6 py-2 bg-primary text-background-dark font-black rounded-full hover:scale-105 active:scale-95 transition-all text-sm tracking-wide">Kontak Kami</button>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/5 text-white z-70 relative active:scale-95 transition-transform"
          >
            <span className={`material-symbols-outlined text-2xl absolute transition-all duration-500 ${isMobileMenuOpen ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}>menu</span>
            <span className={`material-symbols-outlined text-2xl absolute transition-all duration-500 text-primary ${isMobileMenuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}`}>close</span>
          </button>
        </div>
      </nav>

      {/* --- 2. BACKDROP  --- */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-51 md:hidden transition-opacity duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* --- 3. COMPACT MENU ISLAND  --- */}
      <div className={`fixed inset-0 z-55 md:hidden flex items-center justify-center p-8 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isMobileMenuOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-90 opacity-0 pointer-events-none'
      }`}>
        <div className="w-full max-w-[00px bg-surface-dark/90 border border-white/10 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] backdrop-blur-2xl p-4 overflow-hidden flex flex-col gap-2">
          
          {/* Main Nav Buttons */}
          {[
            { label: 'Beranda', page: 'home', icon: 'home' },
            { label: 'Studi Kasus', page: 'case-study', icon: 'auto_awesome' },
            { label: 'Proses Kerja', page: 'process', icon: 'layers' },
          ].map((item, idx) => (
            <button 
              key={idx}
              onClick={() => handleMobileNav(item.page as any)}
              className="flex items-center gap-4 w-full p-4 rounded-2xl hover:bg-white/5 active:bg-primary/10 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-active:text-primary transition-colors">
                <span className="material-symbols-outlined text-xl">{item.icon}</span>
              </div>
              <span className="text-sm font-bold tracking-wide text-white/90 group-active:text-primary uppercase">{item.label}</span>
            </button>
          ))}

          <div className="h-1px w-full bg-white/5 my-2"></div>

          {/* Services Quick Grid */}
          <div className="grid grid-cols-4 gap-2 px-1">
            {[
              { id: 'service-web', icon: 'web' },
              { id: 'design-grafis', icon: 'brush' },
              { id: 'redesign-web', icon: 'history_edu' },
              { id: 'audit-improvement', icon: 'troubleshoot' }
            ].map((service) => (
              <button 
                key={service.id}
                onClick={() => handleMobileNav(service.id as any)}
                className="aspect-square rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 active:bg-primary/20 text-white/60 active:text-primary transition-all"
              >
                <span className="material-symbols-outlined text-lg">{service.icon}</span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => window.open('https://wa.me/6285177470073', '_blank')}
            className="mt-4 w-full py-4 bg-primary text-background-dark font-black rounded-2xl text-xs uppercase tracking-widest shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <span>Hubungi Kami</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>

        </div>
      </div>
    </>
  );
};

export default Navbar;