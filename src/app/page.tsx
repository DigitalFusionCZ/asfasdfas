'use client';

import { useState, useEffect } from 'react';

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.title = "Kavárna U Kódu - Nejlepší káva v Praze";

    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1A1A1A" /><stop offset="100%" stop-color="#D4AF37" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let faviconLink = document.querySelector('link[rel="icon"]');
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.setAttribute('rel', 'icon');
      document.head.appendChild(faviconLink);
    }
    (faviconLink as HTMLLinkElement).href = faviconUrl;
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-gray-200 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A]/90 backdrop-blur-sm shadow-lg py-6 px-4 md:px-16 flex justify-between items-center">
        <div className="text-2xl md:text-3xl font-serif text-[#D4AF37] font-bold tracking-wider">
          Testovací Kavárna <span className="text-gray-200/80">"U Kódu"</span>
        </div>
        <nav className="hidden md:flex space-x-12 text-lg">
          <a href="#hero" className="hover:text-[#D4AF37] transition-colors duration-300">Úvod</a>
          <a href="#about" className="hover:text-[#D4AF37] transition-colors duration-300">O nás</a>
          <a href="#contact" className="hover:text-[#D4AF37] transition-colors duration-300">Kontakt</a>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-200 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#1A1A1A]/95 z-40 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex justify-end p-6">
          <button onClick={toggleMenu} className="text-gray-200 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-8 text-2xl mt-8">
          <a href="#hero" onClick={closeMenu} className="hover:text-[#D4AF37] transition-colors duration-300">Úvod</a>
          <a href="#about" onClick={closeMenu} className="hover:text-[#D4AF37] transition-colors duration-300">O nás</a>
          <a href="#contact" onClick={closeMenu} className="hover:text-[#D4AF37] transition-colors duration-300">Kontakt</a>
        </nav>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center text-center p-4 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1511920170033-0c8a5a409f6a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Elegant coffee shop interior" className="absolute inset-0 w-full h-full object-cover brightness-[.4]" />
        <div className="relative z-10 space-y-6">
          <h1 className="text-5xl md:text-7xl font-serif text-[#D4AF37] leading-tight drop-shadow-lg">
            Testovací Kavárna "U Kódu"
          </h1>
          <p className="text-xl md:text-3xl text-gray-300 font-light tracking-wide animate-pulse">
            Nejlepší káva pro vaše bugy.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 px-4 md:px-16 bg-[#1A1A1A] flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="md:w-1/2 lg:w-2/5">
          <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Coffee being poured" className="rounded-lg shadow-xl object-cover h-96 w-full" />
        </div>
        <div className="md:w-1/2 lg:w-2/5 space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-6">O nás</h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Jsme moderní kavárna v srdci Prahy, která nabízí nejen skvělou kávu, ale i klidné prostředí pro práci a setkávání. Naše specialita je "debuggovací doppio".
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 px-4 md:px-16 bg-[#1A1A1A] text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-12">Kontakt</h2>
        <div className="max-w-2xl mx-auto space-y-8 text-lg md:text-xl text-gray-300">
          <p className="flex flex-col items-center justify-center md:flex-row md:justify-center md:space-x-2">
            <svg className="w-6 h-6 text-[#D4AF37] inline-block mb-1 md:mb-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            Email: <span className="text-gray-100 font-medium ml-1">test@kavarna.cz</span>
          </p>
          <p className="flex flex-col items-center justify-center md:flex-row md:justify-center md:space-x-2">
            <svg className="w-6 h-6 text-[#D4AF37] inline-block mb-1 md:mb-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            Telefon: <span className="text-gray-100 font-medium ml-1">+420 777 123 456</span>
          </p>
          <p className="flex flex-col items-center justify-center md:flex-row md:justify-center md:space-x-2">
            <svg className="w-6 h-6 text-[#D4AF37] inline-block mb-1 md:mb-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            Adresa: <span className="text-gray-100 font-medium ml-1">Bugfixová 1, 110 00 Praha 1</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-950 text-center text-gray-500 text-sm">
        Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">Digital Fusion</a>
      </footer>
    </div>
  );
};

export default Page;
