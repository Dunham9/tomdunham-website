import Image from "next/image";
import { bluffStills } from "@/data/projects";

export default function BluffPage() {
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
              src="/posters/bluff.png"
              alt="Bluff poster"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div>

            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-black/45">
              Short Film · 2019
            </p>

            <h1 className="mt-6 font-serif text-7xl uppercase tracking-[0.06em]">
              Bluff: Prologue
            </h1>

            <p className="mt-10 max-w-2xl font-serif text-3xl leading-tight text-black/80">
              When greed and stupidity land two hustlers in the firing line of London's most notorious villain, they are given an ultimatum which could change their lives forever.
            </p>

            <div className="mt-14 border-t border-black/10 pt-10">

              <div className="grid gap-8 md:grid-cols-2">

                <div>
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.24em] text-black/45">
                    Written, Directed & Produced
                  </p>

                  <p>Tom Dunham</p>
                </div>

                <div>
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.24em] text-black/45">
                    Format
                  </p>

                  <p>Short Film</p>
                </div>

              </div>

            </div>

          </div>

        </section>

        <section className="border-t border-black/10 py-20">

          <div className="mb-12 flex items-end justify-between">

            <h2 className="text-[11px] font-bold uppercase tracking-[0.28em] text-black/45">
              Production Stills
            </h2>

            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-black/40">
              12 Images
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-2">

            {bluffStills.map((still, index) => (

              <div
                key={still}
                className="group relative aspect-video overflow-hidden rounded-lg bg-black/5"
              >

                <Image
                  src={still}
                  alt={`Bluff still ${index + 1}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width:768px) 100vw,50vw"
                />

              </div>

            ))}

          </div>

        </section>

      </div>
    </main>
  );
}