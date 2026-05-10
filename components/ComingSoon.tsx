interface ComingSoonProps {
  page: string;
}

export default function ComingSoon({ page }: ComingSoonProps) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-cream px-6">
      <div className="text-center max-w-lg">
        <p className="font-inter text-sm font-500 uppercase tracking-widest text-copper mb-4">
          Boundless Summits Coaching Co.
        </p>
        <h1 className="font-fraunces text-4xl md:text-5xl font-400 italic text-navy mb-6">
          {page}
        </h1>
        <div className="w-12 h-px bg-copper mx-auto mb-6" />
        <p className="font-inter text-base font-300 text-navy/70 leading-relaxed">
          This page is coming soon. We&apos;re building something worth the
          climb.
        </p>
      </div>
    </main>
  );
}
