import Image from "next/image";

export default function PlayingGodPage() {
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
              src="/posters/playing-god.png"
              alt="Playing God poster"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-black/45">
             Pilot · 2026
            </p>

            <h1 className="mt-6 font-serif text-6xl uppercase tracking-[0.06em] md:text-7xl">
              Playing God
            </h1>

            <p className="mt-10 max-w-2xl font-serif text-3xl leading-tight text-black/80">
        Set in a Gotham-like vision of contemporary L.A, a man suffering from past trauma works his way into the private circle of a pseudo-intellectual self help figure.
            </p>

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
                <p>TV</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}