export default function WhatToExpect() {
  return (
    <section className="bg-cream-deep px-9 py-[90px]">
      <div className="max-w-[820px] mx-auto">
        <span className="block text-[11px] tracking-[0.32em] text-copper font-medium mb-6 uppercase text-center">
          What to Expect
        </span>

        <h2
          className="font-fraunces font-medium text-navy text-center mb-14 tracking-[-0.01em]"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)" }}
        >
          Here&apos;s what you can expect from me.
        </h2>

        <div className="font-fraunces text-[1.18rem] leading-[1.75] text-center" style={{ color: "var(--text-dark)" }}>
          <p className="italic text-navy font-medium text-[1.25rem] mb-7">
            I will listen without judgment, but with intent.
          </p>
          <p>
            I will stay curious, hold space, and trust you to lead the conversation. The work that needs to happen is yours — and you are fully capable of it. My role is to walk alongside you while you find your summit.
          </p>
        </div>
      </div>
    </section>
  );
}
