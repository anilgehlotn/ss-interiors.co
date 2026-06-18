import { ArrowRight } from "lucide-react";

interface HeroContentProps {
  activeSlide: number;
  totalSlides: number;
}

export default function HeroContent({
  activeSlide,
  totalSlides,
}: HeroContentProps) {
  return (
    <div className="relative z-10 flex h-full w-full flex-col justify-between px-6 pb-12 pt-28 sm:px-10 lg:px-16 lg:pb-16 lg:pt-32">
      {/* Top Row — Side Labels */}
      <div className="flex items-start justify-between">
        <p
          className="animate-fade-slide-up font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50 sm:text-[11px]"
          style={{ animationDelay: "0ms" }}
        >
          Design · Manage · Execute
        </p>
        <p
          className="animate-fade-slide-up hidden font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50 sm:block sm:text-[11px]"
          style={{ animationDelay: "100ms" }}
        >
          Residential · Luxury ·  Commercial 
        </p>
      </div>

      {/* Center Content */}
      <div className="flex flex-1 flex-col items-start justify-center max-w-3xl">
        {/* Script Pre-title */}
        <p
          className="animate-fade-slide-up mb-4 font-serif text-base italic text-gold-400 sm:text-lg"
          style={{ animationDelay: "200ms" }}
        >
          S S Interiors
        </p>

        {/* Main Headline */}
        <h1
          className="animate-fade-slide-up font-serif text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ animationDelay: "350ms" }}
        >
          We Build What{" "}
          <span className="italic text-gold-400">Architects</span>{" "}
          Design.
        </h1>

        {/* Subtext */}
        <p
          className="animate-fade-slide-up mt-5 max-w-lg font-sans text-base font-light leading-relaxed text-white/60 sm:mt-6 sm:text-lg"
          style={{ animationDelay: "500ms" }}
        >
          Your Vision, Our Execution.
        </p>

        {/* CTA Buttons */}
        <div
          className="animate-fade-slide-up mt-8 flex w-full flex-col gap-4 sm:mt-10 sm:w-auto sm:flex-row sm:gap-5"
          style={{ animationDelay: "650ms" }}
        >
          <a
            href="#contact"
            id="cta-start-project"
            className="group inline-flex items-center justify-center gap-2 rounded-sm bg-gold-500 px-7 py-3.5 font-sans text-[13px] font-semibold uppercase tracking-[0.15em] text-charcoal-950 transition-all duration-300 hover:bg-gold-400 hover:shadow-[0_0_30px_rgba(212,149,42,0.3)]"
          >
            Start a Project
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
          <a
            href="#portfolio"
            id="cta-view-work"
            className="inline-flex items-center justify-center rounded-sm border border-white/20 px-7 py-3.5 font-sans text-[13px] font-semibold uppercase tracking-[0.15em] text-white/80 transition-all duration-300 hover:border-white/40 hover:text-white"
          >
            View Our Work
          </a>
        </div>
      </div>

      {/* Bottom Row — Slide Indicators */}
      <div className="flex items-end justify-end">
        <div className="flex items-center gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <span
              key={i}
              className={`block rounded-full transition-all duration-500 ${
                i === activeSlide
                  ? "h-2 w-8 bg-gold-400"
                  : "h-2 w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
