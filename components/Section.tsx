import type { ReactNode } from "react";

const bgClasses = {
  cream: "bg-cream",
  "cream-deep": "bg-cream-deep",
  "cream-warmer": "bg-cream-warmer",
  navy: "bg-navy-deep text-cream",
} as const;

interface SectionProps {
  bg?: keyof typeof bgClasses;
  eyebrow?: string;
  heading?: string;
  wide?: boolean;
  children: ReactNode;
}

export default function Section({ bg = "cream", eyebrow, heading, wide = false, children }: SectionProps) {
  const isNavy = bg === "navy";

  return (
    <section className={`${bgClasses[bg]} px-8 py-[110px] relative`}>
      <div className={`${wide ? "max-w-[880px]" : "max-w-[820px]"} mx-auto`}>
        {eyebrow && (
          <span
            className={`block font-inter text-[11px] font-semibold uppercase mb-6 ${
              isNavy ? "text-copper-light" : "text-copper"
            }`}
            style={{ letterSpacing: "3px" }}
          >
            {eyebrow}
          </span>
        )}
        {heading && (
          <>
            <h2
              className={`font-fraunces italic font-normal leading-[1.25] mb-[40px] ${
                isNavy ? "text-cream" : "text-navy"
              }`}
              style={{
                fontSize: "clamp(30px, 4.2vw, 44px)",
                letterSpacing: "-0.4px",
              }}
            >
              {heading}
            </h2>
            <div className="w-[60px] h-px bg-copper mb-[40px]" />
          </>
        )}
        {children}
      </div>
    </section>
  );
}
