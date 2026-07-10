import Image from "next/image";

export default function LondonOdysseyPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#111]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <a
          href="/"
          className="text-[11px] font-bold uppercase tracking-[0.28em] text-black/45 hover:text-[#b21818]"
        >
          ← Back
        </a>

        <section className="grid gap-16 py-20 md:grid-cols-[460px_1fr]">
          <div className="relative aspect-[210/297] overflow-hidden rounded-lg shadow-xl">
            <Image
              src="/posters/london-odyssey.png"
              alt="A London Odyssey poster"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-black/45">
              Feature · 2026
            </p>

            <h1 className="mt-6 font-serif text-6xl uppercase tracking-[0.06em] md:text-7xl">
              A London Odyssey
            </h1>

            <p className="mt-10 max-w-2xl font-serif text-3xl leading-tight text-black/80">
        When two small-time hustlers come into possession of a stolen painting, they find themselves spiralling into the depths of London's criminal underworld, caught between a ruthless gangster and a hitman drawn to the only witness to his crime.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
  <span className="rounded-full border border-black/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/60">
    Academy Nicholl Fellowship
  </span>

  <span className="rounded-full border border-black/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/60">
    ScreenCraft
  </span>
</div>

            <div className="mt-14 grid gap-8 border-t border-black/10 pt-10 text-sm leading-7 text-black/65 md:grid-cols-2">
              <div>
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.24em] text-black/45">
                  Role
                </p>
                <p>Written by Tom Dunham</p>
              </div>

              <div>
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.24em] text-black/45">
                  Format
                </p>
                <p>Feature Film</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}