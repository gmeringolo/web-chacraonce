import Image from "next/image";
import type { ReactNode } from "react";
import { contacto, footer } from "@/content/site";
import { IconoEmail, IconoInstagram, IconoUbicacion, IconoWhatsapp } from "@/components/ui/Iconos";

export function Footer() {
  const datos: { icono: ReactNode; texto: string; href?: string; externo?: boolean }[] = [
    { icono: <IconoWhatsapp className="size-7" />, texto: contacto.telefono, href: contacto.whatsapp, externo: true },
    { icono: <IconoEmail className="size-7" />, texto: contacto.email, href: `mailto:${contacto.email}` },
    { icono: <IconoUbicacion className="size-7" />, texto: contacto.ubicacion },
    { icono: <IconoInstagram className="size-7" />, texto: contacto.instagram, href: contacto.instagramUrl, externo: true },
  ];

  return (
    <footer className="snap-end bg-negro">
      <div className="contenedor grid grid-cols-1 gap-10 pb-12 pt-14 md:grid-cols-2 xl:grid-cols-[440px_330px_1fr] xl:gap-0 xl:pb-[57px] xl:pt-[53px]">
        <div className="flex flex-col gap-6 xl:pt-1.5">
          <Image src="/logo-chacra-once.svg" alt="Chacra Once" width={179} height={81} unoptimized className="h-[81px] w-[179px] self-start" />
          <p className="max-w-[290px] text-[18px] font-light leading-7 text-blanco">{footer.texto}</p>
        </div>

        <nav aria-label="Secciones">
          <ul className="flex flex-col gap-[15px]">
            {footer.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-[18px] font-light leading-7 text-blanco transition-colors hover:text-ocre">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex flex-col gap-[19px] xl:pt-[5px]">
          {datos.map((d) => {
            const contenido = (
              <>
                <span className="shrink-0 text-ocre">{d.icono}</span>
                <span className="text-[18px] font-light leading-7">{d.texto}</span>
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
        <div className="contenedor flex flex-col gap-2 py-4 text-[15px] font-light text-blanco md:flex-row md:items-center md:justify-between">
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
