import Nav from "./components/Nav";
import Link from "next/link";
import Image from "next/image";

/* ─── data ─────────────────────────────────────────────── */

const skills = [
  "Flutter & Dart", "Product Planning", "UX Design", "Figma & FigJam",
  "Python", "Django", "QA & Testing", "Automation Systems",
  "GitHub / Bitbucket", "Vercel", "Firebase", "PostgreSQL",
  "Technical Documentation",
];

const projects = [
  {
    color: "#1E4D8C",
    type: "Mobile & Web App",
    title: "SAMA Medical App",
    role: "Flutter Developer · 2023",
    desc: "Member portal for South Africa's leading medical professional association. Built cross-platform for mobile and desktop with Flutter.",
    techs: ["Flutter", "Dart", "Firebase"],
    url: "https://members.samedical.org/",
    urlLabel: "View project",
    image: "/images/sama_1.png",
  },
  {
    color: "#D4542E",
    type: "Mobile & Desktop App",
    title: "E-Baking LMS",
    role: "Lead Flutter Developer · 2022",
    desc: "Culinary education platform for baking students — structured courses, progress tracking, and professional certifications.",
    techs: ["Flutter", "Dart", "Firebase"],
    url: "https://www.e-baking.co.za/",
    urlLabel: "View project",
    image: "/images/ebaking_1.png",
  },
  {
    color: "#009FE3",
    type: "Mobile App",
    title: "My JBay",
    role: "Flutter Developer · 2023",
    desc: "Local guide to Jeffreys Bay — beaches, surf spots, and events with integrated map functionality.",
    techs: ["Flutter", "Dart", "Google Maps API"],
    url: "https://github.com/keitawillmott/my-jbay",
    urlLabel: "View on GitHub",
    image: "/images/my_jbay.png",
  },
  {
    color: "#2B2B2B",
    type: "Mobile & Desktop App",
    title: "PostZone",
    role: "Full-Stack Developer · 2023",
    desc: "Order management system for field sales teams — place, track, and manage orders. Solo full-stack build.",
    techs: ["Flutter", "Dart", "Firebase"],
    url: "https://github.com/keitawillmott",
    urlLabel: "View on GitHub",
    image: "/images/postzone_card.png",
  },
  {
    color: "#4ECDC4",
    type: "Illustration",
    title: "Character Illustration",
    role: "Illustrator · 2023",
    desc: "Surfing character illustrations — Surfer Gal & Surfer Dude — created for Jones & Co. capturing the surfing lifestyle.",
    techs: ["Illustration", "Digital Art", "Character Design"],
    url: null,
    urlLabel: null,
    image: "/images/surfer_dude_no_background.png",
  },
];

