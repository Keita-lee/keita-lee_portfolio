"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Nav() {
  const pathname = usePathname();
  const isCase = pathname?.startsWith("/work/");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const linkClass = `text-sm transition-colors ${scrolled || menuOpen ? "text-[#6B6460] hover:text-[#1C1917]" : "text-[#A09A95] hover:text-white"}`;

  const navLinks = isCase ? (
    <Link href="/#projects" className={`${linkClass} flex items-center gap-2`} onClick={() => setMenuOpen(false)}>
      <span>←</span> All work
    </Link>
  ) : (
    <>
      <a href="#about"      className={linkClass} onClick={() => setMenuOpen(false)}>About</a>
      <a href="#projects"   className={linkClass} onClick={() => setMenuOpen(false)}>Projects</a>
      <a href="#experience" className={linkClass} onClick={() => setMenuOpen(false)}>Experience</a>
      <a href="#contact"    className={linkClass} onClick={() => setMenuOpen(false)}>Contact</a>
    </>
  );

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? "bg-[#FAFAF8]/95 backdrop-blur border-b border-[#E2DDD7]" : ""
      }`}>
        <div className="max-w-[1100px] mx-auto px-6 md:px-16 h-16 flex items-center justify-between">

          {/* Logo — always inline */}
          <Link href="/" className="font-serif text-lg hover:opacity-80 transition-opacity whitespace-nowrap flex-shrink-0">
            <span className={`transition-colors ${scrolled || menuOpen ? "text-[#1C1917]" : "text-white"}`}>Keita</span>{" "}
            <span className="text-[#01A896]">Lee</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks}
          </div>

          {/* Mobile burger button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] shrink-0"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className={`block w-5 h-[1.5px] transition-all duration-300 origin-center ${
              menuOpen
                ? "rotate-45 translate-y-[6.5px] bg-[#1C1917]"
                : scrolled ? "bg-[#1C1917]" : "bg-white"
            }`} />
            <span className={`block w-5 h-[1.5px] transition-all duration-300 ${
              menuOpen ? "opacity-0 bg-[#1C1917]" : scrolled ? "bg-[#1C1917]" : "bg-white"
            }`} />
            <span className={`block w-5 h-[1.5px] transition-all duration-300 origin-center ${
              menuOpen
                ? "-rotate-45 -translate-y-[6.5px] bg-[#1C1917]"
                : scrolled ? "bg-[#1C1917]" : "bg-white"
            }`} />
          </button>
        </div>

        {/* Mobile drawer */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="bg-[#FAFAF8] border-t border-[#E2DDD7] px-6 py-6 flex flex-col gap-5">
            {isCase ? (
              <Link href="/#projects" className="text-sm text-[#6B6460] hover:text-[#1C1917] flex items-center gap-2" onClick={() => setMenuOpen(false)}>
                <span>←</span> All work
              </Link>
            ) : (
              <>
                <a href="#about"      className="text-sm text-[#6B6460] hover:text-[#1C1917]" onClick={() => setMenuOpen(false)}>About</a>
                <a href="#projects"   className="text-sm text-[#6B6460] hover:text-[#1C1917]" onClick={() => setMenuOpen(false)}>Projects</a>
                <a href="#experience" className="text-sm text-[#6B6460] hover:text-[#1C1917]" onClick={() => setMenuOpen(false)}>Experience</a>
                <a href="#contact"    className="text-sm text-[#6B6460] hover:text-[#1C1917]" onClick={() => setMenuOpen(false)}>Contact</a>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
