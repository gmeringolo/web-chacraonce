"use client";

import { useCallback, useEffect, useState, type KeyboardEvent } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { proyectos } from "@/content/site";
import { IntroSeccion } from "@/components/ui/IntroSeccion";
import { CardProyecto } from "@/components/ui/CardProyecto";
import { IconoFlecha } from "@/components/ui/Iconos";

export function NuestrosProyectos() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [actual, setActual] = useState(0);
  const [total, setTotal] = useState(proyectos.lista.length);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActual(emblaApi.selectedScrollSnap());
    const onInit = () => {
      setTotal(emblaApi.scrollSnapList().length);
      onSelect();
    };
    onInit();
    emblaApi.on("select", onSelect).on("reInit", onInit);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onInit);
    };
  }, [emblaApi]);

  const anterior = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const siguiente = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      anterior();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      siguiente();
    }
  };

  const hayVarios = total > 1;

  return (
    <section id="proyectos" aria-labelledby="proyectos-titulo" className="seccion flex">
      <div className="contenedor flex flex-col justify-center py-12 md:py-16 xl:py-4">
        <div className="flex items-end justify-between gap-6">
          <IntroSeccion id="proyectos-titulo" chip={proyectos.chip} titulo={proyectos.titulo} colorChip="text-blanco" />
          {hayVarios && (
            <div className="hidden shrink-0 gap-3 md:flex">
              <BotonFlecha direccion="izquierda" onClick={anterior} />
              <BotonFlecha direccion="derecha" onClick={siguiente} />
            </div>
          )}
        </div>

        <div
          role="region"
          aria-roledescription="carrusel"
          aria-label="Proyectos"
          tabIndex={0}
          onKeyDown={onKeyDown}
          className="mt-8 overflow-hidden xl:mt-[43px]"
          ref={emblaRef}
        >
          <div className="flex touch-pan-y">
            {proyectos.lista.map((p, i) => (
              <div
                key={i}
                role="group"
                aria-roledescription="diapositiva"
                aria-label={`${i + 1} de ${proyectos.lista.length}`}
                className="min-w-0 flex-[0_0_100%] pr-0"
              >
                <CardProyecto proyecto={p} boton={proyectos.boton} />
              </div>
            ))}
          </div>
        </div>

        {hayVarios && (
          <div className="mt-6 flex items-center justify-between md:justify-center">
            <BotonFlecha direccion="izquierda" onClick={anterior} className="md:hidden" />
            <div className="flex gap-3">
              {Array.from({ length: total }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => emblaApi?.scrollTo(i)}
                  aria-label={`Ir al proyecto ${i + 1}`}
                  aria-current={i === actual}
                  className="flex h-6 items-center"
                >
                  <span
                    className={`block h-[3px] transition-all duration-300 ${i === actual ? "w-10 bg-ocre" : "w-5 bg-[#5b5958]"}`}
                  />
                </button>
              ))}
            </div>
            <BotonFlecha direccion="derecha" onClick={siguiente} className="md:hidden" />
          </div>
        )}
      </div>
    </section>
  );
}

function BotonFlecha({
  direccion,
  onClick,
  className = "",
}: {
  direccion: "izquierda" | "derecha";
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direccion === "izquierda" ? "Proyecto anterior" : "Proyecto siguiente"}
      className={`flex size-11 items-center justify-center border border-blanco text-blanco transition-colors hover:border-ocre hover:bg-ocre hover:text-negro ${className}`}
    >
      <IconoFlecha direccion={direccion} className="size-5" />
    </button>
  );
}
