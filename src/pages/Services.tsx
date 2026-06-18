// import { useRef } from "react";
// import {
//   motion,
//   useInView,
//   useScroll,
//   useTransform,
//   type MotionValue,
// } from "framer-motion";
// import Navbar from "../components/Navbar";

// /* ────────────────────────────────────────────────────────────
//    SERVICE DATA
//    ──────────────────────────────────────────────────────────── */
// const services = [
//   {
//     number: "01",
//     title: "Full Interior Fit-Out Execution",
//     /* TODO: Replace /images/services-01.jpg with a full-room interior photo showing a completed luxury residential space */
//     image: "/images/services-01.jpg",
//     description:
//       "End-to-end execution of residential interiors — from demolition and civil work through to final styling. We take the architect's design drawings and deliver a finished home, managing every trade, timeline, and material procurement decision under one project lead. No fragmented subcontracting. No handoff gaps between trades.",
//   },
//   {
//     number: "02",
//     title: "False Ceiling & Lighting Integration",
//     /* TODO: Replace /images/services-02.jpg with a photo showing finished false ceiling with integrated cove/recessed lighting */
//     image: "/images/services-02.jpg",
//     description:
//       "Gypsum and POP false ceilings fabricated and installed to precise architectural specifications — including cove lighting channels, recessed downlight positioning, AC grille coordination, and multi-level ceiling profiles. We work directly from the architect's reflected ceiling plan, ensuring every shadow gap, bulkhead, and lighting zone is executed as drawn.",
//   },
//   {
//     number: "03",
//     title: "Flooring & Tiling",
//     /* TODO: Replace /images/services-03.jpg with a photo of luxury marble/stone or large-format tile flooring — showing layout precision */
//     image: "/images/services-03.jpg",
//     description:
//       "Natural stone, large-format porcelain, engineered wood, and custom pattern tiling — sourced to spec and laid with the precision luxury finishes demand. Book-matched marble slabs, perfectly aligned grout lines, waterproofing under wet-area tiles, and seamless thresholds between flooring zones. The details the homeowner will live on every day.",
//   },
//   {
//     number: "04",
//     title: "Furniture & Joinery",
//     /* TODO: Replace /images/services-04.jpg with a photo of custom-built wardrobes, kitchen cabinetry, or bespoke furniture piece */
//     image: "/images/services-04.jpg",
//     description:
//       "Custom-built wardrobes, kitchen cabinetry, vanities, TV units, study desks, and freestanding furniture — fabricated in-house to the architect's detailing drawings. Grain-matched veneers, precision edge-banding, concealed hardware, and soft-close mechanisms throughout. Factory-finished components assembled on site for a seamless result.",
//   },
//   {
//     number: "05",
//     title: "Soft Furnishings & Styling",
//     /* TODO: Replace /images/services-05.jpg with a photo of a styled interior showing curtains, upholstery, cushions, and accessories */
//     image: "/images/services-05.jpg",
//     description:
//       "Curtains, blinds, upholstery, bed and bath linen, cushions, rugs, and decorative accessories — curated and installed to complete the interior. We coordinate with the architect's material palette to source fabrics, textures, and finishes that feel intentional, not afterthought. The layer that transforms a fit-out into a home.",
//   },
//   {
//     number: "06",
//     title: "Project Management & Coordination",
//     /* TODO: Replace /images/services-06.jpg with a behind-the-scenes site photo — site meeting, progress board, or site supervisor reviewing drawings */
//     image: "/images/services-06.jpg",
//     description:
//       "Single-point project management from kick-off to handover. Structured timelines with procurement lead-time buffers, weekly progress documentation with photos, and disciplined coordination between the architect's office, the homeowner, and our site team. Delays are flagged before they cascade. Decisions are documented. Nothing falls through the cracks.",
//   },
// ];

// /* ────────────────────────────────────────────────────────────
//    PARALLAX NUMERAL — fades + scales + moves slower on scroll
//    ──────────────────────────────────────────────────────────── */
// function ParallaxNumeral({
//   number,
//   scrollYProgress,
//   isReversed,
// }: {
//   number: string;
//   scrollYProgress: MotionValue<number>;
//   isReversed: boolean;
// }) {
//   const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

//   return (
//     <motion.span
//       className={`pointer-events-none absolute top-1/2 -translate-y-1/2 select-none font-serif font-bold leading-none text-charcoal-100 ${
//         isReversed
//           ? "left-0 -translate-x-[15%] sm:-translate-x-[10%]"
//           : "right-0 translate-x-[15%] sm:translate-x-[10%]"
//       } text-[clamp(8rem,22vw,20rem)]`}
//       style={{ y }}
//       initial={{ opacity: 0, scale: 0.85 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//     >
//       {number}
//     </motion.span>
//   );
// }

