import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import EngagementCards from "@/components/EngagementCards";
import HowItWorks from "@/components/HowItWorks";
import FinalCTA from "@/components/FinalCTA";

const p = "font-inter text-[17.5px] leading-[1.85] text-[#4B5563] mb-[22px]";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three coaching engagements — three, six, or twelve months — designed around the rhythm of real change. Starting with a free discovery call.",
};

export default function ServicesPage() {
  return (
    <>
      <Nav />

      <main>
        {/* ─── Section 1: Editorial Hero ─── */}
        <section className="bg-cream min-h-[60vh] flex items-center justify-center px-8 pt-[140px] pb-[100px] text-center">
          <div className="max-w-[820px] mx-auto">
            <span
              className="block font-inter text-[11px] font-semibold uppercase text-copper mb-7"
              style={{ letterSpacing: "3px" }}
            >
              The Work
            </span>

            <h1
              className="font-fraunces italic font-light text-navy leading-[1.25] mb-9"
              style={{
                fontSize: "clamp(36px, 5.2vw, 56px)",
                letterSpacing: "-0.5px",
              }}
            >
              The coaching engagements I offer.
            </h1>

            <div className="w-[60px] h-px bg-copper mx-auto mb-9" />

            <p
              className="font-fraunces italic font-light text-[#4B5563] leading-[1.65] max-w-[600px] mx-auto"
              style={{ fontSize: "19px", letterSpacing: "0.1px" }}
            >
              Three ways to begin. One commitment underneath all of them —
              that the work is yours, and I&apos;ll walk alongside you for
              every step of it.
            </p>
          </div>
        </section>

        {/* ─── Section 2: Before We Begin ─── */}
        <Section
          bg="cream-deep"
          eyebrow="Before We Begin"
          heading="Coaching is an investment in your own clarity."
        >
          <p className={p}>
            I don&apos;t offer one-off sessions. Not because I&apos;m
            inflexible, but because real shifts don&apos;t happen in
            a single conversation. They happen over time — when a
            pattern surfaces twice, when an insight from session three
            becomes the action in session seven, when you come back
            two weeks later and say{" "}
            <em className="font-fraunces italic text-copper">
              &ldquo;I tried it, and here&apos;s what I learned.&rdquo;
            </em>
          </p>
          <p className={p}>
            The engagements below are designed around that rhythm.
            Each one is biweekly — we meet every two weeks, giving
            you room to live with what surfaced and bring real
            experience back to the next session. Each one starts
            with a free discovery call, because the fit has to be
            right before either of us commits.
          </p>
          <p className={p}>
            The investment is real. So is the return — when the
            work is done honestly.
          </p>
        </Section>

        {/* ─── Section 3: The Engagements ─── */}
        <section className="bg-cream-warmer py-[110px] px-8">
          <div className="max-w-[1000px] mx-auto">
            <span
              className="block font-inter text-[11px] font-semibold uppercase text-copper mb-6"
              style={{ letterSpacing: "3px" }}
            >
              The Engagements
            </span>
            <h2
              className="font-fraunces italic font-normal text-navy leading-[1.25] mb-[40px]"
              style={{ fontSize: "clamp(30px, 4.2vw, 44px)", letterSpacing: "-0.4px" }}
            >
              Three ways to begin.
            </h2>
            <div className="w-[60px] h-px bg-copper mb-[40px]" />
            <p className="font-fraunces italic font-light text-[17px] text-[#4B5563] mb-12 tracking-[0.1px]">
              Hover over each engagement to see the investment —
              or tap if you&apos;re on a phone.
            </p>
            <EngagementCards />
          </div>
        </section>

        {/* ─── Section 4: What's Included ─── */}
        <Section
          bg="cream-deep"
          eyebrow="Every Engagement"
          heading="What's included across every package."
        >
          <ul className="list-none p-0 my-7">
            {[
              {
                strong: "Forty-five-minute sessions, biweekly",
                rest: (
                  <>
                    {" "}
                    <em className="font-fraunces italic text-copper text-[15px]">
                      (:05 to :50, with deliberate buffer before and after)
                    </em>
                  </>
                ),
              },
              {
                strong: "A clear session arc",
                rest: " — every conversation moves through agreement, comprehension, exploration, reflection, and action",
              },
              {
                strong: "Client-chosen commitments",
                rest: " between sessions — you decide what you're willing to act on; I don't assign homework",
              },
              {
                strong: "Email support",
                rest: " between sessions, with a two-business-day response window",
              },
              {
                strong: "Buffer time built into every engagement",
                rest: " — sessions are biweekly, but life happens. Vacations, travel, the unexpected. If you need to reschedule or pause, we'll work it out.",
              },
              {
                strong: "A free 30-minute discovery call",
                rest: " before any commitment is made",
              },
            ].map((item, i, arr) => (
              <li
                key={i}
                className={[
                  "relative pl-9 py-4 text-[16.5px] leading-[1.7] text-[#4B5563]",
                  "before:content-[''] before:absolute before:left-0 before:top-[28px]",
                  "before:w-6 before:h-px before:bg-copper",
                  i < arr.length - 1 ? "border-b border-[rgba(27,42,78,0.08)]" : "",
                ].join(" ")}
              >
                <strong className="font-semibold text-navy">{item.strong}</strong>
                {item.rest}
              </li>
            ))}
          </ul>

          <p className={p}>
            Sessions are conducted virtually. I&apos;m based in the{" "}
            <strong className="font-semibold text-navy">Plano–McKinney–Frisco</strong>
            {" "}area of North Texas and open to in-person sessions where it makes sense.
          </p>
        </Section>

        {/* ─── Section 5: Group Coaching Coming Soon ─── */}
        <div className="bg-cream py-[60px] px-8 text-center border-t border-b border-[rgba(27,42,78,0.07)]">
          <span className="block font-inter text-[11px] font-semibold uppercase tracking-[3px] text-copper mb-4">
            Coming Soon
          </span>
          <h3 className="font-fraunces italic font-normal text-[26px] text-navy mb-4 tracking-[-0.2px]">
            Group coaching is in development.
          </h3>
          <p className="font-inter text-[16px] leading-[1.7] text-[#4B5563] max-w-[600px] mx-auto">
            A group coaching offering for cohorts of professionals navigating similar
            moments — career transitions, leadership stretches, or early-career launches.
            If this interests you, mention it on your discovery call and I&apos;ll keep
            you informed as it takes shape.
          </p>
        </div>

        {/* ─── Section 6: How It Works ─── */}
        <Section bg="cream" eyebrow="How To Begin" heading="Three steps from here to the work." wide>
          <HowItWorks />
        </Section>

        {/* ─── Section 7: On Pricing ─── */}
        <Section bg="cream-warmer" eyebrow="On Pricing" heading="A few honest words about the investment.">
          <p className={p}>
            The rates above are starting points — reflecting where I am as a coach right
            now. Newly credentialed, deeply trained, and genuinely committed to the work.
            They reflect a real investment in a real partnership, not a commodity transaction.
          </p>
          <p className={p}>
            If you&apos;re a high schooler or early-career professional exploring coaching
            for the first time, reach out. I keep room in my practice for clients at the
            beginning of their path, and I&apos;m happy to have that conversation.
          </p>
        </Section>

        {/* ─── Closing Invitation ─── */}
        <FinalCTA
          headline="The right fit matters more than the right package."
          subline="Let's find out if we're a fit first."
          buttonLabel="Book a Discovery Call"
          buttonHref="/contact"
          tagline="Sit back. Let's start where you are."
        />
      </main>

      <Footer />
    </>
  );
}
