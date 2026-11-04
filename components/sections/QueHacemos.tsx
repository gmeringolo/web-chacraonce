import Image from "next/image";
import { queHacemos } from "@/content/site";
import { IntroSeccion } from "@/components/ui/IntroSeccion";
import { CardCompromiso } from "@/components/ui/CardCompromiso";

export function QueHacemos() {
  return (
    <section id="servicios" aria-labelledby="servicios-titulo" className="seccion flex">
      {/* Hasta 768: una columna (texto arriba, imagen abajo). Desde 769: imagen a la izquierda, texto y cards a la derecha.
          (48.0625rem = 769px; va en rem para que quede bien ordenado frente a md/lg) */}
      <div className="contenedor grid grid-cols-1 content-center gap-10 py-12 md:py-16 min-[48.0625rem]:grid-cols-[minmax(0,576fr)_minmax(0,456fr)] min-[48.0625rem]:gap-8 lg:gap-12 lg:py-10 xl:grid-cols-[576px_456px] xl:gap-[96px]">
        {/* Desde 769 no tiene alto fijo: se estira al alto de la columna de texto
            y con los márgenes negativos sobresale 9px arriba y 12px abajo de la última card */}
        <div className="relative order-2 h-[60svh] min-h-[320px] md:h-[440px] min-[48.0625rem]:order-none min-[48.0625rem]:-mb-[12px] min-[48.0625rem]:-mt-[9px] min-[48.0625rem]:h-auto min-[48.0625rem]:min-h-0">
          <Image
            src={queHacemos.imagen.src}
            alt={queHacemos.imagen.alt}
            fill
            sizes="(min-width: 1280px) 576px, (min-width: 769px) 55vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-10">
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
