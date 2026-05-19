export default function Welcome() {
  return (
    <section className="relative bg-cream flex flex-col text-center">
      <div className="flex-1 flex flex-col items-center justify-center px-9 pt-[110px] pb-[80px]">
        <p
          className="font-fraunces italic font-normal text-navy leading-[1.3]"
          style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}
        >
          Welcome — pull up a chair.
        </p>
      </div>
      <div className="pb-10 flex flex-col items-center gap-2 pointer-events-none">
        <span
          className="font-inter font-medium uppercase"
          style={{ fontSize: "11px", letterSpacing: "3px", color: "rgba(27, 42, 78, 0.4)" }}
        >
          scroll
        </span>
        <div
          className="w-px h-10"
          style={{ background: "rgba(27, 42, 78, 0.25)" }}
        />
      </div>
    </section>
  );
}
