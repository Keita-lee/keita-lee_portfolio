import Nav from "./components/Nav";
import Link from "next/link";
import Image from "next/image";
import ContactSection from "./components/ContactSection";
import OrbitWidget from "./components/OrbitWidget";

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
    url: null,
    urlLabel: null,
    image: "/images/sama_1.png",
    imageFit: "cover" as const,
  },
  {
    color: "#D4542E",
    type: "Mobile & Desktop App",
    title: "E-Baking LMS",
    role: "Lead Flutter Developer · 2022",
    desc: "Culinary education platform for baking students — structured courses, progress tracking, and professional certifications.",
    techs: ["Flutter", "Dart", "Firebase"],
    url: null,
    urlLabel: null,
    image: "/images/ebaking_1.png",
    imageFit: "cover" as const,
  },
  {
    color: "#009FE3",
    type: "Mobile App",
    title: "My JBay",
    role: "Flutter Developer · 2023",
    desc: "Local guide to Jeffreys Bay — beaches, surf spots, and events with integrated map functionality.",
    techs: ["Flutter", "Dart", "Google Maps API"],
    url: null,
    urlLabel: null,
    image: "/images/my_jbay.png",
    imageFit: "cover" as const,
  },
  {
    color: "#2B2B2B",
    type: "Mobile & Desktop App",
    title: "PostZone",
    role: "Full-Stack Developer · 2023",
    desc: "Order management system for field sales teams — place, track, and manage orders. Solo full-stack build.",
    techs: ["Flutter", "Dart", "Firebase"],
    url: null,
    urlLabel: null,
    image: "/images/postzone_card.png",
    imageFit: "cover" as const,
  },
  {
    color: "#4ECDC4",
    type: "Illustration",
    title: "Character Illustration",
    role: "Illustrator · 2023",
    desc: "Surfing character illustrations — Surfer Gal & Surfer Dude — created for Jones & Co. capturing the surfing lifestyle.",
    techs: ["Illustration", "Digital Art", "Character Design"],
    url: "/work/illustration/",
    urlLabel: "View characters",
    image: "/images/surfer_dude_no_background.png",
    imageFit: "contain" as const,
  },
];

