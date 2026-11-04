import Image from "next/image";
import { queHacemos } from "@/content/site";
import { IntroSeccion } from "@/components/ui/IntroSeccion";
import { CardCompromiso } from "@/components/ui/CardCompromiso";

export function QueHacemos() {
  return (
    <section id="servicios" aria-labelledby="servicios-titulo" className="seccion flex">
      {/* Menos de 1024: una columna (texto arriba, imagen abajo). Desde 1024: lado a lado */}
      <div className="contenedor grid grid-cols-1 gap-10 py-12 md:py-16 lg:grid-cols-[minmax(0,576fr)_minmax(0,456fr)] lg:gap-12 lg:py-0 xl:grid-cols-[576px_456px] xl:gap-[96px]">
        <div className="relative order-2 h-[60svh] min-h-[320px] md:h-[440px] lg:order-none lg:mb-[38px] lg:h-auto lg:min-h-0">
          <Image
            src={queHacemos.imagen.src}
            alt={queHacemos.imagen.alt}
            fill
            sizes="(min-width: 1280px) 576px, (min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-10 lg:justify-start lg:pb-16 lg:pt-[72px]">
          <IntroSeccion
            id="servicios-titulo"
            chip={queHacemos.chip}
            titulo={queHacemos.titulo}
          />
          <ul className="flex flex-col gap-[29px]">
            {queHacemos.items.map((it) => (
              <CardCompromiso key={it.titulo} {...it} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
