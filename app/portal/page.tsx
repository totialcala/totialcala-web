import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function PortalPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] flex">
      {/* Panel esquerre — branding */}
      <div className="hidden lg:flex flex-col justify-between w-[420px] shrink-0 bg-[#1E293B] border-r border-white/5 p-10">
        <Image
          src="/images/logo-white.png"
          alt="Toti Alcalà"
          width={140}
          height={40}
          className="object-contain object-left"
        />

        <div>
          <p className="text-white/40 text-xs uppercase tracking-widest mb-4 font-medium">
            Portal privat de clients
          </p>
          <h2 className="text-white text-2xl font-semibold leading-snug mb-3">
            Tot el que ha passat en els teus directes, en un sol lloc.
          </h2>
          <p className="text-white/50 text-sm leading-relaxed">
            Accedeix als teus VODs, backups i notes de cada sessió en directe produïda per Toti Alcalà.
          </p>
        </div>

        <p className="text-white/20 text-xs">
          © {new Date().getFullYear()} Toti Alcalà · totialcala.com
        </p>
      </div>

      {/* Panel dret — login */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* Logo mòbil */}
        <div className="lg:hidden mb-10">
          <Image
            src="/images/logo-white.png"
            alt="Toti Alcalà"
            width={120}
            height={36}
            className="object-contain"
          />
        </div>

        <div className="w-full max-w-sm">
          <div className="mb-8 lg:hidden text-center">
            <h1 className="text-white text-xl font-semibold mb-1">Portal de clients</h1>
            <p className="text-white/40 text-sm">Accés privat</p>
          </div>
          <div className="hidden lg:block mb-8">
            <h1 className="text-white text-xl font-semibold mb-1">Accedeix al portal</h1>
            <p className="text-white/40 text-sm">Entra amb el teu email per continuar</p>
          </div>
          <SignIn fallbackRedirectUrl="/portal/dashboard" />
        </div>
      </div>
    </div>
  );
}
