import { comoTrabajamos } from "@/content/site";
import { IntroSeccion } from "@/components/ui/IntroSeccion";

export function ComoTrabajamos() {
  return (
    <section id="como-trabajamos" aria-labelledby="como-trabajamos-titulo" className="seccion flex">
      <div className="contenedor flex flex-col justify-center py-12 md:py-16 xl:py-12">
        <IntroSeccion
          id="como-trabajamos-titulo"
          chip={comoTrabajamos.chip}
          titulo={comoTrabajamos.titulo}
          bajada={comoTrabajamos.bajada}
          className="max-w-[564px]"
        />
        {/* 1 por fila hasta 640, 2 por fila de 641 a 768 y 3 por fila desde 769 */}
        <ol className="mt-10 grid grid-cols-1 gap-6 min-[40.0625rem]:grid-cols-2 min-[48.0625rem]:grid-cols-3 min-[48.0625rem]:gap-4 lg:gap-6 xl:mt-16">
          {comoTrabajamos.fases.map((f) => (
            <li key={f.numero} className="flex flex-col gap-4 bg-gris-card p-8 min-[48.0625rem]:p-6 lg:p-8 xl:min-h-[254px] xl:p-10">
              <div className="flex flex-col gap-1">
                <span className="text-num-card text-chip" aria-hidden="true">
                  {f.numero}
                </span>
                <h3 className="text-fase text-blanco">
                  <span className="sr-only">Paso {Number(f.numero)}: </span>
                  {f.titulo}
                </h3>
              </div>
              <p className="text-[12px] leading-[22px] text-beige">{f.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
