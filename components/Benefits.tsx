"use client";

const sharedBoothLogos = [
  { name: "Antrim", src: "/cabinas/antrim.png" },
  { name: "Chapaycastelo", src: "/cabinas/chapaycastelo.png" },
  { name: "Elinissan", src: "/cabinas/elinissan.png" },
  { name: "Emigalvan", src: "/cabinas/emigalvan.png" },
  { name: "Ezequielarias", src: "/cabinas/ezequielarias.png" },
  { name: "Ezeramirez", src: "/cabinas/ezeramirez.png" },
  { name: "Kamilosanclemente", src: "/cabinas/kamilosanclemente.png" },
  { name: "Kevindiserna", src: "/cabinas/kevindiserna.png" },
  { name: "Marianomellino", src: "/cabinas/marianomellino.png" },
  { name: "Nicolasrada", src: "/cabinas/nicolasrada.png" },
  { name: "Patricebaumel", src: "/cabinas/patricebaumel.png" },
  { name: "Roysosenfeld", src: "/cabinas/roysosenfeld.png" },
  { name: "Sebastianbusto", src: "/cabinas/sebastianbusto.png" },
  { name: "Sebastianleger", src: "/cabinas/sebastianleger.png" },
  { name: "Topolarocca", src: "/cabinas/topolarocca.png" }
];
const marqueeGroups = [0, 1];

export default function Benefits() {
  return (
    <section className="px-6 py-10 md:py-14 bg-background-light dark:bg-background-dark text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1.1fr_.9fr] gap-10 items-start">
          <div className="min-w-0">
            <span className="text-neon-pink font-semibold text-sm tracking-widest uppercase">
              Formación profesional
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 leading-tight">
              Formación profesional de verdad
            </h2>
          <p className="text-slate-400 mt-4 max-w-xl leading-relaxed break-words">
            No es un curso grabado. Es entrenamiento real en cabina profesional,
            con seguimiento personalizado y enfoque en que llegues a tocar en clubes.
          </p>

          <div className="mt-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Cabinas compartidas
            </p>
            <div className="mt-4 w-full max-w-full overflow-hidden rounded-2xl border border-white/10 bg-black/30">
              <div className="marquee-shell w-full px-4 py-3">
                <div className="marquee-track flex w-max items-center">
                  {marqueeGroups.map((group) => (
                    <div
                      key={`marquee-group-${group}`}
                      className="marquee-group flex items-center gap-3 pr-3 shrink-0"
                      aria-hidden={group === 1}
                    >
                      {sharedBoothLogos.map((logo, index) => (
                        <img
                          key={`${logo.src}-${group}-${index}`}
                          src={logo.src}
                          loading="eager"
                          decoding="async"
                          alt={group === 0 ? logo.name : ""}
                          className="marquee-logo h-10 w-auto object-contain sm:h-12"
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="material-symbols-outlined text-[16px]">school</span>
              Cursos para Iniciales y Avanzados
            </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                <span className="material-symbols-outlined text-[16px]">trophy</span>
                12+ años formando Djs Profesionales
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                <span className="material-symbols-outlined text-[16px]">headphones</span>
                Cabina con 4 Cdjs y Bandejas de Vinilo
              </span>
            </div>
          </div>

          <div className="grid gap-6 min-w-0">
            <div className="glass-card p-8 rounded-2xl border border-primary/30">
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-primary text-2xl">
                  person
                </span>
                <h3 className="text-xl font-bold">Clases 100% individuales</h3>
              </div>
              <p className="text-slate-400 text-sm">
                Aprendés a tu ritmo, sin grupo, sin distracciones. Cada clase está
                pensada para tu nivel y estilo musical.
              </p>
            </div>

            <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
              <div className="glass-card p-6 rounded-xl border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary">
                    verified
                  </span>
                  <h4 className="font-bold">Experiencia real</h4>
                </div>
                <p className="text-xs text-slate-400">
                  Trayectoria en cabinas, eventos y formación.
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary">
                    task_alt
                  </span>
                  <h4 className="font-bold">Seguimiento real</h4>
                </div>
                <p className="text-xs text-slate-400">
                  Correcciones y evolución clase a clase.
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl border border-white/10 col-span-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary">
                    nightlife
                  </span>
                  <h4 className="font-bold">Preparación para cabina</h4>
                </div>
                <p className="text-xs text-slate-400">
                  Simulación real de club para que llegues con confianza a tocar en vivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .marquee-shell {
          overflow: hidden;
          max-width: 100%;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 26s linear infinite;
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .marquee-group {
          display: flex;
          gap: 12px;
          padding-right: 12px;
          flex: 0 0 auto;
        }

        .marquee-logo {
          flex: 0 0 auto;
          opacity: 0.85;
          filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.35));
        }
        @media (max-width: 640px) {
          .marquee-logo {
            filter: none;
          }
          .marquee-track {
            animation-duration: 22s;
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
            transform: translateX(0);
          }
        }

      `}</style>
    </section>
  );
}
