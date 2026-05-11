import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import PullQuote from "@/components/PullQuote";
import SessionTrail from "@/components/SessionTrail";

const p = "font-inter text-[17.5px] leading-[1.85] text-[#4B5563] mb-[22px]";

export const metadata: Metadata = {
  title: "Approach — Boundless Summits Coaching Co.",
  description:
    "How the work unfolds. A look at what coaching is, what happens in a session, and how the journey is shaped.",
};

export default function ApproachPage() {
  return (
    <>
      <Nav activePage="/approach" />

      <main>
        {/* ─── Section 1: Editorial Hero ─── */}
        <section className="bg-cream min-h-[60vh] flex items-center justify-center px-8 pt-[140px] pb-[100px] text-center">
          <div className="max-w-[820px] mx-auto">
            {/* Eyebrow */}
            <span
              className="block font-inter text-[11px] font-semibold uppercase text-copper mb-7"
              style={{ letterSpacing: "3px" }}
            >
              The Approach
            </span>

            {/* Headline */}
            <h1
              className="font-fraunces italic font-light text-navy leading-[1.25] mb-9"
              style={{
                fontSize: "clamp(36px, 5.2vw, 56px)",
                letterSpacing: "-0.5px",
              }}
            >
              How the work unfolds.
            </h1>

            {/* Copper divider */}
            <div className="w-[60px] h-px bg-copper mx-auto mb-9" />

            {/* Subline */}
            <p
              className="font-fraunces italic font-light text-[#4B5563] leading-[1.65] max-w-[600px] mx-auto"
              style={{ fontSize: "19px", letterSpacing: "0.1px" }}
            >
              A look at what coaching is, what happens in a session, and how
              the journey is shaped.
            </p>
          </div>
        </section>

        {/* ─── Section 2: What Coaching Is ─── */}
        <Section bg="cream-deep" eyebrow="A Definition" heading="What coaching is — and isn't.">
          <p className={p}>
            Coaching is a thought-provoking conversation that supports you in moving
            from where you are to where you want to be.
          </p>
          <p className={p}>
            It&apos;s not advice. It&apos;s not therapy. It&apos;s not a strategy session
            where I hand you a plan. Coaching is a partnership — a creative, structured
            space where I ask questions that help you discover the answers already within
            you. The work is yours. My role is to walk alongside you, hold the space,
            stay curious, and trust that you have what you need.
          </p>
          <p className={p}>
            Good coaching sparks imagination. It invites you to see your own life in a
            different light — to notice patterns you&apos;ve stopped noticing, name
            desires you&apos;ve stopped naming, and consider possibilities you&apos;ve
            ruled out without realizing it.
          </p>
          <p className={p}>
            It&apos;s forward-facing work. Coaching is about the present and the future.
            Not the past.
          </p>
          <PullQuote>
            You bring the agenda. I bring the curiosity. Together, we move toward what
            you came here for.
          </PullQuote>
        </Section>

        {/* ─── Section 3: The Stance ─── */}
        <Section eyebrow="The Stance" heading="Walk alongside, not ahead.">
          <p className={p}>
            Most professionals I work with are deeply competent. They don&apos;t need to
            be told what to do — they need to be given space to hear themselves think.
          </p>
          <p className={p}>
            So that&apos;s the work. In a session, you&apos;ll do about eighty percent
            of the talking. I&apos;ll ask questions, reflect what I&apos;m hearing, and
            notice the things you&apos;re saying that you might not have noticed yet.
            You&apos;ll do the discovery. You&apos;ll make the choices. You&apos;ll own
            the path.
          </p>
          <p className={p}>
            This is intentional. Coaching only works when the client is the author. The
            moment I start telling you what to do, the work stops being yours — and the
            change won&apos;t last.
          </p>
          <p className={p}>
            What I bring isn&apos;t answers. It&apos;s presence, structure, and the
            discipline to stay curious when the easier move would be to fix.
          </p>
        </Section>

        {/* ─── Section 4: The Arc of a Session ─── */}
        <Section bg="cream-warmer" wide eyebrow="The Arc of a Session" heading="Every session moves through a clear arc.">
          <p className="font-inter text-[17.5px] leading-[1.85] text-[#4B5563] mb-[60px] max-w-[720px]">
            You arrive with something on your mind. Forty-five minutes later, you leave
            with something specific to do. In between, we move through a journey that has
            shape — even when the conversation feels open.
          </p>
          <SessionTrail />
        </Section>

        {/* ─── Section 5: The Space Between ─── */}
        <Section eyebrow="The Space Between" heading="The work happens between us, not just with us.">
          <p className={p}>
            We meet every two weeks. That&apos;s deliberate.
          </p>
          <p className={p}>
            A weekly cadence sounds attentive, but it doesn&apos;t give you enough room
            to actually live with what surfaced in our last session. Biweekly gives you
            fourteen days to test what you committed to, notice what changes, and bring
            real experience back to the next conversation. The space{" "}
            <em>between</em> sessions isn&apos;t a pause — it&apos;s where the work
            becomes real.
          </p>
          <p className={p}>
            Between sessions, you have email access to me. I&apos;ll respond within two
            business days. This isn&apos;t ongoing texting therapy; it&apos;s there for
            the moments when something shifts and you want to share it before we meet
            again, or when a question genuinely can&apos;t wait.
          </p>
        </Section>

        {/* ─── Section 6: Positive Psychology ─── */}
        <Section bg="cream-deep" eyebrow="The Foundation" heading="Grounded in positive psychology.">
          <p className={p}>
            The way I coach is shaped by{" "}
            <strong className="font-semibold text-navy">positive psychology</strong>
            {" "}— the scientific study of what enables people to thrive.
          </p>
          <p className={p}>
            Traditional psychology has historically focused on what&apos;s broken —
            diagnosing dysfunction, treating distress. Positive psychology asks a
            different question:{" "}
            <em>what enables people to flourish?</em> What conditions, habits, and
            choices help a person become more fully themselves?
          </p>
          <p className={p}>
            This is what positive psychology brings to coaching:
          </p>

          <ul className="list-none p-0 my-7">
            <li
              className={[
                "relative pl-9 py-4 text-[16.5px] leading-[1.7] text-[#4B5563]",
                "border-b border-[rgba(27,42,78,0.08)]",
                "before:content-[''] before:absolute before:left-0 before:top-[28px]",
                "before:w-6 before:h-px before:bg-copper",
              ].join(" ")}
            >
              <strong className="font-semibold text-navy">A strengths-based lens.</strong>{" "}
              We work with what&apos;s right with you, not what&apos;s wrong. Your
              strengths are the soil where growth happens.
            </li>
            <li
              className={[
                "relative pl-9 py-4 text-[16.5px] leading-[1.7] text-[#4B5563]",
                "border-b border-[rgba(27,42,78,0.08)]",
                "before:content-[''] before:absolute before:left-0 before:top-[28px]",
                "before:w-6 before:h-px before:bg-copper",
              ].join(" ")}
            >
              <strong className="font-semibold text-navy">An evidence-based foundation.</strong>{" "}
              The questions I ask, the frameworks I use, and the way I structure sessions
              are informed by research — not just instinct.
            </li>
            <li
              className={[
                "relative pl-9 py-4 text-[16.5px] leading-[1.7] text-[#4B5563]",
                "before:content-[''] before:absolute before:left-0 before:top-[28px]",
                "before:w-6 before:h-px before:bg-copper",
              ].join(" ")}
            >
              <strong className="font-semibold text-navy">A focus on flourishing.</strong>{" "}
              The goal isn&apos;t to fix you. It&apos;s to support you in becoming a
              fuller version of who you already are.
            </li>
          </ul>

          <p className={p}>
            My training is through the{" "}
            <strong className="font-semibold text-navy">CaPP Institute</strong>
            {" "}— the Coaching and Positive Psychology Institute — whose mission is to
            advance the profession of coaching with rigor, ethics, and scientific
            grounding. That foundation shapes every conversation we have.
          </p>
        </Section>

        {/* ─── Section 7: A Clarification ─── */}
        <Section wide eyebrow="A Clarification" heading="Coaching is one of four very different things.">
          <p className={p} style={{ marginBottom: 40 }}>
            These four words get used interchangeably, and the conflation does everyone
            a disservice. Knowing the difference helps you find the right support for
            what you&apos;re actually facing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-14 my-7">
            <div className="relative pl-6 border-l-2 border-copper">
              <div className="font-fraunces italic font-medium text-[24px] text-navy mb-3.5 tracking-[-0.005em]">
                Coaching
              </div>
              <div className="font-inter text-[16px] leading-[1.75] text-[#4B5563]">
                A trained coach supports you in discovering your own answers. The coach
                asks questions, holds space, and stays curious — but the client does the
                work, owns the path, and commits to the action. The coach does not have
                a deliverable.
                <em className="font-fraunces italic text-copper font-normal block mt-3 text-[15.5px] leading-[1.6]">
                  Coaching is forward-facing — about where you are and where you&apos;re going.
                </em>
              </div>
            </div>

            <div className="relative pl-6 border-l-2 border-copper">
              <div className="font-fraunces italic font-medium text-[24px] text-navy mb-3.5 tracking-[-0.005em]">
                Mentoring
              </div>
              <div className="font-inter text-[16px] leading-[1.75] text-[#4B5563]">
                A mentor shares their own experience. They&apos;ve walked a road
                you&apos;re considering, and their value is the wisdom they pass on from
                that journey. Mentoring is generous and useful — but it&apos;s the
                mentor&apos;s path, offered as a guide.
                <em className="font-fraunces italic text-copper font-normal block mt-3 text-[15.5px] leading-[1.6]">
                  Coaching, by contrast, is about uncovering your unique path.
                </em>
              </div>
            </div>

            <div className="relative pl-6 border-l-2 border-copper">
              <div className="font-fraunces italic font-medium text-[24px] text-navy mb-3.5 tracking-[-0.005em]">
                Consulting
              </div>
              <div className="font-inter text-[16px] leading-[1.75] text-[#4B5563]">
                A consultant takes responsibility for a problem or acts as a specialist
                in a defined area. They bring expertise, deliver recommendations, and
                often own a deliverable.
                <em className="font-fraunces italic text-copper font-normal block mt-3 text-[15.5px] leading-[1.6]">
                  In coaching, the client owns the work — the coach is a catalyst, not an expert with an answer.
                </em>
              </div>
            </div>

            <div className="relative pl-6 border-l-2 border-copper">
              <div className="font-fraunces italic font-medium text-[24px] text-navy mb-3.5 tracking-[-0.005em]">
                Counseling / Therapy
              </div>
              <div className="font-inter text-[16px] leading-[1.75] text-[#4B5563]">
                A licensed therapist works with mental health, healing from past wounds,
                and clinical concerns. Coaching is not therapy. If the past is a fact
                you&apos;ve made peace with, coaching is likely the right fit. If the
                past is still an open wound that needs tending, counseling is the right
                next step — and a good coach will say so plainly.
              </div>
            </div>
          </div>

          <PullQuote>
            If the past is a fact, coaching can support you well. If the past is an
            issue, counseling is the right place to begin.
          </PullQuote>
        </Section>

        {/* ─── Section 8: Coachability ─── */}
        <Section bg="cream-warmer" eyebrow="Coachability" heading="What makes coaching work.">
          <p className={p}>
            Coaching isn&apos;t right for everyone — and it isn&apos;t right for every
            season. Three conditions help the work succeed:
          </p>

          <ul className="list-none p-0 my-7">
            <li
              className={[
                "relative pl-9 py-4 text-[16.5px] leading-[1.7] text-[#4B5563]",
                "border-b border-[rgba(27,42,78,0.08)]",
                "before:content-[''] before:absolute before:left-0 before:top-[28px]",
                "before:w-6 before:h-px before:bg-copper",
              ].join(" ")}
            >
              <strong className="font-semibold text-navy">You&apos;re mentally healthy and functioning.</strong>{" "}
              Coaching builds on a stable foundation. It&apos;s not a substitute for
              therapy when therapy is what&apos;s needed.
            </li>
            <li
              className={[
                "relative pl-9 py-4 text-[16.5px] leading-[1.7] text-[#4B5563]",
                "border-b border-[rgba(27,42,78,0.08)]",
                "before:content-[''] before:absolute before:left-0 before:top-[28px]",
                "before:w-6 before:h-px before:bg-copper",
              ].join(" ")}
            >
              <strong className="font-semibold text-navy">You genuinely want to be coached.</strong>{" "}
              Not because someone suggested it. Because <em>you</em> want the work.
              Coaching asks a lot of the client — without your full participation, the
              work doesn&apos;t move.
            </li>
            <li
              className={[
                "relative pl-9 py-4 text-[16.5px] leading-[1.7] text-[#4B5563]",
                "before:content-[''] before:absolute before:left-0 before:top-[28px]",
                "before:w-6 before:h-px before:bg-copper",
              ].join(" ")}
            >
              <strong className="font-semibold text-navy">You&apos;re open to flexibility and change.</strong>{" "}
              Coaching surfaces new ways of seeing, thinking, and acting. If you&apos;re
              closed to the possibility of change, the conversation has nowhere to go.
            </li>
          </ul>

          <p className={p}>
            When those three conditions are present, coaching can be life-shaping.
          </p>
          <p className={p}>
            The professionals who tend to come to this work share less a demographic
            than a moment. They show up in different forms:
          </p>

          <ul className="list-none p-0 mt-4">
            {[
              { bold: "Mid-career professionals", rest: "who feel stuck despite outward success" },
              { bold: "Leaders navigating a stretch", rest: "— a new role, new scope, new scale of responsibility" },
              { bold: "Professionals in transition", rest: "— considering a change, in the middle of one, or finding their footing after one" },
              { bold: "High-achievers", rest: "who’ve lost sight of why they’re achieving" },
              { bold: "Anyone", rest: "wanting to grow into their next chapter intentionally, not by default" },
            ].map(({ bold, rest }) => (
              <li
                key={bold}
                className={[
                  "relative pl-7 py-2.5 text-[16px] leading-[1.6] text-[#4B5563]",
                  "before:content-['·'] before:absolute before:left-2 before:top-2",
                  "before:text-copper before:text-[24px] before:font-bold before:leading-none",
                ].join(" ")}
              >
                <strong className="font-semibold text-navy">{bold}</strong>{" "}{rest}
              </li>
            ))}
          </ul>

          <p className={p} style={{ marginTop: 26 }}>
            If any of those sound like the moment you&apos;re in, coaching is likely a
            fit. The discovery call exists to make sure.
          </p>
        </Section>

        {/* ─── Sections 9–11: Coming in subsequent prompts ─── */}
      </main>

      <Footer />
    </>
  );
}
