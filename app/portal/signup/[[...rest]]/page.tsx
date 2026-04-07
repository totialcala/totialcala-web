import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] flex">
      {/* Panel esquerre */}
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
            Benvingut al portal
          </p>
          <h2 className="text-white text-2xl font-semibold leading-snug mb-3">
            Crea el teu accés i consulta tots els teus directes.
          </h2>
          <p className="text-white/50 text-sm leading-relaxed">
            Has rebut una invitació de Toti Alcalà. Configura la teva contrasenya per accedir al portal privat.
          </p>
        </div>

        <p className="text-white/20 text-xs">
          © {new Date().getFullYear()} Toti Alcalà · totialcala.com
        </p>
      </div>

      {/* Panel dret */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
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
          <div className="mb-8">
            <h1 className="text-white text-xl font-semibold mb-1">Configura el teu accés</h1>
            <p className="text-white/40 text-sm">Crea una contrasenya per al teu compte</p>
          </div>
          <SignUp fallbackRedirectUrl="/portal/dashboard" />
        </div>
      </div>
    </div>
  );
}
