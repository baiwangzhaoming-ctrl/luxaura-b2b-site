import { useTranslations } from 'next-intl';
import Header from '@/components/Header';

export default function InquiryPage() {
  const t = useTranslations('Inquiry');

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      <Header />
      <main className="max-w-3xl mx-auto px-8 py-24">
        <h1 className="text-3xl font-extralight tracking-[0.3em] uppercase text-[#1D1D1F] mb-4 text-center">
          Request a Quote
        </h1>
        <p className="text-sm font-light tracking-widest text-center text-gray-500 mb-16 uppercase">
          Partner with us for your next architectural project
        </p>

        <form className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Name */}
            <div className="relative border-b border-gray-200 py-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1">Full Name</label>
              <input type="text" required className="w-full bg-transparent outline-none text-sm font-light tracking-widest" placeholder="John Doe" />
            </div>
            {/* Email */}
            <div className="relative border-b border-gray-200 py-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1">Business Email</label>
              <input type="email" required className="w-full bg-transparent outline-none text-sm font-light tracking-widest" placeholder="john@company.com" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Company */}
            <div className="relative border-b border-gray-200 py-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1">Company Name</label>
              <input type="text" required className="w-full bg-transparent outline-none text-sm font-light tracking-widest" placeholder="Architects Studio" />
            </div>
            {/* Product Model */}
            <div className="relative border-b border-gray-200 py-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1">Product Model / Interest</label>
              <select className="w-full bg-transparent outline-none text-sm font-light tracking-widest">
                <option>Aura Smart Linear</option>
                <option>Eclipse Floor V2</option>
                <option>Horizon Circadian</option>
                <option>Custom Project</option>
              </select>
            </div>
          </div>

          {/* Budget Range */}
          <div className="relative border-b border-gray-200 py-2">
            <label className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1">Estimated Budget (USD)</label>
            <select className="w-full bg-transparent outline-none text-sm font-light tracking-widest">
              <option>Under $5,000</option>
              <option>$5,000 - $20,000</option>
              <option>$20,000 - $50,000</option>
              <option>$50,000+</option>
            </select>
          </div>

          {/* Project Description */}
          <div className="relative border-b border-gray-200 py-2">
            <label className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1">Project Description</label>
            <textarea rows={4} required className="w-full bg-transparent outline-none text-sm font-light tracking-widest resize-none" placeholder="Tell us about your project requirements..." />
          </div>

          <div className="pt-8 text-center">
            <button type="submit" className="px-16 py-4 bg-[#1D1D1F] text-[#FAF9F6] text-[10px] uppercase tracking-[0.4em] hover:opacity-80 transition-all duration-500">
              Submit Inquiry
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
