"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "#home",       label: "Home" },
  { href: "#about",      label: "About" },
  { href: "#projects",   label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact",    label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const isCase = pathname?.startsWith("/work/");
  const [active, setActive] = useState("Home");

  useEffect(() => {
    if (isCase) return;
    const ids = links.map((l) => l.href.slice(1));
    const onScroll = () => {
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(links[i].label);
          return;
        }
      }
      setActive("Home");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isCase]);

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(238,240,236,0.88)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(28,43,42,0.12)",
    }}>
      <div style={{
        maxWidth: "var(--max, 860px)",
        margin: "0 auto",
        padding: "16px clamp(20px,5vw,48px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
      }}>
        {/* Wordmark */}
        <Link href="/" style={{
          fontFamily: "var(--font-dm-serif), Georgia, serif",
          fontSize: "1.15rem",
          color: "#1C2B2A",
          letterSpacing: "-0.01em",
          whiteSpace: "nowrap",
          textDecoration: "none",
        }}>
          Keita Lee Willmott
        </Link>

        {/* Nav links */}
        <nav style={{ display: "flex", gap: 28, flexWrap: "wrap", listStyle: "none" }}>
          {isCase ? (
            <Link href="/#projects" style={{
              fontSize: "0.82rem", fontWeight: 500,
              letterSpacing: "0.08em", textTransform: "uppercase",
              color: "#4A5E5C", textDecoration: "none",
            }}>
              ← All work
            </Link>
          ) : (
            links.map((l) => (
              <a key={l.href} href={l.href}
                onClick={() => setActive(l.label)}
                style={{
                  fontSize: "0.82rem", fontWeight: 500,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  color: active === l.label ? "#01A896" : "#4A5E5C",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}>
                {l.label}
              </a>
            ))
          )}
        </nav>
      </div>
    </header>
  );
}
