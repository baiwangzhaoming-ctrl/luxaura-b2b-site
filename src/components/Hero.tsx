import { useTranslations } from 'next-intl';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image - Lifestyle Architectural Context */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000" 
          alt="Architectural Lighting Context" 
          className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-[10s] hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#FAF9F6]/20 mix-blend-multiply" />
      </div>
      
      {/* Minimalist Overlay Content */}
      <div className="relative z-10 text-center px-4">
        <span className="text-[10px] uppercase tracking-[0.6em] font-light text-[#1D1D1F] mb-12 block opacity-0 animate-[fadeIn_1.5s_ease-out_forwards]">
          The Lighting Authority
        </span>
        <h1 className="text-4xl md:text-7xl font-extralight tracking-[0.2em] leading-[1.2] text-[#1D1D1F] mb-12 uppercase">
          Architectural <br />
          <span className="italic">Excellence</span>
        </h1>
        <div className="h-[1px] w-32 bg-[#1D1D1F] mx-auto mb-12 opacity-40" />
        <button className="text-[10px] uppercase tracking-[0.5em] font-light border border-[#1D1D1F] px-10 py-4 hover:bg-[#1D1D1F] hover:text-[#FAF9F6] transition-all duration-700">
          Explore the Edit
        </button>
      </div>
    </section>
  );
}
