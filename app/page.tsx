import { Navbar } from "@/components/sections/Navbar";
import { Inicio } from "@/components/sections/Inicio";
import { NuestroProposito } from "@/components/sections/NuestroProposito";
import { NuestroEquipo } from "@/components/sections/NuestroEquipo";
import { PorQueElegirnos } from "@/components/sections/PorQueElegirnos";
import { ComoTrabajamos } from "@/components/sections/ComoTrabajamos";
import { QueHacemos } from "@/components/sections/QueHacemos";
import { NuestrosProyectos } from "@/components/sections/NuestrosProyectos";
import { Contacto } from "@/components/sections/Contacto";
import { Footer } from "@/components/sections/Footer";
import { WhatsappFlotante } from "@/components/ui/WhatsappFlotante";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-[var(--navbar-h)]">
        <Inicio />
        <NuestroProposito />
        <ComoTrabajamos />
        <NuestroEquipo />
        <PorQueElegirnos />
        <QueHacemos />
        <NuestrosProyectos />
        <Contacto />
      </main>
      <Footer />
      <WhatsappFlotante />
    </>
  );
}
