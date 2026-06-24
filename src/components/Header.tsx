import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('Header');

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F6] border-b border-gray-100 px-8 py-6">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <img src="/images/logo.png" alt="Luminsit" className="h-8 w-auto" />
          <span className="text-xl font-light tracking-[0.3em] uppercase text-[#1D1D1F]">
            Luminsit
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex space-x-12 items-center">
          <Link href="/products" className="text-xs uppercase font-light tracking-[0.2em] text-[#1D1D1F] hover:opacity-60 transition">
            Collection
          </Link>
          <Link href="/technology" className="text-xs uppercase font-light tracking-[0.2em] text-[#1D1D1F] hover:opacity-60 transition">
            Innovation
          </Link>
          <Link href="/trade" className="text-xs uppercase font-medium tracking-[0.2em] px-4 py-2 border border-[#1D1D1F] text-[#1D1D1F] hover:bg-[#1D1D1F] hover:text-[#FAF9F6] transition-all duration-300">
            Trade & Projects
          </Link>
        </div>

        {/* Language Switcher Placeholder */}
        <div className="text-[10px] uppercase tracking-widest font-light">
          EN / ZH
        </div>
      </nav>
    </header>
  );
}
