export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 pt-24 text-center md:pb-20 md:pt-28">
     <h1 className="font-serif text-5xl leading-[0.9] tracking-[0.12em] md:text-7xl">
  Tom Dunham
</h1>

      <div className="mx-auto mt-9 h-12 w-px bg-black/20 md:mt-10" />

      <div className="mt-9 flex flex-col items-center justify-center gap-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-black/50 md:mt-10 md:flex-row md:gap-20">
        <span>Writer</span>
        <span>Director</span>
        <span>Development Producer</span>
      </div>
    </section>
  );
}