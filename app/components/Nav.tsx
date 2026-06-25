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
          className="font-serif text-lg text-[#1C1917] hover:text-[#6B6460] transition-colors"
        >
          KL
        </Link>

        <div className="flex items-center gap-8">
          {isCase ? (
            <Link
              href="/#projects"
              className="text-sm text-[#6B6460] hover:text-[#1C1917] transition-colors flex items-center gap-2"
            >
              <span>←</span> All work
            </Link>
          ) : (
            <>
              <a href="#about" className="text-sm text-[#6B6460] hover:text-[#1C1917] transition-colors">About</a>
              <a href="#projects" className="text-sm text-[#6B6460] hover:text-[#1C1917] transition-colors">Projects</a>
              <a href="#experience" className="text-sm text-[#6B6460] hover:text-[#1C1917] transition-colors">Experience</a>
              <a href="#contact" className="text-sm text-[#6B6460] hover:text-[#1C1917] transition-colors">Contact</a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
