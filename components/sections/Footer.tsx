import Image from "next/image";
import type { ReactNode } from "react";
import { contacto, footer } from "@/content/site";
import { IconoEmail, IconoInstagram, IconoUbicacion, IconoWhatsapp } from "@/components/ui/Iconos";

export function Footer() {
  const datos: { icono: ReactNode; texto: string; href?: string; externo?: boolean }[] = [
    { icono: <IconoWhatsapp className="size-[24px]" />, texto: contacto.telefono, href: contacto.whatsapp, externo: true },
    { icono: <IconoUbicacion className="h-[24px] w-auto" />, texto: contacto.ubicacion },
    { icono: <IconoEmail className="size-[24px]" />, texto: contacto.email, href: `mailto:${contacto.email}` },    
    { icono: <IconoInstagram className="h-[22px] w-auto" />, texto: contacto.instagram, href: contacto.instagramUrl, externo: true },
  ];

  return (
    <footer className="bg-negro">
      <div className="contenedor grid grid-cols-1 gap-10 pb-8 pt-10 md:grid-cols-2 lg:grid-cols-[auto_1fr_auto] lg:gap-x-10 lg:gap-y-0 lg:pb-[41px] lg:pt-[37px]">
        <div className="flex flex-col gap-6 lg:pt-1.5">
          <Image src="/logo-chacra-once.svg" alt="Chacra Once" width={179} height={81} unoptimized className="h-[81px] w-[179px] self-start" />
          <p className="max-w-[290px] text-[15px] font-light leading-6 text-blanco">{footer.texto}</p>
        </div>

        {/* Desde 1024 queda centrada entre el párrafo y los datos de contacto */}
        <nav aria-label="Secciones" className="lg:justify-self-center">
          <ul className="flex flex-col gap-[13px]">
            {footer.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-[16px] font-light leading-6 text-blanco transition-colors hover:text-ocre">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desde 1024 la columna mide lo que su contenido y termina en el borde derecho del contenedor */}
        <ul className="flex flex-col gap-[13px]">
          {datos.map((d) => {
            const contenido = (
              <>
                {/* Caja fija para que todos los renglones midan lo mismo, sin importar el alto del ícono */}
                <span className="flex size-6 shrink-0 items-center justify-center text-ocre">{d.icono}</span>
                <span className="text-[16px] font-light leading-6">{d.texto}</span>
              </>
            );
            return (
              <li key={d.texto}>
                {d.href ? (
                  <a
                    href={d.href}
                    {...(d.externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center gap-3 break-words text-blanco transition-colors hover:text-ocre"
                  >
                    {contenido}
                  </a>
                ) : (
                  <p className="flex items-center gap-3 text-blanco">{contenido}</p>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="border-t border-blanco/80">
        <div className="contenedor flex flex-col gap-2 py-4 text-[13px] font-light text-blanco md:flex-row md:items-center md:justify-between">
          <p>{footer.derechos}</p>
          <p>
            Desarrollado por{" "}
            <a
              href={footer.desarrollador.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-ocre"
            >
              {footer.desarrollador.label}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
