import { useState } from "react";
import Navbar from "./Navbar";
import HeroSlideshow from "./HeroSlideshow";
import HeroContent from "./HeroContent";

const TOTAL_SLIDES = 2;

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section
      id="hero-section"
      className="relative h-screen w-full overflow-hidden bg-charcoal-950"
    >
      {/* Background Slideshow */}
      <HeroSlideshow onSlideChange={setActiveSlide} />

      {/* Navbar — overlaid on top */}
      <Navbar />

      {/* Foreground Content */}
      <HeroContent activeSlide={activeSlide} totalSlides={TOTAL_SLIDES} />
    </section>
  );
}
