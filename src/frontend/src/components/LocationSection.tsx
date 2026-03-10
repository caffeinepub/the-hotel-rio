import { MapPin, Navigation, ShoppingBag, Train } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const highlights = [
  {
    icon: Train,
    label: "Near KPHB Metro Station",
    desc: "Just minutes walk away",
  },
  {
    icon: ShoppingBag,
    label: "Shopping Areas Nearby",
    desc: "Malls and markets close by",
  },
  {
    icon: Navigation,
    label: "Excellent City Connectivity",
    desc: "Easy access to all of Hyderabad",
  },
];

export function LocationSection() {
  const headRef = useScrollAnimation<HTMLDivElement>();
  const mapRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id="location"
      data-ocid="location.section"
      className="py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-6">
        <div ref={headRef} className="fade-in-up text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">
            Location
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Find Us
          </h2>
          <div className="section-divider mt-4" />
          <p className="text-foreground/60 max-w-2xl mx-auto mt-6 leading-relaxed">
            The Hotel Rio is located in the vibrant area of KPHB Phase 1,
            Kukatpally, Hyderabad, offering easy access to metro stations,
            shopping centers, restaurants, and business hubs.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          {highlights.map((h, i) => (
            <div
              key={h.label}
              className="fade-in-up glass-card rounded-xl p-5 text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h.icon size={24} className="text-gold mx-auto mb-3" />
              <p className="font-semibold text-foreground text-sm">{h.label}</p>
              <p className="text-xs text-foreground/45 mt-1">{h.desc}</p>
            </div>
          ))}
        </div>

        {/* Map */}
        <div
          ref={mapRef}
          className="fade-in-up rounded-2xl overflow-hidden border border-gold/20 shadow-gold-lg"
          data-ocid="location.map_marker"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3697!2d78.3974!3d17.4948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8b5d4de7%3A0x29da96e38b43e00e!2sKPHB%20Phase%201%2C%20Kukatpally%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="The Hotel Rio Location"
          />
        </div>
      </div>
    </section>
  );
}
