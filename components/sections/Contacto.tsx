import Image from "next/image";
import { contactoSeccion } from "@/content/site";
import { FormularioContacto } from "@/components/ui/FormularioContacto";

export function Contacto() {
  return (
    <section id="contacto" aria-labelledby="contacto-titulo" className="seccion relative flex overflow-hidden">
      {/* Imagen de fondo a sangre + rectángulo negro al 63 % */}
      <Image
        src={contactoSeccion.imagen.src}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[center_45%]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-negro/[.63]" />

      {/* Hasta 768: una columna (texto arriba, formulario abajo). Desde 769 (48.0625rem): texto al lado del formulario */}
      <div className="contenedor relative grid grid-cols-1 content-center items-center gap-10 py-14 md:py-20 min-[48.0625rem]:grid-cols-[1fr_400px] min-[48.0625rem]:gap-8 lg:grid-cols-[1fr_480px] lg:gap-12 xl:grid-cols-[1fr_551px]">
        <div className="flex max-w-[525px] flex-col gap-6">
          <h2 id="contacto-titulo" className="text-a1 text-blanco [text-wrap:balance]">
            {contactoSeccion.titulo}
          </h2>
          <p className="max-w-[469px] text-a3 text-blanco">{contactoSeccion.subtitulo}</p>
        </div>
        <div className="bg-negro/90 p-6 md:p-[39px] min-[48.0625rem]:p-7 lg:p-[39px]">
          <FormularioContacto />
        </div>
      </div>
    </section>
  );
}
