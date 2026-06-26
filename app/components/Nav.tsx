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

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const light = scrolled || menuOpen;
  const close = () => setMenuOpen(false);

  // Burger bar colour depends on nav state
  const barBg = light ? "#1C1917" : "#ffffff";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={light ? {
        background: "rgba(250,250,248,0.95)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid #E2DDD7",
      } : undefined}
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-16 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-lg hover:opacity-80 transition-opacity whitespace-nowrap flex-shrink-0"
        >
          <span
            className="transition-colors"
            style={{ color: light ? "#1C1917" : "#ffffff" }}
          >Keita</span>{" "}
          <span style={{ color: "#01A896" }}>Lee</span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {isCase ? (
            <Link
              href="/#projects"
              className="text-sm flex items-center gap-2 transition-colors"
              style={{ color: light ? "#6B6460" : "#A09A95" }}
            >
              <span>←</span> All work
            </Link>
          ) : (
            <>
              {["About", "Projects", "Experience", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm transition-colors hover:opacity-80"
                  style={{ color: light ? "#6B6460" : "#A09A95" }}
                >
                  {item}
                </a>
              ))}
            </>
          )}
        </div>

        {/* Burger button — always visible on mobile via inline background pill */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] shrink-0 rounded-lg"
          style={!light ? { background: "rgba(0,0,0,0.4)" } : undefined}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className="block w-5 rounded-full transition-all duration-300 origin-center"
            style={{
              height: 2,
              background: barBg,
              transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
            }}
          />
          <span
            className="block w-5 rounded-full transition-all duration-300"
            style={{
              height: 2,
              background: barBg,
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 rounded-full transition-all duration-300 origin-center"
            style={{
              height: 2,
              background: barBg,
              transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile slide-down drawer */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "280px" : "0px",
          opacity: menuOpen ? 1 : 0,
        }}
      >
        <div
          className="px-6 py-6 flex flex-col gap-1"
          style={{ background: "#FAFAF8", borderTop: "1px solid #E2DDD7" }}
        >
          {isCase ? (
            <Link
              href="/#projects"
              className="text-sm text-[#6B6460] flex items-center gap-2 py-3"
              onClick={close}
            >
              <span>←</span> All work
            </Link>
          ) : (
            <>
              {["About", "Projects", "Experience", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-[#6B6460] py-3 border-b border-[#F0EDE8] last:border-0 hover:text-[#1C1917] transition-colors"
                  onClick={close}
                >
                  {item}
                </a>
              ))}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