// /* ────────────────────────────────────────────────────────────
//    SERVICE SECTION COMPONENT
//    ──────────────────────────────────────────────────────────── */
// function ServiceSection({
//   service,
//   index,
// }: {
//   service: (typeof services)[number];
//   index: number;
// }) {
//   const isReversed = index % 2 !== 0; // even index = image left, odd = image right
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const isInView = useInView(sectionRef, { once: true, amount: 0.25 });

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });

//   /* Image slides from its own side */
//   const imageSlideFrom = isReversed ? 60 : -60;

//   return (
//     <>
//       {/* Thin divider */}
//       <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-16">
//         <div className="h-px w-full bg-charcoal-200" />
//       </div>

//       <section
//         ref={sectionRef}
//         id={`service-${service.number}`}
//         className="relative mx-auto w-full max-w-[1280px] overflow-hidden px-6 py-16 sm:px-10 md:py-24 lg:px-16 lg:py-28"
//       >
//         {/* Background numeral */}
//         <ParallaxNumeral
//           number={service.number}
//           scrollYProgress={scrollYProgress}
//           isReversed={isReversed}
//         />

//         {/* Content grid */}
//         <div
//           className={`relative z-10 grid items-center gap-10 md:gap-14 lg:grid-cols-2 lg:gap-20 ${
//             isReversed ? "lg:direction-rtl" : ""
//           }`}
//           style={isReversed ? { direction: "rtl" } : undefined}
//         >
//           {/* IMAGE */}
//           <motion.div
//             className="overflow-hidden rounded-sm"
//             style={isReversed ? { direction: "ltr" } : undefined}
//             initial={{ opacity: 0, x: imageSlideFrom }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//           >
//             <div className="aspect-[4/3] overflow-hidden bg-charcoal-100">
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
//                 loading="lazy"
//               />
//             </div>
//           </motion.div>

