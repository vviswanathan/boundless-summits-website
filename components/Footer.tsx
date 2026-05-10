import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-darker px-9 pt-20 pb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
      {/* Top grid */}
      <div className="max-w-[1200px] mx-auto mb-14 grid gap-14 max-[800px]:grid-cols-1 max-[800px]:gap-10 max-[800px]:text-center" style={{ gridTemplateColumns: "auto 1fr 1fr 1fr" }}>

        {/* Brand */}
        <div className="flex items-center gap-[22px] max-[800px]:justify-center">
          <div className="w-[130px] h-[130px] rounded-full bg-white flex items-center justify-center overflow-hidden flex-shrink-0 p-[10px] shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
            <div className="relative w-full h-full">
              <Image
                src="/images/logo-icon.png"
                alt="Boundless Summits icon"
                fill
                className="object-contain"
                sizes="130px"
              />
            </div>
          </div>
          <div className="font-fraunces font-medium text-white text-[1.35rem] leading-[1.2]">
            Boundless Summits
            <small className="block font-inter text-[10.5px] tracking-[0.22em] text-copper-light uppercase mt-2 font-medium">
              Coaching Co. · LLC
            </small>
          </div>
        </div>

        {/* Explore */}
        <div className="text-sm">
          <div className="font-fraunces italic font-medium text-[0.95rem] text-copper-light mb-[18px] tracking-[0.02em]">
            Explore
          </div>
          <ul className="list-none space-y-[11px]">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Approach", href: "/approach" },
              { label: "Services", href: "/services" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-[13.5px] transition-colors hover:text-copper-light" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Begin */}
        <div className="text-sm">
          <div className="font-fraunces italic font-medium text-[0.95rem] text-copper-light mb-[18px] tracking-[0.02em]">
            Begin
          </div>
          <ul className="list-none space-y-[11px]">
            {[
              { label: "Discovery Call", href: "/contact" },
              { label: "Coaching Programs", href: "/services" },
              { label: "Group Sessions", href: "/services" },
            ].map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-[13.5px] transition-colors hover:text-copper-light" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div className="text-sm">
          <div className="font-fraunces italic font-medium text-[0.95rem] text-copper-light mb-[18px] tracking-[0.02em]">
            Connect
          </div>
          <p className="text-[13.5px] leading-[1.6] mb-3" style={{ color: "rgba(255,255,255,0.65)" }}>
            <a
              href="mailto:hello@boundlesssummits.com"
              className="pb-[1px] transition-colors hover:text-copper-light hover:border-copper-light"
              style={{ color: "rgba(255,255,255,0.85)", borderBottom: "1px solid rgba(255,255,255,0.2)" }}
            >
              hello@boundlesssummits.com
            </a>
          </p>
          <p className="text-[13.5px] leading-[1.6] mt-4" style={{ color: "rgba(255,255,255,0.65)" }}>
            A Texas-Based Business
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div
        className="max-w-[1200px] mx-auto pt-7 text-center text-[12px] tracking-[0.05em]"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)" }}
      >
        © 2026 Boundless Summits Coaching Co. LLC · All Rights Reserved
      </div>
    </footer>
  );
}