const experience = [
  {
    period: "Sep 2025 – Present",
    title: "Junior Software Developer — QA, UX & Delivery Support",
    company: "Otomatika",
    meta: ["South Africa (Remote)", "Full-time · 10 mos"],
    bullets: [
      "Design user flows, automation processes, and system planning documentation using Figma and FigJam",
      "Manage and improve the release process for WhatsApp bot and automation system updates",
      "Implement structured testing procedures, release protocols, QA checklists, and documentation standards",
      "Handle onboarding, release support, task and ticket management, and deployment coordination",
      "Contribute to regression and unit testing; troubleshoot database-related issues",
      "Work with GitHub, Bitbucket, Django, Twilio, CodeCapsules, Vercel, and Python",
    ],
    skills: ["Quality Assurance", "UX Design", "Python", "Django", "Figma", "GitHub", "Bitbucket", "Project Management", "Twilio"],
  },
  {
    period: "Jul 2025 – Aug 2025",
    title: "Independent Contractor",
    company: "Otomatika",
    meta: ["South Africa (Hybrid)", "Contract · 2 mos"],
    bullets: [
      "Designed and implemented bot automation solutions to streamline processes",
      "Developed efficient, reliable, and scalable bot systems for client projects",
    ],
    skills: ["Back-End Development", "Bot Automation", "Database Management"],
  },
  {
    period: "Oct 2024 – Jul 2025",
    title: "Flutter Software Developer",
    company: "Barefoot Bytes",
    meta: ["Jeffreys Bay, Eastern Cape (Remote)", "Full-time · 10 mos"],
    bullets: [
      "Developed and managed a wide range of apps and websites across front-end and back-end",
      "Managed databases, ensured data integrity, and provided system support",
      "Led projects, communicated with clients, and managed multiple concurrent deadlines",
      "Identified and resolved bugs; supported and mentored other developers",
    ],
    skills: ["Flutter", "Front-End Development", "Back-End Development", "Project Management", "Database Management"],
  },
  {
    period: "Aug 2024 – Sep 2024",
    title: "Intern Developer",
    company: "Barefoot Bytes",
    meta: ["Jeffreys Bay, Eastern Cape (Remote)", "Part-time · 2 mos"],
    bullets: [
      "Contributed to mobile apps, desktop applications, and websites using Flutter and Dart",
      "Troubleshot UI issues, ensured responsive designs, and presented work to clients",
    ],
    skills: ["Flutter", "Front-End Development", "Team Collaboration"],
  },
  {
    period: "Jan 2024 – Aug 2024",
    title: "Assistant Manager",
    company: "Surf Lodge South Africa",
    meta: ["Jeffreys Bay, Eastern Cape (On-site)", "Part-time · 8 mos"],
    bullets: [
      "Managed check-in/check-out, guest activities, and administrative tasks including bookings and payments",
      "Supervised cleaners and garden staff; arranged transport for guests",
    ],
    skills: ["Administration", "Leadership", "Team Management"],
  },
  {
    period: "Oct 2022 – Oct 2023",
    title: "Customer Technical Support",
    company: "Hi5 Technologies",
    meta: ["South Africa (Remote)", "Full-time · 1 yr 1 mo"],
    bullets: [
      "Provided customer support via chat and email, addressing inquiries and resolving issues promptly",
      "Collaborated with cross-functional teams to resolve complex technical concerns",
    ],
    skills: ["Technical Support", "Troubleshooting", "Customer Support"],
  },
];

