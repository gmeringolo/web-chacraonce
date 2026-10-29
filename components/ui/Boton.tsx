import type { ComponentProps } from "react";

type Variante = "ocre" | "outline";

const estilos: Record<Variante, string> = {
  ocre: "bg-ocre text-negro border-2 border-ocre hover:bg-[#cdb596] hover:border-[#cdb596]",
  outline: "bg-negro text-blanco border-2 border-blanco hover:bg-blanco hover:text-negro",
};

type Props = ComponentProps<"a"> & { variante?: Variante };

/** Botón-link de 255×50 (Figma "Boton Empezar"). */
export function Boton({ variante = "ocre", className = "", children, ...props }: Props) {
  return (
    <a
      className={`inline-flex h-[50px] w-full items-center justify-center whitespace-nowrap px-4 text-center text-boton transition-colors duration-200 sm:w-[255px] ${estilos[variante]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
