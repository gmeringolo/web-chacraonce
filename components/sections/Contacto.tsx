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

      <div className="contenedor relative grid grid-cols-1 content-center items-center gap-10 py-14 md:py-20 xl:grid-cols-[1fr_551px] xl:gap-12">
        <div className="flex max-w-[525px] flex-col gap-6">
          <h2 id="contacto-titulo" className="text-a1 text-blanco [text-wrap:balance]">
            {contactoSeccion.titulo}
          </h2>
          <p className="max-w-[469px] text-a3 text-beige">{contactoSeccion.subtitulo}</p>
        </div>
        <div className="bg-negro/90 p-6 md:p-[39px]">
          <FormularioContacto />
        </div>
      </div>
    </section>
  );
}
