import Image from "next/image";
import { equipo } from "@/content/site";
import { IntroSeccion } from "@/components/ui/IntroSeccion";
import { IconoPersona } from "@/components/ui/Iconos";

export function NuestroEquipo() {
  return (
    <section id="equipo" aria-labelledby="equipo-titulo" className="seccion flex">
      <div className="contenedor flex flex-col justify-center py-12 md:py-16 xl:py-6">
        <IntroSeccion
          id="equipo-titulo"
          chip={equipo.chip}
          titulo={equipo.titulo}
          bajada={equipo.bajada}
          className="max-w-[896px]"
        />

        <ul className="mt-[86px] grid grid-cols-1 gap-x-6 gap-y-[71px] md:grid-cols-2 xl:mt-[81px] xl:grid-cols-3">
          {equipo.personas.map((p) => (
            <li key={p.nombre} className="relative bg-gris-card px-[30px] pb-8 pt-[73px] xl:min-h-[292px]">
              <span className="absolute left-1/2 top-0 flex size-[94px] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-blanco text-negro">
                {p.foto ? (
                  <Image src={p.foto.src} alt={p.foto.alt} fill sizes="94px" className="object-cover" />
                ) : (
                  <IconoPersona className="size-[66px]" />
                )}
              </span>
              <h3 className="text-titulo-card text-blanco">{p.nombre}</h3>
              <p className="mt-1 text-[12px] leading-[18px] text-rol xl:min-h-[36px]">{p.rol}</p>
              <p className="mt-6 text-p-card text-beige xl:mt-[26px]">{p.descripcion}</p>
            </li>
          ))}
        </ul>

        <div className="relative mt-7 h-[180px] w-full md:h-[200px] xl:h-[218px]">
          <Image
            src={equipo.banda.src}
            alt={equipo.banda.alt}
            fill
            sizes="(min-width: 1280px) 1128px, 100vw"
            className="object-cover object-[center_62%]"
          />
        </div>
      </div>
    </section>
  );
}
