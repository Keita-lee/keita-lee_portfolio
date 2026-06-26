"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Nav() {
  const pathname = usePathname();
  const isCase = pathname?.startsWith("/work/");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#FAFAF8]/90 backdrop-blur border-b border-[#E2DDD7]" : ""
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-8 md:px-16 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-lg hover:opacity-80 transition-opacity"
        >
          <span className={`transition-colors ${scrolled ? "text-[#1C1917]" : "text-white"}`}>Keita</span>{" "}
          <span className="text-[#01A896]">Lee</span>
        </Link>

        <div className="flex items-center gap-8">
          {isCase ? (
            <Link
              href="/#projects"
              className={`text-sm transition-colors flex items-center gap-2 ${scrolled ? "text-[#6B6460] hover:text-[#1C1917]" : "text-[#A09A95] hover:text-white"}`}
            >
              <span>←</span> All work
            </Link>
          ) : (
            <>
              <a href="#about" className={`text-sm transition-colors ${scrolled ? "text-[#6B6460] hover:text-[#1C1917]" : "text-[#A09A95] hover:text-white"}`}>About</a>
              <a href="#projects" className={`text-sm transition-colors ${scrolled ? "text-[#6B6460] hover:text-[#1C1917]" : "text-[#A09A95] hover:text-white"}`}>Projects</a>
              <a href="#experience" className={`text-sm transition-colors ${scrolled ? "text-[#6B6460] hover:text-[#1C1917]" : "text-[#A09A95] hover:text-white"}`}>Experience</a>
              <a href="#contact" className={`text-sm transition-colors ${scrolled ? "text-[#6B6460] hover:text-[#1C1917]" : "text-[#A09A95] hover:text-white"}`}>Contact</a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
