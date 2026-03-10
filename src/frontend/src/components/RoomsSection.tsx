import { useScrollAnimation } from "../hooks/useScrollAnimation";

const rooms = [
  {
    name: "Deluxe Room",
    image: "/assets/uploads/image-1.png",
    description:
      "Modern comfortable room with air conditioning, Wi-Fi, and elegant interiors. Perfect for solo travelers and professionals.",
    price: "₹1,500 / night",
    ocid: "rooms.item.1",
    animClass: "slide-in-left",
  },
  {
    name: "Premium Room",
    image: "/assets/uploads/image-3-4.png",
    description:
      "Spacious room designed for couples and business travelers, featuring premium bedding and refined décor.",
    price: "₹1,900 / night",
    ocid: "rooms.item.2",
    animClass: "slide-in-right",
  },
];

export function RoomsSection() {
  const headRef = useScrollAnimation<HTMLDivElement>();

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="rooms"
      data-ocid="rooms.section"
      className="py-24 md:py-32"
      style={{ background: "oklch(20 0.008 55)" }}
    >
      <div className="container mx-auto px-6">
        <div ref={headRef} className="fade-in-up text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">
            Accommodations
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Our Rooms
          </h2>
          <div className="section-divider mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {rooms.map((room, i) => (
            <RoomCard
              key={room.name}
              room={room}
              delay={i * 150}
              onBook={scrollToContact}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function RoomCard({
  room,
  delay,
  onBook,
}: {
  room: (typeof rooms)[0];
  delay: number;
  onBook: () => void;
}) {
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-ocid={room.ocid}
      className={`${room.animClass} glass-card rounded-xl overflow-hidden group hover:border-gold/60 transition-all duration-300 hover:shadow-gold-lg`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden h-56">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="font-display text-2xl font-bold text-foreground mb-2">
          {room.name}
        </h3>
        <p className="text-foreground/60 text-sm leading-relaxed mb-4">
          {room.description}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-foreground/40 uppercase tracking-wider">
              Starting from
            </span>
            <div className="font-display text-xl gold-text-gradient font-bold">
              {room.price}
            </div>
          </div>
          <button
            type="button"
            onClick={onBook}
            className="px-5 py-2.5 rounded text-xs font-semibold tracking-wider uppercase gold-gradient text-black hover:opacity-90 transition-all duration-200"
            data-ocid="rooms.primary_button"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
