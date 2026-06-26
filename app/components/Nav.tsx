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

  const close = () => setMenuOpen(false);

  return (
    <>
      {/* Nav bar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled || menuOpen
            ? "rgba(250,250,248,0.95)"
            : "rgba(28,25,23,0.5)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: scrolled || menuOpen ? "1px solid #E2DDD7" : "none",
        }}
      >
        <div className="max-w-[1100px] mx-auto px-6 md:px-16 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-lg hover:opacity-80 transition-opacity whitespace-nowrap flex-shrink-0"
          >
            <span style={{ color: scrolled || menuOpen ? "#1C1917" : "#ffffff" }}>
              Keita
            </span>{" "}
            <span style={{ color: "#01A896" }}>Lee</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {isCase ? (
              <Link
                href="/#projects"
                className="text-sm flex items-center gap-2 hover:opacity-80 transition-opacity"
                style={{ color: scrolled ? "#6B6460" : "#A09A95" }}
              >
                ← All work
              </Link>
            ) : (
              ["About", "Projects", "Experience", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm hover:opacity-80 transition-opacity"
                  style={{ color: scrolled ? "#6B6460" : "#A09A95" }}
                >
                  {item}
                </a>
              ))
            )}
          </div>

          {/* Burger — always white bars, always visible */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] shrink-0"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className="block w-[22px] rounded-full transition-all duration-300 origin-center"
              style={{
                height: 2,
                background: scrolled || menuOpen ? "#1C1917" : "#ffffff",
                transform: menuOpen ? "rotate(45deg) translate(0px, 8px)" : "none",
              }}
            />
            <span
              className="block w-[22px] rounded-full transition-all duration-300"
              style={{
                height: 2,
                background: scrolled || menuOpen ? "#1C1917" : "#ffffff",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-[22px] rounded-full transition-all duration-300 origin-center"
              style={{
                height: 2,
                background: scrolled || menuOpen ? "#1C1917" : "#ffffff",
                transform: menuOpen ? "rotate(-45deg) translate(0px, -8px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer — outside nav so it doesn't affect nav height */}
      <div
        className="fixed left-0 right-0 z-40 lg:hidden overflow-hidden transition-all duration-300"
        style={{
          top: "64px",
          maxHeight: menuOpen ? "280px" : "0px",
          opacity: menuOpen ? 1 : 0,
          background: "#FAFAF8",
          borderBottom: menuOpen ? "1px solid #E2DDD7" : "none",
        }}
      >
        <div className="px-6 py-4 flex flex-col">
          {isCase ? (
            <Link
              href="/#projects"
              className="text-sm text-[#6B6460] flex items-center gap-2 py-3"
              onClick={close}
            >
              ← All work
            </Link>
          ) : (
            ["About", "Projects", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-[#6B6460] py-3 border-b border-[#F0EDE8] last:border-0 hover:text-[#1C1917] transition-colors"
                onClick={close}
              >
                {item}
              </a>
            ))
          )}
        </div>
      </div>
    </>
  );
}
