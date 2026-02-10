"use client";
import { useRef } from "react";

type YouTubeSet = {
  title: string;
  student: string;
  videoId: string;
  duration: string;
  style: string;
};

const sets: YouTubeSet[] = [
  {
    title: "Rooftop Session #63 — Gregoria",
    student: "Sakson",
    videoId: "iq7ND8TyuG4",
    duration: "66 min",
    style: "Progressive House",
  },
  {
    title: "Above in the Clouds - Carnal",
    student: "Antonella Raffetto",
    videoId: "qPQod1MWJ28",
    duration: "70 min",
    style: "Progressive House",
  },
  {
    title: " Spirit [Live Performance] | Awen Records",
    student: "Desiree Nemcik",
    videoId: "O8aXGz0Mms8",
    duration: "22 min",
    style: "Live",
  },
  {
    title: "LOGOS ESTUDIO EP #2",
    student: "Facundo Fuente",
    videoId: "haF0lqd3J80",
    duration: "71 min",
    style: "Progressive House",
  },
  {
    title: "Tengo paco, pero soy amoroso",
    student: "Joaquin Seara",
    videoId: "bVKImfZ7nlA",
    duration: "130 min",
    style: "House",
  },
  {
    title: "Concept 06 At San Rafael, Argentina",
    student: "Julian Bellafronte",
    videoId: "-LdtLB55YXM",
    duration: "68 min",
    style: "Organic House",
  },
  {
    title: "Colegio Nacional de La Plata | SECRET LOCATION",
    student: "Simon di Marzio",
    videoId: "iu8bpKn_f2g",
    duration: "123 min",
    style: "Progressive House",
  },
  {
    title: "EXPERIENCE V",
    student: "Ilan Rosenfeld",
    videoId: "WoqEZHrsbm8",
    duration: "124 min",
    style: "Progressive House",
  },
];

export default function CurriculumCommunity() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const getThumb = (videoId: string, quality: string) =>
    `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
  const thumbOrder = ["maxresdefault", "sddefault", "hqdefault", "mqdefault"];

  const scrollByCard = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = 360;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };


  return (
    <section className="relative py-10 md:py-14 bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased overflow-x-hidden">
      <div className="fixed top-1/4 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-1/4 -right-20 w-64 h-64 bg-neon-pink/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="px-6 md:px-10 max-w-6xl mx-auto pt-3 md:pt-5 flex items-end justify-between gap-4">
        <div>
          <span className="text-neon-pink font-semibold text-sm tracking-widest uppercase">
            Escuchanos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 leading-tight">
            Sets de alumnos
          </h2>
          <p className="text-sm md:text-base text-slate-400 mt-2 max-w-xl">
            Sets reales grabados en cabina profesional, con estilos y duraciones distintas.
          </p>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollByCard("left")}
            aria-label="Ver sets anteriores"
            className="w-12 h-12 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/40 transition-colors grid place-items-center opacity-60 hover:opacity-100"
          >
            <span className="material-symbols-outlined text-xl">chevron_left</span>
          </button>
          <button
            type="button"
            onClick={() => scrollByCard("right")}
            aria-label="Ver sets siguientes"
            className="w-12 h-12 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/40 transition-colors grid place-items-center opacity-60 hover:opacity-100"
          >
            <span className="material-symbols-outlined text-xl">chevron_right</span>
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex overflow-x-auto no-scrollbar gap-8 px-6 md:px-10 pt-8 snap-x scroll-smooth"
      >
        {sets.map((s, i) => (
          <a
            key={`${s.videoId}-${i}`}
            href={`https://www.youtube.com/watch?v=${s.videoId}`}
            target="_blank"
            rel="noreferrer"
            className="snap-center shrink-0 w-[75vw] sm:w-[60vw] md:w-[360px] lg:w-[440px] xl:w-[480px] group"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 group-hover:ring-2 group-hover:ring-white/30 transition">
              <img
                src={getThumb(s.videoId, thumbOrder[0])}
                alt=""
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  const img = e.currentTarget;
                  const idx = Number(img.dataset.thumbIdx || "0") + 1;
                  if (idx >= thumbOrder.length) return;
                  img.dataset.thumbIdx = String(idx);
                  img.src = getThumb(s.videoId, thumbOrder[idx]);
                }}
              />
              <div className="absolute top-2 right-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded-full">
                YouTube
              </div>
            </div>
            <div className="mt-3">
              <p className="text-white font-bold text-base leading-tight">{s.title}</p>
              <div className="flex items-center gap-2 text-sm text-primary">
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2 py-0.5 text-[11px] text-white/80">
                  <span className="material-symbols-outlined text-[14px]">person</span>
                  {s.student}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2 py-0.5 text-[11px] text-white/70">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  {s.duration}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2 py-0.5 text-[11px] text-white/70">
                  <span className="material-symbols-outlined text-[14px]">graphic_eq</span>
                  {s.style}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="md:hidden px-6 pt-4 text-xs text-slate-500">
        Deslizá para ver más sets
      </div>
    </section>
  );
}
