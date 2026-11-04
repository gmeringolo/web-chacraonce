import Image from "next/image";
import { proposito } from "@/content/site";
import { IntroSeccion } from "@/components/ui/IntroSeccion";

export function NuestroProposito() {
  return (
    <section id="nosotros" aria-labelledby="nosotros-titulo" className="seccion flex">
      {/* Menos de 1024: una columna (imagen arriba). Desde 1024: imagen y texto lado a lado */}
      <div className="contenedor grid grid-cols-1 gap-10 py-12 md:py-16 lg:grid-cols-[minmax(0,595fr)_minmax(0,456fr)] lg:gap-12 lg:py-0 xl:grid-cols-[595px_456px] xl:gap-[77px]">
        <div className="relative h-[52svh] min-h-[320px] md:h-[440px] lg:h-auto lg:min-h-0">
          <Image
            src={proposito.imagen.src}
            alt={proposito.imagen.alt}
            fill
            sizes="(min-width: 1280px) 595px, (min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-8 lg:justify-start lg:pb-16 lg:pt-[71px]">
          <IntroSeccion
            id="nosotros-titulo"
            chip={proposito.chip}
            titulo={proposito.titulo}
          />
          <div className="flex flex-col gap-6 lg:mt-1.5">
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
