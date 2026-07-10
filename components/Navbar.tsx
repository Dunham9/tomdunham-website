"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f4ef]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="/"
          className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/70 transition hover:text-[#b21818]"
        >
          Tom Dunham
        </a>

        <nav className="hidden gap-10 text-[10px] font-semibold uppercase tracking-[0.28em] text-black/45 md:flex">
          <a href="/#work" className="transition hover:text-[#b21818]">Work</a>
          <a href="/#about" className="transition hover:text-[#b21818]">About</a>
          <a href="/#ephor" className="transition hover:text-[#b21818]">Ephor
</a>
          <a href="/#contact" className="transition hover:text-[#b21818]">Contact</a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/45 md:hidden"
        >
          <span className="text-xl leading-none">
  {open ? "✕" : "☰"}
</span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-black/5 px-6 pb-6 pt-4 text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-black/55 md:hidden">
          <a onClick={() => setOpen(false)} href="/#work" className="block py-3">Work</a>
          <a onClick={() => setOpen(false)} href="/#about" className="block py-3">About</a>
          <a onClick={() => setOpen(false)} href="/#ephor" className="block py-3">Ephor</a>
          <a onClick={() => setOpen(false)} href="/#contact" className="block py-3">Contact</a>
        </nav>
      )}
    </header>
  );
}