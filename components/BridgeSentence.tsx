import Link from "next/link";

export default function BridgeSentence() {
  return (
    <section className="bg-cream text-center px-9 pt-[90px] pb-[70px]">
      <div className="max-w-[820px] mx-auto">
        <p
          className="font-fraunces text-[1.08rem] leading-[1.7] max-w-[620px] mx-auto"
          style={{ color: "var(--text-mid)" }}
        >
          You may have heard the words coaching, counseling, consulting, and mentoring used interchangeably. They&apos;re not the same.{" "}
          <Link
            href="/approach"
            className="text-copper font-medium border-b border-copper pb-[1px] transition-colors hover:text-copper-light hover:border-copper-light"
          >
            Read about my approach →
          </Link>
        </p>
      </div>
    </section>
  );
}
