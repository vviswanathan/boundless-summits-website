"use client";

import Script from "next/script";

const CALENDLY_URL =
  "https://calendly.com/vivek-boundlesssummits/discovery-call";

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (opts: { url: string }) => void };
  }
}

export default function CalendlyEmbed() {
  function openPopup(e: React.MouseEvent) {
    e.preventDefault();
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    }
  }

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      <a
        href={CALENDLY_URL}
        onClick={openPopup}
        className="inline-flex items-center gap-3 bg-copper text-cream font-inter text-[13px] font-semibold uppercase tracking-[2px] px-[44px] py-[18px] rounded-sm border border-copper hover:bg-copper-light transition-colors duration-300 cursor-pointer"
      >
        Book a Discovery Call
        <span className="text-[16px]">→</span>
      </a>

      <p className="font-fraunces italic font-light text-[15px] text-[#4B5563] mt-6">
        Can&apos;t find a time that works?{" "}
        <a
          href="#send-note"
          className="text-copper border-b border-copper/30 hover:text-copper-light transition-colors"
        >
          Send me a note above
        </a>
        {" "}and we&apos;ll find something.
      </p>
    </>
  );
}
