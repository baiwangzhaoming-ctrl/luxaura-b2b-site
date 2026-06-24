export default function Footer() {
  return (
    <footer className="bg-[#FAF9F6] pt-32 pb-12 px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <h2 className="text-lg font-light tracking-[0.4em] uppercase text-[#1D1D1F] mb-8">
              LuxAura
            </h2>
            <p className="text-[11px] font-light tracking-[0.2em] leading-loose text-gray-500 max-w-sm mb-12">
              Architectural grade smart lighting solutions for discerning environments. Engineering light for the human experience.
            </p>
            {/* Newsletter */}
            <div className="max-w-md">
              <p className="text-[9px] uppercase tracking-[0.3em] font-medium text-[#1D1D1F] mb-4">Newsletter</p>
              <div className="flex border-b border-gray-300 py-2">
                <input type="email" placeholder="Email Address" className="bg-transparent text-[11px] font-light tracking-widest w-full outline-none" />
                <button className="text-[10px] uppercase tracking-[0.3em] font-light text-[#1D1D1F]">Join</button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#1D1D1F] mb-8">Shop</h3>
            <ul className="space-y-4">
              {['Collection', 'Innovation', 'Trade', 'Case Studies'].map(item => (
                <li key={item}>
                  <a href="#" className="text-[10px] uppercase tracking-widest font-light text-gray-500 hover:text-[#1D1D1F] transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#1D1D1F] mb-8">Follow</h3>
            <ul className="space-y-4">
              {['Instagram', 'LinkedIn', 'Pinterest', 'Vimeo'].map(item => (
                <li key={item}>
                  <a href="#" className="text-[10px] uppercase tracking-widest font-light text-gray-500 hover:text-[#1D1D1F] transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] uppercase tracking-[0.5em] font-light text-gray-400">
            © 2024 LuxAura Engineering.
          </p>
          <div className="flex gap-8">
            {['Privacy', 'Terms', 'Certifications'].map(item => (
              <a key={item} href="#" className="text-[9px] uppercase tracking-[0.3em] font-light text-gray-400 hover:text-[#1D1D1F] transition">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
