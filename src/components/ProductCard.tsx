import Image from 'next/image';

interface ProductCardProps {
  name: string;
  category: string;
  imageUrl: string;
}

export default function ProductCard({ name, category, imageUrl }: ProductCardProps) {
  return (
    <div className="group relative bg-[#FAF9F6] p-4 transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.03)] cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 mb-6">
        <img
          src={imageUrl}
          alt={name}
          className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
        />
        
        {/* "Light Up" Overlay Effect */}
        <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-100/10 transition-colors duration-1000 mix-blend-overlay" />
        
        {/* Interactive Light Spot */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 bg-yellow-200/40 rounded-full blur-2xl group-hover:w-64 group-hover:h-32 transition-all duration-1000 opacity-0 group-hover:opacity-100" />
      </div>

      {/* Product Info */}
      <div className="text-center">
        <p className="text-[9px] uppercase tracking-[0.3em] font-light text-gray-400 mb-2">
          {category}
        </p>
        <h3 className="text-xs uppercase tracking-[0.2em] font-light text-[#1D1D1F]">
          {name}
        </h3>
      </div>
    </div>
  );
}