//           {/* TEXT */}
//           <motion.div
//             className="flex flex-col justify-center"
//             style={isReversed ? { direction: "ltr" } : undefined}
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{
//               duration: 0.6,
//               ease: [0.22, 1, 0.36, 1],
//               delay: 0.18,
//             }}
//           >
//             {/* Label */}
//             <span className="mb-4 font-sans text-[13px] font-medium tracking-[0.08em] text-gold-700">
//               — {service.number}
//             </span>

//             {/* Heading */}
//             <h2 className="font-serif text-2xl font-bold leading-snug text-charcoal-950 sm:text-3xl lg:text-4xl">
//               {service.title}
//             </h2>

//             {/* Description */}
//             <p className="mt-5 font-sans text-[15px] leading-relaxed text-charcoal-500 sm:text-base">
//               {service.description}
//             </p>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// }

// /* ════════════════════════════════════════════════════════════
//    SERVICES PAGE
//    ════════════════════════════════════════════════════════════ */
// export default function Services() {
//   return (
//     <main className="min-h-screen bg-white">
//       {/* Fixed dark band behind Navbar — keeps white nav text readable on light page */}
//       <div className="fixed top-0 left-0 right-0 z-40 h-[72px] bg-charcoal-950 lg:h-[84px]" />
//       <Navbar />
//       {/* Spacer to push content below the fixed navbar band */}
//       <div className="h-[72px] lg:h-[84px]" />

//       {/* ─── HERO ─────────────────────────────────────────── */}
//       <section
//         id="services-hero"
//         className="mx-auto w-full max-w-[1280px] px-6 pb-14 pt-16 sm:px-10 md:pb-20 md:pt-24 lg:px-16"
//       >
//         {/* Label with line */}
//         <motion.div
//           className="mb-6 flex items-center gap-4"
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <div className="h-px w-8 bg-charcoal-400 sm:w-12" />
//           <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-charcoal-400">
//             What We Do &nbsp;/&nbsp; From Brief to Handover
//           </span>
//         </motion.div>

//         {/* Headline */}
//         <motion.h1
//           className="font-serif text-5xl font-bold leading-[1.05] tracking-tight text-charcoal-950 sm:text-6xl md:text-7xl lg:text-8xl"
//           initial={{ opacity: 0, y: 24, scale: 0.97 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{
//             duration: 0.7,
//             ease: [0.22, 1, 0.36, 1],
//             delay: 0.15,
//           }}
//         >
//           OUR{" "}
//           <span className="italic text-gold-700">SERVICES</span>
//         </motion.h1>

//         {/* Supporting copy */}
//         <motion.p
//           className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-charcoal-400 sm:text-lg"
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: 0.6,
//             ease: [0.22, 1, 0.36, 1],
//             delay: 0.35,
//           }}
//         >
//           Six core trades executed in-house, under one project manager, on one
//           timeline. No subcontracting confusion. No accountability gaps between
//           trades. From structural work to final styling — one team, one
//           standard.
//         </motion.p>
//       </section>

//       {/* ─── SERVICE SECTIONS ─────────────────────────────── */}
//       {services.map((service, i) => (
//         <ServiceSection key={service.number} service={service} index={i} />
//       ))}

//       {/* Final divider */}
//       <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-16">
//         <div className="h-px w-full bg-charcoal-200" />
//       </div>

//       {/* ─── CLOSING CTA ──────────────────────────────────── */}
//       <section
//         id="services-cta"
//         className="mx-auto w-full max-w-[1280px] px-6 py-20 text-center sm:px-10 md:py-28 lg:px-16"
//       >
//         <motion.p
//           className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-700"
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//         >
//           Ready to Start?
//         </motion.p>
//         <motion.h2
//           className="mx-auto max-w-xl font-serif text-3xl font-bold leading-tight text-charcoal-950 sm:text-4xl md:text-5xl"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{
//             duration: 0.6,
//             ease: [0.22, 1, 0.36, 1],
//             delay: 0.1,
//           }}
//         >
//           Let's Discuss Your{" "}
//           <span className="italic text-gold-700">Project</span>
//         </motion.h2>
//         <motion.p
//           className="mx-auto mt-5 max-w-md font-sans text-base leading-relaxed text-charcoal-400"
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{
//             duration: 0.5,
//             ease: [0.22, 1, 0.36, 1],
//             delay: 0.2,
//           }}
//         >
//           Share your architect's drawings or brief, and we'll walk you through
//           how we'd approach execution.
//         </motion.p>
//         <motion.div
//           className="mt-10"
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{
//             duration: 0.5,
//             ease: [0.22, 1, 0.36, 1],
//             delay: 0.3,
//           }}
//         >
//           <a
//             href="/contact"
//             id="services-cta-contact"
//             className="group inline-flex items-center justify-center gap-2 rounded-sm bg-gold-700 px-8 py-4 font-sans text-[13px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-gold-600 hover:shadow-[0_0_30px_rgba(153,86,29,0.25)]"
//           >
//             Start a Project
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="15"
//               height="15"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="transition-transform duration-300 group-hover:translate-x-1"
//             >
//               <path d="M5 12h14" />
//               <path d="m12 5 7 7-7 7" />
//             </svg>
//           </a>
//         </motion.div>
//       </section>

//       {/* TODO: Add Footer component here once it exists — e.g. <Footer /> */}
//     </main>
//   );
// }
import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Navbar from "../components/Navbar";

const services = [
  {
    number: "01",
    title: "Full Interior Fit-Out Execution",
    image: "https://images.unsplash.com/photo-1601760561441-16420502c7e0?w=1200&q=80",
    description:
      "End-to-end execution of residential interiors — from demolition and civil work through to final styling. We take the architect's design drawings and deliver a finished home, managing every trade, timeline, and material procurement decision under one project lead. No fragmented subcontracting. No handoff gaps between trades.",
  },
  {
    number: "02",
    title: "False Ceiling & Lighting Integration",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1200&q=80",
    description:
      "Gypsum and POP false ceilings fabricated and installed to precise architectural specifications — including cove lighting channels, recessed downlight positioning, AC grille coordination, and multi-level ceiling profiles. We work directly from the architect's reflected ceiling plan, ensuring every shadow gap, bulkhead, and lighting zone is executed as drawn.",
  },
  {
    number: "03",
    title: "Flooring & Tiling",
    image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=1200&q=80",
    description:
      "Natural stone, large-format porcelain, engineered wood, and custom pattern tiling — sourced to spec and laid with the precision luxury finishes demand. Book-matched marble slabs, perfectly aligned grout lines, waterproofing under wet-area tiles, and seamless thresholds between flooring zones. The details the homeowner will live on every day.",
  },
  {
    number: "04",
    title: "Furniture & Joinery",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    description:
      "Custom-built wardrobes, kitchen cabinetry, vanities, TV units, study desks, and freestanding furniture — fabricated in-house to the architect's detailing drawings. Grain-matched veneers, precision edge-banding, concealed hardware, and soft-close mechanisms throughout. Factory-finished components assembled on site for a seamless result.",
  },
  {
    number: "05",
    title: "Soft Furnishings & Styling",
    image: "https://images.unsplash.com/photo-1601760561441-16420502c7e0?w=1200&q=80",
    description:
      "Curtains, blinds, upholstery, bed and bath linen, cushions, rugs, and decorative accessories — curated and installed to complete the interior. We coordinate with the architect's material palette to source fabrics, textures, and finishes that feel intentional, not afterthought. The layer that transforms a fit-out into a home.",
  },
  {
    number: "06",
    title: "Project Management & Coordination",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1200&q=80",
    description:
      "Single-point project management from kick-off to handover. Structured timelines with procurement lead-time buffers, weekly progress documentation with photos, and disciplined coordination between the architect's office, the homeowner, and our site team. Delays are flagged before they cascade. Decisions are documented. Nothing falls through the cracks.",
  },
];

function ParallaxNumeral({
  number,
  scrollYProgress,
  isReversed,
}: {
  number: string;
  scrollYProgress: MotionValue<number>;
  isReversed: boolean;
}) {
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.span
      className={`pointer-events-none absolute top-1/2 -translate-y-1/2 select-none font-serif font-bold leading-none text-charcoal-100 ${
        isReversed
          ? "left-0 -translate-x-[15%] sm:-translate-x-[10%]"
          : "right-0 translate-x-[15%] sm:translate-x-[10%]"
      } text-[clamp(8rem,22vw,20rem)]`}
      style={{ y }}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {number}
    </motion.span>
  );
}

function ServiceSection({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const isReversed = index % 2 !== 0;
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageSlideFrom = isReversed ? 60 : -60;

  return (
    <>
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <div className="h-px w-full bg-charcoal-200" />
      </div>

      <section
        ref={sectionRef}
        id={`service-${service.number}`}
        className="relative mx-auto w-full max-w-[1280px] overflow-hidden px-6 py-16 sm:px-10 md:py-24 lg:px-16 lg:py-28"
      >
        <ParallaxNumeral
          number={service.number}
          scrollYProgress={scrollYProgress}
          isReversed={isReversed}
        />

        <div
          className={`relative z-10 grid items-center gap-10 md:gap-14 lg:grid-cols-2 lg:gap-20 ${
            isReversed ? "lg:direction-rtl" : ""
          }`}
          style={isReversed ? { direction: "rtl" } : undefined}
        >
          <motion.div
            className="overflow-hidden rounded-sm"
            style={isReversed ? { direction: "ltr" } : undefined}
            initial={{ opacity: 0, x: imageSlideFrom }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="aspect-[4/3] overflow-hidden bg-charcoal-100">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center"
            style={isReversed ? { direction: "ltr" } : undefined}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.18,
            }}
          >
            <span className="mb-4 font-sans text-[13px] font-medium tracking-[0.08em] text-gold-700">
              — {service.number}
            </span>

            <h2 className="font-serif text-2xl font-bold leading-snug text-charcoal-950 sm:text-3xl lg:text-4xl">
              {service.title}
            </h2>

            <p className="mt-5 font-sans text-[15px] leading-relaxed text-charcoal-500 sm:text-base">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 z-40 h-[72px] bg-charcoal-950 lg:h-[84px]" />
      <Navbar />
      <div className="h-[72px] lg:h-[84px]" />

      <section
        id="services-hero"
        className="mx-auto w-full max-w-[1280px] px-6 pb-14 pt-16 sm:px-10 md:pb-20 md:pt-24 lg:px-16"
      >
        <motion.div
          className="mb-6 flex items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="h-px w-8 bg-charcoal-400 sm:w-12" />
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-charcoal-400">
            What We Do &nbsp;/&nbsp; From Brief to Handover
          </span>
        </motion.div>

        <motion.h1
          className="font-serif text-5xl font-bold leading-[1.05] tracking-tight text-charcoal-950 sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.15,
          }}
        >
          OUR{" "}
          <span className="italic text-gold-700">SERVICES</span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-charcoal-400 sm:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.35,
          }}
        >
          Six core trades executed in-house, under one project manager, on one
          timeline. No subcontracting confusion. No accountability gaps between
          trades. From structural work to final styling — one team, one
          standard.
        </motion.p>
      </section>

      {services.map((service, i) => (
        <ServiceSection key={service.number} service={service} index={i} />
      ))}

      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <div className="h-px w-full bg-charcoal-200" />
      </div>

      <section
        id="services-cta"
        className="mx-auto w-full max-w-[1280px] px-6 py-20 text-center sm:px-10 md:py-28 lg:px-16"
      >
        <motion.p
          className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-700"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Ready to Start?
        </motion.p>
        <motion.h2
          className="mx-auto max-w-xl font-serif text-3xl font-bold leading-tight text-charcoal-950 sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1,
          }}
        >
          Let's Discuss Your{" "}
          <span className="italic text-gold-700">Project</span>
        </motion.h2>
        <motion.p
          className="mx-auto mt-5 max-w-md font-sans text-base leading-relaxed text-charcoal-400"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2,
          }}
        >
          Share your architect's drawings or brief, and we'll walk you through
          how we'd approach execution.
        </motion.p>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.3,
          }}
        >
          <a
            href="/contact"
            id="services-cta-contact"
            className="group inline-flex items-center justify-center gap-2 rounded-sm bg-gold-700 px-8 py-4 font-sans text-[13px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-gold-600 hover:shadow-[0_0_30px_rgba(153,86,29,0.25)]"
          >

            Start a Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </section>
    </main>
  );
}