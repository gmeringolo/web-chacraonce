import { contacto } from "@/content/site";
import { IconoWhatsapp } from "@/components/ui/Iconos";

export function WhatsappFlotante() {
  return (
    <a
      href={contacto.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp (se abre en una pestaña nueva)"
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#25d366] text-blanco shadow-[0_6px_20px_rgba(0,0,0,.35)] transition-transform hover:scale-105 md:bottom-8 md:right-8 md:size-16"
    >
      <IconoWhatsapp className="size-9 md:size-10" />
    </a>
  );
}
