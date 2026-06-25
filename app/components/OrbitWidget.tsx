"use client";

import { useState } from "react";
import Image from "next/image";

type Theme = "personal" | "tech";

const personalIcons: { label: string; emoji: string }[] = [
  { label: "Surf",    emoji: "🏄" },
  { label: "Coffee",  emoji: "☕" },
  { label: "Travel",  emoji: "✈️" },
  { label: "Music",   emoji: "🎵" },
  { label: "Design",  emoji: "🎨" },
  { label: "Code",    emoji: "💻" },
  { label: "Church",  emoji: "✝️" },
  { label: "JBay",    emoji: "🌊" },
];

const techLabels = ["Flutter","Firebase","Figma","Python","Django","GitHub","Vercel","CSS"];

export default function OrbitWidget() {
  const [theme, setTheme] = useState<Theme>("personal");
  const icons = theme === "personal" ? personalIcons : techLabels;
  const count = icons.length;
  const R = 150;

  return (
    <div style={{ position: "relative", width: 340, height: 360, display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* orbit ring */}
      <div style={{
        position: "absolute", width: 300, height: 300, borderRadius: "50%",
        border: "1px solid rgba(28,43,42,0.12)",
      }} />

      {/* orbiting icons */}
      {icons.map((icon, i) => {
        const angle = (i / count) * 2 * Math.PI - Math.PI / 2;
        const x = Math.cos(angle) * R;
        const y = Math.sin(angle) * R;
        const label = typeof icon === "string" ? icon : icon.label;
        const content = typeof icon === "string"
          ? <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "#01A896" }}>{icon}</span>
          : <span style={{ fontSize: "1.15rem" }}>{icon.emoji}</span>;
        return (
          <div key={label} title={label} style={{
            position: "absolute",
            width: 40, height: 40,
            left: "50%", top: "50%",
            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
            borderRadius: "50%",
            background: "#F8F9F7",
            border: "1.5px solid rgba(28,43,42,0.12)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 1px 4px rgba(28,43,42,0.07)",
            transition: "all 0.3s ease",
          }}>
            {content}
          </div>
        );
      })}

      {/* centre photo */}
      <div
        onClick={() => setTheme(t => t === "personal" ? "tech" : "personal")}
        style={{
          position: "relative", width: 168, height: 168,
          borderRadius: "50%", overflow: "hidden",
          border: "3px solid #E6E9E4",
          boxShadow: "0 4px 24px rgba(28,43,42,0.12)",
          cursor: "pointer", zIndex: 1,
        }}
      >
        <Image
          src={theme === "personal" ? "/images/profile.png" : "/images/profile_tech_image.png"}
          alt="Keita Lee Willmott"
          fill
          className="object-cover"
        />
      </div>

      {/* caption */}
      <div style={{
        position: "absolute", bottom: 0, width: "100%",
        textAlign: "center", fontSize: "0.72rem", color: "#7A918E",
      }}>
        Click photo to switch to{" "}
        <span style={{ color: "#01A896", fontWeight: 600 }}>
          {theme === "personal" ? "Tech" : "Personal"}
        </span>{" "}
        theme
      </div>
    </div>
  );
}
