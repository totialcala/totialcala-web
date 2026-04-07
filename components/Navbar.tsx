"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#servicios", label: "Servicios" },
    { href: "#clientes", label: "Clientes" },
    { href: "#proceso", label: "Cómo trabajo" },
    { href: "#sobre-mi", label: "Quién soy" },
  ];

  return (
    <>
      {/* Main navbar */}
      <nav className="fixed top-4 left-4 right-4 z-50 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-800 overflow-hidden">
        {/* Row 1 */}
        <div className="px-5 py-2.5">

          {/* Desktop: 3-col grid — links | logo | CTA */}
          <div className="hidden md:grid grid-cols-3 items-center">
            <div className="flex items-center gap-6 text-sm text-slate-400">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="hover:text-white transition-colors duration-200 cursor-pointer">
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Inici"
                className="cursor-pointer"
              >
                <Image src="/images/logo-navbar.png" alt="Toti Alcalà" width={396} height={42} className="h-6 w-auto" />
              </button>
            </div>
            <div className="flex justify-end">
              <a
                href="#contacto"
                className="bg-sky-700 hover:bg-sky-600 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                Agenda una llamada / WhatsApp
              </a>
            </div>
          </div>

          {/* Mobile: logo center + hamburger right */}
          <div className="flex md:hidden items-center justify-between">
            <div className="w-8" /> {/* spacer per centrar logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Inici"
              className="cursor-pointer"
            >
              <Image src="/images/logo-navbar.png" alt="Toti Alcalà" width={396} height={42} className="h-5 w-auto" />
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 p-1 cursor-pointer"
              aria-label="Menú"
            >
              <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>

        </div>

        {/* Mobile CTA bar */}
        <div className="md:hidden px-4 pb-3">
          <a
            href="#contacto"
            className="flex items-center justify-center bg-sky-700 hover:bg-sky-600 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors duration-200 cursor-pointer"
          >
            Agenda una llamada / WhatsApp
          </a>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center gap-8"
          onClick={() => setMenuOpen(false)}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-3xl font-bold hover:text-sky-400 transition-colors duration-200 cursor-pointer"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
