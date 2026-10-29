type Props = {
  id: string;
  chip: string;
  titulo: string | string[];
  bajada?: string | string[];
  /** Colores según Figma: algunas secciones usan el beige en chip y título. */
  colorChip?: string;
  colorTitulo?: string;
  className?: string;
};

/** Chip + título (h2) + bajada opcional. El id se usa en aria-labelledby de la sección. */
export function IntroSeccion({
  id,
  chip,
  titulo,
  bajada,
  colorChip = "text-chip",
  colorTitulo = "text-blanco",
  className = "",
}: Props) {
  const lineas = Array.isArray(titulo) ? titulo : [titulo];
  const bajadas = bajada ? (Array.isArray(bajada) ? bajada : [bajada]) : [];
  return (
    <div className={`flex flex-col gap-2.5 ${className}`}>
      <p className={`text-a4 uppercase ${colorChip}`}>{chip}</p>
      <h2 id={id} className={`text-a2 ${colorTitulo}`}>
        {lineas.map((l, i) => (
          <span key={i} className="xl:block">
            {l}
            {i < lineas.length - 1 ? " " : ""}
          </span>
        ))}
      </h2>
      {bajadas.length > 0 && (
        <p className="text-parrafo text-beige">
          {bajadas.map((l, i) => (
            <span key={i} className="md:block">
              {l}
              {i < bajadas.length - 1 ? " " : ""}
            </span>
          ))}
        </p>
      )}
    </div>
  );
}
