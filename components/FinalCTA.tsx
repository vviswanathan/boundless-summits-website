import Image from "next/image";
import Link from "next/link";

interface FinalCTAProps {
  variant?: "cream" | "navy";
  headline?: string;
  subline?: string;
  buttonLabel?: string;
  buttonHref?: string;
  tagline?: string;
}

export default function FinalCTA({
  variant = "cream",
  headline = "Sit back.\nLet's start where you are.",
  subline,
  buttonLabel = "Begin a Conversation",
  buttonHref = "/contact",
  tagline,
}: FinalCTAProps) {
  const headlineParts = headline.split("\n");

  if (variant === "navy") {
    return (
      <section
        className="relative text-center px-9 pt-[120px] pb-[120px] overflow-hidden"
        style={{ backgroundColor: "#0F1B36" }}
      >
        {/* Starfield */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          aria-hidden="true"
          style={{
            backgroundImage: [
              "radial-gradient(1px 1px at 12% 18%, rgba(250,246,238,0.55) 0%, transparent 100%)",
              "radial-gradient(1px 1px at 28% 72%, rgba(250,246,238,0.4) 0%, transparent 100%)",
              "radial-gradient(1.5px 1.5px at 44% 35%, rgba(250,246,238,0.5) 0%, transparent 100%)",
              "radial-gradient(1px 1px at 60% 88%, rgba(250,246,238,0.35) 0%, transparent 100%)",
              "radial-gradient(1px 1px at 74% 22%, rgba(250,246,238,0.45) 0%, transparent 100%)",
              "radial-gradient(1.5px 1.5px at 88% 55%, rgba(250,246,238,0.5) 0%, transparent 100%)",
              "radial-gradient(1px 1px at 20% 48%, rgba(250,246,238,0.3) 0%, transparent 100%)",
              "radial-gradient(1px 1px at 52% 12%, rgba(250,246,238,0.4) 0%, transparent 100%)",
              "radial-gradient(1px 1px at 80% 78%, rgba(250,246,238,0.35) 0%, transparent 100%)",
              "radial-gradient(1.5px 1.5px at 36% 92%, rgba(250,246,238,0.45) 0%, transparent 100%)",
              "radial-gradient(1px 1px at 68% 44%, rgba(250,246,238,0.3) 0%, transparent 100%)",
              "radial-gradient(1px 1px at 92% 8%, rgba(250,246,238,0.5) 0%, transparent 100%)",
            ].join(", "),
          }}
        />

        <div className="relative z-10 max-w-[820px] mx-auto">
          {/* Copper divider */}
          <div className="w-[80px] h-px bg-copper mx-auto mb-14" />

          {/* Headline */}
          <p
            className="font-fraunces italic font-light text-cream leading-[1.3] mb-7"
            style={{ fontSize: "clamp(2rem, 4.2vw, 2.9rem)", letterSpacing: "-0.01em" }}
          >
            {headlineParts.map((part, i) => (
              <span key={i}>
                {part}
                {i < headlineParts.length - 1 && <br />}
              </span>
            ))}
          </p>

          {/* Subline */}
          {subline && (
            <p
              className="font-fraunces italic font-light leading-[1.6] mb-12"
              style={{
                fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
                color: "rgba(250,246,238,0.72)",
                letterSpacing: "0.01em",
              }}
            >
              {subline}
            </p>
          )}

          {/* CTA Button */}
          <Link
            href={buttonHref}
            className="inline-block bg-copper text-white px-10 py-[18px] rounded text-sm font-medium tracking-[0.05em] transition-all shadow-[0_6px_20px_rgba(184,115,51,0.35)] hover:bg-copper-light hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(184,115,51,0.45)]"
          >
            {buttonLabel}
          </Link>

          {/* Tagline */}
          {tagline && (
            <p
              className="font-fraunces italic font-light mt-10"
              style={{
                fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
                color: "rgba(250,246,238,0.45)",
                letterSpacing: "0.02em",
              }}
            >
              {tagline}
            </p>
          )}
        </div>
      </section>
    );
  }

  // variant === "cream" (homepage default)
  return (
    <section id="cta" className="relative bg-cream text-center px-9 pt-[110px] pb-[110px] overflow-hidden">
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] max-w-[90%] opacity-10 pointer-events-none z-0">
        <Image
          src="/images/logo-icon.png"
          alt=""
          width={600}
          height={600}
          className="w-full h-auto"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-[820px] mx-auto">
        <p
          className="font-fraunces italic font-medium text-navy mb-12 leading-[1.3] tracking-[-0.01em]"
          style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
        >
          {headlineParts.map((part, i) => (
            <span key={i}>
              {part}
              {i < headlineParts.length - 1 && <br />}
            </span>
          ))}
        </p>

        <Link
          href={buttonHref}
          className="inline-block bg-copper text-white px-10 py-[18px] rounded text-sm font-medium tracking-[0.05em] transition-all shadow-[0_6px_20px_rgba(184,115,51,0.25)] hover:bg-copper-light hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(184,115,51,0.35)]"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
