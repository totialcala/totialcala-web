"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useScroll, useTransform, motion, AnimatePresence, type MotionValue } from "framer-motion";
import Image from "next/image";

const row1Photos = [
  "/images/photos/Live_Criptoprofe.png",
  "/images/photos/Congress_001.png",
  "/images/photos/Auditori_AXA.png",
  "/images/photos/BHH_001.png",
  "/images/photos/Clients_Bernat_001.png",
  "/images/photos/Fx6Cam_001.png",
  "/images/photos/Live_ANDORRA_Criptoprofe1.png",
  "/images/photos/Banzai_Badalona_Sanofi.png",
  "/images/photos/Congress_002.png",
  "/images/photos/Cownter_Live.png",
  "/images/photos/Fx3Cam_001.png",
  "/images/photos/Grabación Content.png",
  "/images/photos/PlatoGirona_VirtualSet.png",
  "/images/photos/BHH_002.png",
  "/images/photos/Congress_003.png",
  "/images/photos/Fx6Cam_002.png",
  "/images/photos/TOTI_Live.png",
];

const row2Photos = [
  "/images/photos/Vmix_Live1.png",
  "/images/photos/Live CenteIA.png",
  "/images/photos/PTZ_Canon01.png",
  "/images/photos/Vmix_Calls.png",
  "/images/photos/Live_Croma1.png",
  "/images/photos/Streamdeck001.png",
  "/images/photos/Fx6Cam_003.png",
  "/images/photos/MicsRode.png",
  "/images/photos/Rec_Directos.png",
  "/images/photos/Vmix_Live2.png",
  "/images/photos/PTZ_Canon02.png",
  "/images/photos/live_Girona_Dell.png",
  "/images/photos/Live_Croma2.png",
  "/images/photos/Vmix_Live3.png",
  "/images/photos/Fx3_002.png",
  "/images/photos/Clients_Bernat_002.png",
  "/images/photos/Vmix_Live4.png",
];

// All photos in order for lightbox navigation (row1 then row2)
const allPhotos = [...row1Photos, ...row2Photos];

function Lightbox({
  index,
  onClose,
  onPrev,
  onNext,
}: {
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
        onClick={onClose}
        onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const delta = e.changedTouches[0].clientX - touchStartX.current;
          if (delta > 50) onPrev();
          else if (delta < -50) onNext();
          touchStartX.current = null;
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/60 hover:text-white text-3xl leading-none cursor-pointer z-10 transition-colors duration-200"
          aria-label="Cerrar"
        >
          ×
        </button>

        {/* Counter */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/40 text-sm tabular-nums">
          {index + 1} / {allPhotos.length}
        </div>

        {/* Prev */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 md:left-8 text-white/50 hover:text-white text-4xl cursor-pointer z-10 transition-colors duration-200 select-none p-2"
          aria-label="Anterior"
        >
          ‹
        </button>

        {/* Image */}
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="relative max-h-[85vh] max-w-[85vw] w-full h-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={allPhotos[index]}
            alt=""
            className="max-h-[85vh] max-w-[85vw] object-contain rounded-lg"
          />
        </motion.div>

        {/* Next */}
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 md:right-8 text-white/50 hover:text-white text-4xl cursor-pointer z-10 transition-colors duration-200 select-none p-2"
          aria-label="Siguiente"
        >
          ›
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

function PhotoRow({
  photos,
  x,
  startIndex,
  onOpen,
}: {
  photos: string[];
  x: MotionValue<number>;
  startIndex: number;
  onOpen: (index: number) => void;
}) {
  return (
    <div className="overflow-hidden">
      <motion.div className="flex gap-3" style={{ x }}>
        {photos.map((src, i) => (
          <button
            key={src}
            onClick={() => onOpen(startIndex + i)}
            className="relative shrink-0 w-28 h-20 md:w-80 md:h-52 rounded-xl overflow-hidden cursor-pointer group/photo"
            aria-label={`Ver foto ${startIndex + i + 1}`}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover transition-all duration-500 saturate-0 opacity-40 group-hover/gallery:saturate-100 group-hover/gallery:opacity-70 group-hover/photo:scale-105 group-hover/photo:opacity-100 group-hover/photo:brightness-110 group-hover/photo:saturate-100"
              sizes="(max-width: 768px) 256px, 320px"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover/photo:bg-black/10 transition-colors duration-300" />
          </button>
        ))}
      </motion.div>
    </div>
  );
}

export default function PhotoGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Row 1: moves left on scroll down, right on scroll up
  const x1 = useTransform(scrollYProgress, [0, 1], [80, -600]);
  // Row 2: moves right on scroll down, left on scroll up
  const x2 = useTransform(scrollYProgress, [0, 1], [-200, 400]);

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevPhoto = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + allPhotos.length) % allPhotos.length)),
  []);
  const nextPhoto = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % allPhotos.length)),
  []);

  return (
    <>
      <section ref={sectionRef} className="py-20 overflow-hidden group/gallery">
        <div className="max-w-5xl mx-auto px-6 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">En el backstage</h2>
          <p className="text-slate-500 text-base mt-1">Escenarios, equipos y momentos de producción real.</p>
        </div>

        <div className="flex flex-col gap-3">
          <PhotoRow
            photos={row1Photos}
            x={x1}
            startIndex={0}
            onOpen={openLightbox}
          />
          <PhotoRow
            photos={row2Photos}
            x={x2}
            startIndex={row1Photos.length}
            onOpen={openLightbox}
          />
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </>
  );
}