const experience = [
  {
    period: "Sep 2025 – Present",
    title: "Junior Software Developer | QA, UX & Delivery Support",
    company: "Otomatika",
    meta: ["South Africa (Remote)", "Full-time · 10 mos"],
    bullets: [
      "Design user flows, automation processes, and system planning documentation using Figma and FigJam",
      "Collaborate with development and operations teams to improve workflows and user experience",
      "Manage and improve the release process for WhatsApp bot and automation system updates",
      "Implement structured testing procedures, release protocols, QA checklists, documentation standards, and client communication processes",
      "Handle onboarding, release support, task and ticket management, and deployment coordination",
      "Contribute to regression and unit testing development",
      "Troubleshoot database-related issues and support automation and backend systems",
      "Work with GitHub, Bitbucket, Django, Twilio, CodeCapsules, Vercel, and Python",
    ],
    skills: ["Quality Assurance", "User Experience (UX)", "Python", "Django", "Figma", "GitHub", "Bitbucket", "Project Management", "Documentation", "Twilio"],
  },
  {
    period: "Jul 2025 – Aug 2025",
    title: "Independent Contractor",
    company: "Otomatika",
    meta: ["South Africa (Hybrid)", "Contract · 2 mos"],
    bullets: [
      "Designed and implemented bot automation solutions to streamline processes",
      "Developed efficient, reliable, and scalable bot systems",
      "Leveraged software development expertise to drive operational excellence",
      "Focused on Development Bot Automation for client projects",
    ],
    skills: ["Back-End Development", "Database Management System (DBMS)", "Bot Automation"],
  },
  {
    period: "Oct 2024 – Jul 2025",
    title: "Flutter Software Developer",
    company: "Barefoot Bytes",
    meta: ["Jeffreys Bay, Eastern Cape, South Africa (Remote)", "Full-time · 10 mos"],
    bullets: [
      "Developed and managed a wide range of apps and websites",
      "Worked on both front-end and back-end development",
      "Managed databases and ensured data integrity",
      "Provided system support and troubleshooting",
      "Identified and resolved bugs for high-quality code",
      "Communicated with clients and presented project updates",
      "Managed multiple projects and met deadlines",
      "Led projects and ensured successful delivery",
    ],
    skills: ["Project Management", "Software Development", "Front-End Development", "Flutter", "Communication", "Back-End Development", "Database Management System (DBMS)"],
  },
  {
    period: "Aug 2024 – Sep 2024",
    title: "Intern Developer",
    company: "Barefoot Bytes",
    meta: ["Jeffreys Bay, Eastern Cape, South Africa (Remote)", "Part-time · 2 mos"],
    bullets: [
      "Contributed to the development of mobile apps, desktop applications, and websites",
      "Used Flutter and Dart for front-end development",
      "Troubleshot UI issues and ensured responsive designs",
      "Collaborated with team members on real-world projects",
      "Solved problems and implemented solutions efficiently",
      "Presented projects to clients and received direct feedback",
      "Wrote clean, responsive, and scalable code",
    ],
    skills: ["Software Development", "Front-End Development", "Team Collaboration"],
  },
  {
    period: "Jan 2024 – Aug 2024",
    title: "Assistant Manager at Guest House",
    company: "Surf Lodge South Africa",
    meta: ["Jeffreys Bay, Eastern Cape, South Africa (On-site)", "Part-time · 8 mos"],
    bullets: [
      "Managed check-in and check-out processes for guests",
      "Organized and facilitated guest activities",
      "Served as primary host and performed maintenance tasks",
      "Prepared breakfast for guests on selected mornings",
      "Supervised cleaners and garden staff",
      "Arranged transport services for guests as needed",
      "Handled administrative tasks including bookings and payments",
    ],
    skills: ["Administration", "Leadership Development", "Team Management"],
  },
  {
    period: "Jan 2023 – Dec 2023",
    title: "Student",
    company: "Altitude Ministry Team",
    meta: ["South Africa (On-site)", "Apprenticeship · 1 yr"],
    bullets: [
      "Completed intensive discipleship training",
      "Explored and enhanced personal giftings and skills for ministry",
      "Completed a comprehensive leadership curriculum",
      "Engaged in intentional discipleship for spiritual development",
      "Delved into theological studies for practical application",
      "Participated in Oxygen Life Church's community life",
      "Undertook a ministry trip to Malawi and Zambia",
    ],
    skills: ["Leadership", "Teamwork", "Event Planning", "Event Setup"],
  },
  {
    period: "Oct 2022 – Oct 2023",
    title: "Customer Technical Support",
    company: "Hi5 Technologies",
    meta: ["South Africa (Remote)", "Full-time · 1 yr 1 mo"],
    bullets: [
      "Provided exceptional online customer support via chat and email",
      "Addressed inquiries and resolved issues promptly",
      "Identified and resolved customer concerns collaboratively",
      "Stayed updated on product offerings and industry trends",
      "Shared insights and best practices to enhance customer satisfaction",
      "Collaborated with cross-functional teams for issue resolution",
    ],
    skills: ["Technical Support", "Email", "Troubleshooting", "Customer Support"],
  },
  {
    period: "Oct 2021 – Dec 2021",
    title: "Intern",
    company: "Nobel Learning PBC",
    meta: ["Remote", "Internship · 3 mos"],
    bullets: [
      "Refined leadership skills by guiding team projects and facilitating discussions",
      "Developed and delivered compelling pitches and presentations",
      "Collaborated on comprehensive presentations for diverse stakeholders",
      "Navigated and resolved conflicts within the team",
      "Managed multiple responsibilities and deadlines effectively",
      "Took on leadership and facilitation roles in team projects",
    ],
    skills: ["Presentation Skills", "Project Management", "Leadership", "Teamwork"],
  },
];

