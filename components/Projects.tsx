import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 pb-16">
      <p className="mb-12 text-[11px] font-semibold uppercase tracking-[0.35em] text-black/40">
        Featured Projects
      </p>

      <div className="space-y-10">
        {projects.map((project) => (
          <article
            key={project.title}
            className="grid gap-8 rounded-[32px] bg-white px-6 py-8 text-center shadow-[0_10px_35px_rgba(0,0,0,0.045)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_20px_55px_rgba(0,0,0,0.06)] md:grid-cols-[200px_1fr] md:items-center md:px-10 md:py-10 md:text-left"
          >
            <div className="relative mx-auto aspect-[210/297] w-full max-w-[180px] overflow-hidden rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,.08)] bg-black/5 md:mx-0 md:max-w-[200px]">
              <Image
                src={project.image}
                alt={`${project.title} poster`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 190px, 200px"
              />
            </div>

            <div>
              <h2 className="font-serif text-4xl leading-none tracking-[0.05em]">
                {project.title}
              </h2>

              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-black/40">
                {project.type}
              </p>

              <p className="mx-auto mt-6 max-w-xl text-[15px] leading-7 text-black/65 md:mx-0">
                {project.logline}
              </p>

<Link
  href={`/work/${project.slug}`}
  className="group mt-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b21818]"
>
  View Project

  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}