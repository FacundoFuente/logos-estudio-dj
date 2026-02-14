"use client";
import { useEffect, useRef, useState } from "react";

export default function Equipment() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const stepRef = useRef(320);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const items = [
    {
      img: "/equipamiento/cdj-3000.png",
      tag: "CDJ",
      title: "Pioneer CDJ-3000",
      text: "Reproductor club standard con respuesta ultra rapida.",
    },
    {
      img: "/equipamiento/cdj-2000nexus2.png",
      tag: "CDJ",
      title: "Pioneer CDJ-2000NXS2",
      text: "El clasico de cabina que vas a encontrar en la mayoria de clubes.",
    },
    {
      img: "/equipamiento/XDJ-1000MK2.png",
      tag: "XDJ",
      title: "Pioneer XDJ-1000MK2",
      text: "Pantalla tactil y flujo moderno para sets dinamicos.",
    },
    {
      img: "/equipamiento/mixer-djm-900nexus2.png",
      tag: "Mixer",
      title: "Pioneer DJM-900NXS2",
      text: "Mezcla precisa, efectos profesionales y control total.",
    },
    {
      img: "/equipamiento/mixer-djm-450.png",
      tag: "Mixer",
      title: "Pioneer DJM-450",
      text: "Compacta, directa y perfecta para practicar tecnica.",
    },
    {
      img: "/equipamiento/plx-1000.png",
      tag: "Vinilo",
      title: "Pioneer PLX-1000",
      text: "Tacto real de vinilo para aprender la base del DJing.",
    },
    {
      img: "/equipamiento/monitores-focal.png",
      tag: "Monitores",
      title: "Monitores Focal",
      text: "Respuesta plana y detalle para entrenar el oido.",
    },
  ];

  const updateControls = () => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanLeft(el.scrollLeft > 2);
    setCanRight(el.scrollLeft < maxScroll - 2);
  };

  const scrollByCard = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = stepRef.current || 320;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const measure = () => {
      const first = el.firstElementChild as HTMLElement | null;
      if (!first) return;
      const styles = window.getComputedStyle(el);
      const gap = parseFloat(styles.columnGap || styles.gap || "0");
      stepRef.current = first.getBoundingClientRect().width + gap;
      updateControls();
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const Card = ({ img, title, text, tag }: any) => (
    <div className="shrink-0 w-64 md:w-80 snap-center">
      <div className="relative rounded-2xl overflow-hidden aspect-square bg-white/5 border border-white/10">
        <img
          src={img}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-contain p-4 opacity-100 drop-shadow-[0_10px_30px_rgba(0,0,0,.45)]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div className="absolute top-4 left-4 z-10 rounded-full bg-black/60 px-3 py-1 text-[11px] uppercase tracking-widest text-white/80">
          {tag}
        </div>
        <div className="absolute bottom-0 p-6">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-xs text-slate-200">{text}</p>
        </div>
        <div className="absolute inset-0 ring-1 ring-white/10" />
      </div>
    </div>
  );

  return (
    <section className="py-10 md:py-14 bg-black text-white overflow-hidden">
      <div className="px-6 max-w-6xl mx-auto mb-6">
        <span className="text-neon-pink font-semibold text-sm tracking-widest uppercase">
          Cabina real
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Entrenamiento con equipo profesional
        </h2>
        <p className="text-slate-400 max-w-xl">
          Setup club standard para que practiques exactamente como en una cabina real.
        </p>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 px-6 overflow-x-scroll no-scrollbar snap-x snap-mandatory md:cursor-grab"
          onScroll={updateControls}
          onPointerDown={(e) => {
            const el = scrollRef.current;
            if (!el) return;
            isDraggingRef.current = true;
            dragStartXRef.current = e.clientX;
            dragStartScrollRef.current = el.scrollLeft;
            el.setPointerCapture(e.pointerId);
          }}
          onPointerMove={(e) => {
            if (!isDraggingRef.current) return;
            const el = scrollRef.current;
            if (!el) return;
            const dx = e.clientX - dragStartXRef.current;
            el.scrollLeft = dragStartScrollRef.current - dx;
          }}
          onPointerUp={(e) => {
            const el = scrollRef.current;
            if (el) el.releasePointerCapture(e.pointerId);
            isDraggingRef.current = false;
            updateControls();
          }}
          onPointerCancel={() => {
            isDraggingRef.current = false;
            updateControls();
          }}
        >
          {items.map((item, i) => (
            <Card
              key={`${item.title}-${i}`}
              img={item.img}
              tag={item.tag}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>

        {canLeft && (
          <button
            type="button"
            onClick={() => scrollByCard("left")}
            aria-label="Ver equipamiento anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/35 bg-black/35 text-white/95 backdrop-blur cursor-pointer transition-all duration-200 hover:scale-105 hover:text-white hover:border-white/70 hover:bg-white/12 hover:shadow-[0_14px_40px_rgba(0,0,0,0.45)]"
          >
            <span className="material-symbols-outlined text-xl">chevron_left</span>
          </button>
        )}
        {canRight && (
          <button
            type="button"
            onClick={() => scrollByCard("right")}
            aria-label="Ver equipamiento siguiente"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/35 bg-black/35 text-white/95 backdrop-blur cursor-pointer transition-all duration-200 hover:scale-105 hover:text-white hover:border-white/70 hover:bg-white/12 hover:shadow-[0_14px_40px_rgba(0,0,0,0.45)]"
          >
            <span className="material-symbols-outlined text-xl">chevron_right</span>
          </button>
        )}
      </div>
    </section>
  );
}
