import Header from '@/components/Header';

export default function ProjectsPage() {
  const projects = [
    {
      title: "Al Maha Hotel",
      location: "Dubai, UAE",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
      description: "Bio-adaptive lighting integration for luxury desert suites, enhancing wellness and architectural elegance."
    },
    {
      title: "The Shard Office",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200",
      description: "Ergonomic workspace lighting solution for high-altitude corporate environments."
    },
    {
      title: "The Club",
      location: "New York, USA",
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1200",
      description: "Industrial-chic lighting design for a premium private members club in Manhattan."
    }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-8 py-24">
        <h1 className="text-3xl font-extralight tracking-[0.3em] uppercase text-[#1D1D1F] mb-24 text-center">
          LuxAura Global Projects
        </h1>
        
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}>
              <div className="w-full md:w-2/3 aspect-video relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
              </div>
              <div className="w-full md:w-1/3">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4">{project.location}</p>
                <h2 className="text-xl font-extralight tracking-widest uppercase text-[#1D1D1F] mb-6">{project.title}</h2>
                <p className="text-sm font-light tracking-widest leading-loose text-gray-600 mb-8">{project.description}</p>
                <button className="text-[10px] uppercase tracking-widest border-b border-[#1D1D1F] pb-1">View Case Study</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
