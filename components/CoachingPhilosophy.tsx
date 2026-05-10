import StarField from "./StarField";

const pillars = [
  {
    headline: "The answers are already within you.",
    body: "You carry the resilience, the lived experience, and the wisdom needed to navigate whatever you're facing. You may not see it clearly right now — but it's there.",
  },
  {
    headline: "The journey is yours. The direction is yours. The path is yours.",
    body: "My role isn't to lead you somewhere. It's to walk alongside you, asking questions that support your discovery. You hold the choices. You are responsible for your own path.",
  },
  {
    headline: "Coaching builds awareness — of your strengths, your patterns, and the possibilities you haven't yet explored.",
    body: "From that awareness, you generate your own ideas, decide what you're willing to act on, and reframe what once felt fixed. The shift happens in you — not from me.",
  },
];

export default function CoachingPhilosophy() {
  return (
    <section
      className="relative bg-navy text-cream px-9 pt-[110px] pb-[110px] overflow-hidden"
    >
      {/* Gradient overlays (replaces ::before) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(184,115,51,0.08) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(92,122,94,0.08) 0%, transparent 50%)",
        }}
      />

      <StarField />

      <div className="relative z-10 max-w-[820px] mx-auto">
        <span className="block text-[11px] tracking-[0.32em] text-copper-light font-medium mb-6 uppercase text-center">
          Coaching Philosophy
        </span>

        <h2
          className="font-fraunces font-medium text-white text-center mb-14 tracking-[-0.01em]"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)" }}
        >
          What I Believe About Coaching
        </h2>

        <div className="flex flex-col gap-12">
          {pillars.map((pillar, i) => (
            <div key={i} className="text-center">
              <p className="font-fraunces italic font-medium text-[1.4rem] text-copper-light mb-4 leading-[1.3]">
                {pillar.headline}
              </p>
              <p
                className="font-fraunces text-[1.08rem] leading-[1.75] max-w-[600px] mx-auto"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
