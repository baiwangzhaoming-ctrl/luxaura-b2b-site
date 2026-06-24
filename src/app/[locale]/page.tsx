import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import Collections from '@/components/Collections';
import EditorialPreview from '@/components/EditorialPreview';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Index() {
  const t = useTranslations('Index');

  const products = [
    {
      id: 1,
      name: "SlimLinear",
      category: "Architectural Precision",
      image: "/images/slimlinear.png"
    },
    {
      id: 2,
      name: "HaloFlow",
      category: "Ambient Diffusion",
      image: "/images/haloflow.png"
    },
    {
      id: 3,
      name: "AngleBeam",
      category: "Task Focused",
      image: "/images/anglebeam.png"
    },
    {
      id: 4,
      name: "CyberFrame",
      category: "Industrial Smart",
      image: "/images/cyberframe.png"
    }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-light selection:bg-black selection:text-white">
      <Header />
      
      <main>
        {/* Section 1: Immersive Hero */}
        <Hero />

        {/* Section 2: Application Collections */}
        <Collections />

        {/* Section 3: High-End Product Grid */}
        <section className="max-w-7xl mx-auto px-8 py-32">
          <div className="flex justify-between items-end mb-24 border-b border-gray-100 pb-8">
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-medium text-[#1D1D1F]">
              The Luminsit Collection
            </h2>
            <Link href="/en/projects" className="text-[10px] uppercase tracking-[0.2em] font-light text-gray-400 hover:text-[#1D1D1F] transition">
              Portfolio
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard 
                key={product.id}
                name={product.name}
                category={product.category}
                imageUrl={product.image}
              />
            ))}
          </div>
        </section>

        {/* Section 4: Editorial Stories */}
        <EditorialPreview />

        {/* Section 5: B2B Conversion */}
        <section className="bg-[#1D1D1F] text-[#FAF9F6] py-48 px-8 text-center">
          <span className="text-[9px] uppercase tracking-[0.8em] font-light opacity-40 mb-12 block">
            Strategic Partnerships
          </span>
          <h2 className="text-3xl font-extralight tracking-[0.3em] uppercase mb-12">
            Trade & Customization
          </h2>
          <p className="max-w-2xl mx-auto text-xs font-light tracking-[0.2em] leading-loose opacity-70 mb-16">
            We partner with architects and specifiers globally to deliver unique lighting experiences for large-scale developments.
          </p>
          <Link 
            href="/en/inquiry"
            className="inline-block px-16 py-5 border border-white/20 text-[10px] uppercase tracking-[0.5em] hover:bg-[#FAF9F6] hover:text-[#1D1D1F] transition-all duration-700"
          >
            Request Project Brief
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
