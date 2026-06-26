import Image from "next/image";

export default function ContactSection() {
  return (
    <section id="contact" className="px-8 md:px-16 py-24 bg-[#1C1917] border-t border-[#2E2B28]">
      <div className="max-w-[860px] mx-auto">
        <span className="block text-[0.72rem] font-semibold tracking-[0.14em] uppercase mb-4 text-[#01A896]">
          Contact
        </span>
        <h2 className="font-serif text-[clamp(1.9rem,4.5vw,2.8rem)] leading-tight tracking-tight text-[#F0EDE8] mb-2">
          Let&apos;s work together
        </h2>
        <p className="text-base text-[#6B6460] max-w-[500px] mb-12 leading-relaxed">
          Open to new opportunities and challenges. If you have a project or
          position that might be a good fit, reach out through any of the
          channels below.
        </p>

        <div className="grid gap-5 mb-9" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
          {/* Location */}
          <div className="flex items-start gap-4 p-5 bg-[#252220] rounded-xl border border-[#2E2B28]">
            <div className="w-10 h-10 rounded-md bg-[rgba(1,168,150,0.08)] flex items-center justify-center shrink-0 text-lg">
              📍
            </div>
            <div>
              <p className="text-[0.72rem] font-semibold tracking-[0.1em] uppercase text-[#5A5652] mb-1">Location</p>
              <p className="text-[0.92rem] font-medium text-[#A09A95]">Port Elizabeth, Eastern Cape, South Africa</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 p-5 bg-[#252220] rounded-xl border border-[#2E2B28]">
            <div className="w-10 h-10 rounded-md bg-[rgba(1,168,150,0.08)] flex items-center justify-center shrink-0 overflow-hidden">
              <Image src="/images/gmail_logo.jpeg" alt="Gmail" width={28} height={28} className="object-cover rounded" />
            </div>
            <div>
              <p className="text-[0.72rem] font-semibold tracking-[0.1em] uppercase text-[#5A5652] mb-1">Email</p>
              <a href="mailto:keitawillmott@gmail.com" className="text-[0.92rem] font-medium text-[#01A896] hover:underline">
                keitawillmott@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 p-5 bg-[#252220] rounded-xl border border-[#2E2B28]">
            <div className="w-10 h-10 rounded-md bg-[rgba(1,168,150,0.08)] flex items-center justify-center shrink-0 text-lg">
              📞
            </div>
            <div>
              <p className="text-[0.72rem] font-semibold tracking-[0.1em] uppercase text-[#5A5652] mb-1">Phone</p>
              <a href="tel:+27618434816" className="text-[0.92rem] font-medium text-[#01A896] hover:underline">
                +27 61 843 4816
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 max-w-sm mx-auto">
          <a
            href="https://mail.google.com/mail/?view=cm&to=keitawillmott@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 py-4 px-5 bg-[#01A896] text-white rounded-xl text-[0.92rem] font-semibold hover:bg-[#019283] transition-colors"
          >
            <Image src="/images/gmail_logo.jpeg" alt="Gmail" width={20} height={20} className="rounded object-cover" />
            Email me directly
          </a>
          <a
            href="https://www.linkedin.com/in/keita-willmott-a271062a5/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 py-4 px-5 bg-[#252220] text-[#A09A95] border border-[#3A3733] rounded-xl text-[0.92rem] font-semibold hover:bg-[#2E2B28] transition-colors"
          >
            <Image src="/images/linked_in.png" alt="LinkedIn" width={20} height={20} className="object-contain" />
            Connect on LinkedIn
          </a>
          <a
            href="https://wa.me/27618434816"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 py-4 px-5 bg-[#252220] text-[#A09A95] border border-[#3A3733] rounded-xl text-[0.92rem] font-semibold hover:bg-[#2E2B28] transition-colors"
          >
            <Image src="/images/whatsapp.png" alt="WhatsApp" width={20} height={20} className="object-contain" />
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
