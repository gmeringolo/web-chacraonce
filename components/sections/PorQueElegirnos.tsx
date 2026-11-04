import Image from "next/image";
import { porQueElegirnos } from "@/content/site";
import { IntroSeccion } from "@/components/ui/IntroSeccion";
import { CardCompromiso } from "@/components/ui/CardCompromiso";

export function PorQueElegirnos() {
  return (
    <section id="diferencial" aria-labelledby="diferencial-titulo" className="seccion flex">
      {/* Hasta 768: una columna (texto arriba, imagen abajo). Desde 769: texto y cards a la izquierda, imagen a la derecha */}
      <div className="contenedor grid grid-cols-1 content-center gap-10 py-12 md:py-16 min-[769px]:grid-cols-[minmax(0,552fr)_minmax(0,576fr)] min-[769px]:gap-8 lg:gap-10 lg:py-10 xl:grid-cols-[552px_576px] xl:gap-0">
        <div className="flex flex-col gap-10">
          <IntroSeccion
            id="diferencial-titulo"
            chip={porQueElegirnos.chip}
            titulo={porQueElegirnos.titulo}
          />
          <ul className="flex flex-col gap-[29px] lg:max-w-[478px]">
            {porQueElegirnos.items.map((it) => (
              <CardCompromiso key={it.titulo} {...it} />
            ))}
          </ul>
        </div>
        <div className="relative h-[60svh] min-h-[320px] md:h-[440px] min-[769px]:h-auto min-[769px]:min-h-[520px] lg:-mt-[9px] lg:h-[600px] xl:h-[658px]">
          <Image
            src={porQueElegirnos.imagen.src}
            alt={porQueElegirnos.imagen.alt}
            fill
            sizes="(min-width: 1280px) 576px, (min-width: 769px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
