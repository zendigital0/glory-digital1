import React from 'react';

interface ServicesProps {
  onNavigate?: (page: 'home' | 'service-web' | 'audit-improvement' | 'design-grafis' | 'redesign-web' | 'all-services') => void;
}

const services = [
  {
    id: 'service-web',
    title: 'Pembuatan Website',
    description: 'Kami membangun website berperforma tinggi, SEO-friendly, and berorientasi konversi.',
    icon: 'web'
  },
  {
    id: 'design-grafis',
    title: 'Design Grafis',
    description: 'Solusi branding visual mulai dari logo hingga identitas media sosial yang memukau.',
    icon: 'brush'
  },
  {
    id: 'redesign-web',
    title: 'Design Ulang Website',
    description: 'Transformasikan website lama Anda menjadi modern, cepat, and lebih menjual.',
    icon: 'history_edu'
  },
  {
    id: 'audit-improvement',
    title: 'SEO Audit',
    description: 'Analisis mendalam kesehatan website Anda untuk dominasi hasil pencarian Google.',
    icon: 'troubleshoot'
  }
];

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center w-full">
      {}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {services.map((service) => (
          <div 
            key={service.id} 
            onClick={() => {
              if (onNavigate) {
                onNavigate(service.id as any);
              }
            }}
            className="group flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-surface-dark border border-white/5 hover:border-primary/40 hover:bg-surface-dark/90 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-primary/10"
          >
            {}
            <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-background-dark text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-500 transform group-hover:rotate-12">
              <span className="material-symbols-outlined text-3xl">{service.icon}</span>
            </div>
            
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-extrabold text-white group-hover:text-primary transition-colors tracking-tight">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-250px">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {}
      <div className="mt-12">
        <button 
          onClick={() => onNavigate && onNavigate('all-services')}
          className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-primary font-black text-xs hover:bg-primary hover:text-background-dark transition-all duration-300 uppercase tracking-[0.3em]"
        >
          <span>Eksplorasi Semua Layanan</span>
          <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
        </button>
      </div>
    </div>
  );
};

export default Services;