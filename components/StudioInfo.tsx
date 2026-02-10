"use client";

const studioInfo = {
  title: "Horarios y Ubicación",
  description:
    "Consolas profesionales, monitores de referencia y un entorno pensado para practicar como en un club.",
  image: "/logos-estudio-info.jpeg",
  addressLine1: "Avenida 66 1077",
  addressLine2: "C1900 La Plata, Provincia de Buenos Aires",
  mapPoint: "Avenida 66 1077, C1900 La Plata",
  mapUrl: "https://maps.app.goo.gl/A35YgkrPz4rUGvJe7",
  embedUrl:
    "https://www.google.com/maps?q=Avenida%2066%201077%2C%20C1900%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires&output=embed",
  hours: [
    { label: "Lun a Vie", value: "09:00 a 20:00" },
    { label: "Sábados", value: "10:00 a 20:00" },
    { label: "Domingos", value: "Con reserva previa" },
  ],
};

export default function StudioInfo() {
  return (
    <section className="px-6 py-12 md:py-16 bg-background-light dark:bg-background-dark text-white">
      <div className="mx-auto grid w-full max-w-5xl gap-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:grid-cols-2 md:p-8">
        <div className="flex flex-col gap-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
            <img
              src={studioInfo.image}
              alt="Estudio Logos DJ"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Convertite en DJ Profesional
              </p>
              <p className="text-lg font-semibold">{studioInfo.title}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Horarios
            </p>
            <div className="mt-3 space-y-2 text-sm text-white/70">
              {studioInfo.hours.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between border-b border-white/10 pb-2 last:border-b-0 last:pb-0"
                >
                  <span>{item.label}</span>
                  <span className="text-white/90">{item.value}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-white/50">
              Consultá disponibilidad para clases individuales.
            </p>
          </div>
        </div>

        <div className="flex h-full flex-col justify-center gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Vení a entrenar al estudio
            </h3>
            <p className="mt-3 text-sm text-white/70">
              {studioInfo.description}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                Ubicación
              </p>
              <p className="mt-2 text-base font-semibold">
                {studioInfo.addressLine1}
              </p>
              <p className="text-sm text-white/60">{studioInfo.addressLine2}</p>
              <div className="mt-3 flex items-center gap-2 text-sm text-white/70">
                <span className="material-symbols-outlined text-base">
                  location_on
                </span>
                <span>{studioInfo.mapPoint}</span>
              </div>
              <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
                <iframe
                  title="Mapa de Logos Estudio DJ"
                  src={studioInfo.embedUrl}
                  width="100%"
                  height="200"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full"
                />
              </div>
              <a
                href={studioInfo.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80 transition hover:border-white/50 hover:bg-white/20"
              >
                Ver en Google Maps
                <span className="material-symbols-outlined text-base">
                  location_on
                </span>
              </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 w-full max-w-5xl">
        <div className="sticky bottom-4 z-20 rounded-3xl border border-white/15 bg-black/70 px-6 py-5 text-white backdrop-blur-md shadow-[0_0_24px_rgba(0,0,0,0.35)] md:px-8 md:py-6">
          <div className="flex w-full flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">
                Empeza hoy mismo
              </p>
              <p className="text-base font-semibold md:text-lg">
                Reserva tu práctica o clase en el estudio
              </p>
            </div>
            <a
              href="https://wa.me/5492213513585?text=Hola%2C%20estaba%20interesado%20en%20las%20clases%20de%20DJ"
              target="_blank"
              rel="noreferrer"
              aria-label="Reservar clase por WhatsApp"
              className="mx-auto rounded-full border border-sky-300/40 bg-sky-500/20 px-6 py-2.5 text-xs uppercase tracking-[0.2em] text-white/90 transition hover:border-sky-200/70 hover:bg-sky-400/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70 sm:mx-0 md:px-7 md:py-3 md:text-sm"
            >
              Reservar clase
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
