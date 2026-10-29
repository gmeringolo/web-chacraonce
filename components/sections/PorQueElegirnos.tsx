import Image from "next/image";
import { porQueElegirnos } from "@/content/site";
import { IntroSeccion } from "@/components/ui/IntroSeccion";
import { CardCompromiso } from "@/components/ui/CardCompromiso";

export function PorQueElegirnos() {
  return (
    <section id="diferencial" aria-labelledby="diferencial-titulo" className="seccion flex">
      <div className="contenedor grid grid-cols-1 content-center gap-10 py-12 md:py-16 xl:grid-cols-[552px_576px] xl:gap-0 xl:py-10">
        <div className="flex flex-col gap-10">
          <IntroSeccion
            id="diferencial-titulo"
            chip={porQueElegirnos.chip}
            titulo={porQueElegirnos.titulo}
            colorChip="text-blanco"
          />
          <ul className="flex flex-col gap-[29px] xl:max-w-[478px]">
            {porQueElegirnos.items.map((it) => (
              <CardCompromiso key={it.titulo} {...it} />
            ))}
          </ul>
        </div>
        <div className="relative h-[60svh] min-h-[320px] md:h-[520px] xl:-mt-[9px] xl:h-[658px]">
          <Image
            src={porQueElegirnos.imagen.src}
            alt={porQueElegirnos.imagen.alt}
            fill
            sizes="(min-width: 1280px) 576px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