/* ─── page ─────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Nav />

      {/* ── HERO ──────────────────────────────────────── */}
      <section className="bg-[#1C1917] min-h-svh flex flex-col justify-center items-center px-8 md:px-16 py-16 relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.035 }}
          preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pg" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0L0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pg)" />
        </svg>

        <div className="max-w-[1100px] w-full relative animate-fade-up text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#01A896] border border-[#01A896] rounded-full px-4 py-1.5 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#01A896] shrink-0" />
            Product · UX · Software
          </div>

          <h1 className="font-serif text-[clamp(48px,7vw,96px)] leading-[1.0] mb-7 tracking-tight text-balance">
            <span className="text-white">Keita</span>{" "}
            <span className="text-[#01A896]">Lee</span><br />
            <span className="text-white">Willmott</span>
          </h1>

          <p className="text-lg leading-relaxed text-[#6B6460] max-w-[560px] mx-auto mb-12 font-light">
            I make complex products feel simple — designing flows, improving data
            capture, and shipping work that holds up in the real world.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href="#contact"
              className="px-6 py-3 bg-[#01A896] text-white text-sm font-semibold rounded-md hover:bg-[#019283] transition-colors">
              Get in touch
            </a>
            <a href="#projects"
              className="px-6 py-3 border border-[#3A3733] text-[#A09A95] text-sm font-semibold rounded-md hover:border-[#5A5652] transition-colors">
              View projects
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────── */}
      <section id="about" className="px-8 md:px-16 py-24 bg-[#FAFAF8] border-t border-[#E2DDD7]">
        <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">

          {/* Left — text */}
          <div className="flex-1 min-w-0">
            <Eyebrow>About</Eyebrow>
            <h2 className="font-serif text-[clamp(1.9rem,4.5vw,2.8rem)] leading-tight tracking-tight text-[#1C1917] mb-2">
              Full-cycle builder<br />across design &amp; code
            </h2>
            <p className="text-[1.07rem] leading-[1.8] text-[#1C1917] mt-6 mb-9">
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

          {/* Right — orbit widget */}
          <div className="shrink-0 flex items-center justify-center">
            <OrbitWidget />
          </div>

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
                      Featured Project
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
                    View project →
                  </span>
                </div>
              </div>
            </article>
          </Link>

          {/* Spotify proactive project card */}
          <Link href="/work/spotify/" className="block mb-6">
            <article className="bg-[#F8F9F7] rounded-2xl overflow-hidden border border-[#E2DDD7] hover:border-[#C8C4BC] hover:shadow-sm transition-all duration-200 group">
              <div className="h-1 w-full bg-[#1DB954]" />
              <div className="p-8 md:p-11 flex flex-col md:flex-row md:items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap mb-5">
                    <span className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-[#78716C] bg-[#F0EDE8] border border-[#E2DDD7] rounded-full px-3 py-1">
                      Proactive Project
                    </span>
                    <span className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-[#78716C]">
                      UX Design · Mobile
                    </span>
                    <span className="text-[0.75rem] text-[#A09A95] font-medium">2026</span>
                  </div>
                  <h3 className="font-serif text-[clamp(1.4rem,3vw,2rem)] leading-tight tracking-tight text-[#1C1917] mb-3 group-hover:text-[#3A3733] transition-colors">
                    Spotify Discovery → Save Flow
                  </h3>
                  <p className="text-[0.97rem] leading-relaxed text-[#6B6460] max-w-[500px] mb-4">
                    When users save a track from Discover Weekly, the app doesn&apos;t
                    always make it findable again. I redesigned save as intent-based
                    actions with offline-aware sync.
                  </p>
                  <span className="text-[0.8rem] font-semibold text-[#01A896]">
                    View project →
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
                    <span className="text-[0.75rem] text-[#A09A95] font-medium">2026</span>
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
            {projects.map((p) => {
              const isIllustration = p.imageFit === "contain";
              const card = (
                <article key={p.title} className="bg-[#F8F9F7] rounded-xl border border-[#E2DDD7] overflow-hidden flex flex-col hover:border-[rgba(1,168,150,0.3)] hover:shadow-md transition-all duration-150 h-full">
                  <div className="h-[3px] w-full shrink-0" style={{ background: p.color }} />
                  <div className={`relative overflow-hidden shrink-0 ${isIllustration ? "h-48 bg-[#EEF9F8]" : "h-44 bg-[#F0EDE8]"}`}>
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className={isIllustration ? "object-contain p-4" : "object-cover object-top"}
                    />
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
                      <span className="text-[0.8rem] font-semibold text-[#01A896]">
                        {p.urlLabel} →
                      </span>
                    )}
                  </div>
                </article>
              );
              return p.url ? (
                <Link key={p.title} href={p.url} className="flex flex-col">{card}</Link>
              ) : (
                <div key={p.title} className="flex flex-col">{card}</div>
              );
            })}
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
      <ContactSection />

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
