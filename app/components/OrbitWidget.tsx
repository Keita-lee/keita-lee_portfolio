"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const tools = [
  { label: "Figma",      bg: "#fff", src: "/images/figma.svg"      },
  { label: "Python",     bg: "#fff", src: "/images/python.svg"     },
  { label: "Flutter",    bg: "#fff", src: "/images/flutter.svg"    },
  { label: "Django",     bg: "#fff", src: "/images/django.svg"     },
  { label: "GitHub",     bg: "#fff", src: "/images/github.svg"     },
  { label: "Twilio",     bg: "#fff", src: "/images/twilio.svg"     },
  { label: "Firebase",   bg: "#fff", src: "/images/firebase.svg"   },
  { label: "Vercel",     bg: "#fff", src: "/images/vercel.svg"     },
  { label: "Bitbucket",  bg: "#fff", src: "/images/bitbucket.svg"  },
  { label: "PostgreSQL", bg: "#fff", src: "/images/postgresql.svg" },
  { label: "Dart",       bg: "#fff", src: "/images/dart.svg"       },
  { label: "Framer",     bg: "#fff", src: "/images/framer.svg"     },
];

const ORBIT_R = 160;
const BADGE_R = 28;
const SIZE = ORBIT_R * 2 + BADGE_R * 2 + 8;
const CENTER = SIZE / 2;

// Pre-compute positions as exact integers to guarantee SSR/client match
const positions = tools.map((_, i) => {
  const angle = (i / tools.length) * 2 * Math.PI - Math.PI / 2;
  return {
    left: Math.round(CENTER + ORBIT_R * Math.cos(angle) - BADGE_R),
    top:  Math.round(CENTER + ORBIT_R * Math.sin(angle) - BADGE_R),
  };
});

export default function OrbitWidget() {
  const [flipped, setFlipped] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Only show orbit badges after hydration to avoid SSR/client mismatch
  useEffect(() => { setMounted(true); }, []);

  return (
    <div
      className="relative flex items-center justify-center select-none"
      style={{ width: SIZE, height: SIZE }}
    >
      {/* Orbit ring */}
      <svg
        className="absolute inset-0 pointer-events-none"
        width="100%"
        height="100%"
        viewBox={`0 0 ${SIZE} ${SIZE}`}
      >
        <circle
          cx={CENTER}
          cy={CENTER}
          r={ORBIT_R}
          fill="none"
          stroke="#E2DDD7"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
      </svg>

      {/* Spinning badges — only rendered client-side to prevent hydration mismatch */}
      {mounted && (
        <div
          className="absolute inset-0"
          style={{ animation: "orbit-spin 28s linear infinite" }}
        >
          {tools.map((t, i) => (
            <div
              key={t.label}
              title={t.label}
              className="absolute flex items-center justify-center rounded-full shadow-md border border-[#E2DDD7]"
              style={{
                width: BADGE_R * 2,
                height: BADGE_R * 2,
                left: positions[i].left,
                top: positions[i].top,
                background: t.bg,
                animation: "orbit-counter 28s linear infinite",
              }}
            >
              <Image
                src={t.src}
                alt={t.label}
                width={BADGE_R}
                height={BADGE_R}
                className="object-contain"
                style={{ width: BADGE_R, height: BADGE_R, padding: 6 }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Profile photo — flip on hover */}
      <div
        className="relative z-10 cursor-pointer"
        style={{ width: ORBIT_R * 1.15, height: ORBIT_R * 1.15, perspective: 800 }}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        <div
          className="relative w-full h-full transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 rounded-full overflow-hidden border-[3px] border-[#01A896]/30 shadow-xl"
            style={{ backfaceVisibility: "hidden" }}
          >
            <Image
              src="/images/profile.png"
              alt="Keita Lee"
              fill
              sizes="(max-width: 768px) 180px, 184px"
              className="object-cover object-top"
              priority
            />
          </div>
          {/* Back */}
          <div
            className="absolute inset-0 rounded-full overflow-hidden border-[3px] border-[#01A896]/60 shadow-xl"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <Image
              src="/images/profile_tech_image.png"
              alt="Keita Lee — tech"
              fill
              sizes="(max-width: 768px) 180px, 184px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
