"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

function getHeight(): string {
  if (typeof window === "undefined") return "900px";
  if (window.innerWidth < 480) return "1600px";
  if (window.innerWidth < 768) return "1200px";
  return "900px";
}

export default function CalendlyEmbed() {
  const [height, setHeight] = useState("900px");

  useEffect(() => {
    const update = () => setHeight(getHeight());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      <div className="w-full">
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/vivek-boundlesssummits/discovery-call"
          style={{ minWidth: "320px", width: "100%", height }}
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
