import StarField from "./StarField";

export default function Hero() {
  return (
    <section
      className="relative min-h-[56vh] overflow-hidden flex items-center justify-center px-9 py-20 text-cream"
      style={{
        background: "#1B2A4E",
        backgroundImage:
          "radial-gradient(ellipse at 75% 20%, rgba(184,115,51,0.14) 0%, transparent 55%), radial-gradient(ellipse at 20% 85%, rgba(92,122,94,0.10) 0%, transparent 50%)",
      }}
    >
      <StarField />

      {/* Main content */}
      <div className="relative z-10 max-w-[800px] text-center">
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

      {/* Scroll cue */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 animate-fade-up-d">
        <span className="font-inter text-[9.5px] tracking-[0.32em] text-white/45 uppercase font-medium">
          scroll
        </span>
        <div
          className="scroll-cue-line w-px h-12"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(214,144,82,0.3) 30%, rgba(214,144,82,0.6))",
          }}
        />
      </div>
    </section>
  );
}
