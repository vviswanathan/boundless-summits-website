import Image from "next/image";

export default function LogoBanner() {
  return (
    <section className="bg-cream pt-[110px] pb-10 px-9 text-center">
      <div className="mx-auto" style={{ maxWidth: 460 }}>
        <Image
          src="/images/logo-full.png"
          alt="Boundless Summits Coaching Co."
          width={460}
          height={300}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}
