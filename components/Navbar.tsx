"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between px-5 py-2.5 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-800">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Inici"
        className="cursor-pointer"
      >
        <Image
          src="/images/logo-navbar.png"
          alt="Toti Alcalà"
          width={396}
          height={42}
          className="h-6 w-auto"
        />
      </button>

      <div className="hidden md:flex items-center gap-6 text-sm text-slate-400">
        <Link href="#servicios" className="hover:text-white transition-colors duration-200 cursor-pointer">
          Servicios
        </Link>
        <Link href="#clientes" className="hover:text-white transition-colors duration-200 cursor-pointer">
          Clientes
        </Link>
        <Link href="#proceso" className="hover:text-white transition-colors duration-200 cursor-pointer">
          Cómo trabajo
        </Link>
        <Link href="#sobre-mi" className="hover:text-white transition-colors duration-200 cursor-pointer">
          Quién soy
        </Link>
      </div>

      <a
        href="#contacto"
        className="bg-sky-700 hover:bg-sky-600 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors duration-200 cursor-pointer whitespace-nowrap"
      >
        <span className="hidden md:inline">Agenda una llamada / WhatsApp</span>
        <span className="md:hidden">Contacto</span>
      </a>
    </nav>
  );
}
