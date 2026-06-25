import Nav from "../../components/Nav";
import FormDemo from "./FormDemo";
import ProgressBarClient from "../yaga/ProgressBar";

export const metadata = {
  title: "fibertime™ WhatsApp Chatbot — Keita Lee",
  description:
    "UX and QA case study on redesigning fibertime's WhatsApp activation bot — location assignment, structured data capture, and release discipline at scale.",
};

export default function FibertimeCaseStudy() {
  return (
    <>
      <Nav />

      <ScrollProgress />

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="bg-[#1C1917] min-h-svh flex flex-col justify-end px-8 md:px-16 py-[72px] relative overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ opacity: 0.035 }}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="pg-ft" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0L0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pg-ft)" />
        </svg>

        <div className="max-w-[1100px] relative animate-fade-up">
          <div className="flex gap-2 mb-12 flex-wrap">
            {["Featured Case Study", "UX Design · QA Lead", "WhatsApp · 2025–2026"].map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#5A5652] border border-[#2E2B28] px-3.5 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-serif text-[clamp(40px,6.5vw,88px)] leading-[1.0] font-normal text-[#F0EDE8] mb-7 text-balance">
            fibertime™ WhatsApp<br />
            Chatbot<br />
            <em className="text-[#78716C]">&amp; Activation Flow</em>
          </h1>

          <p className="text-lg leading-relaxed text-[#6B6460] max-w-[520px] mb-14 font-light">
            800–1,000 router activations daily across South Africa — all through
            a WhatsApp bot with no app download. I redesigned core flows,
            replaced a broken location system, and shipped structured forms
            that cut manual entry errors.
          </p>

          <div className="flex items-center gap-8 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#3A3733]" />
              <span className="text-[13px] text-[#5A5652] tracking-[0.04em]">
                Scroll to explore
              </span>
            </div>
            <span className="text-[#3A3733]">·</span>
            <span className="text-[13px] text-[#5A5652]">UX Designer &amp; QA Lead</span>
          </div>
        </div>
      </section>

      {/* ── 01 PROBLEM FRAMING ───────────────────────── */}
      <section className="px-8 md:px-16 py-24 bg-[#FAFAF8]">
        <div className="max-w-[1100px] mx-auto">
          <SectionLabel num="01" label="Problem Framing" />

          <div className="flex gap-20 items-start flex-wrap">
            <div className="flex-1 min-w-[300px]">
              <h2 className="font-serif text-[clamp(28px,4vw,50px)] leading-tight font-normal mb-7 text-balance">
                High-volume activations<br />on unreliable tooling
              </h2>
              <p className="text-[17px] leading-relaxed text-[#6B6460] mb-12 font-light">
                Field agents activate routers in high-density communities across
                South Africa. When location fails and data is typed freehand into
                chat, activations slow down and errors reach back-office systems.
              </p>

              <div className="flex flex-col gap-px bg-[#E2DDD7] rounded-xl overflow-hidden">
                {[
                  {
                    accent: "#1C1917",
                    label: "Problem 01 — Location accuracy",
                    title: "OnMap assigned agents to the wrong address",
                    body: "The existing location system was unreliable in high-density areas — field agents regularly arrived at incorrect addresses, wasting time and delaying activations.",
                  },
                  {
                    accent: "#78716C",
                    label: "Problem 02 — Data entry errors",
                    title: "Customer details typed freehand into chat",
                    body: "Agents manually typed names, phone numbers, and contact details as WhatsApp messages — no structure, no validation, and errors that reached back-office systems.",
                  },
                  {
                    accent: "#C8C4BC",
                    label: "Problem 03 — Accessibility gap",
                    title: "The tool wasn't built for the people using it",
                    body: "Field agents and customers needed a tool that worked on any Android without downloading an app. WhatsApp meets them where they are.",
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

            <div className="w-[320px] sticky top-10">
              <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#78716C] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#A09A95] inline-block" />
                Before state
              </div>
              <ImagePlaceholder
                label="WhatsApp chat — unstructured data capture"
                aspect="4/5"
              />
              <p className="text-xs text-[#A09A95] text-center mt-3 italic">
                Screenshot placeholder — flow wireframe coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 DESIGN SOLUTION ───────────────────────── */}
      <section className="px-8 md:px-16 py-24 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <SectionLabel num="02" label="Design Solution" light />

          <div className="max-w-[680px] mb-10">
            <h2 className="font-serif text-[clamp(28px,4vw,50px)] leading-tight font-normal mb-6 text-balance">
              One guided form instead<br />of twenty chat messages
            </h2>
            <p className="text-[17px] leading-relaxed text-[#6B6460] font-light">
              Key insight: replace sequential free-text questions with a native
              WhatsApp form template — capturing all customer information through
              a single, guided form instead of an open-ended back-and-forth.
            </p>
          </div>

          <FormDemo />

          <div
            className="grid gap-px bg-[#E2DDD7] rounded-xl overflow-hidden mt-16"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}
          >
            {[
              {
                title: "Location-Based Assignment",
                body: "Agent shares live location; system displays nearby homes on a map for efficient routing.",
              },
              {
                title: "Home Assignment via FTM API",
                body: "Agent selects a home from the map; system assigns it through the FTM API, syncing with back-office.",
              },
              {
                title: "Structured Data Capture",
                body: "Captures customer name, phone numbers, and contact details during activation — no paperwork.",
              },
              {
                title: "AI-Powered Device Capture",
                body: "Uses AI OCR to extract DR and Serial Numbers from a router photo, eliminating manual entry errors.",
              },
            ].map((f) => (
              <div key={f.title} className="bg-[#FAFAF8] px-7 py-8">
                <div className="text-sm font-semibold text-[#1C1917] mb-2.5">{f.title}</div>
                <div className="text-sm leading-relaxed text-[#78716C]">{f.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 USER FLOW ─────────────────────────────── */}
      <section className="px-8 md:px-16 py-24 bg-[#FAFAF8]">
        <div className="max-w-[1100px] mx-auto">
          <SectionLabel num="03" label="User Flow" />

          <div className="max-w-[640px] mb-10">
            <h2 className="font-serif text-[clamp(28px,4vw,50px)] leading-tight font-normal mb-6 text-balance">
              End-to-end activation<br />flow
            </h2>
            <p className="text-[17px] leading-relaxed text-[#6B6460] font-light">
              Every step mapped — from live location share through structured
              data capture to device OCR and activation complete.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-10 border border-[#E2DDD7] overflow-x-auto mb-8">
            <ActivationFlowDiagram />
          </div>

          <ImagePlaceholder
            label="Data capture flow — diagram screenshot"
            aspect="16/9"
          />
        </div>
      </section>

      {/* ── 04 TECHNICAL ARTIFACT ────────────────────── */}
      <section className="px-8 md:px-16 py-24 bg-[#1C1917]">
        <div className="max-w-[1100px] mx-auto">
          <SectionLabel num="04" label="Technical Artifact" dark />

          <div className="max-w-[680px] mb-12">
            <h2 className="font-serif text-[clamp(28px,4vw,50px)] leading-tight font-normal text-[#F0EDE8] mb-6 text-balance">
              System integration<br />&amp; release discipline
            </h2>
            <p className="text-[17px] leading-relaxed text-[#6B6460] font-light">
              The bot sits between field agents and back-office systems. Every
              release follows a structured QA protocol before going live.
            </p>
          </div>

          <div className="bg-[#141210] rounded-2xl p-10 border border-[#2E2B28] overflow-x-auto mb-12">
            <IntegrationDiagram />
          </div>

          <div className="bg-[#141210] rounded-2xl p-10 border border-[#2E2B28]">
            <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#4A4745] mb-6">
              QA process — every release
            </div>
            <div className="grid gap-px bg-[#2E2B28] rounded-lg overflow-hidden">
              {[
                "Users informed of upcoming changes before each release",
                "Client demo with hands-on testing opportunity",
                "Deployment ticket created with full update documentation",
                "Developer and product documentation updated",
                "All flows tested on UAT number before go-live",
                "Figma flows updated to reflect the shipped state",
                "Regression testing completed across all four bot flows",
              ].map((item, i) => (
                <div
                  key={item}
                  className="flex items-start gap-4 bg-[#141210] px-5 py-4"
                >
                  <span className="font-mono text-xs text-[#4A4745] shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-[#78716C] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
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
            className="grid gap-px bg-[#E2DDD7] rounded-xl overflow-hidden mb-12"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}
          >
            {[
              {
                icon: "⬡",
                title: "Conversational UX Design",
                body: "Structured bot flows for low-literacy, high-volume field use — replacing open chat with validated form templates.",
              },
              {
                icon: "⬡",
                title: "QA & Release Discipline",
                body: "UAT testing, regression across four bot flows, and Figma sync on every release — treating QA as a product deliverable.",
              },
              {
                icon: "⬡",
                title: "Systems Thinking",
                body: "Replaced a broken location system, integrated FTM API home assignment, and added OCR for device capture — end to end.",
              },
            ].map((s) => (
              <div key={s.title} className="bg-[#FAFAF8] px-7 py-8">
                <div className="text-xl mb-4 leading-none text-[#C8C4BC]">{s.icon}</div>
                <div className="text-sm font-semibold text-[#1C1917] mb-2.5">{s.title}</div>
                <div className="text-sm leading-relaxed text-[#78716C]">{s.body}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {["Figma", "FigJam", "Django", "Twilio", "Python", "GitHub", "Bitbucket", "WhatsApp Business API"].map((t) => (
              <span
                key={t}
                className="text-xs font-medium text-[#6B6460] border border-[#E2DDD7] rounded-md px-2.5 py-1 bg-white"
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href="https://fibertime.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#01A896] hover:underline"
          >
            Visit fibertime.com →
          </a>

          <div className="flex justify-between items-center pt-10 mt-10 border-t border-[#E2DDD7] flex-wrap gap-4">
            <div className="font-serif text-xl text-[#1C1917]">Featured Case Study</div>
            <div className="flex items-center gap-4 flex-wrap">
              <a href="/work/yaga/" className="text-xs text-[#01A896] hover:underline tracking-[0.04em]">
                See also: Yaga Proactive Project →
              </a>
              <span className="text-xs text-[#B0AAA4] tracking-[0.04em]">
                fibertime™ WhatsApp Chatbot
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Shared pieces ──────────────────────────────────── */

function ImagePlaceholder({
  label,
  aspect = "16/9",
}: {
  label: string;
  aspect?: string;
}) {
  return (
    <div
      className="w-full rounded-xl border border-dashed border-[#C8C4BC] bg-[#F0EDE8] flex flex-col items-center justify-center gap-3"
      style={{ aspectRatio: aspect }}
    >
      <div className="w-10 h-10 rounded-lg bg-[#E2DDD7] flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A09A95" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      </div>
      <span className="text-xs text-[#A09A95] text-center px-4">{label}</span>
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
      <ProgressBarClient />
    </div>
  );
}

function ActivationFlowDiagram() {
  return (
    <svg
      viewBox="0 0 820 520"
      style={{ width: "100%", minWidth: 580, fontFamily: "var(--font-dm-sans)" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker id="arr-ft" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#C8C4BC" />
        </marker>
      </defs>
      {/* vertical spine */}
      <line x1="410" y1="58" x2="410" y2="76" stroke="#C8C4BC" strokeWidth="1.5" markerEnd="url(#arr-ft)" />
      <line x1="410" y1="116" x2="410" y2="138" stroke="#C8C4BC" strokeWidth="1.5" markerEnd="url(#arr-ft)" />
      <line x1="410" y1="178" x2="410" y2="200" stroke="#C8C4BC" strokeWidth="1.5" markerEnd="url(#arr-ft)" />
      <line x1="410" y1="240" x2="410" y2="262" stroke="#C8C4BC" strokeWidth="1.5" markerEnd="url(#arr-ft)" />
      <line x1="410" y1="302" x2="410" y2="324" stroke="#C8C4BC" strokeWidth="1.5" markerEnd="url(#arr-ft)" />
      <line x1="410" y1="364" x2="410" y2="386" stroke="#C8C4BC" strokeWidth="1.5" markerEnd="url(#arr-ft)" />
      <line x1="410" y1="426" x2="410" y2="448" stroke="#C8C4BC" strokeWidth="1.5" markerEnd="url(#arr-ft)" />
      <line x1="410" y1="488" x2="410" y2="498" stroke="#C8C4BC" strokeWidth="1.5" markerEnd="url(#arr-ft)" />
      {/* START */}
      <ellipse cx="410" cy="40" rx="56" ry="19" fill="#1C1917" />
      <text x="410" y="45" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">START</text>
      {/* steps */}
      {[
        { y: 76, label: "Share Live Location" },
        { y: 138, label: "View Nearby Homes on Map" },
        { y: 200, label: "Select Home → FTM API Assign" },
        { y: 262, label: "Complete Structured Form" },
        { y: 324, label: "Photo Router → OCR (DR / Serial)" },
        { y: 386, label: "Confirm & Submit Activation" },
      ].map((step) => (
        <g key={step.label}>
          <rect x="260" y={step.y} width="300" height="40" rx="6" fill="white" stroke="#C8C4BC" strokeWidth="1.5" />
          <text x="410" y={step.y + 25} textAnchor="middle" fill="#1C1917" fontSize="13" fontWeight="500">
            {step.label}
          </text>
        </g>
      ))}
      {/* END */}
      <ellipse cx="410" cy="510" rx="90" ry="22" fill="#1C1917" />
      <text x="410" y="515" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">Activation Complete ✓</text>
    </svg>
  );
}

function IntegrationDiagram() {
  return (
    <svg
      viewBox="0 0 820 280"
      style={{ width: "100%", minWidth: 620, fontFamily: "var(--font-dm-sans)" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker id="arr-int" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#4A4745" />
        </marker>
      </defs>
      {[
        { x: 10, title: "FIELD AGENT", rows: ["WhatsApp (Android)", "Live location share", "Form submission", "Router photo"] },
        { x: 220, title: "BOT LAYER", rows: ["WhatsApp Business API", "Twilio messaging", "Django backend", "Flow orchestration"] },
        { x: 430, title: "INTEGRATIONS", rows: ["FTM API (home assign)", "Location / map service", "AI OCR (device IDs)", "UAT environment"] },
        { x: 640, title: "BACK-OFFICE", rows: ["Activation records", "Customer database", "Agent routing", "Reporting"] },
      ].map((col) => (
        <g key={col.title}>
          <rect x={col.x} y="10" width="170" height="260" rx="10" fill="#1C1917" stroke="#2E2B28" strokeWidth="1.5" />
          <text x={col.x + 85} y="36" textAnchor="middle" fill="#6B6460" fontSize="10" fontWeight="700" letterSpacing="1.5">
            {col.title}
          </text>
          <line x1={col.x + 15} y1="46" x2={col.x + 155} y2="46" stroke="#2E2B28" strokeWidth="1" />
          {col.rows.map((row, i) => (
            <g key={row}>
              <rect x={col.x + 12} y={58 + i * 52} width="146" height="40" rx="4" fill="#141210" />
              <text x={col.x + 85} y={58 + i * 52 + 25} textAnchor="middle" fill="#5A5652" fontSize="10.5">
                {row}
              </text>
            </g>
          ))}
        </g>
      ))}
      <line x1="184" y1="140" x2="214" y2="140" stroke="#3A3733" strokeWidth="1.5" markerEnd="url(#arr-int)" />
      <line x1="394" y1="140" x2="424" y2="140" stroke="#3A3733" strokeWidth="1.5" markerEnd="url(#arr-int)" />
      <line x1="604" y1="140" x2="634" y2="140" stroke="#3A3733" strokeWidth="1.5" markerEnd="url(#arr-int)" />
    </svg>
  );
}
