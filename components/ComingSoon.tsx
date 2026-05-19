import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

interface ComingSoonProps {
  eyebrow?: string;
  heading: string;
  subline: string;
  activePage?: string;
}

export default function ComingSoon({
  eyebrow = "Coming Soon",
  heading,
  subline,
  activePage,
}: ComingSoonProps) {
  return (
    <>
      <Nav activePage={activePage} />

      <main>
        <section className="bg-cream min-h-[60vh] flex items-center justify-center px-8 pt-[140px] pb-[100px] text-center">
          <div className="max-w-[820px] mx-auto">
            <span
              className="block font-inter text-[11px] font-semibold uppercase text-copper mb-7"
              style={{ letterSpacing: "3px" }}
            >
              {eyebrow}
            </span>

            <h1
              className="font-fraunces italic font-light text-navy leading-[1.25] mb-9"
              style={{ fontSize: "clamp(36px, 5.2vw, 56px)", letterSpacing: "-0.5px" }}
            >
              {heading}
            </h1>

            <div className="w-[60px] h-px bg-copper mx-auto mb-9" />

            <p
              className="font-fraunces italic font-light text-[#4B5563] leading-[1.65] max-w-[600px] mx-auto mb-10"
              style={{ fontSize: "19px", letterSpacing: "0.1px" }}
            >
              {subline}
            </p>

            <Link
              href="/"
              className="font-inter text-[13px] font-medium text-copper border-b border-copper pb-px hover:text-copper-light hover:border-copper-light transition-colors"
            >
              Return to the homepage →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
