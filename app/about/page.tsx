import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import PullQuote from "@/components/PullQuote";
import CredentialList from "@/components/CredentialList";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Vivek — the coach behind Boundless Summits. Learn about his journey from chasing someone else's race to helping professionals find and run their own.",
};

// Cream-section body: Inter 17.5px / lh 1.85 / text-mid #4B5563
const p = "font-inter text-[17.5px] leading-[1.85] text-[#4B5563] mb-[22px]";
// Navy-section body: same scale, cream at 82% opacity (readable on dark bg)
const pNavy = "font-inter text-[17.5px] leading-[1.85] text-cream/[82] mb-[22px]";

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

        {/* ─── Section 6: Training & Credentials ─── */}
        <Section
          bg="cream-deep"
          wide
          eyebrow="For The Record"
          heading="Training & Credentials."
        >
          <CredentialList
            title="Coaching and Positive Psychology Institute (CaPP)"
            items={[
              { text: "Coach Training Intensive", status: "Completed" },
              { text: "Business Development Day", status: "Completed" },
              {
                text: "Certified Personal and Executive Coach (CPEC) Program",
                status: "In progress, completing June 2026",
              },
              {
                text: "Mentor Coaching Engagement (MCE): 7 hours of group mentor coaching with peer coaches and 3 one-on-one sessions with a Professional Certified Coach (PCC)",
                status: "In progress",
              },
            ]}
          />

          <CredentialList
            title="Maxwell Leadership"
            items={[
              { text: "Maxwell Leadership Team Certified Coach", status: "Completed" },
              { text: "Speaker Training", status: "In progress" },
            ]}
          />

          <CredentialList
            title="Credentialing Path"
            items={[
              {
                text: "Pursuing Associate Certified Coach (ACC) credential through the International Coaching Federation (ICF)",
              },
            ]}
          />

          <CredentialList
            title="Professional Background"
            items={[
              {
                text: "25 years in Information Technology — Developer → Lead → Architect → Manager",
              },
            ]}
          />
        </Section>

        {/* ─── Section 7: Honest Notes (navy) ─── */}
        <Section
          bg="navy"
          eyebrow="Honest Notes"
          heading="Walking alongside, still walking my own path."
        >
          <p className={pNavy}>I&apos;ll be honest with you about who I am.</p>

          <p className={pNavy}>
            I&apos;m an introvert by nature — someone who has always watched the room,
            listened for where the conversation was going, and waited until I had
            something worth saying before pitching in. That instinct made me a careful
            observer. It also, for a long time, made me hesitant to lean in.
          </p>

          <p className={pNavy}>
            Coaching has asked me to grow. To contribute sooner. To meet a moment with
            curiosity rather than wait for certainty. I&apos;m working on storytelling —
            on the discipline of using a metaphor when it serves the client better than
            a sentence. I&apos;m working on being fully present without trying to fix.
          </p>

          <p className={pNavy}>
            I share this because the philosophy at the heart of Boundless Summits —{" "}
            <em>the answers are already within you</em> — isn&apos;t something I learned
            from a textbook. It&apos;s something I&apos;m living. I&apos;m still walking
            my own path, and I think that&apos;s part of what makes me useful to clients
            walking theirs.
          </p>

          <PullQuote>
            You don&apos;t need a coach who has it all figured out. You need a coach who
            is genuinely on the road with you.
          </PullQuote>
        </Section>

        {/* ─── Section 8: The Co-founder ─── */}
        <Section
          bg="cream-warmer"
          eyebrow="The Co-founder"
          heading="The co-founder I met twenty-five years ago."
        >
          <p className={p}>
            I met <strong className="font-semibold text-navy">Prathiba</strong> at my
            first job. We connected almost instantly, and have been partners in every
            sense ever since.
          </p>

          <p className={p}>
            She built a seven-year career in IT before pausing in 2008 when our older
            son was born. When our younger son started school, she rebuilt — this time as
            a Montessori teacher, choosing work that kept her close to the boys. Years
            later, when our youngest started middle school, she returned to IT, where
            she&apos;s now thriving in a successful career.
          </p>

          <p className={p}>
            Watching her navigate three careers across two decades has been one of the
            great teachings of my life. Prathiba does whatever she does with full
            presence and genuine love for it. She treats every person — regardless of
            background, role, or title — with deep respect. She gives, constantly,
            without keeping score. And somehow she balances career, family, and the quiet
            work of being the steady center of our home, with a grace I&apos;m still
            learning from.
          </p>

          <p className={p}>
            When I came home from the International Maxwell Conference, the only person I
            could think to share this work with was Prathiba. Because I&apos;d watched
            her with people for twenty-five years.{" "}
            <strong className="font-semibold text-navy">
              I knew, before she did, how many others she could walk alongside.
            </strong>
          </p>

          <p className={p}>
            She is now a{" "}
            <strong className="font-semibold text-navy">
              Maxwell Leadership Team Certified Coach
            </strong>
            , co-founder of Boundless Summits Coaching Co. LLC, and the co-architect of
            this vision from our very first conversation about it. The values we coach
            by, the boundaries we hold, the kind of company we want to build — those
            came from a kitchen table, not a business plan.
          </p>

          <PullQuote>This work is hers as much as mine.</PullQuote>
        </Section>
      </main>

      <Footer />
    </>
  );
}