/* ─── page ─────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Nav />

      {/* ── HERO ──────────────────────────────────────── */}
      <section className="bg-[#1C1917] min-h-svh flex flex-col justify-end px-8 md:px-16 py-16 relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.035 }}
          preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pg" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0L0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pg)" />
        </svg>

        <div className="max-w-[1100px] relative animate-fade-up">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#01A896] border border-[#01A896] rounded-full px-4 py-1.5 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#01A896] shrink-0" />
            Product · UX · Software
          </div>

          <h1 className="font-serif text-[clamp(48px,7vw,96px)] leading-[0.95] font-normal text-[#F0EDE8] mb-7 tracking-tight text-balance">
            Keita Lee<br />
            <em className="text-[#01A896]">Willmott</em>
          </h1>

          <p className="text-lg leading-relaxed text-[#6B6460] max-w-[560px] mb-12 font-light">
            I make complex products feel simple — designing flows, improving data
            capture, and shipping work that holds up in the real world.
          </p>

          <div className="flex items-center gap-4 flex-wrap mb-16">
            <a href="#contact"
              className="px-6 py-3 bg-[#01A896] text-white text-sm font-semibold rounded-md hover:bg-[#019283] transition-colors">
              Get in touch
            </a>
            <a href="#projects"
              className="px-6 py-3 border border-[#3A3733] text-[#A09A95] text-sm font-semibold rounded-md hover:border-[#5A5652] transition-colors">
              View projects
            </a>
          </div>

          <div className="flex gap-10 flex-wrap pt-10 border-t border-[#2E2B28]">
            {[
              { num: "800–1k",     label: "daily user journeys\nthrough redesigned WhatsApp flows" },
              { num: "6+",         label: "products shipped\nfrom concept to release" },
              { num: "Full-cycle", label: "design, QA & delivery\nacross mobile & automation" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-serif text-[2.2rem] leading-none text-[#C07B3A]">{s.num}</div>
                <div className="text-xs text-[#5A5652] mt-1 leading-relaxed whitespace-pre-line">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────── */}
      <section id="about" className="px-8 md:px-16 py-24 bg-[#FAFAF8] border-t border-[#E2DDD7]">
        <div className="max-w-[860px] mx-auto">
          <Eyebrow>About</Eyebrow>
          <h2 className="font-serif text-[clamp(1.9rem,4.5vw,2.8rem)] leading-tight tracking-tight text-[#1C1917] mb-2">
            Full-cycle builder<br />across design &amp; code
          </h2>
          <p className="text-[1.07rem] leading-[1.8] text-[#1C1917] max-w-[660px] mt-6 mb-9">
            Product, UX, and software professional at Otomatika, where I build
            WhatsApp automation systems and digital products for fibertime™. I
            work across the full delivery cycle — designing user flows, planning
            automation, supporting QA, and collaborating with developers.
            Passionate about building user-focused digital products that balance
            usability with operational efficiency, and growing my expertise in
            Product Management, UX Design, and Software Development.
          </p>
          <p className="text-xs font-semibold tracking-[0.1em] uppercase text-[#A09A95] mb-3">
            Skills &amp; tools
          </p>
          <ul className="flex flex-wrap gap-2 p-0 list-none">
            {skills.map((s) => (
              <li key={s} className="text-[0.82rem] font-medium text-[#4A5E5C] bg-white border border-[#E2DDD7] rounded-full px-4 py-1.5">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── PROJECTS ──────────────────────────────────── */}
      <section id="projects" className="px-8 md:px-16 py-24 bg-white border-t border-[#E2DDD7]">
        <div className="max-w-[860px] mx-auto">
          <Eyebrow>Projects</Eyebrow>
          <h2 className="font-serif text-[clamp(1.9rem,4.5vw,2.8rem)] leading-tight tracking-tight text-[#1C1917] mb-2">
            Selected work
          </h2>
          <p className="text-base text-[#6B6460] max-w-[500px] mb-12 leading-relaxed">
            A selection of projects I&apos;ve designed and built — spanning mobile
            apps, automation systems, and learning platforms.
          </p>

          {/* Featured: fibertime */}
          <Link href="/work/fibertime/" className="block mb-6">
            <article className="bg-[#F8F9F7] rounded-2xl overflow-hidden border border-[#E2DDD7] hover:border-[#C8C4BC] hover:shadow-sm transition-all duration-200 group">
              <div className="h-1 w-full bg-[#1C1917]" />
              <div className="p-8 md:p-11 flex flex-col md:flex-row md:items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap mb-5">
                    <span className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-[#78716C] bg-[#F0EDE8] border border-[#E2DDD7] rounded-full px-3 py-1">
                      Featured Case Study
                    </span>
                    <span className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-[#78716C]">
                      UX &amp; QA · WhatsApp
                    </span>
                    <span className="text-[0.75rem] text-[#A09A95] font-medium">2025–2026</span>
                  </div>
                  <h3 className="font-serif text-[clamp(1.4rem,3vw,2rem)] leading-tight tracking-tight text-[#1C1917] mb-3 group-hover:text-[#3A3733] transition-colors">
                    fibertime™ WhatsApp Chatbot
                  </h3>
                  <p className="text-[0.97rem] leading-relaxed text-[#6B6460] max-w-[500px] mb-4">
                    800–1,000 router activations daily across South Africa — no
                    app download. I redesigned core flows, replaced a broken location
                    system, and shipped structured data-capture forms.
                  </p>
                  <span className="text-[0.8rem] font-semibold text-[#01A896]">
                    View case study →
                  </span>
                </div>
              </div>
            </article>
          </Link>

          {/* Yaga proactive project card */}
          <Link href="/work/yaga/" className="block mb-6">
            <article className="bg-[#F8F9F7] rounded-2xl overflow-hidden border border-[#E2DDD7] hover:border-[#C8C4BC] hover:shadow-sm transition-all duration-200 group">
              <div className="h-1 w-full bg-[#1C1917]" />
              <div className="p-8 md:p-11 flex flex-col md:flex-row md:items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap mb-5">
                    <span className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-[#78716C] bg-[#F0EDE8] border border-[#E2DDD7] rounded-full px-3 py-1">
                      Proactive Project
                    </span>
                    <span className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-[#78716C]">
                      UX Design · Mobile
                    </span>
                    <span className="text-[0.75rem] text-[#A09A95] font-medium">2024</span>
                  </div>
                  <h3 className="font-serif text-[clamp(1.4rem,3vw,2rem)] leading-tight tracking-tight text-[#1C1917] mb-3 group-hover:text-[#3A3733] transition-colors">
                    Yaga Listing &amp; Drop Flow
                  </h3>
                  <p className="text-[0.97rem] leading-relaxed text-[#6B6460] max-w-[500px] mb-4">
                    How I would streamline the seller upload experience to reduce
                    drop-offs while maintaining database integrity.
                  </p>
                  <span className="text-[0.8rem] font-semibold text-[#01A896]">
                    View project →
                  </span>
                </div>
              </div>
            </article>
          </Link>

          {/* Project grid */}
          <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))" }}>
            {projects.map((p) => (
              <article key={p.title} className="bg-[#F8F9F7] rounded-xl border border-[#E2DDD7] overflow-hidden flex flex-col hover:border-[rgba(1,168,150,0.3)] hover:shadow-md transition-all duration-150">
                <div className="h-[3px] w-full" style={{ background: p.color }} />
                <div className="relative h-36 bg-[#F0EDE8] overflow-hidden">
                  <Image src={p.image} alt={p.title} fill className="object-cover opacity-80" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-[0.68rem] font-bold tracking-[0.14em] uppercase text-[#01A896] mb-2">{p.type}</p>
                  <h3 className="font-serif text-[1.18rem] leading-tight text-[#1C1917] mb-2.5">{p.title}</h3>
                  <p className="text-[0.78rem] text-[#A09A95] mb-3">{p.role}</p>
                  <p className="text-[0.85rem] text-[#6B6460] leading-relaxed flex-1 mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.techs.map((t) => (
                      <span key={t} className="text-[0.75rem] font-semibold text-[#6B6460] border border-[#E2DDD7] rounded-md px-2 py-0.5">{t}</span>
                    ))}
                  </div>
                  {p.url && (
                    <a href={p.url} target="_blank" rel="noopener noreferrer"
                      className="text-[0.8rem] font-semibold text-[#01A896] hover:underline">
                      {p.urlLabel} →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ────────────────────────────────── */}
      <section id="experience" className="px-8 md:px-16 py-24 bg-[#FAFAF8] border-t border-[#E2DDD7]">
        <div className="max-w-[860px] mx-auto">
          <Eyebrow>Experience</Eyebrow>
          <h2 className="font-serif text-[clamp(1.9rem,4.5vw,2.8rem)] leading-tight tracking-tight text-[#1C1917] mb-2">
            Professional history
          </h2>
          <p className="text-base text-[#6B6460] max-w-[500px] mb-12 leading-relaxed">
            A career spanning software development, QA, UX design, customer
            support, and management — built across remote and on-site roles in
            South Africa.
          </p>

          <div className="relative">
            <div className="absolute left-0 top-2 bottom-0 w-px"
              style={{ background: "linear-gradient(180deg,#01A896 0%,rgba(1,168,150,0) 100%)" }} />

            {experience.map((exp) => (
              <div key={exp.period + exp.company} className="pl-8 pb-10 relative last:pb-0">
                <div className="absolute left-[-5px] top-1.5 w-[11px] h-[11px] rounded-full bg-[#FAFAF8] border-2 border-[#01A896]" />
                <div className="mb-3.5">
                  <p className="text-[0.75rem] font-semibold text-[#01A896] tracking-[0.06em] mb-1">{exp.period}</p>
                  <h3 className="font-serif text-[1.15rem] text-[#1C1917] leading-snug mb-0.5">{exp.title}</h3>
                  <p className="text-[0.85rem] text-[#6B6460] font-medium">{exp.company}</p>
                  <div className="flex gap-3 flex-wrap text-[0.75rem] text-[#A09A95] mt-1">
                    {exp.meta.map((m) => <span key={m}>{m}</span>)}
                  </div>
                </div>
                <div className="bg-white rounded-xl border border-[#E2DDD7] p-5">
                  <ul className="grid gap-1.5 mb-4 list-none p-0">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-[0.85rem] text-[#6B6460] leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-[#C07B3A] shrink-0 mt-2" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((s) => (
                      <span key={s} className="text-[0.72rem] font-medium text-[#6B6460] bg-[#FAFAF8] border border-[#E2DDD7] rounded-full px-2.5 py-1">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────── */}
      <section id="contact" className="px-8 md:px-16 py-24 bg-[#1C1917] border-t border-[#2E2B28]">
        <div className="max-w-[860px] mx-auto">
          <Eyebrow bright>Contact</Eyebrow>
          <h2 className="font-serif text-[clamp(1.9rem,4.5vw,2.8rem)] leading-tight tracking-tight text-[#F0EDE8] mb-2">
            Let&apos;s work together
          </h2>
          <p className="text-base text-[#6B6460] max-w-[500px] mb-12 leading-relaxed">
            Open to new opportunities and challenges. If you have a project or
            position that might be a good fit, reach out through any of the
            channels below.
          </p>

          <div className="grid gap-5 mb-9" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
            {[
              { icon: "📍", label: "Location", value: "Port Elizabeth, Eastern Cape, South Africa", href: null },
              { icon: "✉", label: "Email", value: "keitawillmott@gmail.com", href: "mailto:keitawillmott@gmail.com" },
              { icon: "📞", label: "Phone", value: "+27 61 843 4816", href: "tel:+27618434816" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4 p-5 bg-[#252220] rounded-xl border border-[#2E2B28]">
                <div className="w-10 h-10 rounded-md bg-[rgba(1,168,150,0.08)] flex items-center justify-center shrink-0 text-lg">{c.icon}</div>
                <div>
                  <p className="text-[0.72rem] font-semibold tracking-[0.1em] uppercase text-[#5A5652] mb-1">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="text-[0.92rem] font-medium text-[#01A896] hover:underline">{c.value}</a>
                  ) : (
                    <p className="text-[0.92rem] font-medium text-[#A09A95]">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 max-w-sm">
            <a href="mailto:keitawillmott@gmail.com"
              className="flex items-center justify-center gap-3.5 py-4 px-5 bg-[#01A896] text-white rounded-xl text-[0.92rem] font-semibold hover:bg-[#019283] transition-colors">
              ✉ &nbsp; Email me directly
            </a>
            <a href="https://www.linkedin.com/in/keita-willmott-a271062a5/" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3.5 py-4 px-5 bg-[#252220] text-[#A09A95] border border-[#3A3733] rounded-xl text-[0.92rem] font-semibold hover:bg-[#2E2B28] transition-colors">
              in &nbsp; Connect on LinkedIn
            </a>
            <a href="https://wa.me/27618434816" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3.5 py-4 px-5 bg-[#252220] text-[#A09A95] border border-[#3A3733] rounded-xl text-[0.92rem] font-semibold hover:bg-[#2E2B28] transition-colors">
              💬 &nbsp; Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────── */}
      <footer className="border-t border-[#2E2B28] bg-[#1C1917] py-8 text-center text-[0.8rem] text-[#5A5652]">
        <strong className="text-[#78716C] font-medium">Keita Lee Willmott</strong>
        {" "}— Product · UX · Software — Port Elizabeth, South Africa
      </footer>
    </>
  );
}

/* ─── small helpers ─────────────────────────────────────── */

function Eyebrow({ children, bright }: { children: React.ReactNode; bright?: boolean }) {
  return (
    <span className={`block text-[0.72rem] font-semibold tracking-[0.14em] uppercase mb-4 ${bright ? "text-[#01A896]" : "text-[#01A896]"}`}>
      {children}
    </span>
  );
}
