import Image from "next/image";
import { proposito } from "@/content/site";
import { IntroSeccion } from "@/components/ui/IntroSeccion";

export function NuestroProposito() {
  return (
    <section id="nosotros" aria-labelledby="nosotros-titulo" className="seccion flex">
      <div className="contenedor grid grid-cols-1 gap-10 py-12 md:grid-cols-[1fr_1fr] md:gap-12 md:py-16 xl:grid-cols-[595px_456px] xl:gap-[77px] xl:py-0">
        <div className="relative h-[52svh] min-h-[320px] md:h-auto md:min-h-[560px] xl:min-h-0">
          <Image
            src={proposito.imagen.src}
            alt={proposito.imagen.alt}
            fill
            sizes="(min-width: 1280px) 595px, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-8 xl:justify-start xl:pt-[71px] xl:pb-16">
          <IntroSeccion
            id="nosotros-titulo"
            chip={proposito.chip}
            titulo={proposito.titulo}
          />
          <div className="flex flex-col gap-6 xl:mt-1.5">
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
