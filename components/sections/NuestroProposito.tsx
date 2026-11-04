import Image from "next/image";
import { proposito } from "@/content/site";
import { IntroSeccion } from "@/components/ui/IntroSeccion";

export function NuestroProposito() {
  return (
    <section id="nosotros" aria-labelledby="nosotros-titulo" className="seccion flex">
      {/* Hasta 768: una columna (imagen arriba). Desde 769 (48.0625rem): imagen y texto lado a lado */}
      <div className="contenedor grid grid-cols-1 gap-10 py-12 md:py-16 min-[48.0625rem]:grid-cols-[minmax(0,595fr)_minmax(0,456fr)] min-[48.0625rem]:gap-8 min-[48.0625rem]:py-0 lg:gap-12 xl:grid-cols-[595px_456px] xl:gap-[77px]">
        <div className="relative h-[52svh] min-h-[320px] md:h-[440px] min-[48.0625rem]:h-auto min-[48.0625rem]:min-h-0">
          <Image
            src={proposito.imagen.src}
            alt={proposito.imagen.alt}
            fill
            sizes="(min-width: 1280px) 595px, (min-width: 769px) 55vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-8 min-[48.0625rem]:justify-start min-[48.0625rem]:pb-16 min-[48.0625rem]:pt-[71px]">
          <IntroSeccion
            id="nosotros-titulo"
            chip={proposito.chip}
            titulo={proposito.titulo}
          />
          <div className="flex flex-col gap-6 min-[48.0625rem]:mt-1.5">
            {proposito.parrafos.map((p) => (
              <p key={p} className="text-parrafo text-blanco">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
