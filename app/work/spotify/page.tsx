import Nav from "../../components/Nav";
import SaveIntentDemo from "./SaveIntentDemo";
import ProgressBarClient from "../yaga/ProgressBar";

export const metadata = {
  title: "Spotify Discovery → Save Flow — Keita Lee",
  description:
    "Proactive UX project: how I would redesign Spotify's mobile save flow so users can find the songs they love again.",
};

export default function SpotifyCaseStudy() {
  return (
    <>
      <Nav />

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
            <pattern id="pg-sp" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0L0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pg-sp)" />
        </svg>

        <div className="max-w-[1100px] relative animate-fade-up">
          <div className="flex gap-2 mb-12 flex-wrap">
            {["Proactive Project", "UX Design", "Mobile · 2025"].map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#5A5652] border border-[#2E2B28] px-3.5 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-serif text-[clamp(40px,6.5vw,88px)] leading-[1.0] font-normal text-[#F0EDE8] mb-7 text-balance">
            Optimizing Spotify&apos;s<br />
            Discovery → Save<br />
            <em className="text-[#78716C]">&amp; Find-Again Flow</em>
          </h1>

          <p className="text-lg leading-relaxed text-[#6B6460] max-w-[520px] mb-14 font-light">
            Reducing ambiguity when users save music on mobile — so &ldquo;I loved
            that song&rdquo; actually means they can find it again.
          </p>

          <div className="flex items-center gap-8 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#3A3733]" />
              <span className="text-[13px] text-[#5A5652] tracking-[0.04em]">
                Scroll to explore
              </span>
            </div>
            <span className="text-[#3A3733]">·</span>
            <span className="text-[13px] text-[#5A5652]">Proactive Project</span>
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
                One tap to save.<br />Three places it might end up.
              </h2>
              <p className="text-[13px] leading-relaxed text-[#A09A95] mb-6 font-light italic border-l-2 border-[#3A3733] pl-4">
                Concept case study — not affiliated with Spotify. Based on
                observing the public mobile app and how I would approach a
                redesign.
              </p>
              <p className="text-[17px] leading-relaxed text-[#6B6460] mb-12 font-light">
                Saved tracks drive retention and personalization. When users
                lose confidence in &ldquo;Save,&rdquo; they stop curating — and
                Spotify&apos;s recommendation loop weakens. Three friction points
                break the discovery → save → return journey most often.
              </p>

              <div className="flex flex-col gap-px bg-[#E2DDD7] rounded-xl overflow-hidden">
                {[
                  {
                    accent: "#1DB954",
                    label: "Problem 01 — Ambiguous outcome",
                    title: "Save doesn't tell you where the song went",
                    body: "Tapping ♥ adds to Liked Songs, but many users expect \"Save to playlist\" or \"Download.\" No confirmation — they search Library later and fail.",
                  },
                  {
                    accent: "#78716C",
                    label: "Problem 02 — Queue confusion",
                    title: "\"Play next\" vs \"Save\" look like the same intent",
                    body: "From Discover Weekly, users often want to hear it again soon (queue) or keep it forever (library). The long-press menu buries the distinction.",
                  },
                  {
                    accent: "#C8C4BC",
                    label: "Problem 03 — Silent failure",
                    title: "Offline save feels broken",
                    body: "On flaky mobile data, the heart animates but sync fails. No retry, no pending state — users assume it's saved until it isn't.",
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
                <div className="bg-[#121212] rounded-[28px] overflow-hidden">
                  <div className="px-4 py-2.5 flex justify-center bg-[#121212] border-b border-[#282828]">
                    <div className="text-[10px] text-white font-semibold">Discover Weekly</div>
                  </div>
                  <div className="p-4">
                    <Label dark>Now playing</Label>
                    <div className="flex items-center gap-3 mb-5 p-2 rounded-lg bg-[#282828]">
                      <div className="w-11 h-11 rounded bg-gradient-to-br from-[#1DB954] to-[#191414] shrink-0" />
                      <div className="flex-1">
                        <div className="text-[11px] text-white font-medium">Midnight City</div>
                        <div className="text-[9px] text-[#B3B3B3]">M83</div>
                      </div>
                      <div className="text-[#1DB954] text-lg">♥</div>
                    </div>

                    <div className="border-2 border-[#E85D4A] rounded-lg p-2.5 bg-[#FEF9F8] mb-1.5">
                      <div className="text-[9px] text-[#E85D4A] flex items-center gap-1">
                        <span>⚠</span>
                        <span>No confirmation — where did it go?</span>
                      </div>
                    </div>

                    <Label dark>Your Library · later</Label>
                    <div className="border border-dashed border-[#535353] rounded-lg p-4 text-center">
                      <div className="text-[9px] text-[#B3B3B3] italic">
                        User searches &ldquo;Midnight City&rdquo; — not in recent saves
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#A09A95] text-center mt-3 italic">
                Saved — but where?
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
              Save with intent,<br />not just a toggle
            </h2>
            <p className="text-[17px] leading-relaxed text-[#6B6460] font-light">
              The key insight: save is not one action — it&apos;s three intents.{" "}
              <em>Keep</em> (library), <em>Organize</em> (playlist), and{" "}
              <em>Listen again soon</em> (queue). A bottom sheet makes the choice
              explicit without cluttering the happy path.
            </p>
          </div>

          <SaveIntentDemo />
        </div>
      </section>

      {/* ── 03 USER FLOW ─────────────────────────────── */}
      <section className="px-8 md:px-16 py-24 bg-[#FAFAF8]">
        <div className="max-w-[1100px] mx-auto">
          <SectionLabel num="03" label="User Flow" />

          <div className="max-w-[640px] mb-16">
            <h2 className="font-serif text-[clamp(28px,4vw,50px)] leading-tight font-normal mb-6 text-balance">
              Decision tree for<br />the discovery → save journey
            </h2>
            <p className="text-[17px] leading-relaxed text-[#6B6460] font-light">
              Every branch mapped — including offline pending sync and undo —
              to create a findable, account-aware mobile experience.
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
              From tap to<br />library sync
            </h2>
            <p className="text-[17px] leading-relaxed text-[#6B6460] font-light">
              Optimistic UI fills the heart immediately; the sync layer queues
              offline ops and replays on reconnect. Explicit{" "}
              <code className="font-mono text-sm text-[#9E9993] bg-[#252220] px-1.5 py-0.5 rounded">
                save_intent
              </code>{" "}
              gives the recommendation engine a stronger signal than a passive
              like.
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
                title: "Intent-Based Interaction Design",
                body: "Split one overloaded control (♥) into clear user intents — Keep, Organize, Queue — without adding friction to the default save path.",
              },
              {
                icon: "⬡",
                title: "Edge Case Design",
                body: "Mapped offline pending state, undo within 5 seconds, and regional unavailability — not just the happy path on fast Wi-Fi.",
              },
              {
                icon: "⬡",
                title: "Systems Thinking",
                body: (
                  <>
                    Designed UI rules that align with optimistic sync, idempotent
                    saves, and{" "}
                    <code className="text-xs bg-[#F0EDE8] px-1 py-0.5 rounded">saved_at</code>{" "}
                    indexing — so &ldquo;Recently saved&rdquo; is actually findable.
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
            <div className="font-serif text-xl text-[#1C1917]">Proactive Project</div>
            <div className="flex items-center gap-4 flex-wrap">
              <a href="/work/yaga/" className="text-xs text-[#01A896] hover:underline tracking-[0.04em]">
                See also: Yaga Case Study →
              </a>
              <span className="text-xs text-[#B0AAA4] tracking-[0.04em]">
                Spotify Discovery → Save Flow
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Small reusable pieces ──────────────────────────── */

function Label({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div
      className={`text-[9px] font-bold tracking-[0.1em] uppercase mb-1.5 ${
        dark ? "text-[#535353]" : "text-[#B0AAA4]"
      }`}
    >
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
      <ProgressBarClient />
    </div>
  );
}

function FlowDiagram() {
  return (
    <svg
      viewBox="0 0 820 680"
      style={{ width: "100%", minWidth: 580, fontFamily: "var(--font-dm-sans)" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker id="arrSp" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#C8C4BC" />
        </marker>
      </defs>
      <line x1="410" y1="58" x2="410" y2="76" stroke="#C8C4BC" strokeWidth="1.5" markerEnd="url(#arrSp)" />
      <line x1="410" y1="116" x2="410" y2="138" stroke="#C8C4BC" strokeWidth="1.5" markerEnd="url(#arrSp)" />
      <line x1="410" y1="194" x2="410" y2="216" stroke="#C8C4BC" strokeWidth="1.5" markerEnd="url(#arrSp)" />
      <path d="M362,244 L170,244 L170,290" fill="none" stroke="#C8C4BC" strokeWidth="1.5" markerEnd="url(#arrSp)" />
      <line x1="410" y1="244" x2="410" y2="290" stroke="#C8C4BC" strokeWidth="1.5" markerEnd="url(#arrSp)" />
      <path d="M458,244 L650,244 L650,290" fill="none" stroke="#C8C4BC" strokeWidth="1.5" markerEnd="url(#arrSp)" />
      <path d="M170,344 L170,388 L410,388" fill="none" stroke="#C8C4BC" strokeWidth="1.5" />
      <line x1="410" y1="344" x2="410" y2="388" stroke="#C8C4BC" strokeWidth="1.5" />
      <path d="M650,344 L650,388 L410,388" fill="none" stroke="#C8C4BC" strokeWidth="1.5" />
      <line x1="410" y1="388" x2="410" y2="406" stroke="#C8C4BC" strokeWidth="1.5" markerEnd="url(#arrSp)" />
      <line x1="410" y1="446" x2="410" y2="466" stroke="#C8C4BC" strokeWidth="1.5" markerEnd="url(#arrSp)" />
      <path d="M362,496 L255,496 L255,546" fill="none" stroke="#C8C4BC" strokeWidth="1.5" markerEnd="url(#arrSp)" />
      <path d="M458,496 L565,496 L565,546" fill="none" stroke="#C8C4BC" strokeWidth="1.5" markerEnd="url(#arrSp)" />
      <path d="M255,586 L255,623 L410,623" fill="none" stroke="#C8C4BC" strokeWidth="1.5" />
      <path d="M565,586 L565,623 L410,623" fill="none" stroke="#C8C4BC" strokeWidth="1.5" />
      <line x1="410" y1="623" x2="410" y2="634" stroke="#C8C4BC" strokeWidth="1.5" markerEnd="url(#arrSp)" />
      <ellipse cx="410" cy="40" rx="56" ry="19" fill="#1C1917" />
      <text x="410" y="45" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">START</text>
      <rect x="290" y="76" width="240" height="40" rx="6" fill="white" stroke="#C8C4BC" strokeWidth="1.5" />
      <text x="410" y="101" textAnchor="middle" fill="#1C1917" fontSize="13" fontWeight="500">Hear track (Discover Weekly)</text>
      <rect x="310" y="138" width="200" height="40" rx="6" fill="white" stroke="#C8C4BC" strokeWidth="1.5" />
      <text x="410" y="163" textAnchor="middle" fill="#1C1917" fontSize="13" fontWeight="500">Tap Save (♥)</text>
      <polygon points="410,216 458,244 410,272 362,244" fill="white" stroke="#C8C4BC" strokeWidth="1.5" />
      <text x="410" y="240" textAnchor="middle" fill="#1C1917" fontSize="11" fontWeight="500">User</text>
      <text x="410" y="254" textAnchor="middle" fill="#1C1917" fontSize="11" fontWeight="500">intent?</text>
      <text x="272" y="236" textAnchor="middle" fill="#B0AAA4" fontSize="10">Keep</text>
      <text x="410" y="284" textAnchor="middle" fill="#B0AAA4" fontSize="10">Playlist</text>
      <text x="548" y="236" textAnchor="middle" fill="#B0AAA4" fontSize="10">Queue</text>
      <rect x="80" y="290" width="180" height="54" rx="6" fill="#F0FEF4" stroke="#B4DFC2" strokeWidth="1.5" />
      <text x="170" y="312" textAnchor="middle" fill="#3D7A52" fontSize="12" fontWeight="500">Liked Songs</text>
      <text x="170" y="330" textAnchor="middle" fill="#A09A95" fontSize="10">Confirm toast</text>
      <rect x="315" y="290" width="190" height="54" rx="6" fill="#F0FEF4" stroke="#B4DFC2" strokeWidth="1.5" />
      <text x="410" y="312" textAnchor="middle" fill="#3D7A52" fontSize="12" fontWeight="500">Pick playlist</text>
      <text x="410" y="330" textAnchor="middle" fill="#A09A95" fontSize="10">Recent + New</text>
      <rect x="560" y="290" width="180" height="54" rx="6" fill="#F5F2EE" stroke="#DDD9D4" strokeWidth="1.5" />
      <text x="650" y="312" textAnchor="middle" fill="#6B6460" fontSize="12" fontWeight="500">Add to queue</text>
      <text x="650" y="330" textAnchor="middle" fill="#A09A95" fontSize="10">Play next</text>
      <rect x="310" y="406" width="200" height="40" rx="6" fill="white" stroke="#C8C4BC" strokeWidth="1.5" />
      <text x="410" y="431" textAnchor="middle" fill="#1C1917" fontSize="13" fontWeight="500">Write to library</text>
      <polygon points="410,466 458,496 410,526 362,496" fill="white" stroke="#C8C4BC" strokeWidth="1.5" />
      <text x="410" y="492" textAnchor="middle" fill="#1C1917" fontSize="11" fontWeight="500">Online?</text>
      <text x="296" y="490" textAnchor="middle" fill="#B0AAA4" fontSize="10">NO</text>
      <text x="524" y="490" textAnchor="middle" fill="#B0AAA4" fontSize="10">YES</text>
      <rect x="165" y="546" width="180" height="40" rx="6" fill="#FEF3F0" stroke="#F5C4BB" strokeWidth="1.5" />
      <text x="255" y="570" textAnchor="middle" fill="#C05840" fontSize="12" fontWeight="500">Pending → Sync later</text>
      <rect x="475" y="546" width="180" height="40" rx="6" fill="#F0FEF4" stroke="#B4DFC2" strokeWidth="1.5" />
      <text x="565" y="570" textAnchor="middle" fill="#3D7A52" fontSize="12" fontWeight="500">Confirmed ✓</text>
      <ellipse cx="410" cy="656" rx="80" ry="22" fill="#1C1917" />
      <text x="410" y="661" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">Findable ✓</text>
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
        <marker id="arrSpDk" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#4A4745" />
        </marker>
      </defs>
      <rect x="10" y="10" width="240" height="280" rx="10" fill="#1C1917" stroke="#2E2B28" strokeWidth="1.5" />
      <text x="130" y="36" textAnchor="middle" fill="#6B6460" fontSize="10" fontWeight="700" letterSpacing="1.5">CLIENT (UI)</text>
      <line x1="25" y1="46" x2="235" y2="46" stroke="#2E2B28" strokeWidth="1" />
      {[
        { y: 58, label: "save_intent", type: "enum" },
        { y: 92, label: "track_id", type: "string" },
        { y: 126, label: "playlist_id?", type: "string?" },
        { y: 160, label: "device_state", type: "enum" },
        { y: 194, label: "optimistic_ui", type: "boolean" },
      ].map((row) => (
        <g key={row.label}>
          <rect x="22" y={row.y} width="216" height="28" rx="4" fill="#141210" />
          <text x="34" y={row.y + 18} fill="#5A5652" fontSize="11">{row.label}</text>
          <text x="226" y={row.y + 18} textAnchor="end" fill="#4D7A5E" fontSize="11" fontStyle="italic">{row.type}</text>
        </g>
      ))}
      <rect x="290" y="10" width="240" height="280" rx="10" fill="#1C1917" stroke="#2E2B28" strokeWidth="1.5" />
      <text x="410" y="36" textAnchor="middle" fill="#6B6460" fontSize="10" fontWeight="700" letterSpacing="1.5">SYNC LAYER</text>
      <line x1="305" y1="46" x2="515" y2="46" stroke="#2E2B28" strokeWidth="1" />
      <rect x="302" y="58" width="216" height="62" rx="4" fill="#141210" />
      <text x="314" y="76" fill="#78716C" fontSize="10" fontWeight="600">offline → queue_op()</text>
      <text x="314" y="92" fill="#5A5652" fontSize="10">Persist to local SQLite;</text>
      <text x="314" y="107" fill="#5A5652" fontSize="10">replay on reconnect</text>
      <rect x="302" y="128" width="216" height="62" rx="4" fill="#141210" />
      <text x="314" y="146" fill="#78716C" fontSize="10" fontWeight="600">idempotent save</text>
      <text x="314" y="162" fill="#5A5652" fontSize="10">Double-tap ♥ does not</text>
      <text x="314" y="177" fill="#5A5652" fontSize="10">create duplicate entries</text>
      <rect x="302" y="198" width="216" height="62" rx="4" fill="#141210" />
      <text x="314" y="216" fill="#78716C" fontSize="10" fontWeight="600">rollback on failure</text>
      <text x="314" y="232" fill="#5A5652" fontSize="10">Revert heart + show</text>
      <text x="314" y="247" fill="#5A5652" fontSize="10">retry if API rejects</text>
      <rect x="570" y="10" width="240" height="280" rx="10" fill="#1C1917" stroke="#2E2B28" strokeWidth="1.5" />
      <text x="690" y="36" textAnchor="middle" fill="#6B6460" fontSize="10" fontWeight="700" letterSpacing="1.5">LIBRARY API</text>
      <line x1="585" y1="46" x2="795" y2="46" stroke="#2E2B28" strokeWidth="1" />
      <text x="584" y="66" fill="#3A3733" fontSize="10" fontStyle="italic">user.library</text>
      {[
        { y: 72, label: "liked_tracks + saved_at" },
        { y: 106, label: "playlist_tracks → FK" },
        { y: 140, label: "queue_state (ephemeral)" },
        { y: 174, label: "recently_saved index" },
        { y: 208, label: "recommendation_signals" },
      ].map((row) => (
        <g key={row.label}>
          <rect x="582" y={row.y} width="216" height="28" rx="4" fill="#141210" />
          <text x="596" y={row.y + 18} fill="#5A5652" fontSize="10.5">{row.label}</text>
        </g>
      ))}
      <line x1="254" y1="150" x2="284" y2="150" stroke="#3A3733" strokeWidth="1.5" markerEnd="url(#arrSpDk)" />
      <line x1="534" y1="150" x2="564" y2="150" stroke="#3A3733" strokeWidth="1.5" markerEnd="url(#arrSpDk)" />
    </svg>
  );
}
