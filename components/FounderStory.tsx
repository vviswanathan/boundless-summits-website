import Image from "next/image";

export default function FounderStory() {
  return (
    <section className="relative bg-cream px-9 pt-[90px] pb-[100px] overflow-hidden">
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] max-w-[90%] opacity-10 pointer-events-none z-0">
        <Image
          src="/images/logo-icon.png"
          alt=""
          width={620}
          height={620}
          className="w-full h-auto"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-[820px] mx-auto">
        <span className="block text-[11px] tracking-[0.32em] text-copper font-medium mb-6 uppercase text-center">
          A Story
        </span>

        <h2
          className="font-fraunces font-medium text-navy text-center mb-14 tracking-[-0.01em]"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)" }}
        >
          How Boundless Summits Began
        </h2>

        <div className="space-y-6">
          <p className="font-fraunces font-normal text-[1.18rem] leading-[1.75]" style={{ color: "var(--text-dark)" }}>
            Years ago, on a morning run, I spotted another runner ahead of me on the trail. Without thinking, I made it my mission to catch him. I locked in, picked up my pace, and pushed harder mile after mile — until I finally pulled ahead.
          </p>

          <p className="font-fraunces italic font-medium text-[1.35rem] text-copper text-center my-9">
            And then I looked up.
          </p>

          <p className="font-fraunces font-normal text-[1.18rem] leading-[1.75]" style={{ color: "var(--text-dark)" }}>
            I had no idea where I was. In my determination to outrun someone else, I had completely abandoned my own route. I had won a race that wasn&apos;t mine — and lost the one that was.
          </p>

          <p className="font-fraunces font-normal text-[1.18rem] leading-[1.75]" style={{ color: "var(--text-dark)" }}>
            That moment changed everything for me. And I see the same pattern in professionals more often than not — chasing titles, comparing themselves to peers, copying someone else&apos;s career playbook instead of writing their own.
          </p>

          <p className="font-fraunces font-normal text-[1.18rem] leading-[1.75]" style={{ color: "var(--text-dark)" }}>
            Boundless Summits exists to support you in rewriting the script — with intention, self-reflection, and action that align with who you really are.
          </p>
        </div>

        <div
          className="text-center mt-14 pt-9"
          style={{ borderTop: "1px solid rgba(27, 42, 78, 0.08)" }}
        >
          <p className="font-fraunces italic font-medium text-2xl text-navy tracking-[-0.005em]">
            Your race. Your summits. Your way.
          </p>
        </div>
      </div>
    </section>
  );
}
