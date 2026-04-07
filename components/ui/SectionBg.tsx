import Image from "next/image";

interface SectionBgProps {
  src: string;
  alt: string;
  side: "left" | "right";
}

/**
 * Full-bleed section background image, bleeding from one side.
 * - "left":  bleeds from left edge, fades out toward right (~75% width)
 * - "right": bleeds from right edge, fades out toward left (~75% width)
 * Opacity kept very low so text always readable.
 */
export default function SectionBg({ src, alt, side }: SectionBgProps) {
  const gradientStyle =
    side === "left"
      ? { WebkitMaskImage: "linear-gradient(to right, black 0%, black 45%, transparent 78%)", maskImage: "linear-gradient(to right, black 0%, black 45%, transparent 78%)" }
      : { WebkitMaskImage: "linear-gradient(to left, black 0%, black 45%, transparent 78%)", maskImage: "linear-gradient(to left, black 0%, black 45%, transparent 78%)" };

  return (
    <div
      className="absolute inset-y-0 w-[75%] pointer-events-none"
      style={{
        ...(side === "left" ? { left: 0 } : { right: 0 }),
        ...gradientStyle,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover opacity-[0.06] mix-blend-luminosity"
        sizes="75vw"
        priority={false}
      />
    </div>
  );
}
