import Nav from "../../components/Nav";
import NextImage from "next/image";

export const metadata = {
  title: "Character Illustration — Keita Lee",
  description:
    "Surfing character illustrations — Surfer Gal & Surfer Dude — created for Jones & Co.",
};

export default function IllustrationPage() {
  return (
    <>
      <Nav />

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="bg-[#1C1917] pt-32 pb-20 px-8 md:px-16 relative overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ opacity: 0.035 }}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="pg-il" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0L0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pg-il)" />
        </svg>

        <div className="max-w-[860px] mx-auto relative animate-fade-up">
          <div className="flex gap-2 mb-10 flex-wrap">
            {["Illustration", "Jones & Co.", "2023"].map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#5A5652] border border-[#2E2B28] px-3.5 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-serif text-[clamp(36px,5.5vw,72px)] leading-[1.0] font-normal text-[#F0EDE8] mb-6 text-balance">
            Character Illustration<br />
            <em className="text-[#01A896]">Surfer Gal &amp; Surfer Dude</em>
          </h1>

          <p className="text-lg leading-relaxed text-[#6B6460] max-w-[520px] font-light">
            Two surfing characters created for Jones &amp; Co. — capturing the
            laid-back lifestyle of surf culture through digital illustration.
          </p>
        </div>
      </section>

      {/* ── CHARACTERS ───────────────────────────────── */}
      <section className="px-8 md:px-16 py-20 bg-[#FAFAF8]">
        <div className="max-w-[860px] mx-auto">
          <div className="grid gap-10 md:grid-cols-2">

            {/* Surfer Gal */}
            <div className="flex flex-col gap-5">
              <div className="bg-[#F0EDE8] rounded-2xl overflow-hidden border border-[#E2DDD7] flex items-end justify-center"
                style={{ minHeight: 420 }}>
                <NextImage
                  src="/images/surfer_gal_no_background.png"
                  alt="Surfer Gal character illustration"
                  width={400}
                  height={480}
                  className="w-full h-full object-contain"
                  style={{ maxHeight: 480 }}
                />
              </div>
              <div>
                <h2 className="font-serif text-[1.5rem] text-[#1C1917] mb-1">Surfer Gal</h2>
                <p className="text-sm text-[#6B6460] leading-relaxed">
                  Digital character illustration capturing the spirit of surf culture
                  — relaxed, confident, and at home on the waves.
                </p>
              </div>
            </div>

            {/* Surfer Dude */}
            <div className="flex flex-col gap-5">
              <div className="bg-[#EEF4F4] rounded-2xl overflow-hidden border border-[#E2DDD7] flex items-end justify-center"
                style={{ minHeight: 420 }}>
                <NextImage
                  src="/images/surfer_dude_no_background.png"
                  alt="Surfer Dude character illustration"
                  width={400}
                  height={480}
                  className="w-full h-full object-contain"
                  style={{ maxHeight: 480 }}
                />
              </div>
              <div>
                <h2 className="font-serif text-[1.5rem] text-[#1C1917] mb-1">Surfer Dude</h2>
                <p className="text-sm text-[#6B6460] leading-relaxed">
                  A complementary character with the same laid-back energy —
                  built to pair with Surfer Gal across Jones &amp; Co. branding.
                </p>
              </div>
            </div>
          </div>

          {/* Both together */}
          <div className="mt-16">
            <p className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#01A896] mb-6">Together</p>
            <div className="bg-[#F0EDE8] rounded-2xl border border-[#E2DDD7] overflow-hidden flex items-end justify-center gap-0 px-8 pt-8"
              style={{ minHeight: 380 }}>
              <NextImage
                src="/images/surfer_gal_no_background.png"
                alt="Surfer Gal"
                width={340}
                height={380}
                className="object-contain"
                style={{ maxHeight: 360 }}
              />
              <NextImage
                src="/images/surfer_dude_no_background.png"
                alt="Surfer Dude"
                width={340}
                height={380}
                className="object-contain"
                style={{ maxHeight: 360 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── DETAILS ──────────────────────────────────── */}
      <section className="px-8 md:px-16 py-16 bg-white border-t border-[#E2DDD7]">
        <div className="max-w-[860px] mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { label: "Client", value: "Jones & Co." },
              { label: "Medium", value: "Digital illustration" },
              { label: "Year", value: "2023" },
            ].map((d) => (
              <div key={d.label}>
                <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-[#A09A95] mb-1.5">{d.label}</p>
                <p className="text-[0.95rem] font-medium text-[#1C1917]">{d.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER NAV ───────────────────────────────── */}
      <div className="px-8 md:px-16 py-10 bg-white border-t border-[#E2DDD7]">
        <div className="max-w-[860px] mx-auto flex justify-between flex-wrap gap-4">
          <a href="/#projects" className="text-sm text-[#01A896] hover:underline">← All projects</a>
        </div>
      </div>
    </>
  );
}
