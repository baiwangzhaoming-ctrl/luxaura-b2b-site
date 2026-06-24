export default function EditorialPreview() {
  const articles = [
    {
      title: "The Future of Circadian Lighting",
      excerpt: "How bio-adaptive illumination is reshaping architectural design for wellness.",
      image: "https://images.unsplash.com/photo-1507652313519-d4514f7cd3ad?q=80&w=1200",
      tag: "Deep Dive"
    },
    {
      title: "Minimalism in Light",
      excerpt: "Deconstructing the LuxAura design philosophy: Why less is always more.",
      image: "https://images.unsplash.com/photo-1518005020451-eba396a8e0ad?q=80&w=1200",
      tag: "Philosophy"
    }
  ];

  return (
    <section className="bg-white py-32 px-8 border-y border-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-[10px] uppercase tracking-[0.6em] font-light text-gray-400 mb-6">The Edit</h2>
          <h3 className="text-2xl font-extralight tracking-[0.3em] uppercase text-[#1D1D1F]">
            Stories Behind the Glow
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {articles.map((article, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[16/9] mb-10 overflow-hidden">
                <img src={article.image} alt={article.title} className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute inset-0 bg-[#FAF9F6]/5 group-hover:bg-transparent transition-colors duration-1000" />
              </div>
              <div className="max-w-md">
                <span className="text-[9px] uppercase tracking-widest font-medium text-blue-600 mb-4 block">
                  {article.tag}
                </span>
                <h4 className="text-lg font-light tracking-widest uppercase text-[#1D1D1F] mb-6 group-hover:opacity-60 transition">
                  {article.title}
                </h4>
                <p className="text-[11px] font-light tracking-widest leading-loose text-gray-500 mb-8">
                  {article.excerpt}
                </p>
                <button className="text-[10px] uppercase tracking-[0.3em] font-light border-b border-[#1D1D1F] pb-1">
                  Read Article
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
