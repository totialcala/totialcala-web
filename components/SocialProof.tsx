"use client";

import Image from "next/image";
import FadeIn from "./ui/FadeIn";

const creators = [
  "CenteIA",
  "Criptoprofe",
  "Bernat Casanyes",
  "AgencyMaster · Xavi Esquerigüela",
];

const corporates = [
  "Sanofi",
  "Roche",
  "Honeywell",
  "BIOCAT",
  "Hospital Clínic de Barcelona",
  "Vall d'Hebron",
  "Hospital Sant Joan de Déu",
  "Werfen",
];

// Masonry-style: mix of aspect ratios for visual variety
const photos = [
  { src: "/images/photos/Live_ANDORRA_Criptoprofe1.png", alt: "Lanzamiento Criptoprofe en Andorra", aspect: "aspect-video" },
  { src: "/images/photos/PlatoGirona_VirtualSet.png", alt: "Plató Girona Virtual Set", aspect: "aspect-square" },
  { src: "/images/photos/Auditori Palau COngressos Andorra.png", alt: "Auditorio Palau de Congressos Andorra", aspect: "aspect-video" },
  { src: "/images/photos/Congress_001.png", alt: "Gran evento corporativo", aspect: "aspect-square" },
  { src: "/images/photos/Clients_Bernat_001.png", alt: "Producción Bernat Casanyes", aspect: "aspect-video" },
  { src: "/images/photos/Banzai_Badalona_Sanofi.png", alt: "Evento Sanofi", aspect: "aspect-video" },
  { src: "/images/photos/Live_Croma1.png", alt: "Directo con croma profesional", aspect: "aspect-square" },
  { src: "/images/photos/Auditori_AXA.png", alt: "Auditorio AXA", aspect: "aspect-video" },
  { src: "/images/photos/TOTI_Live.png", alt: "Toti Alcalà en directo", aspect: "aspect-square" },
];

export default function SocialProof() {
  return (
    <section id="clientes" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Marcas y creadores
            <br />
            <span className="text-slate-400 font-normal">que ya confían en mí</span>
          </h2>
          <p className="text-slate-400 text-lg mb-14">
            De farmacéuticas y grandes corporaciones a los mejores creadores del mercado hispanohablante.
          </p>
        </FadeIn>

        {/* Client lists */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <FadeIn direction="right">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 h-full">
              <h3 className="text-sky-400 text-xs font-semibold uppercase tracking-widest mb-6">
                Creadores e infoproductores
              </h3>
              <div className="space-y-3">
                {creators.map((name) => (
                  <div key={name} className="flex items-center gap-3 text-slate-300 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.1}>
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 h-full">
              <h3 className="text-sky-400 text-xs font-semibold uppercase tracking-widest mb-6">
                Empresas y corporaciones
              </h3>
              <div className="space-y-3">
                {corporates.map((name) => (
                  <div key={name} className="flex items-center gap-3 text-slate-300 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0" />
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Locations */}
        <FadeIn>
          <div className="flex flex-wrap justify-start gap-2 mb-16">
            {["Andorra", "Girona", "Barcelona", "Madrid", "Alicante", "México", "Brasil", "Colombia"].map(
              (city) => (
                <span key={city} className="bg-slate-900 text-slate-400 text-sm px-3 py-1.5 rounded-full border border-slate-800">
                  {city}
                </span>
              )
            )}
          </div>
        </FadeIn>

        {/* Photo gallery — masonry-style with CSS columns */}
        <FadeIn delay={0.2}>
          <div className="columns-2 md:columns-3 gap-3 space-y-3">
            {photos.map((photo, i) => (
              <div
                key={photo.src}
                className={`relative break-inside-avoid rounded-xl overflow-hidden bg-slate-800 group ${photo.aspect}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
