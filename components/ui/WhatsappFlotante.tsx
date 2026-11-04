import { contacto } from "@/content/site";
import { IconoWhatsappRelleno } from "@/components/ui/Iconos";

export function WhatsappFlotante() {
  return (
    <a
      href={contacto.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp (se abre en una pestaña nueva)"
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full text-[#4a9b6b] transition-transform hover:scale-105 md:bottom-8 md:right-8 md:size-16 lg:right-2 lg:size-11 xl:right-[14px] xl:size-12"
    >
      {/* Desde 1024 es más chico y va en el margen lateral, para no tapar el contenido */}
      <IconoWhatsappRelleno className="size-[44px] drop-shadow-[0_2px_6px_rgba(0,0,0,.4)] md:size-[48px] lg:size-[48px]" />
    </a>
  );
}
