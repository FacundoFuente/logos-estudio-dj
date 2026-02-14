"use client";
import { useEffect, useRef, useState } from "react";

type Student = {
  name: string;
  label: string;
  img: string;
  video: string;
};

const students: Student[] = [
  {
    name: "Desiree Nemcik",
    label: "@desireenemcik",
    img: "/imagenes/desiree-nemcik-imagen.jpg",
    video: "/videos/desiree-nemcik-video.mp4",
  },
  {
    name: "Matias Moratti",
    label: "@matiasmoratti",
    img: "/imagenes/moratti-imagen.jpg",
    video: "/videos/moratti-video.mp4",
  },
  {
    name: "Sakson",
    label: "@rociosakson",
    img: "/imagenes/sakson-imagen.jpg",
    video: "/videos/sakson-video.mp4",
  },
  {
    name: "Martina Buongiorno",
    label: "@martinavbuongiorno",
    img: "/imagenes/martina-buongirno-imagen.jpg",
    video: "/videos/martina-buongirno-video.mp4",
  },
  {
    name: "Simon di Marzio",
    label: "@simondimarzio",
    img: "/imagenes/simon-dimarzio-imagen.jpg",
    video: "/videos/simon-dimarzio-video.mp4",
  },
  {
    name: "Antonella Raffetto",
    label: "@antoraffetto",
    img: "/imagenes/raffetto-imagen.jpg",
    video: "/videos/raffetto-video.mp4",
  },
  {
    name: "Clementina",
    label: "@clementina:___",
    img: "/imagenes/clementina-imagen.jpg",
    video: "/videos/clementina-video.mp4",
  },
  {
    name: "Julian Bellafronte",
    label: "@julianbellafronte",
    img: "/imagenes/bellafronte-imagen.png",
    video: "/videos/bellafronte-video.mp4",
  },
  {
    name: "Lourdes Rodriguez",
    label: "@lourdesrodrigguez",
    img: "/imagenes/lourdes-rodriguez-imagen.webp",
    video: "/videos/lourdes-rodriguez-video.mp4",
  },
  {
    name: "Nani Varela",
    label: "@nani.varela_",
    img: "/imagenes/nani-varela-imagen.jpeg",
    video: "/videos/nani-varela-video.mp4",
  },
  {
    name: "Fran Peñaflor",
    label: "@franpenaflor",
    img: "/imagenes/fran-peñaflor-imagen.jpg",
    video: "/videos/fran-peñaflor-video.mp4",
  },
  {
    name: "Julian Sibecas",
    label: "@sibecas_",
    img: "/imagenes/julian-sibecas-imagen.jpg",
    video: "/videos/julian-sibecas-video.mp4",
  },
  {
    name: "Lautaro de Agostino",
    label: "@lautarodeagostino",
    img: "/imagenes/lautaro-deagostino-imagen.jpg",
    video: "/videos/lautaro-deagostino-video.mp4",
  },
  {
    name: "Valen Corte",
    label: "@cortevalen",
    img: "/imagenes/valen-corte-imagen.webp",
    video: "/videos/valen-corte-video.mp4",
  },
  {
    name: "Facundo Fuente",
    label: "@facundofuente",
    img: "/imagenes/facundo-fuente-imagen.jpg",
    video: "/videos/facundo-fuente-video.mp4",
  },
  {
    name: "ENEMIA",
    label: "@eneasfernandez_",
    img: "/imagenes/eneas-imagen.jpg",
    video: "/videos/eneas-video.mp4",
  },
  {
    name: "Ilan Rosenfeld",
    label: "@ilan.rosenfeld",
    img: "/imagenes/ilan-rosenfeld-imagen.jpg",
    video: "/videos/ilan-rosenfeld-video.mp4",
  },
];

