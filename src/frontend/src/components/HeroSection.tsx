import { ChevronDown, Star } from "lucide-react";
import { useEffect, useRef } from "react";

const heroImages = [
  "/assets/uploads/image-1.png",
  "/assets/uploads/image-3-4.png",
  "/assets/uploads/image-7-7.png",
];

export function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null);
  const btn1Ref = useRef<HTMLButtonElement>(null);
  const btn2Ref = useRef<HTMLAnchorElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (contentRef.current) contentRef.current.classList.add("visible");
    }, 100);
    const t2 = setTimeout(() => {
      if (btn1Ref.current) btn1Ref.current.classList.add("visible");
    }, 400);
    const t3 = setTimeout(() => {
      if (btn2Ref.current) btn2Ref.current.classList.add("visible");
    }, 550);
    const t4 = setTimeout(() => {
      if (badgeRef.current) badgeRef.current.classList.add("visible");
    }, 200);
    return () => {
      clearTimeout(timer);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Slideshow background ── */}
      {heroImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-slide"
          style={{
            backgroundImage: `url('${src}')`,
            animationDelay: `${i * 5}s`,
            zIndex: 0,
          }}
        />
      ))}

      {/* Gradient overlays */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"
        style={{ zIndex: 1 }}
      />
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "radial-gradient(ellipse at 60% 50%, oklch(72 0.12 85 / 0.04) 0%, transparent 70%)",
        }}
      />

      <div
        ref={contentRef}
        className="fade-in-up relative text-center px-6 max-w-4xl mx-auto"
        style={{ zIndex: 2 }}
      >
        {/* Rating badge */}
        <div
          ref={badgeRef}
          className="fade-in-up float-anim inline-flex items-center gap-2 glass-dark rounded-full px-4 py-2 mb-8 text-sm"
        >
          <Star size={14} className="fill-gold text-gold" />
          <span className="text-gold font-semibold">4.8 / 5</span>
          <span className="text-foreground/60">Guest Rating</span>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
          style={{
            fontFamily: "'Libre Baskerville', Georgia, serif",
            fontWeight: 700,
            fontStyle: "italic",
            letterSpacing: "0.01em",
          }}
        >
          Luxury Comfort in{" "}
          <span className="gold-shimmer">the Heart of KPHB</span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
          Experience a clean, peaceful, and comfortable stay at The Hotel Rio —
          one of the most loved hotels in Kukatpally.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            ref={btn1Ref}
            type="button"
            data-ocid="hero.primary_button"
            onClick={() => scrollTo("contact")}
            className="slide-in-left px-8 py-4 rounded font-semibold tracking-wider uppercase text-sm gold-gradient text-black hover:opacity-90 transition-all duration-200 shadow-gold"
          >
            Book Your Stay
          </button>
          <a
            ref={btn2Ref}
            href="tel:+919876543210"
            data-ocid="hero.secondary_button"
            className="slide-in-right px-8 py-4 rounded font-semibold tracking-wider uppercase text-sm border border-gold/60 text-gold hover:bg-gold/10 transition-all duration-200"
          >
            Call Now
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 2 }}
      >
        <span className="text-xs tracking-widest uppercase text-white/50">
          Scroll
        </span>
        <ChevronDown size={18} className="text-gold/70 bounce-scroll" />
      </div>
    </section>
  );
}
