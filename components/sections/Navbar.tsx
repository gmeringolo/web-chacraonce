"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { navLinks } from "@/content/site";

export function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const botonRef = useRef<HTMLButtonElement>(null);

  const cerrar = useCallback(() => {
    setAbierto(false);
    botonRef.current?.focus();
  }, []);

  // Bloquea el scroll, cierra con Esc y mantiene el foco dentro del menú.
  useEffect(() => {
    if (!abierto) return;
    document.body.classList.add("menu-abierto");
    const foco = menuRef.current?.querySelectorAll<HTMLElement>("a, button");
    foco?.[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") cerrar();
      if (e.key !== "Tab" || !menuRef.current) return;
      const items = [botonRef.current, ...Array.from(menuRef.current.querySelectorAll<HTMLElement>("a"))].filter(
        Boolean,
      ) as HTMLElement[];
      const primero = items[0];
      const ultimo = items[items.length - 1];
      if (e.shiftKey && document.activeElement === primero) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primero.focus();
      }
    };
    window.addEventListener("keydown", onKey);

    const mq = window.matchMedia("(min-width: 80rem)");
    const onResize = () => mq.matches && setAbierto(false);
    mq.addEventListener("change", onResize);

    return () => {
      document.body.classList.remove("menu-abierto");
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onResize);
    };
  }, [abierto, cerrar]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[var(--navbar-h)] bg-negro">
      <nav aria-label="Principal" className="contenedor flex h-full items-center justify-between">
        <a href="#inicio" className="relative z-10 block" aria-label="Chacra Once, ir al inicio">
          <Image
            src="/logo-chacra-once.svg"
            alt=""
            width={129}
            height={59}
            priority
            unoptimized
            className="h-[48px] w-auto xl:h-[59px]"
          />
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-[34px] xl:flex">
          <ul className="flex items-center gap-[25px]">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-navbar text-blanco transition-colors hover:text-ocre">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contacto"
            className="inline-flex h-10 w-[135px] items-center justify-center bg-ocre text-navbar text-negro transition-colors hover:bg-[#cdb596]"
          >
            Contacto
          </a>
        </div>

        {/* Hamburguesa (mobile y tablet) */}
        <button
          ref={botonRef}
          type="button"
          className="relative z-10 -mr-2 flex size-11 items-center justify-center xl:hidden"
          aria-expanded={abierto}
          aria-controls="menu-mobile"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setAbierto((v) => !v)}
        >
          <span className="relative block h-4 w-7" aria-hidden="true">
            <span
              className={`absolute left-0 h-[2px] w-full bg-blanco transition-transform duration-300 ${abierto ? "top-[7px] rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[2px] w-full bg-blanco transition-opacity duration-200 ${abierto ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 h-[2px] w-full bg-blanco transition-transform duration-300 ${abierto ? "top-[7px] -rotate-45" : "top-[14px]"}`}
            />
          </span>
        </button>
      </nav>

      <div
        id="menu-mobile"
        ref={menuRef}
        hidden={!abierto}
        className="fixed inset-0 bg-negro pt-[var(--navbar-h)] xl:hidden"
      >
        <ul className="contenedor flex flex-col gap-2 pt-10">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setAbierto(false)} className="block py-3 text-a2 text-blanco">
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-6">
            <a
              href="#contacto"
              onClick={() => setAbierto(false)}
              className="inline-flex h-[50px] w-full items-center justify-center bg-ocre text-boton text-negro md:w-[255px]"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
