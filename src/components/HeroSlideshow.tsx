// import { useState, useEffect, useCallback } from "react";

// const slides = ["/hero-slide-1.png", "/hero-slide-2.png"];

// interface HeroSlideshowProps {
//   onSlideChange?: (index: number) => void;
// }

// export default function HeroSlideshow({ onSlideChange }: HeroSlideshowProps) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   /* Key increments to restart Ken Burns animation each cycle */
//   const [animKey, setAnimKey] = useState(0);

//   const advance = useCallback(() => {
//     setActiveIndex((prev) => {
//       const next = (prev + 1) % slides.length;
//       onSlideChange?.(next);
//       return next;
//     });
//     setAnimKey((k) => k + 1);
//   }, [onSlideChange]);

//   useEffect(() => {
//     const timer = setInterval(advance, 6000);
//     return () => clearInterval(timer);
//   }, [advance]);

//   return (
//     <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
//       {/* Slide Images — always mounted */}
//       {slides.map((src, i) => (
//         <div
//           key={`${i}-${i === activeIndex ? animKey : "idle"}`}
//           className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
//             i === activeIndex ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <img
//             src={src}
//             alt=""
//             className={`h-full w-full object-cover ${
//               i === activeIndex ? "animate-kenburns" : ""
//             }`}
//             loading={i === 0 ? "eager" : "lazy"}
//           />
//         </div>
//       ))}

//       {/* Constant dark gradient overlay — NEVER transitions */}
//       <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/25" />
//       <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
//     </div>
//   );
// }


import { useState, useEffect, useCallback, useRef } from "react";

const slides = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=2400&q=80"
];

interface HeroSlideshowProps {
  onSlideChange?: (index: number) => void;
}

export default function HeroSlideshow({ onSlideChange }: HeroSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

  const advance = useCallback(() => {
    setActiveIndex((prev) => {
      const next = (prev + 1) % slides.length;
      onSlideChange?.(next);

      // Restart Ken Burns on the incoming slide by toggling the class
      const el = imgRefs.current[next];
      if (el) {
        el.classList.remove("kb-active");
        // Force reflow so the browser resets the animation
        void el.offsetWidth;
        el.classList.add("kb-active");
      }

      return next;
    });
  }, [onSlideChange]);

  // Kick off Ken Burns on mount for slide 0
  useEffect(() => {
    const el = imgRefs.current[0];
    if (el) el.classList.add("kb-active");
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, 6000);
    return () => clearInterval(timer);
  }, [advance]);

  return (
    <>
      <style>{`
        @keyframes kenburns {
          from { transform: scale(1); }
          to   { transform: scale(1.08); }
        }
        @keyframes fadein {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .kb-active {
          animation: kenburns 6500ms ease-out forwards;
          will-change: transform;
        }
        .slide-enter {
          animation: fadein 1200ms ease-in-out forwards;
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {slides.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 ${
              i === activeIndex ? "slide-enter" : "opacity-0"
            }`}
            style={{ zIndex: i === activeIndex ? 1 : 0 }}
          >
            <img
              ref={(el) => { imgRefs.current[i] = el; }}
              src={src}
              alt=""
              className="h-full w-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        ))}

        {/* Overlays — z-index above slides, never transition */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/25"
          style={{ zIndex: 2 }}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"
          style={{ zIndex: 2 }}
        />
      </div>
    </>
  );
}