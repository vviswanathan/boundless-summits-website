import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Approach", href: "/approach" },
  { label: "Services", href: "/services" },
];

interface NavProps {
  activePage?: string;
}

export default function Nav({ activePage }: NavProps) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06]"
      style={{ background: "rgba(15, 27, 54, 0.85)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)" }}
    >
      <div className="max-w-[1200px] mx-auto px-9 py-3 flex justify-between items-center max-[820px]:px-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3.5">
          <div
            className="w-14 h-14 rounded-full bg-white flex items-center justify-center overflow-hidden flex-shrink-0 p-[5px]"
            style={{ border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/logo-icon.png"
                alt="Boundless Summits icon"
                fill
                className="object-contain"
                sizes="56px"
              />
            </div>
          </div>
          <div className="font-fraunces font-medium text-white text-[1.05rem] leading-[1.15] tracking-[0.005em]">
            Boundless Summits
            <small className="block font-inter text-[10px] tracking-[0.22em] text-copper-light uppercase mt-[3px] font-medium">
              Coaching Co.
            </small>
          </div>
        </Link>

        {/* Links */}
        <ul className="flex gap-9 list-none items-center">
          {navLinks.map(({ label, href }) => (
            <li key={href} className="max-[820px]:hidden">
              <Link
                href={href}
                className={`text-sm font-medium transition-colors hover:text-copper-light ${
                  activePage === href ? "text-copper-light" : "text-white/[0.78]"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="bg-copper text-white px-[22px] py-[11px] rounded text-[13.5px] font-medium transition-all hover:bg-copper-light hover:-translate-y-px hover:shadow-[0_6px_16px_rgba(184,115,51,0.4)]"
            >
              Begin a Conversation
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
