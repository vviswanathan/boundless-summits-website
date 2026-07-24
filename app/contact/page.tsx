import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import CalendlyEmbed from "@/components/CalendlyEmbed";

const eyebrow =
  "block font-inter text-[11px] font-semibold uppercase text-copper mb-6 tracking-[3px]";
const heading =
  "font-fraunces italic font-normal text-navy leading-[1.25] mb-[40px]";

export const metadata: Metadata = {
  title: "Begin a Conversation",
  description:
    "Start a conversation with Boundless Summits Coaching Co. Send a note or book a free 30-minute discovery call.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />

      <main>
        {/* ─── Section 1: Editorial Hero ─── */}
        <section className="bg-cream min-h-[50vh] flex items-center justify-center text-center pt-[140px] pb-[90px] px-8">
          <div className="max-w-[820px] mx-auto">
            <span
              className="block font-inter text-[11px] font-semibold uppercase text-copper mb-7"
              style={{ letterSpacing: "3px" }}
            >
              Let&apos;s Talk
            </span>

            <h1
              className="font-fraunces italic font-light text-navy leading-[1.25] mb-9"
              style={{
                fontSize: "clamp(36px, 5.2vw, 56px)",
                letterSpacing: "-0.5px",
              }}
            >
              Begin a conversation.
            </h1>

            <div className="w-[60px] h-px bg-copper mx-auto mb-9" />

            <p
              className="font-fraunces italic font-light text-[#4B5563] leading-[1.65] max-w-[580px] mx-auto"
              style={{ fontSize: "19px", letterSpacing: "0.1px" }}
            >
              There&apos;s no commitment in reaching out. Just a conversation
              — to see if the timing is right, if the fit is there, and if this
              is the work you&apos;re ready to do.
            </p>
          </div>
        </section>

        {/* ─── Section 2: Personal note form ─── */}
        <section id="send-note" className="bg-cream-deep py-[100px] px-8">
          <div className="max-w-[820px] mx-auto">
            <span className={eyebrow}>Send a Note</span>
            <h2
              className={heading}
              style={{ fontSize: "clamp(30px, 4.2vw, 44px)", letterSpacing: "-0.4px" }}
            >
              Prefer to write first?
            </h2>
            <div className="w-[60px] h-px bg-copper mb-9" />
            <p className="font-inter text-[17px] leading-[1.75] text-[#4B5563] mb-10">
              If you&apos;d like to learn more before scheduling a call, send me
              a note. I read every message personally.
            </p>
            <ContactForm />
          </div>
        </section>

        {/* ─── Section 3: Calendly booking ─── */}
        <section className="bg-cream-warmer py-[100px] px-4 md:px-8">
          <div className="max-w-[960px] mx-auto">
            <span className={eyebrow}>Book a Call</span>
            <h2
              className={heading}
              style={{ fontSize: "clamp(30px, 4.2vw, 44px)", letterSpacing: "-0.4px" }}
            >
              Ready to find a time?
            </h2>
            <div className="w-[60px] h-px bg-copper mb-9" />
            <p className="font-fraunces italic font-light text-[20px] text-[#4B5563] mb-9 tracking-[0.1px]">
              Or, if you&apos;re ready to find a time —
            </p>
            <CalendlyEmbed />
          </div>
        </section>

        {/* ─── Closing CTA ─── */}
        <section
          className="py-[120px] px-8 text-center relative overflow-hidden"
          style={{ backgroundColor: "#0F1B36" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background: [
                "radial-gradient(2px 2px at 15% 25%, rgba(214,144,82,0.5) 0%, transparent 100%)",
                "radial-gradient(1.5px 1.5px at 80% 20%, rgba(192,201,210,0.4) 0%, transparent 100%)",
                "radial-gradient(1.5px 1.5px at 88% 75%, rgba(214,144,82,0.4) 0%, transparent 100%)",
                "radial-gradient(2px 2px at 8% 80%, rgba(192,201,210,0.35) 0%, transparent 100%)",
              ].join(", "),
            }}
          />
          <div className="relative z-10 max-w-[640px] mx-auto">
            <div className="w-[60px] h-px bg-copper mx-auto mb-9 opacity-70" />
            <p
              className="font-fraunces italic font-light text-cream leading-[1.4] mb-3"
              style={{ fontSize: "clamp(28px, 4vw, 42px)", letterSpacing: "-0.3px" }}
            >
              Sit back. Let&apos;s start where you are.
            </p>
            <p
              className="font-inter text-[13px] font-medium uppercase tracking-[2px] mt-9"
              style={{ color: "rgba(250,246,238,0.45)" }}
            >
              Boundless Summits Coaching Co.
              &nbsp;·&nbsp; Plano–McKinney–Frisco, TX
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
