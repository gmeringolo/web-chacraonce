import Image from "next/image";
import { queHacemos } from "@/content/site";
import { IntroSeccion } from "@/components/ui/IntroSeccion";
import { CardCompromiso } from "@/components/ui/CardCompromiso";

export function QueHacemos() {
  return (
    <section id="servicios" aria-labelledby="servicios-titulo" className="seccion flex">
      <div className="contenedor grid grid-cols-1 gap-10 py-12 md:grid-cols-2 md:gap-12 md:py-16 xl:grid-cols-[576px_456px] xl:gap-[96px] xl:py-0">
        <div className="relative order-2 h-[60svh] min-h-[320px] md:order-none md:h-auto md:min-h-[560px] xl:min-h-0 xl:mb-[38px]">
          <Image
            src={queHacemos.imagen.src}
            alt={queHacemos.imagen.alt}
            fill
            sizes="(min-width: 1280px) 576px, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-10 xl:justify-start xl:pt-[72px] xl:pb-16">
          <IntroSeccion
            id="servicios-titulo"
            chip={queHacemos.chip}
            titulo={queHacemos.titulo}
          />
          <ul className="flex flex-col gap-[29px]">
            {queHacemos.items.map((it) => (
              <CardCompromiso key={it.titulo} {...it} colorTexto="text-blanco" />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
