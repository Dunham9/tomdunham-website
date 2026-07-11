const links = [
  { label: "IMDb", href: "https://www.imdb.com/name/nm6620378/?ref_=nv_sr_srsg_0_tt_0_nm_8_in_0_q_tom%20dunham" },
  { label: "Instagram", href: "https://instagram.com/tom_dunham" },
];

export default function Contact() {
  return (
    <footer
      id="contact"
      className="mx-auto max-w-6xl border-t border-black/10 px-6 py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-black/40">
          Contact
        </p>

        <div className="mx-auto mt-8 h-px w-16 bg-[#b21818]/60" />

        <a
          href="mailto:td@tomdunham.com"
          className="mt-8 inline-block text-base text-black/70 underline decoration-black/10 underline-offset-4 transition hover:text-[#b21818] hover:decoration-[#b21818]"
        >
          td@tomdunham.com
        </a>

        <div className="mt-10 flex justify-center gap-10 text-[11px] font-semibold uppercase tracking-[0.28em] text-black/45">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#b21818]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="mt-14 text-xs text-black/30">
          © {new Date().getFullYear()} Tom Dunham
        </p>
      </div>
    </footer>
  );
}