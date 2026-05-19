"use client";

import { useState, useEffect } from "react";

const statements = [
  "Follow your unique map to reach your summit.",
  "The path, the work, the growth, the credit — all belong to you.",
  "Awareness is where change begins.",
  "My role is to walk alongside you, not ahead of you.",
];

export default function RotatingPhilosophy() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % statements.length);
        setVisible(true);
      }, 400);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="flex flex-col items-center justify-center text-center px-8 py-8 md:py-10 min-h-[30vh] md:min-h-[27vh]"
      style={{ backgroundColor: "#0F1B36" }}
    >
      <div className="max-w-[820px] mx-auto w-full">
        <p
          className="font-inter font-semibold uppercase text-copper-light mb-5"
          style={{ fontSize: "11px", letterSpacing: "3px" }}
        >
          What We Believe
        </p>

        <div className="w-[60px] h-px bg-copper mx-auto mb-5" />

        <div className="min-h-[80px] flex items-center justify-center">
          <p
            className={`font-fraunces italic font-light text-cream leading-[1.35] transition-opacity duration-[400ms] ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            style={{ fontSize: "clamp(24px, 3.8vw, 44px)", letterSpacing: "-0.3px" }}
          >
            {statements[current]}
          </p>
        </div>

        <div className="w-[60px] h-px bg-copper mx-auto mt-5" />

        <div className="flex justify-center gap-[10px] mt-6">
          {statements.map((_, i) => (
            <div
              key={i}
              className={`w-[7px] h-[7px] rounded-full transition-all duration-300 ${
                i === current ? "bg-copper" : "border border-copper/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
