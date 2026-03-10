import "./index.css";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { GallerySection } from "./components/GallerySection";
import { HeroSection } from "./components/HeroSection";
import { LocationSection } from "./components/LocationSection";
import { Navbar } from "./components/Navbar";
import { ReviewsSection } from "./components/ReviewsSection";
import { RoomsSection } from "./components/RoomsSection";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <RoomsSection />
        <FeaturesSection />
        <ReviewsSection />
        <LocationSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
