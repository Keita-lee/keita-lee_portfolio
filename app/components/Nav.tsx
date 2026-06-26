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
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [menuOpen]);

  const light = scrolled || menuOpen;
  const close = () => setMenuOpen(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={light ? {
          background: "rgba(250,250,248,0.95)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid #E2DDD7",
        } : {}}
      >
        <div className="px-5 lg:px-16 h-16 flex items-center justify-between w-full">

          {/* Logo */}
          <Link href="/" className="font-serif text-lg whitespace-nowrap flex-shrink-0">
            <span style={{ color: light ? "#1C1917" : "#ffffff" }}>Keita</span>{" "}
            <span style={{ color: "#01A896" }}>Lee</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {isCase ? (
              <Link href="/#projects" className="text-sm" style={{ color: light ? "#6B6460" : "#A09A95" }}>
                ← All work
              </Link>
            ) : (
              ["About", "Projects", "Experience", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm" style={{ color: light ? "#6B6460" : "#A09A95" }}>
                  {item}
                </a>
              ))
            )}
          </div>

          {/* Burger button */}
          <button
            className="lg:hidden flex-shrink-0"
            style={{ width: 44, height: 44, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, background: "transparent", border: "none", cursor: "pointer", padding: 0 }}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  borderRadius: 9999,
                  background: light ? "#1C1917" : "#ffffff",
                  transition: "transform 0.3s, opacity 0.3s",
                  transform: menuOpen
                    ? i === 0 ? "rotate(45deg) translate(0, 8px)"
                    : i === 2 ? "rotate(-45deg) translate(0, -8px)"
                    : "none"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Drawer */}
      <div
        className="fixed left-0 right-0 z-40 lg:hidden"
        style={{
          top: 64,
          maxHeight: menuOpen ? 300 : 0,
          overflow: "hidden",
          transition: "max-height 0.3s ease, opacity 0.3s ease",
          opacity: menuOpen ? 1 : 0,
          background: "#FAFAF8",
          borderBottom: menuOpen ? "1px solid #E2DDD7" : "none",
        }}
      >
        <div style={{ padding: "8px 24px 16px" }}>
          {isCase ? (
            <Link href="/#projects" className="text-sm text-[#6B6460] flex items-center gap-2 py-3" onClick={close}>
              ← All work
            </Link>
          ) : (
            ["About", "Projects", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={close}
                style={{
                  display: "block",
                  padding: "14px 0",
                  fontSize: 15,
                  color: "#6B6460",
                  borderBottom: "1px solid #F0EDE8",
                  textDecoration: "none",
                }}
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
