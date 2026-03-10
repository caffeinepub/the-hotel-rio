import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function AboutSection() {
  const ref = useScrollAnimation<HTMLDivElement>();
  const leftRef = useScrollAnimation<HTMLDivElement>();
  const rightRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id="about"
      data-ocid="about.section"
      className="py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <div ref={ref} className="fade-in-up text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">
            Our Story
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            About The Hotel Rio
          </h2>
          <div className="section-divider mt-4" />
        </div>

        <div ref={leftRef} className="slide-in-left">
          {/* Decorative gold lines */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/40" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/40" />
          </div>

          <p className="text-lg md:text-xl text-foreground/75 leading-relaxed text-center font-light">
            The Hotel Rio is a modern boutique hotel located in the heart of
            KPHB Phase 1, Hyderabad. Known for its spotless rooms, welcoming
            staff, and relaxing atmosphere, it offers guests a comfortable stay
            at an affordable luxury price. Conveniently located near the KPHB
            Metro Station and major shopping areas, it is perfect for business
            travelers, couples, and families visiting Hyderabad.
          </p>

          <div className="flex items-center gap-4 mt-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/40" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/40" />
          </div>
        </div>

        {/* Stats row */}
        <div
          ref={rightRef}
          className="slide-in-right grid grid-cols-3 gap-8 mt-12 text-center"
        >
          {[
            { value: "4.8★", label: "Guest Rating" },
            { value: "₹1500+", label: "From Per Night" },
            { value: "100%", label: "Clean & Safe" },
          ].map((stat, i) => (
            <div key={stat.label} style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="font-display text-2xl md:text-3xl gold-text-gradient font-bold">
                {stat.value}
              </div>
              <div className="text-xs tracking-widest uppercase text-foreground/50 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
