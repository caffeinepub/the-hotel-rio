import { useScrollAnimation } from "../hooks/useScrollAnimation";

const images = [
  { src: "/assets/uploads/image-1.png", label: "Deluxe Room" },
  { src: "/assets/uploads/image-1-2.png", label: "Standard Room" },
  { src: "/assets/uploads/image-3-4.png", label: "Premium Room" },
  { src: "/assets/uploads/image-2-3.png", label: "Bathroom" },
  { src: "/assets/uploads/image-4-5.png", label: "En-suite Bath" },
  { src: "/assets/generated/gallery-lobby.dim_800x600.jpg", label: "Lobby" },
  {
    src: "/assets/generated/gallery-exterior.dim_800x600.jpg",
    label: "Exterior",
  },
];

export function GallerySection() {
  const headRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id="gallery"
      data-ocid="gallery.section"
      className="py-24 md:py-32"
      style={{ background: "oklch(20 0.008 55)" }}
    >
      <div className="container mx-auto px-6">
        <div ref={headRef} className="fade-in-up text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">
            Visual Tour
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Gallery
          </h2>
          <div className="section-divider mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <GalleryItem key={img.src} img={img} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryItem({
  img,
  index,
}: { img: (typeof images)[0]; index: number }) {
  const animClass = index % 2 === 0 ? "slide-in-left" : "slide-in-right";
  const ref = useScrollAnimation<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`${animClass} relative overflow-hidden rounded-xl aspect-[4/3] group cursor-pointer`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <img
        src={img.src}
        alt={img.label}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <span className="font-display text-white text-lg font-semibold">
          {img.label}
        </span>
      </div>
      <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/40 rounded-xl transition-all duration-300" />
    </div>
  );
}
