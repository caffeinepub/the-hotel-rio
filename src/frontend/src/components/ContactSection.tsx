import {
  CheckCircle2,
  Loader2,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { RoomType } from "../backend.d";
import { useActor } from "../hooks/useActor";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const WHATSAPP_URL =
  "https://wa.me/919876543210?text=I%20want%20to%20book%20a%20room%20at%20The%20Hotel%20Rio";
const MAPS_URL =
  "https://www.google.com/maps/search/KPHB+Phase+1+Kukatpally+Hyderabad";

const defaultForm = {
  guestName: "",
  email: "",
  phoneNumber: "",
  checkInDate: "",
  checkOutDate: "",
  roomType: "deluxe" as "deluxe" | "premium",
  numberOfGuests: "1",
  message: "",
};

export function ContactSection() {
  const headRef = useScrollAnimation<HTMLDivElement>();
  const leftRef = useScrollAnimation<HTMLDivElement>();
  const rightRef = useScrollAnimation<HTMLDivElement>();
  const { actor } = useActor();

  const [form, setForm] = useState(defaultForm);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!actor) {
      setError("Connection not ready. Please try again in a moment.");
      return;
    }
    setSubmitting(true);
    try {
      const roomType =
        form.roomType === "premium" ? RoomType.premium : RoomType.deluxe;
      await actor.submitEnquiry(
        form.guestName,
        form.email,
        form.phoneNumber,
        form.checkInDate,
        form.checkOutDate,
        roomType,
        BigInt(form.numberOfGuests),
        form.message,
      );
      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded px-3 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-gold/50 transition-colors";
  const labelClass =
    "text-xs uppercase tracking-widest text-foreground/40 mb-1.5 block";

  return (
    <section
      id="contact"
      data-ocid="contact.section"
      className="py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-6">
        <div ref={headRef} className="fade-in-up text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">
            Reservations
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Book Your Stay
          </h2>
          <div className="section-divider mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left — Contact info */}
          <div ref={leftRef} className="fade-in-up">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Contact Us
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full border border-gold/30 text-gold shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-foreground/40 mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+919876543210"
                    className="text-foreground hover:text-gold transition-colors font-semibold"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full border border-gold/30 text-gold shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-foreground/40 mb-1">
                    Address
                  </p>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    KPHB Phase 1, Kukatpally,
                    <br />
                    Hyderabad - 500072, Telangana
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="tel:+919876543210"
                data-ocid="contact.primary_button"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded text-sm font-semibold tracking-wider uppercase gold-gradient text-black hover:opacity-90 transition-all"
              >
                <Phone size={16} /> Call Hotel
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.secondary_button"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded text-sm font-semibold tracking-wider uppercase border border-green-500/50 text-green-400 hover:bg-green-500/10 transition-all"
              >
                <MessageCircle size={16} /> WhatsApp Booking
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.button"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded text-sm font-semibold tracking-wider uppercase border border-gold/30 text-gold hover:bg-gold/10 transition-all"
              >
                <MapPin size={16} /> Get Directions
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div
            ref={rightRef}
            className="fade-in-up"
            style={{ transitionDelay: "150ms" }}
          >
            {success ? (
              <div
                data-ocid="booking.success_state"
                className="glass-card rounded-2xl p-10 text-center flex flex-col items-center justify-center min-h-[400px]"
              >
                <CheckCircle2 size={56} className="text-gold mb-4" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  Enquiry Sent!
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  Thank you for reaching out. Our team will contact you shortly
                  to confirm your booking.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSuccess(false);
                    setForm(defaultForm);
                  }}
                  className="mt-6 px-6 py-2.5 rounded text-xs font-semibold tracking-wider uppercase border border-gold/30 text-gold hover:bg-gold/10 transition-all"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-2xl p-6 md:p-8 space-y-4"
              >
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  Quick Enquiry
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="guestName" className={labelClass}>
                      Guest Name *
                    </label>
                    <input
                      id="guestName"
                      name="guestName"
                      value={form.guestName}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      data-ocid="booking.input"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phoneNumber" className={labelClass}>
                      Phone *
                    </label>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      value={form.phoneNumber}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="numberOfGuests" className={labelClass}>
                      Guests
                    </label>
                    <input
                      id="numberOfGuests"
                      name="numberOfGuests"
                      type="number"
                      min="1"
                      max="10"
                      value={form.numberOfGuests}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="checkInDate" className={labelClass}>
                      Check-in *
                    </label>
                    <input
                      id="checkInDate"
                      name="checkInDate"
                      type="date"
                      value={form.checkInDate}
                      onChange={handleChange}
                      required
                      className={`${inputClass} [color-scheme:dark]`}
                    />
                  </div>
                  <div>
                    <label htmlFor="checkOutDate" className={labelClass}>
                      Check-out *
                    </label>
                    <input
                      id="checkOutDate"
                      name="checkOutDate"
                      type="date"
                      value={form.checkOutDate}
                      onChange={handleChange}
                      required
                      className={`${inputClass} [color-scheme:dark]`}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="roomType" className={labelClass}>
                    Room Type
                  </label>
                  <select
                    id="roomType"
                    name="roomType"
                    value={form.roomType}
                    onChange={handleChange}
                    data-ocid="booking.select"
                    className={inputClass}
                  >
                    <option value="deluxe" className="bg-background">
                      Deluxe Room — ₹1,500/night
                    </option>
                    <option value="premium" className="bg-background">
                      Premium Room — ₹1,900/night
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any special requests or questions?"
                    data-ocid="booking.textarea"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {error && (
                  <p
                    data-ocid="booking.error_state"
                    className="text-red-400 text-xs"
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  data-ocid="booking.submit_button"
                  className="w-full py-3.5 rounded font-semibold tracking-wider uppercase text-sm gold-gradient text-black hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {submitting && <Loader2 size={16} className="animate-spin" />}
                  {submitting ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
