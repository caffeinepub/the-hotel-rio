import { CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const features = [
  {
    title: "Spotless Clean Rooms",
    desc: "Meticulously maintained spaces for your comfort",
  },
  {
    title: "Friendly & Responsive Staff",
    desc: "Attentive team ready to assist at any time",
  },
  {
    title: "Calm & Relaxing Atmosphere",
    desc: "Peaceful environment away from city stress",
  },
  {
    title: "Prime Location in KPHB",
    desc: "Heart of Kukatpally, close to everything",
  },
  {
    title: "Walkable to Metro Station",
    desc: "KPHB Metro just minutes away on foot",
  },
  {
    title: "Excellent Value for Money",
    desc: "Luxury experience at budget-friendly rates",
  },
];

export function FeaturesSection() {
  const headRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id="features"
      data-ocid="features.section"
      className="py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-6">
        <div ref={headRef} className="fade-in-up text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">
            Our Promise
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Why Guests Love Us
          </h2>
          <div className="section-divider mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  index,
}: { feature: (typeof features)[0]; index: number }) {
  const ref = useScrollAnimation<HTMLDivElement>();
  const delays = [0, 100, 200, 300, 400, 500];

  return (
    <div
      ref={ref}
      className="fade-in-up glass-card rounded-xl p-6 hover:border-gold/60 transition-all duration-300 group hover:shadow-gold"
      style={{ transitionDelay: `${delays[index] ?? 0}ms` }}
    >
      <CheckCircle2
        size={28}
        className="text-gold mb-4 group-hover:scale-110 transition-transform duration-200"
      />
      <h3 className="font-display text-lg font-bold text-foreground mb-2">
        {feature.title}
      </h3>
      <p className="text-sm text-foreground/55 leading-relaxed">
        {feature.desc}
      </p>
    </div>
  );
}
