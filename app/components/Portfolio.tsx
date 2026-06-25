"use client";

import styles from "./Portfolio.module.css";
import OrbitWidget from "./OrbitWidget";
import Link from "next/link";

export default function Portfolio() {
  return (
    <>
      {/* ── Header ── */}
      <header className={styles.siteHeader}>
        <div className={styles.wrap}>
          <span className={styles.wordmark}>Keita Lee Willmott</span>
          <nav className={styles.siteNav} aria-label="Primary">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className={styles.hero} id="home" aria-label="Introduction">
        <div className={styles.wrap}>
          <div className={styles.heroBadge}>Product · UX · Software</div>
          <h1 className={styles.heroName}>
            Keita Lee
            <br />
            <em>Willmott</em>
          </h1>
          <p className={styles.heroTagline}>
            Crafting user-focused digital products — from WhatsApp automation
            flows to Flutter apps — built for the people who actually use them.
          </p>
          <div className={styles.heroCtas}>
            <a href="#contact" className={`${styles.btn} ${styles.btnFilled}`}>
              Get in touch
            </a>
            <a href="#projects" className={`${styles.btn} ${styles.btnOutline}`}>
              View projects
            </a>
          </div>
          <div className={styles.heroStatRow}>
            <div className={styles.heroStat}>
              <div className={styles.heroStatNum}>800–1k</div>
              <div className={styles.heroStatLabel}>
                router activations
                <br />
                processed per day
              </div>
            </div>
            <div className={styles.heroStat}>
              <div className={styles.heroStatNum}>6+</div>
              <div className={styles.heroStatLabel}>
                shipped products
                <br />
                across mobile &amp; web
              </div>
            </div>
            <div className={styles.heroStat}>
              <div className={styles.heroStatNum}>3+</div>
              <div className={styles.heroStatLabel}>
                years in Flutter
                <br />
                development
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className={`${styles.section}`} id="about" aria-label="About">
        <div className={styles.wrap}>
          <span className={styles.eyebrow}>About</span>
          <div style={{ display: "flex", gap: "clamp(32px,6vw,80px)", alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 260 }}>
              <h2 className={styles.sectionHeading}>
                Full-cycle builder
                <br />
                across design &amp; code
              </h2>
              <p className={styles.aboutBio}>
                Product, UX, and software professional at Otomatika, where I build
                WhatsApp automation systems and digital products for fibertime™. I
                work across the full delivery cycle — designing user flows, planning
                automation, supporting QA, and collaborating with developers.
                Passionate about building user-focused digital products that balance
                usability with operational efficiency, and growing my expertise in
                Product Management, UX Design, and Software Development.
              </p>
              <p className={styles.aboutSkillsLabel}>Skills &amp; tools</p>
              <ul className={styles.skillsList} aria-label="Skills">
                {[
                  "Flutter & Dart",
                  "Product Planning",
                  "UX Design",
                  "Figma & FigJam",
                  "Python",
                  "Django",
                  "QA & Testing",
                  "Automation Systems",
                  "GitHub / Bitbucket",
                  "Vercel",
                  "Firebase",
                  "PostgreSQL",
                  "Technical Documentation",
                ].map((skill) => (
                  <li key={skill} className={styles.skillChip}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ flexShrink: 0, alignSelf: "center" }}>
              <OrbitWidget />
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section className={styles.section} id="projects" aria-label="Projects">
        <div className={styles.wrap}>
          <span className={styles.eyebrow}>Projects</span>
          <h2 className={styles.sectionHeading}>Selected work</h2>
          <p className={styles.sectionSub}>
            A selection of projects I've designed and built — spanning mobile
            apps, automation systems, and learning platforms.
          </p>

          {/* Featured: fibertime */}
          <article
            className={styles.featuredCard}
            aria-label="Featured project: WhatsApp Chatbot"
          >
            <div className={styles.featuredAccentBar} />
            <div className={styles.featuredBody}>
              <div className={styles.featuredMeta}>
                <span className={`${styles.tag} ${styles.tagFeatured}`}>
                  ★ Featured
                </span>
                <span className={`${styles.tag} ${styles.tagType}`}>
                  WhatsApp Bot
                </span>
                <span className={styles.featuredYear}>2025–2026</span>
              </div>
              <h3 className={styles.featuredTitle}>
                fibertime™ WhatsApp Chatbot
              </h3>
              <p className={styles.featuredRole}>UX Designer &amp; QA Lead</p>
              <p className={styles.featuredDesc}>
                fibertime™ processes 800–1,000 router activations daily across
                South Africa — all through a WhatsApp bot that requires no app
                download. I joined as UX designer and QA lead to redesign core
                interaction flows, replace a broken location system, and ship
                structured data-capture forms that cut manual entry errors.
              </p>

              <div className={styles.featuredImpact}>
                <span className={styles.featuredImpactNum}>800–1,000</span>
                <span className={styles.featuredImpactLabel}>
                  activations per day
                  <br />
                  processed through the bot
                </span>
              </div>

              <p className={styles.subsectionLabel}>Problems solved</p>
              <div className={styles.problemsGrid}>
                {[
                  {
                    num: "01",
                    label: "Location accuracy",
                    title: "OnMap assigned agents to the wrong address",
                    desc: "The existing location system was unreliable in high-density areas — field agents regularly arrived at incorrect addresses, wasting time and delaying activations.",
                  },
                  {
                    num: "02",
                    label: "Data entry errors",
                    title: "Customer details typed freehand into chat",
                    desc: "Agents manually typed names, phone numbers, and contact details as WhatsApp messages — no structure, no validation, and errors that reached back-office systems.",
                  },
                  {
                    num: "03",
                    label: "Accessibility gap",
                    title: "The tool wasn't built for the people using it",
                    desc: "Field agents and customers across high-density communities needed a tool that worked on any Android without downloading an app. WhatsApp meets them where they are.",
                  },
                ].map((p) => (
                  <div key={p.num} className={styles.problemItem}>
                    <div className={styles.problemLabel}>
                      {p.num} — {p.label}
                    </div>
                    <div className={styles.problemTitle}>{p.title}</div>
                    <div className={styles.problemDesc}>{p.desc}</div>
                  </div>
                ))}
              </div>

              <blockquote className={styles.featuredInsight}>
                Key insight: replace sequential free-text questions with a
                native WhatsApp form template — capturing all customer
                information through a single, guided form instead of an
                open-ended back-and-forth.
              </blockquote>

              <p className={styles.subsectionLabel}>Key features</p>
              <div className={styles.featuresGrid}>
                {[
                  {
                    title: "Location-Based Assignment",
                    desc: "Agent shares live location; system displays nearby homes on a map for efficient routing.",
                  },
                  {
                    title: "Home Assignment via FTM API",
                    desc: "Agent selects a home from the map; system assigns it through the FTM API, syncing with back-office.",
                  },
                  {
                    title: "Structured Data Capture",
                    desc: "Captures customer name, phone numbers, and contact details during activation — no paperwork.",
                  },
                  {
                    title: "AI-Powered Device Capture",
                    desc: "Uses AI OCR to extract DR and Serial Numbers directly from a router photo, eliminating manual entry errors.",
                  },
                ].map((f) => (
                  <div key={f.title} className={styles.featureItem}>
                    <div className={styles.featureTitle}>{f.title}</div>
                    <div className={styles.featureDesc}>{f.desc}</div>
                  </div>
                ))}
              </div>

              <p className={styles.subsectionLabel}>QA process (every release)</p>
              <ul className={styles.qaList} aria-label="QA process">
                {[
                  "Users informed of upcoming changes before each release",
                  "Client demo with hands-on testing opportunity",
                  "Deployment ticket created with full update documentation",
                  "Developer and product documentation updated",
                  "All flows tested on UAT number before go-live",
                  "Figma flows updated to reflect the shipped state",
                  "Regression testing completed across all four bot flows",
                ].map((item) => (
                  <li key={item} className={styles.qaItem}>
                    {item}
                  </li>
                ))}
              </ul>

              <p className={styles.subsectionLabel}>Technologies</p>
              <div className={styles.techChips}>
                {[
                  "Figma",
                  "FigJam",
                  "Django",
                  "Twilio",
                  "Python",
                  "GitHub",
                  "Bitbucket",
                  "WhatsApp Business API",
                ].map((t) => (
                  <span key={t} className={styles.techChip}>
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="https://fibertime.com/"
                className={styles.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit fibertime.com →
              </a>
            </div>
          </article>

          {/* Yaga case study card */}
          <Link href="/work/yaga/" style={{ textDecoration: "none", display: "block", marginBottom: 24 }}>
            <article className={styles.featuredCard} style={{ marginBottom: 0 }}>
              <div style={{ height: 4, background: "#1C2B2A", width: "100%" }} />
              <div className={styles.featuredBody}>
                <div className={styles.featuredMeta}>
                  <span className={`${styles.tag} ${styles.tagFeatured}`} style={{ background: "rgba(28,43,42,0.06)", color: "#4A5E5C", borderColor: "rgba(28,43,42,0.2)" }}>
                    Case Study
                  </span>
                  <span className={`${styles.tag} ${styles.tagType}`}>UX Design · Mobile</span>
                  <span className={styles.featuredYear}>2024</span>
                </div>
                <h3 className={styles.featuredTitle} style={{ fontSize: "clamp(1.3rem,3vw,1.8rem)" }}>
                  Yaga Listing &amp; Drop Flow
                </h3>
                <p className={styles.featuredRole}>UX Designer</p>
                <p className={styles.featuredDesc}>
                  Streamlining the seller upload experience to reduce drop-offs while
                  maintaining database integrity. Conditional form logic, image compression
                  edge cases, and database-aware UI design.
                </p>
                <span className={styles.projectLink}>View case study →</span>
              </div>
            </article>
          </Link>

          {/* Regular project grid */}
          <div className={styles.projectsGrid}>
            {[
              {
                color: "#1E4D8C",
                type: "Mobile & Web App",
                title: "SAMA Medical App",
                role: "Flutter Developer · 2023",
                desc: "Member portal for South Africa's leading medical professional association. Built cross-platform for mobile and desktop with Flutter.",
                techs: ["Flutter", "Dart", "Firebase"],
                url: "https://members.samedical.org/",
                urlLabel: "View project",
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
              },
            ].map((p) => (
              <article key={p.title} className={styles.projectCard}>
                <div
                  className={styles.projectCardAccent}
                  style={{ background: p.color }}
                />
                <div className={styles.projectCardBody}>
                  <p className={styles.projectCardType}>{p.type}</p>
                  <h3 className={styles.projectCardTitle}>{p.title}</h3>
                  <p className={styles.projectCardRole}>{p.role}</p>
                  <p className={styles.projectCardDesc}>{p.desc}</p>
                  <div className={styles.techChips}>
                    {p.techs.map((t) => (
                      <span key={t} className={styles.techChip}>
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.url && (
                    <a
                      href={p.url}
                      className={styles.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {p.urlLabel} →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section className={styles.section} id="experience" aria-label="Experience">
        <div className={styles.wrap}>
          <span className={styles.eyebrow}>Experience</span>
          <h2 className={styles.sectionHeading}>Professional history</h2>
          <p className={styles.sectionSub}>
            A career spanning software development, QA, UX design, customer
            support, and management — built across remote and on-site roles in
            South Africa.
          </p>

          <div className={styles.timeline} role="list">
            {[
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
                skills: [
                  "Quality Assurance",
                  "UX Design",
                  "Python",
                  "Django",
                  "Figma",
                  "GitHub",
                  "Bitbucket",
                  "Project Management",
                  "Twilio",
                ],
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
                skills: [
                  "Back-End Development",
                  "Bot Automation",
                  "Database Management",
                ],
              },
              {
                period: "Oct 2024 – Jul 2025",
                title: "Flutter Software Developer",
                company: "Barefoot Bytes",
                meta: [
                  "Jeffreys Bay, Eastern Cape (Remote)",
                  "Full-time · 10 mos",
                ],
                bullets: [
                  "Developed and managed a wide range of apps and websites across front-end and back-end",
                  "Managed databases, ensured data integrity, and provided system support",
                  "Led projects, communicated with clients, and managed multiple concurrent deadlines",
                  "Identified and resolved bugs; supported and mentored other developers",
                ],
                skills: [
                  "Flutter",
                  "Front-End Development",
                  "Back-End Development",
                  "Project Management",
                  "Database Management",
                ],
              },
              {
                period: "Aug 2024 – Sep 2024",
                title: "Intern Developer",
                company: "Barefoot Bytes",
                meta: [
                  "Jeffreys Bay, Eastern Cape (Remote)",
                  "Part-time · 2 mos",
                ],
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
                meta: [
                  "Jeffreys Bay, Eastern Cape (On-site)",
                  "Part-time · 8 mos",
                ],
                bullets: [
                  "Managed check-in/check-out, guest activities, and administrative tasks including bookings and payments",
                  "Supervised cleaners and garden staff; arranged transport for guests",
                ],
                skills: ["Administration", "Leadership", "Team Management"],
              },
              {
                period: "Jan 2023 – Dec 2023",
                title: "Student — Ministry Team",
                company: "Altitude / Oxygen Life Church",
                meta: ["South Africa", "Apprenticeship · 1 yr"],
                bullets: [
                  "Completed intensive discipleship and leadership curriculum",
                  "Undertook a month-long ministry trip to Malawi and Zambia",
                ],
                skills: ["Leadership", "Teamwork", "Event Planning"],
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
                skills: [
                  "Technical Support",
                  "Troubleshooting",
                  "Customer Support",
                ],
              },
              {
                period: "Oct 2021 – Dec 2021",
                title: "Intern",
                company: "Nobel Learning PBC",
                meta: ["Remote", "Internship · 3 mos"],
                bullets: [
                  "Developed and delivered pitches and presentations for diverse stakeholders",
                  "Led team initiatives, refined leadership skills, and navigated team conflicts",
                ],
                skills: [
                  "Presentation Skills",
                  "Project Management",
                  "Leadership",
                ],
              },
            ].map((exp) => (
              <div key={exp.period + exp.company} className={styles.timelineItem} role="listitem">
                <div className={styles.timelineDot} aria-hidden="true" />
                <div className={styles.timelineHeader}>
                  <p className={styles.timelinePeriod}>{exp.period}</p>
                  <h3 className={styles.timelineTitle}>{exp.title}</h3>
                  <p className={styles.timelineCompany}>{exp.company}</p>
                  <div className={styles.timelineMeta}>
                    {exp.meta.map((m) => (
                      <span key={m}>{m}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.timelineBody}>
                  <ul className={styles.timelineBullets} aria-label="Responsibilities">
                    {exp.bullets.map((b) => (
                      <li key={b} className={styles.timelineBullet}>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.timelineSkills}>
                    {exp.skills.map((s) => (
                      <span key={s} className={styles.skillTag}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className={styles.section} id="contact" aria-label="Contact">
        <div className={styles.wrap}>
          <span className={styles.eyebrow}>Contact</span>
          <h2 className={styles.sectionHeading}>Let's work together</h2>
          <p className={styles.sectionSub}>
            Open to new opportunities and challenges. If you have a project or
            position that might be a good fit, reach out through any of the
            channels below.
          </p>

          <div className={styles.contactGrid}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon} aria-hidden="true">📍</div>
              <div>
                <p className={styles.contactLabel}>Location</p>
                <p className={styles.contactValue}>
                  Port Elizabeth, Eastern Cape, South Africa
                </p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon} aria-hidden="true">✉</div>
              <div>
                <p className={styles.contactLabel}>Email</p>
                <p className={styles.contactValue}>
                  <a href="mailto:keitawillmott@gmail.com">
                    keitawillmott@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon} aria-hidden="true">📞</div>
              <div>
                <p className={styles.contactLabel}>Phone</p>
                <p className={styles.contactValue}>
                  <a href="tel:+27618434816">+27 61 843 4816</a>
                </p>
              </div>
            </div>
          </div>

          <div className={styles.contactActions}>
            <a href="mailto:keitawillmott@gmail.com" className={styles.contactBtn}>
              ✉ &nbsp; Email me directly
            </a>
            <a
              href="https://www.linkedin.com/in/keita-willmott-a271062a5/"
              className={`${styles.contactBtn} ${styles.contactBtnSecondary}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              in &nbsp; Connect on LinkedIn
            </a>
            <a
              href="https://wa.me/27618434816"
              className={`${styles.contactBtn} ${styles.contactBtnSecondary}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 &nbsp; Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className={styles.siteFooter}>
        <div className={styles.wrap}>
          <p>
            <strong>Keita Lee Willmott</strong> — Product · UX · Software —
            Port Elizabeth, South Africa
          </p>
        </div>
      </footer>
    </>
  );
}
