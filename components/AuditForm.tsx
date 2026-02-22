import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

interface AuditFormProps {
  onSuccess?: () => void;
}

const EMAILJS_SERVICE_ID = 'service_y93knst';
const EMAILJS_TEMPLATE_ID = 'template_m004hjy';
const EMAILJS_PUBLIC_KEY = 'zi-nDy7ZOo95nlU8v';

const AuditForm: React.FC<AuditFormProps> = ({ onSuccess }) => {
  const [fullName, setFullName] = useState('');
  const [propertyName, setPropertyName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [url, setUrl] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !fullName || !whatsapp) return;

    setLoading(true);
    setError(null);

    try {
      
      const templateParams = {
        property: String(propertyName),
        name: String(fullName),
        whatsapp: String(whatsapp),
        website: String(url),
        
        audit_score: "N/A",
        analysis: "Permintaan audit manual via form website.",
        recommendations: "Menunggu review tim teknis.",
        to_email: 'sdkurniawan5@gmail.com'
      };

      const emailResponse = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (emailResponse.status === 200) {
        if (onSuccess) onSuccess();
      } else {
        throw new Error("EmailJS response error: " + emailResponse.text);
      }

    } catch (err: any) {
      console.error("Error during email send:", err);
      setError("Gagal mengirim data. Mohon pastikan koneksi internet Anda stabil.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="audit-section" className="relative group">
      <div className="absolute inset-0 bg-primary/5 rounded-[3rem] blur-3xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="relative z-10 bg-surface-dark/60 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex p-3 bg-primary/10 rounded-2xl text-primary">
              <span className="material-symbols-outlined text-3xl">psychology</span>
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-white leading-tight">
                Dapatkan Audit Strategi <br />
                <span className="text-primary">SEO Properti Gratis</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Dapatkan Analisa Audit Website & Konsultasi Strategi Digital Growth <span className="text-primary font-black bg-primary/10 px-2 py-0.5 rounded-lg border border-primary/20">GRATIS</span>. Kami akan membedah potensi bisnis Anda secara mendalam dan memberikan rekomendasi strategi taktis yang siap diimplementasikan.
              </p>
            </div>

            {loading && (
              <div className="p-6 bg-primary/10 border border-primary/20 rounded-3xl animate-pulse space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined animate-spin">sync</span>
                  <span className="font-black uppercase tracking-widest text-xs">DATA ANDA SEDANG DI PROSES KEDALAM DATABASE KAMI</span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="bg-background-dark/40 p-8 rounded-3xl border border-white/5 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-text-muted uppercase tracking-widest ml-1">Nama Lengkap</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-500 text-sm">person</span>
                  <input 
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Nama Anda"
                    className="w-full h-12 bg-surface-darker/50 border border-white/10 rounded-xl pl-10 pr-4 text-white text-sm focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-gray-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-text-muted uppercase tracking-widest ml-1">Nama Property</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-500 text-sm">apartment</span>
                  <input 
                    required
                    value={propertyName}
                    onChange={(e) => setPropertyName(e.target.value)}
                    placeholder="Contoh: Emerald Park"
                    className="w-full h-12 bg-surface-darker/50 border border-white/10 rounded-xl pl-10 pr-4 text-white text-sm focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-gray-600"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-text-muted uppercase tracking-widest ml-1">No. WhatsApp</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-500 text-sm">call</span>
                <input 
                  required
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="0812xxxxxxx"
                  className="w-full h-12 bg-surface-darker/50 border border-white/10 rounded-xl pl-10 pr-4 text-white text-sm focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-gray-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-text-muted uppercase tracking-widest ml-1">Link Website Property</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-500 text-sm">public</span>
                <input 
                  required
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Contoh: www.property-anda.com"
                  className="w-full h-12 bg-surface-darker/50 border border-white/10 rounded-xl pl-10 pr-4 text-white text-sm focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-gray-600"
                />
              </div>
            </div>

            <div className="space-y-4">
              <button 
                disabled={loading}
                type="submit"
                className="w-full h-14 bg-primary text-background-dark font-black text-base rounded-xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 mt-2"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-4 border-background-dark/30 border-t-background-dark rounded-full animate-spin"></div>
                    <span>Sedang Diproses...</span>
                  </div>
                ) : (
                  <>
                    <span>MULAI AUDIT GRATIS</span>
                    <span className="material-symbols-outlined">rocket</span>
                  </>
                )}
              </button>
              
              <div className="flex items-center justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <span className="material-symbols-outlined text-red-500 text-sm">info</span>
                  <p className="text-[10px] text-red-500 font-black uppercase tracking-widest leading-none">
                    Kerja sama ini berlaku dengan komitmen minimal 1 tahun
                  </p>
                </div>
              </div>
            </div>

            {error && <p className="text-red-400 text-[10px] text-center font-bold animate-pulse">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default AuditForm;