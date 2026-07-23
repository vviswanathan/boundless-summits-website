"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

export default function CalendlyEmbed() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      <div className="bg-cream rounded-sm overflow-hidden">
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/vivek-boundlesssummits/discovery-call"
          style={{ minWidth: "320px", height: isMobile ? "900px" : "700px" }}
        />
      </div>

      <p className="font-fraunces italic font-light text-[15px] text-[#4B5563] text-center mt-6">
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
