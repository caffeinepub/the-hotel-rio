import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919876543210?text=I%20want%20to%20book%20a%20room%20at%20The%20Hotel%20Rio";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="whatsapp.button"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg whatsapp-pulse transition-transform hover:scale-110"
      style={{ background: "oklch(55 0.19 145)" }}
    >
      <MessageCircle size={26} className="text-white fill-white" />
    </a>
  );
}
