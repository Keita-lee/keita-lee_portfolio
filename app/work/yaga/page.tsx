import Nav from "../../components/Nav";
import CategoryDemo from "./CategoryDemo";

export const metadata = {
  title: "Yaga Listing & Drop Flow — Keita Lee",
  description:
    "Optimizing the Yaga listing and drop flow: a UX case study on reducing seller drop-offs while maintaining database integrity.",
};

export default function YagaCaseStudy() {
  return (
    <>
      <Nav />

      {/* ── SCROLL PROGRESS ──────────────────────────── */}
      <ScrollProgress />

      {/* ── 00 HERO ──────────────────────────────────── */}
      <section className="bg-[#1C1917] min-h-svh flex flex-col justify-end px-8 md:px-16 py-[72px] relative overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ opacity: 0.035 }}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="pg" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0L0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pg)" />
        </svg>

        <div className="max-w-[1100px] relative animate-fade-up">
          <div className="flex gap-2 mb-12 flex-wrap">
            {["UX Design", "Product Thinking", "Mobile · 2024"].map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#5A5652] border border-[#2E2B28] px-3.5 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-serif text-[clamp(40px,6.5vw,88px)] leading-[1.0] font-normal text-[#F0EDE8] mb-7 text-balance">
            Optimizing the<br />Yaga Listing<br />
            <em className="text-[#78716C]">&amp; Drop Flow</em>
          </h1>

          <p className="text-lg leading-relaxed text-[#6B6460] max-w-[520px] mb-14 font-light">
            Streamlining the seller upload experience to reduce drop-offs while
            maintaining database integrity.
          </p>

          <div className="flex items-center gap-8 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#3A3733]" />
              <span className="text-[13px] text-[#5A5652] tracking-[0.04em]">
                Scroll to explore
              </span>
            </div>
            <span className="text-[#3A3733]">·</span>
            <span className="text-[13px] text-[#5A5652]">Case Study 01</span>
          </div>
        </div>
      </section>

      {/* ── 01 PROBLEM FRAMING ───────────────────────── */}
      <section className="px-8 md:px-16 py-24 bg-[#FAFAF8]">
        <div className="max-w-[1100px] mx-auto">
          <SectionLabel num="01" label="Problem Framing" />

          <div className="flex gap-20 items-start flex-wrap">
            {/* Left */}
            <div className="flex-1 min-w-[300px]">
              <h2 className="font-serif text-[clamp(28px,4vw,50px)] leading-tight font-normal mb-7 text-balance">
                A high-friction form<br />on a small mobile screen
              </h2>
              <p className="text-[17px] leading-relaxed text-[#6B6460] mb-12 font-light">
                In a secondhand marketplace, the listing form is the primary
                revenue touchpoint. Sellers who abandon mid-form mean lost
                inventory and lower GMV. Three friction points drove the most
                drop-offs.
              </p>

              <div className="flex flex-col gap-px bg-[#E2DDD7] rounded-xl overflow-hidden">
                {[
                  {
                    accent: "#1C1917",
                    label: "Problem 01 — Core UX Flaw",
                    title: "Wrong size options for category",
                    body: 'Selecting "Shoes" but seeing clothing sizes (XS / S / M / L) forces sellers to guess — or abandon.',
                  },
                  {
                    accent: "#78716C",
                    label: "Problem 02 — Silent Failure",
                    title: "Uncompressed image upload failures",
                    body: "A 15MB photo over 3G fails silently — no feedback, no retry path, no indication the listing is incomplete.",
                  },
                  {
                    accent: "#C8C4BC",
                    label: "Problem 03 — Downstream Friction",
                    title: "Shipping misclassification",
                    body: "Flat shipping options without item-size context leads to wrong tier selection and friction at drop-off.",
                  },
                ].map((p) => (
                  <div
                    key={p.label}
                    className="bg-[#FAFAF8] px-7 py-6"
                    style={{ borderLeft: `3px solid ${p.accent}` }}
                  >
                    <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#A09A95] mb-2">
                      {p.label}
                    </div>
                    <div className="text-[15px] font-semibold text-[#1C1917] mb-1.5">
                      {p.title}
                    </div>
                    <div className="text-[14px] leading-relaxed text-[#78716C]">
                      {p.body}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Before-state phone wireframe */}
            <div className="w-[320px] sticky top-10">
              <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#C05840] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E85D4A] inline-block" />
                Before state
              </div>
              <div className="bg-[#EDECE8] rounded-[40px] p-3.5 border border-[#DDD9D4] shadow-[0_12px_48px_rgba(28,25,23,0.1)]">
                <div className="flex justify-center py-2.5 pb-1.5">
                  <div className="w-20 h-1.5 bg-[#D4D0CB] rounded-full" />
                </div>
                <div className="bg-white rounded-[28px] overflow-hidden">
                  {/* nav bar */}
                  <div className="px-4 py-2.5 flex justify-between bg-[#FAFAF8] border-b border-[#F0EDE8]">
                    <div className="w-12 h-[5px] bg-[#E8E4DF] rounded mt-0.5" />
                    <div className="flex gap-1">
                      <div className="w-4 h-[5px] bg-[#E8E4DF] rounded mt-0.5" />
                      <div className="w-6 h-[5px] bg-[#E8E4DF] rounded mt-0.5" />
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="w-36 h-2 bg-[#1C1917] rounded opacity-60 mb-1.5" />
                    <div className="w-28 h-1.5 bg-[#E0DCD6] rounded mb-5" />

                    <Label>CATEGORY</Label>
                    <div className="flex gap-1.5 flex-wrap mb-5">
                      {["Tops", "Shoes", "Dresses", "Bags"].map((c) => (
                        <div
                          key={c}
                          className={`px-2.5 py-1 rounded-full text-[9px] ${
                            c === "Shoes"
                              ? "bg-[#1C1917] text-white"
                              : "bg-[#E8E4DF] text-[#A09A95]"
                          }`}
                        >
                          {c}
                        </div>
                      ))}
                    </div>

                    <Label>SIZE</Label>
                    <div className="border-2 border-[#E85D4A] rounded-lg p-2.5 bg-[#FEF9F8] mb-1.5">
                      <div className="flex gap-1">
                        {["XS", "S", "M", "L", "XL"].map((s) => (
                          <div
                            key={s}
                            className="flex-1 py-1 bg-white border border-[#E8E4DF] rounded text-center text-[9px] text-[#A09A95]"
                          >
                            {s}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-[9px] text-[#E85D4A] mb-4 flex items-center gap-1">
                      <span>⚠</span>
                      <span>Clothing sizes shown for Shoes</span>
                    </div>

                    <Label>PHOTOS</Label>
                    <div className="border border-dashed border-[#DDD9D4] rounded-lg p-3.5 text-center mb-3.5">
                      <div className="w-6 h-6 bg-[#E8E4DF] rounded mx-auto mb-2" />
                      <div className="w-18 h-1.5 bg-[#E8E4DF] rounded mx-auto" />
                    </div>
                    <div className="bg-[#DDD9D4] rounded-lg p-3 text-center">
                      <div className="w-24 h-[7px] bg-[#C8C4BC] rounded mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#A09A95] text-center mt-3 italic">
                Shoes selected — clothing sizes displayed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 DESIGN SOLUTION ───────────────────────── */}
      <section className="px-8 md:px-16 py-24 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <SectionLabel num="02" label="Design Solution" light />

          <div className="max-w-[680px] mb-16">
            <h2 className="font-serif text-[clamp(28px,4vw,50px)] leading-tight font-normal mb-6 text-balance">
              Form fields that respond<br />to what came before
            </h2>
            <p className="text-[17px] leading-relaxed text-[#6B6460] font-light">
              The key insight: the size picker isn&apos;t a generic field — it&apos;s a{" "}
              <em>contextual field</em> that only makes sense relative to the selected
              category. Conditional logic at the form layer eliminates invalid inputs
              before they ever reach the API.
            </p>
          </div>

          <CategoryDemo />
        </div>
      </section>

      {/* ── 03 USER FLOW ─────────────────────────────── */}
      <section className="px-8 md:px-16 py-24 bg-[#FAFAF8]">
        <div className="max-w-[1100px] mx-auto">
          <SectionLabel num="03" label="User Flow" />

          <div className="max-w-[640px] mb-16">
            <h2 className="font-serif text-[clamp(28px,4vw,50px)] leading-tight font-normal mb-6 text-balance">
              Decision tree for<br />the full listing flow
            </h2>
            <p className="text-[17px] leading-relaxed text-[#6B6460] font-light">
              Every branch mapped — including the image compression edge case — to
              create an error-proof, database-aware mobile experience.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-10 border border-[#E2DDD7] overflow-x-auto">
            <FlowDiagram />
          </div>
        </div>
      </section>

      {/* ── 04 TECHNICAL ARTIFACT ────────────────────── */}
      <section className="px-8 md:px-16 py-24 bg-[#1C1917]">
        <div className="max-w-[1100px] mx-auto">
          <SectionLabel num="04" label="Technical Artifact" dark />

          <div className="max-w-[680px] mb-16">
            <h2 className="font-serif text-[clamp(28px,4vw,50px)] leading-tight font-normal text-[#F0EDE8] mb-6 text-balance">
              From user input<br />to database schema
            </h2>
            <p className="text-[17px] leading-relaxed text-[#6B6460] font-light">
              The back-end constraint that makes conditional logic essential:{" "}
              <code className="font-mono text-sm text-[#9E9993] bg-[#252220] px-1.5 py-0.5 rounded">
                size_id
              </code>{" "}
              is a foreign key constrained by{" "}
              <code className="font-mono text-sm text-[#9E9993] bg-[#252220] px-1.5 py-0.5 rounded">
                category_id
              </code>
              . A shoe size value has no valid row in the clothing size table.
            </p>
          </div>

          <div className="bg-[#141210] rounded-2xl p-10 border border-[#2E2B28] overflow-x-auto">
            <SchemaDiagram />
          </div>
        </div>
      </section>

      {/* ── 05 SKILLS ────────────────────────────────── */}
      <section className="px-8 md:px-16 py-24 bg-[#FAFAF8]">
        <div className="max-w-[1100px] mx-auto">
          <SectionLabel num="05" label="Skills Demonstrated" />

          <div className="max-w-[560px] mb-14">
            <h2 className="font-serif text-[clamp(28px,4vw,50px)] leading-tight font-normal">
              The Dev/PM edge<br />in this work
            </h2>
          </div>

          <div
            className="grid gap-px bg-[#E2DDD7] rounded-xl overflow-hidden mb-20"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}
          >
            {[
              {
                icon: "⬡",
                title: "Conditional Form Logic",
                body: "Designed the UI rule that makes category selection dynamically reconfigure downstream fields — preventing invalid submissions before they reach the API.",
              },
              {
                icon: "⬡",
                title: "Edge Case Design",
                body: "Mapped the image upload failure state: slow connections trigger a progress indicator and retry flow — not a silent failure. A common mobile-first oversight.",
              },
              {
                icon: "⬡",
                title: "Backend Awareness",
                body: (
                  <>
                    Recognised that{" "}
                    <code className="text-xs bg-[#F0EDE8] px-1 py-0.5 rounded">category_id</code>{" "}
                    constrains valid{" "}
                    <code className="text-xs bg-[#F0EDE8] px-1 py-0.5 rounded">size_id</code>{" "}
                    values — and designed the UI to enforce that visually, before it&apos;s an API error.
                  </>
                ),
              },
            ].map((s) => (
              <div key={s.title} className="bg-[#FAFAF8] px-7 py-8">
                <div className="text-xl mb-4 leading-none text-[#C8C4BC]">{s.icon}</div>
                <div className="text-sm font-semibold text-[#1C1917] mb-2.5">{s.title}</div>
                <div className="text-sm leading-relaxed text-[#78716C]">{s.body}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center pt-10 border-t border-[#E2DDD7] flex-wrap gap-4">
            <div className="font-serif text-xl text-[#1C1917]">Case Study 01</div>
            <div className="text-xs text-[#B0AAA4] tracking-[0.04em]">
              Yaga Listing &amp; Drop Flow
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Small reusable pieces ──────────────────────────── */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[9px] font-bold tracking-[0.1em] uppercase text-[#B0AAA4] mb-1.5">
      {children}
    </div>
  );
}

function SectionLabel({
  num,
  label,
  dark,
  light,
}: {
  num: string;
  label: string;
  dark?: boolean;
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-4 mb-16">
      <span
        className={`text-[11px] font-semibold tracking-[0.12em] uppercase ${
          dark ? "text-[#4A4745]" : "text-[#A09A95]"
        }`}
      >
        {num} — {label}
      </span>
      <div
        className={`w-16 h-px ${
          dark ? "bg-[#2E2B28]" : light ? "bg-[#F0EDE8]" : "bg-[#E2DDD7]"
        }`}
      />
    </div>
  );
}

function ScrollProgress() {
  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] bg-[#2E2B28] z-[100] pointer-events-none">
      <ProgressBar />
    </div>
  );
}

/* Client component just for the progress bar */
function ProgressBar() {
  return <ProgressBarClient />;
}

/* ── SVG diagrams (static, no interactivity needed) ─── */

function FlowDiagram() {
  return (
    <svg
      viewBox="0 0 820 640"
      style={{ width: "100%", minWidth: 580, fontFamily: "var(--font-dm-sans)" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker id="arr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#C8C4BC" />
        </marker>
      </defs>
      {/* connectors */}
      <line x1="410" y1="58" x2="410" y2="76" stroke="#C8C4BC" strokeWidth="1.5" markerEnd="url(#arr)" />
      <line x1="410" y1="116" x2="410" y2="138" stroke="#C8C4BC" strokeWidth="1.5" markerEnd="url(#arr)" />
      <path d="M362,166 L170,166 L170,242" fill="none" stroke="#C8C4BC" strokeWidth="1.5" markerEnd="url(#arr)" />
      <line x1="410" y1="194" x2="410" y2="242" stroke="#C8C4BC" strokeWidth="1.5" markerEnd="url(#arr)" />
      <path d="M458,166 L650,166 L650,242" fill="none" stroke="#C8C4BC" strokeWidth="1.5" markerEnd="url(#arr)" />
      <path d="M170,296 L170,340 L410,340" fill="none" stroke="#C8C4BC" strokeWidth="1.5" />
      <line x1="410" y1="296" x2="410" y2="340" stroke="#C8C4BC" strokeWidth="1.5" />
      <path d="M650,296 L650,340 L410,340" fill="none" stroke="#C8C4BC" strokeWidth="1.5" />
      <line x1="410" y1="340" x2="410" y2="358" stroke="#C8C4BC" strokeWidth="1.5" markerEnd="url(#arr)" />
      <line x1="410" y1="398" x2="410" y2="418" stroke="#C8C4BC" strokeWidth="1.5" markerEnd="url(#arr)" />
      <path d="M362,448 L255,448 L255,498" fill="none" stroke="#C8C4BC" strokeWidth="1.5" markerEnd="url(#arr)" />
      <path d="M458,448 L565,448 L565,498" fill="none" stroke="#C8C4BC" strokeWidth="1.5" markerEnd="url(#arr)" />
      <path d="M255,538 L255,575 L410,575" fill="none" stroke="#C8C4BC" strokeWidth="1.5" />
      <path d="M565,538 L565,575 L410,575" fill="none" stroke="#C8C4BC" strokeWidth="1.5" />
      <line x1="410" y1="575" x2="410" y2="586" stroke="#C8C4BC" strokeWidth="1.5" markerEnd="url(#arr)" />
      {/* START */}
      <ellipse cx="410" cy="40" rx="56" ry="19" fill="#1C1917" />
      <text x="410" y="45" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">START</text>
      {/* Select Category */}
      <rect x="310" y="76" width="200" height="40" rx="6" fill="white" stroke="#C8C4BC" strokeWidth="1.5" />
      <text x="410" y="101" textAnchor="middle" fill="#1C1917" fontSize="13" fontWeight="500">Select Category</text>
      {/* Decision diamond */}
      <polygon points="410,138 458,166 410,194 362,166" fill="white" stroke="#C8C4BC" strokeWidth="1.5" />
      <text x="410" y="162" textAnchor="middle" fill="#1C1917" fontSize="11" fontWeight="500">Category</text>
      <text x="410" y="176" textAnchor="middle" fill="#1C1917" fontSize="11" fontWeight="500">type?</text>
      {/* branch labels */}
      <text x="272" y="158" textAnchor="middle" fill="#B0AAA4" fontSize="10">Clothing</text>
      <text x="410" y="212" textAnchor="middle" fill="#B0AAA4" fontSize="10">Shoes</text>
      <text x="548" y="158" textAnchor="middle" fill="#B0AAA4" fontSize="10">Accessories</text>
      {/* Size boxes */}
      <rect x="80" y="242" width="180" height="54" rx="6" fill="#F5F2EE" stroke="#DDD9D4" strokeWidth="1.5" />
      <text x="170" y="264" textAnchor="middle" fill="#6B6460" fontSize="12" fontWeight="500">Clothing Sizes</text>
      <text x="170" y="282" textAnchor="middle" fill="#A09A95" fontSize="10">XS · S · M · L · XL · XXL</text>
      <rect x="315" y="242" width="190" height="54" rx="6" fill="#F5F2EE" stroke="#DDD9D4" strokeWidth="1.5" />
      <text x="410" y="264" textAnchor="middle" fill="#6B6460" fontSize="12" fontWeight="500">Shoe Sizes</text>
      <text x="410" y="282" textAnchor="middle" fill="#A09A95" fontSize="10">UK 3 · 4 · 5 · 6 · 7 · 8 · 9+</text>
      <rect x="560" y="242" width="180" height="54" rx="6" fill="#F5F2EE" stroke="#DDD9D4" strokeWidth="1.5" />
      <text x="650" y="264" textAnchor="middle" fill="#6B6460" fontSize="12" fontWeight="500">No Size</text>
      <text x="650" y="282" textAnchor="middle" fill="#A09A95" fontSize="10">Step skipped</text>
      {/* Add Photos */}
      <rect x="310" y="358" width="200" height="40" rx="6" fill="white" stroke="#C8C4BC" strokeWidth="1.5" />
      <text x="410" y="383" textAnchor="middle" fill="#1C1917" fontSize="13" fontWeight="500">Add Photos</text>
      {/* Decision diamond: photo */}
      <polygon points="410,418 458,448 410,478 362,448" fill="white" stroke="#C8C4BC" strokeWidth="1.5" />
      <text x="410" y="444" textAnchor="middle" fill="#1C1917" fontSize="11" fontWeight="500">Photo</text>
      <text x="410" y="458" textAnchor="middle" fill="#1C1917" fontSize="11" fontWeight="500">&gt;5MB?</text>
      <text x="296" y="442" textAnchor="middle" fill="#B0AAA4" fontSize="10">YES</text>
      <text x="524" y="442" textAnchor="middle" fill="#B0AAA4" fontSize="10">NO</text>
      {/* Compress */}
      <rect x="165" y="498" width="180" height="40" rx="6" fill="#FEF3F0" stroke="#F5C4BB" strokeWidth="1.5" />
      <text x="255" y="522" textAnchor="middle" fill="#C05840" fontSize="12" fontWeight="500">Compress → Upload</text>
      {/* Direct upload */}
      <rect x="475" y="498" width="180" height="40" rx="6" fill="#F0FEF4" stroke="#B4DFC2" strokeWidth="1.5" />
      <text x="565" y="522" textAnchor="middle" fill="#3D7A52" fontSize="12" fontWeight="500">Direct Upload</text>
      {/* LISTED */}
      <ellipse cx="410" cy="608" rx="72" ry="22" fill="#1C1917" />
      <text x="410" y="613" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">Listed ✓</text>
    </svg>
  );
}

function SchemaDiagram() {
  return (
    <svg
      viewBox="0 0 820 300"
      style={{ width: "100%", minWidth: 620, fontFamily: "var(--font-dm-sans)" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker id="arrDk" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#4A4745" />
        </marker>
      </defs>
      {/* USER INPUT */}
      <rect x="10" y="10" width="240" height="280" rx="10" fill="#1C1917" stroke="#2E2B28" strokeWidth="1.5" />
      <text x="130" y="36" textAnchor="middle" fill="#6B6460" fontSize="10" fontWeight="700" letterSpacing="1.5">USER INPUT</text>
      <line x1="25" y1="46" x2="235" y2="46" stroke="#2E2B28" strokeWidth="1" />
      {[
        { y: 58, label: "category_id", type: "enum" },
        { y: 92, label: "size_value", type: "string" },
        { y: 126, label: "image_files[ ]", type: "File[]" },
        { y: 160, label: "price", type: "number" },
        { y: 194, label: "shipping_tier", type: "enum" },
      ].map((row) => (
        <g key={row.label}>
          <rect x="22" y={row.y} width="216" height="28" rx="4" fill="#141210" />
          <text x="34" y={row.y + 18} fill="#5A5652" fontSize="11">{row.label}</text>
          <text x="226" y={row.y + 18} textAnchor="end" fill="#4D7A5E" fontSize="11" fontStyle="italic">{row.type}</text>
        </g>
      ))}
      {/* VALIDATION */}
      <rect x="290" y="10" width="240" height="280" rx="10" fill="#1C1917" stroke="#2E2B28" strokeWidth="1.5" />
      <text x="410" y="36" textAnchor="middle" fill="#6B6460" fontSize="10" fontWeight="700" letterSpacing="1.5">VALIDATION</text>
      <line x1="305" y1="46" x2="515" y2="46" stroke="#2E2B28" strokeWidth="1" />
      <rect x="302" y="58" width="216" height="62" rx="4" fill="#141210" />
      <text x="314" y="76" fill="#78716C" fontSize="10" fontWeight="600">category → size_schema</text>
      <text x="314" y="92" fill="#5A5652" fontSize="10">Validates size_value against</text>
      <text x="314" y="107" fill="#5A5652" fontSize="10">correct schema for category</text>
      <rect x="302" y="128" width="216" height="62" rx="4" fill="#141210" />
      <text x="314" y="146" fill="#78716C" fontSize="10" fontWeight="600">image → compress if needed</text>
      <text x="314" y="162" fill="#5A5652" fontSize="10">File size check; compress to</text>
      <text x="314" y="177" fill="#5A5652" fontSize="10">&lt;800KB before CDN upload</text>
      <rect x="302" y="198" width="216" height="62" rx="4" fill="#141210" />
      <text x="314" y="216" fill="#78716C" fontSize="10" fontWeight="600">shipping → auto-suggest tier</text>
      <text x="314" y="232" fill="#5A5652" fontSize="10">Category infers default</text>
      <text x="314" y="247" fill="#5A5652" fontSize="10">shipping tier (small/med/large)</text>
      {/* DATABASE */}
      <rect x="570" y="10" width="240" height="280" rx="10" fill="#1C1917" stroke="#2E2B28" strokeWidth="1.5" />
      <text x="690" y="36" textAnchor="middle" fill="#6B6460" fontSize="10" fontWeight="700" letterSpacing="1.5">DATABASE</text>
      <line x1="585" y1="46" x2="795" y2="46" stroke="#2E2B28" strokeWidth="1" />
      <text x="584" y="66" fill="#3A3733" fontSize="10" fontStyle="italic">listings table</text>
      {[
        { y: 72, label: "id, seller_id, title" },
        { y: 106, label: "category_id → FK categories" },
        { y: 140, label: "size_id → FK size_options" },
        { y: 174, label: "image_urls: ARRAY" },
        { y: 208, label: "shipping_tier: ENUM" },
      ].map((row) => (
        <g key={row.label}>
          <rect x="582" y={row.y} width="216" height="28" rx="4" fill="#141210" />
          <text x="596" y={row.y + 18} fill="#5A5652" fontSize="10.5">{row.label}</text>
        </g>
      ))}
      {/* arrows */}
      <line x1="254" y1="150" x2="284" y2="150" stroke="#3A3733" strokeWidth="1.5" markerEnd="url(#arrDk)" />
      <line x1="534" y1="150" x2="564" y2="150" stroke="#3A3733" strokeWidth="1.5" markerEnd="url(#arrDk)" />
    </svg>
  );
}

// Lightweight client component for scroll progress
import ProgressBarClient from "./ProgressBar";
