"use client";

import { useState, type FormEvent } from "react";
import { contactoSeccion } from "@/content/site";

type Estado = "inicial" | "enviando" | "exito" | "error";
type Errores = Partial<Record<"nombre" | "email" | "mensaje", string>>;

const textos = contactoSeccion.formulario;

function validar(datos: FormData): Errores {
  const errores: Errores = {};
  const nombre = String(datos.get("nombre") ?? "").trim();
  const email = String(datos.get("email") ?? "").trim();
  const mensaje = String(datos.get("mensaje") ?? "").trim();
  if (!nombre) errores.nombre = "Contanos tu nombre.";
  if (!email) errores.email = "Necesitamos un correo para responderte.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errores.email = "Revisá el formato del correo.";
  if (!mensaje) errores.mensaje = "Contanos brevemente tu idea.";
  return errores;
}

export function FormularioContacto() {
  const [estado, setEstado] = useState<Estado>("inicial");
  const [errores, setErrores] = useState<Errores>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const datos = new FormData(form);
    const nuevos = validar(datos);
    setErrores(nuevos);
    const primero = Object.keys(nuevos)[0];
    if (primero) {
      form.querySelector<HTMLElement>(`[name="${primero}"]`)?.focus();
      return;
    }

    setEstado("enviando");
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(datos as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      setEstado("exito");
      form.reset();
    } catch {
      setEstado("error");
    }
  }

  if (estado === "exito") {
    return (
      <div role="status" className="flex min-h-[340px] flex-col justify-center gap-4">
        <p className="text-titulo-card text-blanco">{textos.exito.titulo}</p>
        <p className="text-p-card text-beige">{textos.exito.texto}</p>
      </div>
    );
  }

  return (
    <form name="contacto" method="POST" data-netlify="true" netlify-honeypot="bot-field" noValidate onSubmit={onSubmit}>
      <input type="hidden" name="form-name" value="contacto" />
      <p className="hidden">
        <label>
          No completes este campo: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <h3 className="text-titulo-card text-blanco">{textos.titulo}</h3>

      <div className="mt-[23px] flex flex-col gap-5">
        <Campo nombre="nombre" label="Nombre" autoComplete="name" error={errores.nombre} requerido />
        <Campo nombre="email" label="Correo electrónico" tipo="email" autoComplete="email" error={errores.email} requerido />
        <Campo nombre="telefono" label="Teléfono" tipo="tel" autoComplete="tel" />
        <Campo nombre="mensaje" label="Contanos tu idea" multilinea error={errores.mensaje} requerido />
      </div>

      <button
        type="submit"
        disabled={estado === "enviando"}
        className="mt-[26px] h-[43px] w-full bg-ocre text-[12px] font-bold leading-[23px] text-texto-boton transition-colors hover:bg-[#cdb596] disabled:cursor-wait disabled:opacity-70"
      >
        {estado === "enviando" ? "Enviando…" : textos.boton}
      </button>

      <p role="alert" className="text-[11px] text-[#f0a58f] [&:not(:empty)]:mt-3">
        {estado === "error" ? textos.error : ""}
      </p>
    </form>
  );
}

type CampoProps = {
  nombre: string;
  label: string;
  tipo?: string;
  autoComplete?: string;
  multilinea?: boolean;
  requerido?: boolean;
  error?: string;
};

function Campo({ nombre, label, tipo = "text", autoComplete, multilinea, requerido, error }: CampoProps) {
  const id = `campo-${nombre}`;
  const idError = `${id}-error`;
  const comunes = {
    id,
    name: nombre,
    autoComplete,
    required: requerido,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? idError : undefined,
    className: `peer block w-full resize-none border-0 border-b bg-transparent pb-2 pt-1 text-[13px] leading-[24px] text-blanco outline-none transition-colors placeholder:text-transparent focus:border-ocre focus-visible:outline-none ${error ? "border-[#f0a58f]" : "border-label"}`,
  };
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-[12px] leading-[24px] text-label">
        {label}
        {requerido ? <span aria-hidden="true"> *</span> : null}
      </label>
      {multilinea ? <textarea rows={3} {...comunes} /> : <input type={tipo} {...comunes} />}
      {error ? (
        <span id={idError} className="mt-1 text-[10px] text-[#f0a58f]">
          {error}
        </span>
      ) : null}
    </div>
  );
}
