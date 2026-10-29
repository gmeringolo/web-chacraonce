type Props = { titulo: string; texto: string; colorTexto?: string };

/** Card gris de "Por qué elegirnos" y "Qué hacemos". */
export function CardCompromiso({ titulo, texto, colorTexto = "text-beige" }: Props) {
  return (
    <li className="flex min-h-[128px] flex-col justify-center gap-3 bg-gris-card px-6 py-6 md:px-[38px]">
      <h3 className="text-titulo-card text-blanco">{titulo}</h3>
      <p className={`text-p-card ${colorTexto}`}>{texto}</p>
    </li>
  );
}
