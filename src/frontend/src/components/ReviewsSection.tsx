import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const reviews = [
  {
    text: "Excellent service and atmosphere. Clean rooms and great amenities.",
    author: "Ravi K.",
    rating: 5,
  },
  {
    text: "Pleasant stay with very friendly staff. Calm and comfortable.",
    author: "Priya M.",
    rating: 5,
  },
  {
    text: "Best hotel in the KPHB area with great service.",
    author: "Suresh R.",
    rating: 5,
  },
  {
    text: "Wonderful hospitality and very clean rooms.",
    author: "Anitha V.",
    rating: 5,
  },
];

const overallStars = [1, 2, 3, 4, 5];

export function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const headRef = useScrollAnimation<HTMLDivElement>();

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % reviews.length),
    [],
  );
  const prev = () =>
    setCurrent((c) => (c - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const reviewStars = Array.from(
    { length: reviews[current].rating },
    (_, i) => i + 1,
  );

  return (
    <section
      id="reviews"
      data-ocid="reviews.section"
      className="py-24 md:py-32"
      style={{ background: "oklch(20 0.008 55)" }}
    >
      <div className="container mx-auto px-6 max-w-3xl">
        <div ref={headRef} className="fade-in-up text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">
            Testimonials
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What Our Guests Say
          </h2>
          <div className="section-divider mt-4" />
          <div className="flex items-center justify-center gap-1 mt-6">
            {overallStars.map((n) => (
              <Star key={n} size={20} className="fill-gold text-gold" />
            ))}
            <span className="ml-2 font-display text-2xl gold-text-gradient font-bold">
              4.8
            </span>
            <span className="text-foreground/40 text-sm ml-1">
              Average Rating
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center min-h-[200px] flex flex-col justify-center">
            <Quote size={36} className="text-gold/30 mx-auto mb-6" />
            <p className="font-display text-xl md:text-2xl text-foreground/90 italic leading-relaxed mb-6">
              &ldquo;{reviews[current].text}&rdquo;
            </p>
            <div className="flex items-center justify-center gap-1 mb-2">
              {reviewStars.map((n) => (
                <Star key={n} size={14} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="text-gold font-semibold tracking-wider text-sm uppercase">
              — {reviews[current].author}
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              type="button"
              onClick={prev}
              className="p-3 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {reviews.map((r, i) => (
                <button
                  key={r.author}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? "bg-gold w-6" : "bg-gold/30 w-2"}`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="p-3 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
