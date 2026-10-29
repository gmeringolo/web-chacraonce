import Image from "next/image";
import { inicio } from "@/content/site";
import { Boton } from "@/components/ui/Boton";

export function Inicio() {
  return (
    <section
      id="inicio"
      aria-labelledby="inicio-titulo"
      className="seccion relative flex flex-col overflow-hidden md:justify-center"
    >
      {/* Imagen: arriba en mobile, de fondo a sangre desde tablet */}
      <div className="relative h-[42svh] min-h-[260px] w-full md:absolute md:inset-0 md:h-auto">
        <Image
          src={inicio.imagen.src}
          alt={inicio.imagen.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] md:object-[right_center]"
        />
      </div>

      {/* Panel negro al 90 %: llega al borde izquierdo y termina a 649 px del inicio del contenido */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 hidden bg-negro/90 md:block md:w-[72%] xl:ancho-panel-hero"
      />

      <div className="contenedor relative flex flex-1 flex-col justify-center py-12 md:flex-none md:py-20">
        <div className="max-w-[502px] md:max-w-[58%] xl:max-w-[502px]">
          <h1 id="inicio-titulo" className="text-a1 text-blanco">
            {inicio.titulo}
          </h1>
          <div className="mt-4 flex flex-col gap-5 xl:mt-6">
            {inicio.subtitulos.map((t) => (
              <p key={t} className="max-w-[469px] text-a3 text-beige">
                {t}
              </p>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-[31px] xl:mt-[47px]">
            <Boton href={inicio.botonPrincipal.href}>{inicio.botonPrincipal.label}</Boton>
            <Boton href={inicio.botonSecundario.href} variante="outline">
              {inicio.botonSecundario.label}
            </Boton>
          </div>
        </div>
      </div>
    </section>
  );
}
