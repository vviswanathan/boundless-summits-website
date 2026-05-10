import type { ReactNode } from "react";

export default function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="font-fraunces italic font-light text-[22px] leading-[1.5] text-copper border-l-2 border-copper pl-6 py-1 my-9">
      {children}
    </blockquote>
  );
}
