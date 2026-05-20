import type { ReactNode } from "react";

const steps: { number: string; title: string; subtitle: string; desc: ReactNode }[] = [
  {
    number: "①",
    title: "The Discovery Call",
    subtitle: "Free · 30 Minutes",
    desc: "We talk. No commitment, no agenda beyond getting to know each other. You tell me what's bringing you to coaching; I listen, ask a few questions, and we both get a sense of whether the chemistry and the timing feel right. If it does, we'll decide together which engagement fits your moment. If it doesn't, I'll say so — and point you somewhere better if I can.",
  },
  {
    number: "②",
    title: "Choose Your Engagement",
    subtitle: "Your Pace · Your Moment",
    desc: "If the discovery call feels right, we move forward. You choose the engagement that fits your moment. I'll send a simple agreement and an invoice. No pressure, no hard sell. The right fit matters more to me than a signed contract.",
  },
  {
    number: "③",
    title: "The Work Begins",
    subtitle: "Session One",
    desc: (
      <>
        Your first session opens with one question:{" "}
        <em className="font-fraunces italic text-copper">
          &ldquo;What would you like to focus on today?&rdquo;
        </em>
        {" "}From there, the work is yours. I&apos;ll walk alongside you — curious,
        present, and paying attention to the things you might not notice yet.
      </>
    ),
  },
];

export default function HowItWorks() {
  return (
    <div className="relative mt-5 grid grid-cols-1 lg:grid-cols-3 gap-9 lg:gap-12">
      {/* Connecting line — desktop only, behind circles via z-index */}
      <div
        className="hidden lg:block absolute h-px opacity-[0.35] pointer-events-none"
        style={{
          top: "28px",
          left: "calc(16.67% + 30px)",
          right: "calc(16.67% + 30px)",
          background: "linear-gradient(to right, #B87333, rgba(184,115,51,0.3), #B87333)",
        }}
      />

      {steps.map((step) => (
        <div key={step.title} className="relative">
          {/* Circled number */}
          <div className="w-14 h-14 rounded-full bg-cream border-[1.5px] border-copper flex items-center justify-center relative z-[2]">
            <span className="font-fraunces italic font-light text-[22px] text-copper">
              {step.number}
            </span>
          </div>

          <div className="font-fraunces italic font-normal text-[22px] text-navy mt-6 mb-1 tracking-[-0.2px] leading-[1.3]">
            {step.title}
          </div>
          <div
            className="font-inter font-semibold uppercase text-copper mb-4"
            style={{ fontSize: "11.5px", letterSpacing: "1.5px" }}
          >
            {step.subtitle}
          </div>
          <p className="font-inter text-[15.5px] leading-[1.7] text-[#4B5563]">
            {step.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
