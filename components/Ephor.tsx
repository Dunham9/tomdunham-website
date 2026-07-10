export default function Ephor() {
  return (
    <section
      id="ephor"
      className="mx-auto max-w-6xl border-t border-black/10 px-6 py-24"
    >
      <div className="max-w-3xl">
        <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.28em] text-black/40">
          Ephor Pictures
        </p>

        <p className="text-[16px] leading-8 text-black/65">
          Ephor Pictures is an independent production company developing character-driven stories
          across film and television.
        </p>

        <a
          href="https://www.ephorpictures.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b21818] group"
        >
          Visit Ephor Pictures

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </section>
  );
}