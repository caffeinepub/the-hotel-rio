import { Star } from "lucide-react";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: SiFacebook, label: "Facebook", href: "https://facebook.com" },
  { icon: SiInstagram, label: "Instagram", href: "https://instagram.com" },
  { icon: SiX, label: "Twitter", href: "https://x.com" },
];

const stars = [1, 2, 3, 4, 5];

export function Footer() {
  const handleLink = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      data-ocid="footer.panel"
      className="py-16 border-t border-gold/10"
      style={{ background: "oklch(15 0.005 55)" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Logo + address */}
          <div>
            <div className="font-display text-2xl font-bold gold-text-gradient mb-4">
              The Hotel Rio
            </div>
            <p className="text-foreground/50 text-sm leading-relaxed">
              KPHB Phase 1, Kukatpally,
              <br />
              Hyderabad - 500072,
              <br />
              Telangana, India
            </p>
            <div className="flex items-center gap-2 mt-5">
              {stars.map((n) => (
                <Star key={n} size={14} className="fill-gold text-gold" />
              ))}
              <span className="text-xs text-foreground/50">
                4.8 / 5 on Google
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-5">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLink(link.href);
                  }}
                  className="block text-sm text-foreground/50 hover:text-gold transition-colors"
                  data-ocid="footer.link"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-5">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2.5 rounded-full border border-gold/20 text-foreground/50 hover:text-gold hover:border-gold/50 transition-all"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-foreground/35">
          <p>
            © {new Date().getFullYear()} The Hotel Rio. All rights reserved.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            Built with ♥ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
