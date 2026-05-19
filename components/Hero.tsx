import StarField from "./StarField";

export default function Hero() {
  return (
    <section
      className="relative min-h-[45vh] md:min-h-[40vh] overflow-hidden flex flex-col items-center pt-20 text-cream"
      style={{
        background: "#1B2A4E",
        backgroundImage:
          "radial-gradient(ellipse at 75% 20%, rgba(184,115,51,0.14) 0%, transparent 55%), radial-gradient(ellipse at 20% 85%, rgba(92,122,94,0.10) 0%, transparent 50%)",
      }}
    >
      <StarField />

      {/* Main content — fills remaining height, content centered */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-[800px] px-9 text-center relative z-10 py-16">
        <p
          className="font-fraunces italic font-normal text-cream leading-[1.3] tracking-[-0.012em] animate-fade-up-a"
          style={{ fontSize: "clamp(1.6rem, 3.6vw, 2.6rem)" }}
        >
          Your footprints become the path.
          <br />
          Your path becomes your story.
        </p>

        <div className="w-14 h-px bg-copper-light opacity-70 mx-auto my-8 animate-fade-up-b" />

        <p className="font-inter text-sm font-medium tracking-[0.22em] uppercase text-white/65 animate-fade-up-c">
          Run Your Own Race · Reach Your Own Summits
        </p>
      </div>

    </section>
  );
}
