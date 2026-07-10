import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 pt-24 text-center">
      <div className="flex justify-center">
        <Image
          src="/branding/tom-dunham-logo.png"
          alt="Tom Dunham"
          width={520}
          height={90}
          priority
className="h-auto w-full max-w-[200px] sm:max-w-[230px] md:max-w-[300px]"
        />
      </div>

      <div className="mx-auto mt-10 h-12 w-px bg-black/20" />

      <div className="mt-10 flex flex-col justify-center gap-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-black/50 md:flex-row md:gap-20">
        <span>Writer</span>
        <span>Director</span>
        <span>Development Producer</span>
      </div>
    </section>
  );
}