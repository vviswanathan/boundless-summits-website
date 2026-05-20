"use client";

import { useState } from "react";
import Link from "next/link";

const engagements = [
  {
    duration: "Three Months",
    sessions: "6 Sessions · Up to 14 Weeks",
    description:
      "A focused engagement for a specific transition or decision. Good for clients addressing a defined moment — a promotion, a career pivot, or a leadership challenge that needs clarity before it can move forward.",
    bestFor: "A defined moment that needs focused attention.",
    price: "Starting at $750",
    perSession: "~$125 per session",
    valueStatement:
      "Six sessions across up to fourteen weeks — enough time to name what's holding you back and take the first deliberate steps forward.",
    recommended: false,
  },
  {
    duration: "Six Months",
    sessions: "12 Sessions · Up to 28 Weeks",
    description:
      "Long enough for patterns to surface and shift. Short enough to maintain momentum. This is where most of the deepest work happens — where early insights compound into real change, and the rhythm of the work starts to feel natural.",
    bestFor: "Professionals ready for sustained, meaningful work.",
    price: "Starting at $1,500",
    perSession: "~$125 per session",
    valueStatement:
      "Twelve sessions over up to twenty-eight weeks. Long enough to go deep. Short enough to stay focused. If you're not sure which engagement to choose — start here.",
    recommended: true,
  },
  {
    duration: "Twelve Months",
    sessions: "24 Sessions · Up to 54 Weeks",
    description:
      "For clients investing in a longer arc of transformation. A twelve-month engagement gives us time to work through multiple layers — not just the presenting challenge, but the patterns underneath it, and the vision beyond it.",
    bestFor: "Leadership stretches, multi-stage transitions, or ongoing partnership.",
    price: "Starting at $2,800",
    perSession: "~$117 per session",
    valueStatement:
      "Twenty-four sessions across up to fifty-four weeks. The longest arc, the deepest work, and the most sustained partnership I offer.",
    recommended: false,
  },
];

export default function EngagementCards() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
      {engagements.map((eng, i) => (
        <div
          key={eng.duration}
          className="group cursor-pointer lg:[perspective:1200px] lg:h-[420px]"
          onMouseEnter={() => setFlipped(i)}
          onMouseLeave={() => setFlipped(null)}
          onClick={() => setFlipped(flipped === i ? null : i)}
        >
          {/* 3D flip container — preserve-3d + transition only on lg+ */}
          <div
            className={`relative w-full lg:h-full lg:[transform-style:preserve-3d] lg:transition-transform lg:duration-[650ms] lg:[transition-timing-function:cubic-bezier(0.4,0,0.2,1)] ${
              flipped === i ? "lg:[transform:rotateY(180deg)]" : ""
            }`}
          >
            {/* ── FRONT ── */}
            <div
              className={`relative flex flex-col px-[32px] pt-[36px] pb-0 rounded-sm bg-cream lg:absolute lg:inset-0 lg:[backface-visibility:hidden] ${
                eng.recommended
                  ? "border-[1.5px] border-copper"
                  : "border border-[rgba(27,42,78,0.10)]"
              }`}
            >
              {eng.recommended && (
                <div
                  className="absolute top-[-11px] left-6 bg-copper text-cream font-inter font-semibold uppercase px-3 py-[3px]"
                  style={{ fontSize: "9.5px", letterSpacing: "2px" }}
                >
                  Recommended
                </div>
              )}

              <div className="font-fraunces italic text-[28px] text-navy mb-2.5 tracking-[-0.3px]">
                {eng.duration}
              </div>
              <div
                className="font-inter font-semibold uppercase text-copper mb-6"
                style={{ fontSize: "11.5px", letterSpacing: "2px" }}
              >
                {eng.sessions}
              </div>
              <p className="font-inter text-[15px] leading-[1.65] text-[#4B5563]">
                {eng.description}
              </p>
              <div className="font-fraunces italic font-light text-[14.5px] text-[#4B5563] mt-[18px] pt-4 border-t border-[rgba(27,42,78,0.08)]">
                <em>{eng.bestFor}</em>
              </div>
              <div
                className="font-inter font-medium text-copper mt-auto pt-4 pb-6 flex items-center gap-1.5"
                style={{ fontSize: "12px", letterSpacing: "0.5px" }}
              >
                See the investment
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>

            {/* ── BACK ── */}
            <div
              className="relative flex flex-col overflow-hidden rounded-sm border border-[rgba(184,115,51,0.2)] mt-1 lg:mt-0 lg:absolute lg:inset-0 lg:[backface-visibility:hidden] lg:[transform:rotateY(180deg)]"
              style={{ backgroundColor: "#0F1B36" }}
            >
              {/* Subtle star atmosphere */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: [
                    "radial-gradient(1.5px 1.5px at 20% 25%, rgba(214,144,82,0.5) 0%, transparent 100%)",
                    "radial-gradient(1px 1px at 75% 15%, rgba(192,201,210,0.4) 0%, transparent 100%)",
                    "radial-gradient(1px 1px at 85% 70%, rgba(214,144,82,0.35) 0%, transparent 100%)",
                    "radial-gradient(1.5px 1.5px at 10% 80%, rgba(192,201,210,0.35) 0%, transparent 100%)",
                  ].join(", "),
                }}
              />

              <div className="relative z-10 flex flex-col h-full justify-between px-[32px] py-[36px]">
                <div>
                  <div
                    className="font-inter font-semibold uppercase text-copper-light mb-5"
                    style={{ fontSize: "10px", letterSpacing: "2.5px" }}
                  >
                    The Investment
                  </div>
                  <div
                    className="font-fraunces italic font-light text-cream leading-[1.2] mb-2 tracking-[-0.5px]"
                    style={{ fontSize: "clamp(32px, 4vw, 42px)" }}
                  >
                    {eng.price}
                  </div>
                  <div
                    className="font-inter font-medium text-copper-light mb-6"
                    style={{ fontSize: "13px", letterSpacing: "0.5px" }}
                  >
                    {eng.perSession}
                  </div>
                  <div className="w-10 h-px bg-copper opacity-60 mb-5" />
                  <p
                    className="font-inter text-[14.5px] leading-[1.65]"
                    style={{ color: "rgba(250,246,238,0.78)" }}
                  >
                    {eng.valueStatement}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="font-fraunces italic text-[16px] text-copper-light mt-6 border-b border-copper/40 pb-0.5 w-fit hover:text-cream transition-colors"
                >
                  Book a discovery call →
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
