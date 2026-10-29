"use client";

import Image from "next/image";
import { useState } from "react";
import type { Proyecto } from "@/content/site";

type Props = { proyecto: Proyecto; boton: string; prioridad?: boolean };

export function CardProyecto({ proyecto, boton, prioridad = false }: Props) {
  const [activa, setActiva] = useState(0);
  const principal = proyecto.imagenes[activa];
  const miniaturas = proyecto.imagenes.slice(0, 5).filter((_, i) => i !== activa).slice(0, 4);

  return (
    <article className="grid h-full grid-cols-1 gap-8 bg-gris-card p-5 md:p-8 xl:grid-cols-[545px_1fr] xl:gap-[57px] xl:px-[55px] xl:py-[47px]">
      {/* Galería */}
      <div className="flex flex-col gap-[11px]">
        <div className="relative aspect-[545/374] w-full overflow-hidden">
          <Image
            key={principal.src}
            src={principal.src}
            alt={principal.alt}
            fill
            priority={prioridad}
            sizes="(min-width: 1280px) 545px, 100vw"
            className="animate-[aparecer_.35s_ease] object-cover"
          />
        </div>
        <ul className="grid grid-cols-4 gap-[11px]">
          {miniaturas.map((img) => {
            const indice = proyecto.imagenes.indexOf(img);
            return (
              <li key={img.src}>
                <button
                  type="button"
                  onClick={() => setActiva(indice)}
                  className="group relative block aspect-[128/79] w-full overflow-hidden"
                  aria-label={`Ver imagen: ${img.alt}`}
                >
                  <Image
                    src={img.src}
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 128px, 25vw"
                    className="object-cover opacity-80 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Datos */}
      <div className="flex flex-col">
        <p className="text-a4 text-blanco">{proyecto.ubicacion}</p>
        <h3 className="mt-2.5 text-a2 text-blanco">{proyecto.nombre}</h3>
        <p className="mt-0 max-w-[439px] text-p-card text-blanco">{proyecto.descripcion}</p>

        <dl className="mt-8 grid max-w-[398px] grid-cols-2 xl:mt-[33px]">
          {proyecto.ficha.map((f, i) => (
            <div
              key={f.label}
              className={`flex flex-col gap-2.5 py-4 pl-0 pr-3 md:pl-[29px] ${i < proyecto.ficha.length - 2 ? "border-b border-[#a5a3a1]" : ""} ${i % 2 === 1 ? "pl-3 md:pl-[22px]" : ""}`}
            >
              <dt className="text-a5 uppercase text-blanco">{f.label}</dt>
              <dd className="text-a4 text-blanco">{f.valor}</dd>
            </div>
          ))}
        </dl>

        <a
          href={proyecto.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex h-[50px] w-full items-center justify-center bg-ocre text-boton text-negro transition-colors hover:bg-[#cdb596] sm:w-[255px] xl:mt-6"
        >
          {boton}
          <span className="sr-only"> {proyecto.nombre} (PDF, se abre en una pestaña nueva)</span>
        </a>
      </div>
    </article>
  );
}
