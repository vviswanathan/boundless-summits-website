import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import PullQuote from "@/components/PullQuote";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Vivek — the coach behind Boundless Summits. Learn about his journey from chasing someone else's race to helping professionals find and run their own.",
};

// Body paragraph: Inter 17.5px / lh 1.85 / #4B5563 / mb 22px — matches reference .body
const p = "font-inter text-[17.5px] leading-[1.85] text-[#4B5563] mb-[22px]";

export default function AboutPage() {
  return (
    <>
      <Nav activePage="/about" />

      <main>
        {/* ─── Section 1: Editorial Hero ─── */}
        <section className="bg-cream min-h-[60vh] flex items-center justify-center px-8 pt-[140px] pb-[100px] text-center">
          <div className="max-w-[820px] mx-auto">
            {/* Eyebrow */}
            <span
              className="block font-inter text-[11px] font-semibold uppercase text-copper mb-7"
              style={{ letterSpacing: "3px" }}
            >
              The Story
            </span>

            {/* Headline */}
            <h1
              className="font-fraunces italic font-light text-navy leading-[1.25] mb-9"
              style={{
                fontSize: "clamp(36px, 5.2vw, 56px)",
                letterSpacing: "-0.5px",
              }}
            >
              A few words about the person walking alongside you.
            </h1>

            {/* Copper divider */}
            <div className="w-[60px] h-px bg-copper mx-auto mb-9" />

            {/* Subline */}
            <p
              className="font-fraunces italic font-light text-[#4B5563] leading-[1.65] max-w-[600px] mx-auto"
              style={{ fontSize: "19px", letterSpacing: "0.1px" }}
            >
              Vivek&apos;s path to coaching — and the people walking it with him.
            </p>
          </div>
        </section>

        {/* ─── Section 2: The Road ─── */}
        <Section bg="cream-deep" eyebrow="The Road" heading="Twenty-five years on one road.">
          <p className={p}>
            I&apos;m Vivek. For a quarter century, I&apos;ve worked in IT — beginning as a
            developer, then a lead, an architect, and eventually moving into management.
            Each role taught me something different: how to build, how to guide, how to
            design, how to lead people through change.
          </p>
          <p className={p}>
            I loved the work. I still do. But somewhere along the way, the road started
            running me, instead of the other way around.
          </p>
        </Section>

        {/* ─── Section 3: The Hinge ─── */}
        <Section eyebrow="The Hinge" heading="The conversation that changed everything.">
          <p className={p}>
            In 2024, I sat down for a year-end performance review I wasn&apos;t expecting.
            My growth had quietly stalled — I had taken it for granted, the way you do
            when you&apos;re heads-down and moving fast.
          </p>
          <p className={p}>
            The supervisor sitting across from me was{" "}
            <strong className="font-semibold text-navy">Chris Welch</strong> — my first
            coach and well-wisher, though I didn&apos;t have that language for it yet.
            Chris didn&apos;t tell me what to do. He didn&apos;t hand me a development
            plan or a list of fixes. Instead, he asked me to consider what my strengths
            were. Where I actually wanted to go. What I had stopped paying attention to.
          </p>
          <PullQuote>I left that conversation different than I came in.</PullQuote>
          <p className={p}>
            It was the first time someone had made space for me to find my own answers —
            and the first time I understood, in my body, what coaching actually was.
          </p>
        </Section>

        {/* ─── Section 4: The Turn ─── */}
        <Section
          bg="cream-warmer"
          eyebrow="The Turn"
          heading="I signed up to give it away. It changed me first."
        >
          <p className={p}>
            Around that same time, Chris was beginning his own work with the Maxwell
            Leadership speaker track. I looked at the offerings and chose the coaching
            path — not for myself, but so I could give my team the same experience
            Chris had given me.
          </p>
          <p className={p}>
            Going through the Maxwell Leadership coach training, and then attending the
            International Maxwell Conference, was transformational in a way I hadn&apos;t
            anticipated. I walked in with a plan to learn techniques I could pass along.
            I walked out understanding that something deeper was being asked of me.
          </p>
          <p className={p}>
            Coaching, I was beginning to see, wasn&apos;t a tool I could simply pick up.
            It was a way of being with people.
          </p>
        </Section>

        {/* ─── Section 5: The Calling ─── */}
        <Section eyebrow="The Calling" heading="Becoming the coach my clients deserve.">
          <p className={p}>
            I never set out to build a coaching business. I genuinely wasn&apos;t sure
            people would pay for what I was learning to offer. But the more I trained,
            the more I saw how this work was changing lives — and the more I felt called
            to take it seriously.
          </p>
          <p className={p}>
            I joined the{" "}
            <strong className="font-semibold text-navy">CaPP Institute</strong> — the
            Coaching and Positive Psychology Institute — to begin the path toward my{" "}
            <strong className="font-semibold text-navy">ACC credential</strong> through
            the International Coaching Federation. CaPP&apos;s mission resonated deeply
            with me: equipping coaches to support resilience, personal growth, and human
            flourishing, grounded in the science of applied positive psychology.
          </p>
          <p className={p}>
            Somewhere in the middle of that training, the most important shift happened.
            My IT brain — trained for two and a half decades to diagnose problems and
            deliver solutions — had to learn a different posture. Coaching isn&apos;t
            about handing someone the answer. It&apos;s about staying curious. Listening
            actively. Asking the question that lets them discover what they already know.
          </p>
          <PullQuote>That shift is still happening. I imagine it always will be.</PullQuote>
        </Section>
      </main>

      <Footer />
    </>
  );
}
