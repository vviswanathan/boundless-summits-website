import Image from "next/image";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section id="cta" className="relative bg-cream text-center px-9 pt-[110px] pb-[110px] overflow-hidden">
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] max-w-[90%] opacity-10 pointer-events-none z-0">
        <Image
          src="/images/logo-icon.png"
          alt=""
          width={600}
          height={600}
          className="w-full h-auto"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-[820px] mx-auto">
        <p
          className="font-fraunces italic font-medium text-navy mb-12 leading-[1.3] tracking-[-0.01em]"
          style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
        >
          Sit back.
          <br />
          Let&apos;s start where you are.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-copper text-white px-10 py-[18px] rounded text-sm font-medium tracking-[0.05em] transition-all shadow-[0_6px_20px_rgba(184,115,51,0.25)] hover:bg-copper-light hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(184,115,51,0.35)]"
        >
          Begin a Conversation
        </Link>
      </div>
    </section>
  );
}
