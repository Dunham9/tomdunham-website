import Image from "next/image";

export default function About() {
  return (
  <section id="about" className="mx-auto max-w-6xl px-6 pt-10 pb-24 md:pt-12 md:pb-28">
      {/* Divider between Projects and About */}
      <div className="mb-12 h-px w-full bg-black/10" />

      <div className="grid gap-12 md:gap-16 lg:grid-cols-[360px_1fr] lg:items-start">
        {/* Headshot */}
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-[36px] bg-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] md:max-w-[360px]">
          <Image
            src="/headshot.jpg"
            alt="Tom Dunham"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Copy */}
        <div className="mx-auto w-full max-w-xl px-2 md:px-0">
          <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.28em] text-black/40">
            About
          </p>

          <div className="space-y-6 text-[16px] leading-9 text-black/60">
            <p>
              Tom Dunham is an English film director &amp; screenwriter. Over
              the past few years, Tom has worked with US and UK producers
              writing TV pilots and narrative feature screenplays, including
              book to film adaptations, and has received accolades from
              organisations such as The Academy Nicholl Fellowship and
              ScreenCraft.
            </p>

            <p>
              Tom is also a development producer at Ephor Pictures, an
              independent London-based film and television production company.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}