export default function Hero() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const loopWidthRef = useRef(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [mobilePhase, setMobilePhase] = useState<"image" | "video">("image");
  const [holdIndex, setHoldIndex] = useState<number | null>(null);
  const cycleTimerRef = useRef<number | null>(null);
  const scrollAnimRef = useRef<number | null>(null);
  const stepRef = useRef(0);
  const [cycleTick, setCycleTick] = useState(0);
  const [loopCopies, setLoopCopies] = useState(2);
  const programmaticScrollRef = useRef(false);
  const scPlaylistUrl =
    "https://soundcloud.com/facundo-fuente-398481768/sets/logos";
  const scEmbedUrl = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
    scPlaylistUrl
  )}&color=%230a0a0a&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`;
  const scIframeRef = useRef<HTMLIFrameElement | null>(null);
  const scWidgetRef = useRef<any>(null);
  const [nowPlaying, setNowPlaying] = useState("Logos Estudio DJ Radio");
  const [nowUser, setNowUser] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [scReady, setScReady] = useState(false);
  const scSoundsRef = useRef<any[]>([]);
  const scQueueRef = useRef<number[]>([]);
  const scQueueIndexRef = useRef(0);
  const pendingSeekRef = useRef<{ id: number; ms: number } | null>(null);
  const seekTimeoutRef = useRef<number | null>(null);
  const scInitializedRef = useRef(false);
  const randomSeekedRef = useRef<number | null>(null);

  const loopStudents = Array.from({ length: loopCopies }, () => students).flat();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: none) and (pointer: coarse)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);


  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || isMobile) return;
    const onResize = () => {
      if (loopWidthRef.current > 0) {
        offsetRef.current = offsetRef.current % loopWidthRef.current;
        carousel.scrollLeft = offsetRef.current;
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isMobile]);

  useEffect(() => {
    const endDrag = () => {
      isDraggingRef.current = false;
    };
    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointercancel", endDrag);
    window.addEventListener("blur", endDrag);
    return () => {
      window.removeEventListener("pointerup", endDrag);
      window.removeEventListener("pointercancel", endDrag);
      window.removeEventListener("blur", endDrag);
    };
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || isMobile) return;
    offsetRef.current = carousel.scrollLeft;

    let frame: number;
    const speed = 24; // px/seg desktop
    let lastTime = 0;

    const scroll = (time: number) => {
      if (!lastTime) lastTime = time;
      if (isDraggingRef.current) {
        lastTime = time;
        frame = requestAnimationFrame(scroll);
        return;
      }
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      const loopWidth = loopWidthRef.current;
      if (carousel.scrollWidth > carousel.clientWidth && loopWidth > 0) {
        if (offsetRef.current >= loopWidth) {
          offsetRef.current %= loopWidth;
          carousel.scrollLeft = offsetRef.current;
        }
        offsetRef.current += speed * delta;
        if (offsetRef.current >= loopWidth) {
          offsetRef.current -= loopWidth;
        }
        programmaticScrollRef.current = true;
        carousel.scrollLeft = offsetRef.current;
      }
      frame = requestAnimationFrame(scroll);
    };

    frame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frame);
  }, [isMobile]);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const measure = () => {
      const children = Array.from(el.children).slice(0, students.length) as HTMLElement[];
      if (!children.length) return;
      const styles = window.getComputedStyle(el);
      const gap = parseFloat(styles.columnGap || styles.gap || "0");
      let width = 0;
      children.forEach((child, idx) => {
        width += child.getBoundingClientRect().width;
        if (idx < children.length - 1) width += gap;
      });
      if (width > 0) {
        loopWidthRef.current = width;
        const needed = Math.max(2, Math.ceil(el.clientWidth / width) + 1);
        if (needed !== loopCopies) setLoopCopies(needed);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [loopCopies]);

  useEffect(() => {
    if (!isMobile) return;
    const el = carouselRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    if (!first) return;
    const styles = window.getComputedStyle(el);
    const gap = parseFloat(styles.columnGap || styles.gap || "0");
    stepRef.current = first.getBoundingClientRect().width + gap;
  }, [isMobile, cycleTick]);

  useEffect(() => {
    if (!isMobile) return;
    if (cycleTimerRef.current) window.clearTimeout(cycleTimerRef.current);

    if (holdIndex !== null) {
      cycleTimerRef.current = window.setTimeout(
        () => setCycleTick((t) => t + 1),
        300
      );
      return;
    }

    const delay = mobilePhase === "image" ? 1000 : 4000;
    cycleTimerRef.current = window.setTimeout(() => {
      if (mobilePhase === "image") {
        setMobilePhase("video");
      } else {
        setMobilePhase("image");
        setMobileIndex((i) => (i + 1) % students.length);
        const el = carouselRef.current;
        if (el && stepRef.current) {
          const start = el.scrollLeft;
          const distance = stepRef.current;
          const duration = 900;
          const startTime = performance.now();
          const easeInOut = (t: number) =>
            t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

          if (scrollAnimRef.current) cancelAnimationFrame(scrollAnimRef.current);
          const animate = (time: number) => {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeInOut(progress);
            programmaticScrollRef.current = true;
            el.scrollLeft = start + distance * eased;
            if (progress < 1) {
              scrollAnimRef.current = requestAnimationFrame(animate);
            } else {
              const loopWidth = loopWidthRef.current;
              if (loopWidth > 0 && el.scrollLeft >= loopWidth) {
                programmaticScrollRef.current = true;
                el.scrollLeft -= loopWidth;
              }
            }
          };
          scrollAnimRef.current = requestAnimationFrame(animate);
        }
      }
    }, delay);

    return () => {
      if (cycleTimerRef.current) window.clearTimeout(cycleTimerRef.current);
    };
  }, [isMobile, mobilePhase, holdIndex, cycleTick]);

  useEffect(() => {
    const onEnd = () => {
      if (holdIndex !== null) {
        setHoldIndex(null);
        setMobilePhase("image");
        setCycleTick((t) => t + 1);
      }
    };
    window.addEventListener("touchend", onEnd);
    window.addEventListener("touchcancel", onEnd);
    window.addEventListener("pointerup", onEnd);
    window.addEventListener("pointercancel", onEnd);
    return () => {
      window.removeEventListener("touchend", onEnd);
      window.removeEventListener("touchcancel", onEnd);
      window.removeEventListener("pointerup", onEnd);
      window.removeEventListener("pointercancel", onEnd);
    };
  }, [holdIndex]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const initWidget = () => {
      const sc = (window as any).SC;
      if (!sc || !scIframeRef.current) return;
      scWidgetRef.current = sc.Widget(scIframeRef.current);
      const shuffle = (arr: number[]) => {
        for (let i = arr.length - 1; i > 0; i -= 1) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
      };
      const applyPendingSeek = (force = false) => {
        const pending = pendingSeekRef.current;
        if (!pending) return;
        scWidgetRef.current.getCurrentSound((sound: any) => {
          if (!sound?.id || sound.id !== pending.id) return;
          const doSeek = () => {
            scWidgetRef.current.seekTo(pending.ms);
            pendingSeekRef.current = null;
          };
          if (seekTimeoutRef.current) window.clearTimeout(seekTimeoutRef.current);
          if (force) doSeek();
          else seekTimeoutRef.current = window.setTimeout(doSeek, 300);
        });
      };

      const playIndex = (index: number, randomSeek: boolean) => {
        const sound = scSoundsRef.current[index];
        if (sound?.title) setNowPlaying(sound.title);
        if (sound?.user?.username) setNowUser(sound.user.username);
        if (sound?.id && sound?.duration && randomSeek) {
          const minSeek = 600000; // 10 minutos
          const maxSeek = Math.max(sound.duration - 15000, 0);
          const safeMin = Math.min(minSeek, Math.max(maxSeek - 1000, 0));
          const range = Math.max(maxSeek - safeMin, 0);
          const seek =
            range > 0
              ? Math.floor(safeMin + Math.random() * range)
              : Math.floor(Math.random() * sound.duration);
          pendingSeekRef.current = { id: sound.id, ms: seek };
        } else {
          pendingSeekRef.current = null;
        }
        scWidgetRef.current.load(scPlaylistUrl, {
          auto_play: true,
          start_track: index,
          show_teaser: false,
          show_comments: false,
          show_reposts: false,
          show_user: false,
          visual: false,
        });
        applyPendingSeek();
      };

      scWidgetRef.current.bind(sc.Widget.Events.READY, () => {
        setScReady(true);
        applyPendingSeek(true);
        if (scInitializedRef.current) return;
        scInitializedRef.current = true;
        scWidgetRef.current.getSounds((sounds: any[]) => {
          scSoundsRef.current = sounds || [];
          if (!scSoundsRef.current.length) return;
          scQueueRef.current = shuffle(
            Array.from({ length: scSoundsRef.current.length }, (_, i) => i)
          );
          scQueueIndexRef.current = Math.floor(
            Math.random() * scQueueRef.current.length
          );
          playIndex(scQueueRef.current[scQueueIndexRef.current], true);
        });
      });
      const trySeek = (sound: any, immediate = false) => {
        if (!sound?.id) return;
        const pending = pendingSeekRef.current;
        if (!pending || pending.id !== sound.id) return;
        const doSeek = () => {
          scWidgetRef.current.seekTo(pending.ms);
          pendingSeekRef.current = null;
        };
        if (seekTimeoutRef.current) window.clearTimeout(seekTimeoutRef.current);
        if (immediate) doSeek();
        else seekTimeoutRef.current = window.setTimeout(doSeek, 300);
      };

      scWidgetRef.current.bind(sc.Widget.Events.PLAY, () => {
        setIsPlaying(true);
        scWidgetRef.current.getCurrentSound((sound: any) => {
          if (sound?.title) setNowPlaying(sound.title);
          if (sound?.user?.username) setNowUser(sound.user.username);
          applyPendingSeek();
          if (
            sound?.id &&
            sound?.duration &&
            randomSeekedRef.current !== sound.id
          ) {
            const minSeek = 600000; // 10 minutos
            const maxSeek = Math.max(sound.duration - 15000, 0);
            const safeMin = Math.min(minSeek, Math.max(maxSeek - 1000, 0));
            const range = Math.max(maxSeek - safeMin, 0);
            const seek =
              range > 0
                ? Math.floor(safeMin + Math.random() * range)
                : Math.floor(Math.random() * sound.duration);
            randomSeekedRef.current = sound.id;
            if (seekTimeoutRef.current) window.clearTimeout(seekTimeoutRef.current);
            seekTimeoutRef.current = window.setTimeout(() => {
              scWidgetRef.current.seekTo(seek);
            }, 300);
          }
        });
      });
      scWidgetRef.current.bind(sc.Widget.Events.PAUSE, () => {
        setIsPlaying(false);
      });
      scWidgetRef.current.bind(sc.Widget.Events.PLAY_PROGRESS, (data: any) => {
        if (!pendingSeekRef.current) return;
        if (data?.currentPosition > 1200) return;
        applyPendingSeek(true);
      });
      scWidgetRef.current.bind(sc.Widget.Events.FINISH, () => {
        if (!scQueueRef.current.length) return;
        scQueueIndexRef.current =
          (scQueueIndexRef.current + 1) % scQueueRef.current.length;
        if (scQueueIndexRef.current === 0) {
          scQueueRef.current = shuffle(
            Array.from({ length: scSoundsRef.current.length }, (_, i) => i)
          );
        }
        const nextIndex = scQueueRef.current[scQueueIndexRef.current];
        playIndex(nextIndex, true);
      });
    };

    if ((window as any).SC?.Widget) {
      initWidget();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://w.soundcloud.com/player/api.js";
    script.async = true;
    script.onload = initWidget;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="relative min-h-[min(100svh,920px)] bg-background-dark text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(5,5,5,.7) 0%, rgba(5,5,5,1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBoDTVJkQgtkGlYrNNMaGF1fcRFhZ_wO2N2Mq30izSjQbP5618I2bcOA-zuemPAfKevllMJuGfzI70u36UnmuBiougjNUuvVFaeLKGtmwaQZWQxTxQMLUNbk_TMRV-JwgwDFUIS6dDLSF1KcYMwcpWnPri9SW9GN9TDMJqXgpLjMk9ZIzuW-Cy42-hur5BiElluBjLMM2CO6eYRFmZOP8GJ4ltjE2eNZnstx94BgBi7TKzC_vLCDVPzFtVTE4Fki9flVZFGL72Wcl5N")',
        }}
      />

      <div className="absolute left-1/2 top-4 z-20 -translate-x-1/2 px-4 w-full flex justify-center">
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-[11px] text-white/80 backdrop-blur w-full max-w-lg whitespace-nowrap">
          <button
            type="button"
            aria-label={isPlaying ? "Pausar radio" : "Reproducir radio"}
            onClick={() => {
              const w = scWidgetRef.current;
              if (!w) return;
              w.isPaused((paused: boolean) => {
                if (paused) w.play();
                else w.pause();
              });
            }}
            className={`grid h-7 w-7 place-items-center rounded-full border border-white/35 bg-black/35 text-white/95 cursor-pointer transition-all duration-200 hover:scale-105 hover:text-white hover:border-white/70 hover:bg-white/12 hover:shadow-[0_14px_40px_rgba(0,0,0,0.45)] ${
              scReady ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">
              {isPlaying ? "pause" : "play_arrow"}
            </span>
          </button>
          <span className="uppercase tracking-widest text-neon-pink">
            Now playing
          </span>
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
          </span>
          <span className="block overflow-hidden max-w-[52vw] md:max-w-sm">
            <span className="marquee md:marquee--off">
              <span className="marquee__item">
                {nowPlaying}
                {nowUser ? ` — ${nowUser}` : ""}
              </span>
            </span>
          </span>
        </div>
      </div>

      <iframe
        ref={scIframeRef}
        title="Radio Logos - SoundCloud"
        width="1"
        height="1"
        allow="autoplay"
        src={scEmbedUrl}
        className="absolute left-0 top-0 opacity-0 pointer-events-none"
      />

      <div className="relative z-10 px-6 pt-10 sm:pt-14 flex flex-col items-center text-center">
        <img
          src="/logo-estudio-dj.png"
          alt="Lógos Estudio DJ"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="h-44 sm:h-52 md:h-64 lg:h-56 w-auto max-w-[86vw] object-contain -mb-4"
        />
        <p className="text-white/70 mb-5 max-w-md mt-0">
          El estudio más importante en formación de Djs Profesionales de La Plata.
        </p>

        <div className="mb-6" />
      </div>

      <style jsx>{`
        .marquee {
          display: inline-flex;
          gap: 1.5rem;
          white-space: nowrap;
        }
        .marquee__item {
          display: inline-block;
        }
        @media (max-width: 640px) {
          .marquee {
            animation: marquee 12s linear infinite;
          }
        }
        .marquee--off {
          animation: none !important;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="relative z-10">
        <div
          ref={carouselRef}
          className="flex overflow-x-auto gap-5 px-6 pb-10 no-scrollbar snap-x snap-mandatory scroll-smooth md:snap-none md:scroll-auto md:cursor-grab"
          onPointerDown={(e) => {
            if (isMobile) return;
            const el = carouselRef.current;
            if (!el) return;
            isDraggingRef.current = true;
            dragStartXRef.current = e.clientX;
            dragStartScrollRef.current = el.scrollLeft;
            el.setPointerCapture(e.pointerId);
          }}
          onPointerMove={(e) => {
            if (isMobile || !isDraggingRef.current) return;
            const el = carouselRef.current;
            if (!el) return;
            const dx = e.clientX - dragStartXRef.current;
            el.scrollLeft = dragStartScrollRef.current - dx;
            offsetRef.current = el.scrollLeft;
          }}
          onPointerUp={(e) => {
            if (isMobile) return;
            const el = carouselRef.current;
            if (el) el.releasePointerCapture(e.pointerId);
            isDraggingRef.current = false;
          }}
          onPointerCancel={() => {
            if (!isMobile) isDraggingRef.current = false;
          }}
          onPointerLeave={() => {
            if (!isMobile) isDraggingRef.current = false;
          }}
          onScroll={(e) => {
            if (!isMobile) {
              if (programmaticScrollRef.current) {
                programmaticScrollRef.current = false;
                return;
              }
              offsetRef.current = e.currentTarget.scrollLeft;
            }
          }}
        >
          {loopStudents.map((s, i) => {
            const baseIndex = i % students.length;
            const isMobileActive = isMobile && baseIndex === mobileIndex;
            const showVideo =
              isMobile &&
              (holdIndex === baseIndex ||
                (mobilePhase === "video" && baseIndex === mobileIndex));
            return (
              <StudentCard
                key={i}
                student={s}
                isMobile={isMobile}
                preloadVideo={isMobileActive}
                showVideo={showVideo}
                onHoldStart={() => setHoldIndex(baseIndex)}
                onHoldEnd={() => {
                  setHoldIndex(null);
                  setMobilePhase("image");
                  setCycleTick((t) => t + 1);
                }}
              />
            );
          })}
        </div>
      </div>

    </section>
  );
}

function StudentCard({
  student,
  isMobile,
  preloadVideo,
  showVideo,
  onHoldStart,
  onHoldEnd,
}: {
  student: Student;
  isMobile: boolean;
  preloadVideo?: boolean;
  showVideo?: boolean;
  onHoldStart?: () => void;
  onHoldEnd?: () => void;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [hoverActive, setHoverActive] = useState(false);
  const [hoverPreload, setHoverPreload] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [forceLoad, setForceLoad] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const movedRef = useRef(false);
  const holdingRef = useRef(false);

  const active = isMobile ? !!showVideo : hoverActive;
  const shouldLoadVideo =
    visible &&
    (isMobile
      ? !!preloadVideo || !!showVideo || forceLoad
      : hoverPreload || hoverActive);
  const mp4Src = isMobile
    ? student.video
    : student.video.replace("/videos/", "/videos_original/");
  const webmSrc =
    isMobile && student.video.endsWith(".mp4")
      ? student.video.replace(/\.mp4$/, ".webm")
      : undefined;

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (visible && active && ref.current?.readyState !== 0) {
      const playPromise = el.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    } else {
      el.pause();
    }
  }, [visible, active]);

  return (
    <div
      className="group relative min-w-[240px] aspect-[4/5] shrink-0 rounded-2xl overflow-hidden border border-white/10 snap-center"
      onClick={() => {
        if (isMobile) {
          setForceLoad(true);
          if (ref.current) {
            const playPromise = ref.current.play();
            if (playPromise && typeof playPromise.catch === "function") {
              playPromise.catch(() => {});
            }
          }
          return;
        }
        setHoverActive((v) => !v);
      }}
      onMouseEnter={() => {
        if (isMobile) return;
        setHoverPreload(true);
        setHoverActive(true);
      }}
      onMouseLeave={() => {
        if (isMobile) return;
        setHoverActive(false);
      }}
      onTouchStart={(e) => {
        const t = e.touches[0];
        touchStartRef.current = { x: t.clientX, y: t.clientY };
        movedRef.current = false;
        holdingRef.current = true;
        setForceLoad(true);
        if (ref.current) {
          const playPromise = ref.current.play();
          if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(() => {});
          }
        }
        onHoldStart?.();
      }}
      onTouchMove={(e) => {
        if (!touchStartRef.current) return;
        const t = e.touches[0];
        const dx = Math.abs(t.clientX - touchStartRef.current.x);
        const dy = Math.abs(t.clientY - touchStartRef.current.y);
        if (dx > 6 || dy > 6) {
          movedRef.current = true;
          if (holdingRef.current) {
            holdingRef.current = false;
            onHoldEnd?.();
          }
        }
      }}
      onTouchEnd={() => {
        if (holdingRef.current) {
          holdingRef.current = false;
          onHoldEnd?.();
        }
        touchStartRef.current = null;
      }}
      onTouchCancel={() => {
        holdingRef.current = false;
        onHoldEnd?.();
      }}
    >
      <img
        src={student.img}
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          active && videoReady ? "opacity-0" : "opacity-100"
        }`}
      />

      <video
        ref={ref}
        poster={student.img}
        muted
        loop
        playsInline
        autoPlay
        preload={isMobile ? "auto" : "metadata"}
        onLoadedData={() => {
          setVideoReady(true);
          if (active) {
            const playPromise = ref.current?.play();
            if (playPromise && typeof playPromise.catch === "function") {
              playPromise.catch(() => {});
            }
          }
        }}
        onEmptied={() => setVideoReady(false)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          active && videoReady ? "opacity-100" : "opacity-0"
        }`}
      >
        {shouldLoadVideo ? <source src={mp4Src} type="video/mp4" /> : null}
        {shouldLoadVideo && webmSrc ? (
          <source src={webmSrc} type="video/webm" />
        ) : null}
      </video>

      {active && (
        <div className="absolute inset-0 ring-2 ring-purple-500 shadow-[0_0_25px_rgba(139,92,246,.6)] rounded-2xl" />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent" />
      <div className="absolute bottom-4 left-4 z-10">
        <p className="text-xs text-purple-400 font-bold uppercase">
          {student.label}
        </p>
        <p className="text-lg font-bold">{student.name}</p>
      </div>
    </div>
  );
}
