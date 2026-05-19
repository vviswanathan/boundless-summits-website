"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Approach", href: "/approach" },
  { label: "Services", href: "/services" },
];

interface NavProps {
  activePage?: string; // kept for backward compat; usePathname() is used internally
}

export default function Nav({ activePage: _ }: NavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* ── Desktop / shared navbar bar ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06]"
        style={{ background: "rgba(15, 27, 54, 0.85)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 min-[820px]:px-9 py-3 flex justify-between items-center">
          {/* Brand */}
          <Link href="/" onClick={closeMenu} className="flex items-center gap-3.5">
            <div
              className="w-14 h-14 rounded-full bg-white flex items-center justify-center overflow-hidden flex-shrink-0 p-[5px]"
              style={{ border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <div className="relative w-full h-full">
                <Image src="/images/logo-icon.png" alt="Boundless Summits icon" fill className="object-contain" sizes="56px" />
              </div>
            </div>
            <div className="font-fraunces font-medium text-white text-[1.05rem] leading-[1.15] tracking-[0.005em]">
              Boundless Summits
              <small className="block font-inter text-[10px] tracking-[0.22em] text-copper-light uppercase mt-[3px] font-medium">
                Coaching Co.
              </small>
            </div>
          </Link>

          {/* Right side */}
          <ul className="flex gap-9 list-none items-center">
            {/* Desktop nav links — hidden below 820px */}
            {navLinks.map(({ label, href }) => (
              <li key={href} className="max-[820px]:hidden">
                <Link
                  href={href}
                  className={`text-sm font-medium transition-colors hover:text-copper-light ${
                    isActive(href) ? "text-copper-light" : "text-white/[0.78]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}

            {/* Desktop CTA — hidden below 820px */}
            <li className="max-[820px]:hidden">
              <Link
                href="/contact"
                className="bg-copper text-white px-[22px] py-[11px] rounded text-[13.5px] font-medium transition-all hover:bg-copper-light hover:-translate-y-px hover:shadow-[0_6px_16px_rgba(184,115,51,0.4)]"
              >
                Begin a Conversation
              </Link>
            </li>

            {/* Hamburger — mobile only, visible below 820px */}
            <li className="min-[820px]:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation"
                className="flex flex-col justify-center items-center gap-[5px] w-10 h-10"
              >
                <span className="w-[22px] h-[1.5px] bg-white/80 rounded-full block" />
                <span className="w-[22px] h-[1.5px] bg-white/80 rounded-full block" />
                <span className="w-[22px] h-[1.5px] bg-white/80 rounded-full block" />
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* ── Backdrop — tapping closes the drawer ── */}
      <div
        onClick={closeMenu}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] min-[820px]:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
      />

      {/* ── Slide-out drawer ── */}
      <div
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        className={`fixed top-0 right-0 bottom-0 w-full max-w-[320px] z-[70] flex flex-col min-[820px]:hidden transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: "#0F1B36" }}
      >
        {/* Subtle starfield */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: [
              "radial-gradient(1px 1px at 15% 12%, rgba(250,246,238,0.45) 0%, transparent 100%)",
              "radial-gradient(1px 1px at 82% 22%, rgba(250,246,238,0.35) 0%, transparent 100%)",
              "radial-gradient(1.5px 1.5px at 50% 42%, rgba(250,246,238,0.4) 0%, transparent 100%)",
              "radial-gradient(1px 1px at 22% 65%, rgba(250,246,238,0.3) 0%, transparent 100%)",
              "radial-gradient(1px 1px at 78% 75%, rgba(250,246,238,0.35) 0%, transparent 100%)",
              "radial-gradient(1px 1px at 92% 52%, rgba(250,246,238,0.28) 0%, transparent 100%)",
              "radial-gradient(1.5px 1.5px at 35% 88%, rgba(250,246,238,0.38) 0%, transparent 100%)",
              "radial-gradient(1px 1px at 60% 30%, rgba(250,246,238,0.3) 0%, transparent 100%)",
            ].join(", "),
          }}
        />

        <div className="relative z-10 flex flex-col h-full px-8 pt-5 pb-10 overflow-y-auto">
          {/* Close button */}
          <div className="flex justify-end mb-6">
            <button
              onClick={closeMenu}
              aria-label="Close navigation"
              className="w-11 h-11 flex items-center justify-center rounded-full transition-colors hover:bg-white/10"
              style={{ color: "rgba(250,246,238,0.65)", fontSize: "20px", lineHeight: 1 }}
            >
              ✕
            </button>
          </div>

          {/* Brand in drawer */}
          <div className="text-center mb-10">
            <p className="font-fraunces italic font-light text-cream text-[1.5rem] leading-[1.2]">
              Boundless Summits
            </p>
            <p className="font-inter text-[10px] tracking-[0.22em] text-copper-light uppercase font-medium mt-2">
              Coaching Co.
            </p>
            <div className="w-[60px] h-px bg-copper mx-auto mt-6" />
          </div>

          {/* Nav links */}
          <nav className="flex flex-col items-center flex-1 gap-1">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className={`font-fraunces italic text-[28px] leading-none py-4 w-full text-center transition-colors hover:text-copper-light ${
                  isActive(href) ? "text-copper-light" : "text-cream"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA button at bottom of drawer */}
          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-8 w-full bg-copper text-cream text-center font-inter text-[13px] font-semibold uppercase tracking-[0.1em] py-4 rounded transition-colors hover:bg-copper-light"
          >
            Begin a Conversation
          </Link>
        </div>
      </div>
    </>
  );
}
