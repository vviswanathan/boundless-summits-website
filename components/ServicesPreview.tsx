import Link from "next/link";

export default function ServicesPreview() {
  return (
    <section className="bg-cream-warmer text-center px-9 py-[100px]">
      <div className="max-w-[820px] mx-auto">
        <span className="block text-[11px] tracking-[0.32em] text-copper font-medium mb-6 uppercase">
          Working Together
        </span>

        <h2
          className="font-fraunces font-medium text-navy mb-[18px] tracking-[-0.01em]"
          style={{ fontSize: "clamp(1.6rem, 3vw, 2.1rem)" }}
        >
          Working together looks different for everyone.
        </h2>

        <p
          className="font-fraunces text-[1.1rem] leading-[1.65] max-w-[560px] mx-auto mb-8"
          style={{ color: "var(--text-mid)" }}
        >
          Explore the ways we might work together — through one-on-one coaching, group programs, or something tailored to where you are.
        </p>

        <Link
          href="/services"
          className="inline-block bg-transparent text-navy border border-navy border-[1.5px] px-8 py-[14px] rounded text-sm font-medium tracking-[0.04em] transition-all hover:bg-navy hover:text-cream hover:-translate-y-0.5"
        >
          Explore Services
        </Link>
      </div>
    </section>
  );
}
