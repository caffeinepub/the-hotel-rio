import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-ocid="nav.panel"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg shadow-black/40 border-b border-amber-400/10"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-stretch h-16">
        {/* ── Title Bar Block (no text outline) ── */}
        <button
          type="button"
          onClick={() => handleLink("#home")}
          data-ocid="nav.link"
          className="title-bar-no-outline relative flex flex-col justify-center px-5 py-2 cursor-pointer select-none group"
          style={{
            background: "rgba(8,6,3,0.70)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderRight: "1px solid rgba(212,170,80,0.18)",
            borderBottom: "2px solid rgba(212,170,80,0.55)",
          }}
        >
          {/* left gold accent bar */}
          <span
            className="absolute left-0 top-2 bottom-2 w-[3px] rounded-r-full"
            style={{
              background:
                "linear-gradient(to bottom, rgba(212,170,80,0.9), rgba(180,130,40,0.3))",
            }}
          />

          <span className="font-display text-2xl font-bold tracking-wide leading-tight gold-text-gradient group-hover:opacity-90 transition-opacity duration-200">
            The Hotel Rio
          </span>

          {/* thin gold separator + subtitle */}
          <span className="flex items-center gap-2 mt-0.5">
            <span
              className="block h-px flex-1"
              style={{
                background:
                  "linear-gradient(to right, rgba(212,170,80,0.8), rgba(212,170,80,0))",
              }}
            />
            <span
              className="text-[10px] tracking-[0.22em] uppercase font-sans whitespace-nowrap"
              style={{ color: "rgba(212,170,80,0.65)" }}
            >
              KPHB, Hyderabad
            </span>
          </span>
        </button>

        {/* ── Nav Links ── */}
        <nav className="hidden md:flex items-center gap-8 ml-auto px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLink(link.href);
              }}
              className="text-sm tracking-wider text-white/90 hover:text-gold transition-colors duration-200 uppercase"
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden ml-auto px-5 text-gold"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden border-t border-gold/10"
          style={{
            background: "rgba(8,6,3,0.92)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLink(link.href);
              }}
              className="block px-6 py-4 text-sm tracking-wider text-white/90 hover:text-gold border-b border-white/5 uppercase transition-colors"
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
