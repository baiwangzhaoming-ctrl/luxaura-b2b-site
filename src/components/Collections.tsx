import Link from 'next/link';

export default function Collections() {
  const categories = [
    {
      name: "Professional Office",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800",
      description: "Bio-adaptive systems for peak productivity."
    },
    {
      name: "Boutique Hotel",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
      description: "Atmospheric luxury for guest experiences."
    },
    {
      name: "Private Residence",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800",
      description: "Sophisticated warmth for modern living."
    }
  ];

  return (
    <section className="bg-[#FAF9F6] py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-24">
          <h2 className="text-xs uppercase tracking-[0.5em] font-light text-[#1D1D1F] mb-4">
            Categorized Collections
          </h2>
          <div className="h-[1px] w-12 bg-gray-200" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-gray-100 border border-gray-100">
          {categories.map((cat, i) => (
            <div key={i} className="group relative bg-[#FAF9F6] p-12 overflow-hidden transition-all duration-700">
              <div className="relative aspect-square mb-12 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                <img src={cat.image} alt={cat.name} className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <h3 className="text-xs uppercase tracking-[0.3em] font-light text-[#1D1D1F] mb-4">
                {cat.name}
              </h3>
              <p className="text-[10px] tracking-widest font-light text-gray-400 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                {cat.description}
              </p>
              <Link href="/collections" className="text-[9px] uppercase tracking-widest border-b border-[#1D1D1F] pb-1 hover:opacity-50 transition">
                Shop Category
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
