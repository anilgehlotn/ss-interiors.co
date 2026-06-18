// import { useRef } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import { projects } from "../lib/projects-data";

// /* ────────────────────────────────────────────────────────────
//    HOME PAGE — Project Carousel Section (dark theme)
//    ──────────────────────────────────────────────────────────── */
// export default function ProjectCarousel() {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const scroll = (direction: "left" | "right") => {
//     if (!scrollRef.current) return;
//     const cardWidth = scrollRef.current.querySelector("a")?.offsetWidth ?? 340;
//     const gap = 24; // gap-6 = 24px
//     scrollRef.current.scrollBy({
//       left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section
//       id="home-portfolio-carousel"
//       className="bg-charcoal-950 py-20 md:py-28"
//     >
//       <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-16">
//         {/* ─── Header row ─── */}
//         <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
//           {/* Text */}
//           <div>
//             <motion.p
//               className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-400"
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.5 }}
//               transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//             >
//               Our Work
//             </motion.p>
//             <motion.h2
//               className="font-serif text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.5 }}
//               transition={{
//                 duration: 0.6,
//                 ease: [0.22, 1, 0.36, 1],
//                 delay: 0.1,
//               }}
//             >
//               Crafted with{" "}
//               <span className="italic text-gold-400">Precision</span>
//             </motion.h2>
//           </div>

//           {/* Arrow nav — hidden on mobile, shown on lg+ */}
//           <motion.div
//             className="hidden items-center gap-3 lg:flex"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             <button
//               onClick={() => scroll("left")}
//               aria-label="Scroll carousel left"
//               className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-300 hover:border-gold-400 hover:text-gold-400"
//             >
//               <ArrowLeft size={18} />
//             </button>
//             <button
//               onClick={() => scroll("right")}
//               aria-label="Scroll carousel right"
//               className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-300 hover:border-gold-400 hover:text-gold-400"
//             >
//               <ArrowRight size={18} />
//             </button>
//           </motion.div>
//         </div>

//         {/* ─── Carousel ─── */}
//         <div
//           ref={scrollRef}
//           className="hide-scrollbar -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 sm:-mx-0 sm:px-0"
//         >
//           {projects.map((project, i) => (
//             <motion.div
//               key={project.slug}
//               className="w-[280px] flex-shrink-0 snap-start sm:w-[320px] lg:w-[calc(25%-18px)]"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{
//                 duration: 0.5,
//                 ease: [0.22, 1, 0.36, 1],
//                 delay: i * 0.08,
//               }}
//             >
//               <Link
//                 to={`/portfolio/${project.slug}`}
//                 className="group block"
//               >
//                 {/* Image */}
//                 <motion.div
//                   className="overflow-hidden rounded-sm"
//                   whileHover={{ scale: 1.03 }}
//                   transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
//                 >
//                   <div className="aspect-[3/4] overflow-hidden bg-charcoal-900">
//                     <img
//                       src={project.images[0]}
//                       alt={project.name}
//                       className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//                       loading="lazy"
//                     />
//                   </div>
//                 </motion.div>

//                 {/* Text */}
//                 <div className="mt-4">
//                   <h3 className="font-serif text-lg font-semibold text-white transition-colors group-hover:text-gold-400">
//                     {project.name}
//                   </h3>
//                   <p className="mt-1 font-sans text-[12px] font-medium uppercase tracking-[0.1em] text-white/40">
//                     {project.tag}
//                   </p>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}

//           {/* "View All Projects" end card */}
//           <motion.div
//             className="flex w-[280px] flex-shrink-0 snap-start items-center justify-center sm:w-[320px] lg:w-[calc(25%-18px)]"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             <Link
//               to="/portfolio"
//               className="group flex flex-col items-center gap-4 text-center"
//             >
//               <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-gold-400 group-hover:bg-gold-400/10">
//                 <ArrowRight
//                   size={22}
//                   className="text-white/60 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold-400"
//                 />
//               </div>
//               <span className="font-sans text-[13px] font-semibold uppercase tracking-[0.15em] text-white/60 transition-colors group-hover:text-gold-400">
//                 View All Projects
//               </span>
//             </Link>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
// import { useRef } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
// import { projects } from "../lib/projects-data";

// /* ────────────────────────────────────────────────────────────
//    HOME PAGE — Project Carousel + Projects Grid (dark theme)
//    ──────────────────────────────────────────────────────────── */
// export default function ProjectCarousel() {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const scroll = (direction: "left" | "right") => {
//     if (!scrollRef.current) return;
//     const cardWidth = scrollRef.current.querySelector("a")?.offsetWidth ?? 340;
//     const gap = 24;
//     scrollRef.current.scrollBy({
//       left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
//       behavior: "smooth",
//     });
//   };

//   /* Grid span logic — card 0 is hero (2×2), card 3 is tall (1×2) */
//   const gridSpan = (i: number) => {
//     if (i === 0) return "lg:col-span-2 lg:row-span-2";
//     if (i === 3) return "lg:row-span-2";
//     return "";
//   };

//   return (
//     <>
//       {/* ═══════════════════════════════════════════════════════
//           SECTION 1 — Horizontal Carousel
//           ═══════════════════════════════════════════════════════ */}
//       <section
//         id="home-portfolio-carousel"
//         className="bg-charcoal-950 py-20 md:py-28"
//       >
//         <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-16">
//           {/* Header row */}
//           <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
//             <div>
//               <motion.p
//                 className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-400"
//                 initial={{ opacity: 0, y: 16 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.5 }}
//                 transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//               >
//                 Our Work
//               </motion.p>
//               <motion.h2
//                 className="font-serif text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.5 }}
//                 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
//               >
//                 Crafted with{" "}
//                 <span className="italic text-gold-400">Precision</span>
//               </motion.h2>
//             </div>

//             {/* Arrow nav — desktop only */}
//             <motion.div
//               className="hidden items-center gap-3 lg:flex"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//             >
//               <button
//                 onClick={() => scroll("left")}
//                 aria-label="Scroll carousel left"
//                 className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-300 hover:border-gold-400 hover:text-gold-400"
//               >
//                 <ArrowLeft size={18} />
//               </button>
//               <button
//                 onClick={() => scroll("right")}
//                 aria-label="Scroll carousel right"
//                 className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-300 hover:border-gold-400 hover:text-gold-400"
//               >
//                 <ArrowRight size={18} />
//               </button>
//             </motion.div>
//           </div>

//           {/* Carousel strip */}
//           <div
//             ref={scrollRef}
//             className="hide-scrollbar -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 sm:-mx-0 sm:px-0"
//           >
//             {projects.map((project, i) => (
//               <motion.div
//                 key={project.slug}
//                 className="w-[280px] flex-shrink-0 snap-start sm:w-[320px] lg:w-[calc(25%-18px)]"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{
//                   duration: 0.5,
//                   ease: [0.22, 1, 0.36, 1],
//                   delay: i * 0.08,
//                 }}
//               >
//                 <Link to={`/portfolio/${project.slug}`} className="group block">
//                   <motion.div
//                     className="overflow-hidden rounded-sm"
//                     whileHover={{ scale: 1.03 }}
//                     transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
//                   >
//                     <div className="aspect-[3/4] overflow-hidden bg-charcoal-900">
//                       <img
//                         src={project.images[0]}
//                         alt={project.name}
//                         className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//                         loading="lazy"
//                       />
//                     </div>
//                   </motion.div>

//                   <div className="mt-4">
//                     <h3 className="font-serif text-lg font-semibold text-white transition-colors group-hover:text-gold-400">
//                       {project.name}
//                     </h3>
//                     <p className="mt-1 font-sans text-[12px] font-medium uppercase tracking-[0.1em] text-white/40">
//                       {project.tag}
//                     </p>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}

//             {/* "View All" end card */}
//             <motion.div
//               className="flex w-[280px] flex-shrink-0 snap-start items-center justify-center sm:w-[320px] lg:w-[calc(25%-18px)]"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//             >
//               <Link
//                 to="/portfolio"
//                 className="group flex flex-col items-center gap-4 text-center"
//               >
//                 <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-gold-400 group-hover:bg-gold-400/10">
//                   <ArrowRight
//                     size={22}
//                     className="text-white/60 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold-400"
//                   />
//                 </div>
//                 <span className="font-sans text-[13px] font-semibold uppercase tracking-[0.15em] text-white/60 transition-colors group-hover:text-gold-400">
//                   View All Projects
//                 </span>
//               </Link>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ═══════════════════════════════════════════════════════
//           SECTION 2 — Bento-style Projects Grid
//           ═══════════════════════════════════════════════════════ */}
//       <section className="relative bg-charcoal-950 border-t border-white/10 py-24 px-6 lg:px-10">
//         <div className="mx-auto max-w-[1400px]">

//           {/* Section header */}
//           <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
//             <motion.h2
//               className="font-serif text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl max-w-2xl"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.4 }}
//               transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//             >
//               Elevating Everyday Living{" "}
//               <br />
//               <span className="italic font-medium text-gold-400">
//                 Through Design
//               </span>
//             </motion.h2>

//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.25 }}
//             >
//               <Link
//                 to="/portfolio"
//                 className="group inline-flex items-center gap-2 font-sans text-sm font-medium text-gold-400 transition-colors hover:text-white"
//               >
//                 View All Projects
//                 <ArrowUpRight
//                   size={16}
//                   className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//                 />
//               </Link>
//             </motion.div>
//           </div>

//           {/* Bento grid */}
//           <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-3 sm:gap-4">
//             {projects.slice(0, 6).map((project, i) => (
//               <motion.div
//                 key={project.slug}
//                 className={`${gridSpan(i)}`}
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.15 }}
//                 transition={{
//                   duration: 0.55,
//                   ease: [0.22, 1, 0.36, 1],
//                   delay: i * 0.07,
//                 }}
//               >
//                 <Link
//                   to={`/portfolio/${project.slug}`}
//                   className="group relative flex h-full w-full overflow-hidden rounded-xl border border-white/10"
//                 >
//                   {/* Background image */}
//                   <img
//                     src={project.images[0]}
//                     alt={project.name}
//                     loading="lazy"
//                     className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                   />

//                   {/* Gradient overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent" />

//                   {/* Hover accent line */}
//                   <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold-400 transition-all duration-500 ease-out group-hover:w-full" />

//                   {/* Text label */}
//                   <div className="absolute bottom-4 left-4 right-4">
//                     <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-400">
//                       {project.tag}
//                     </p>
//                     <h3 className="mt-1 font-serif text-base font-semibold leading-snug text-white sm:text-lg">
//                       {project.name}
//                     </h3>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Project = {
  id: number;
  title: string;
  category: string;
  type: "A" | "B";
  imageUrl: string;
  heading?: string;
  description?: string;
  location?: string;
  year?: string;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "Villa Koramangala",
    category: "RESIDENTIAL",
    type: "A",
    heading: "CRAFTED FOR LUXURY LIVING",
    description: "A serene villa wrapped in warm oak, travertine and curated art.",
    location: "Koramangala, Bangalore",
    year: "2024",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Penthouse Indiranagar",
    category: "RESIDENTIAL",
    type: "B",
    description: "Sky-lit penthouse blending Italian marble with handcrafted wood.",
    location: "Indiranagar, Bangalore",
    year: "2024",
    imageUrl:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Studio Office MG Road",
    category: "COMMERCIAL",
    type: "A",
    heading: "WHERE WORK MEETS DESIGN",
    description: "A studio designed around natural light, acoustics and focus.",
    location: "MG Road, Bangalore",
    year: "2023",
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Residence Jayanagar",
    category: "RESIDENTIAL",
    type: "B",
    description: "Quiet family home with arched silhouettes and soft neutrals.",
    location: "Jayanagar, Bangalore",
    year: "2023",
    imageUrl:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "The Whitefield Bungalow",
    category: "RESIDENTIAL",
    type: "A",
    heading: "TIMELESS ELEGANCE REDEFINED",
    description: "Heritage-inspired bungalow with sculptural lighting and brass accents.",
    location: "Whitefield, Bangalore",
    year: "2025",
    imageUrl:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    title: "Commercial Lobby HSR",
    category: "COMMERCIAL",
    type: "B",
    description: "A grand lobby balancing stone, greenery and ambient warmth.",
    location: "HSR Layout, Bangalore",
    year: "2025",
    imageUrl:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="shrink-0 transition-all duration-500 ease-out origin-center group-hover/strip:scale-90 group-hover/strip:opacity-50 hover:!scale-110 hover:!opacity-100 hover:z-10"
      style={{ width: 380 }}
    >
      {project.type === "A" ? (
        <div className="group relative overflow-hidden rounded-[20px]" style={{ height: 520 }}>
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/90" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white">
            <p
              className="mb-2 text-[10px] tracking-[0.2em] text-white/80"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {project.category} · {project.year}
            </p>
            <h3
              className="font-black uppercase leading-tight text-white"
              style={{ fontSize: 26, fontFamily: "var(--font-serif)" }}
            >
              {project.heading}
            </h3>
            <div className="grid max-h-0 grid-rows-[0fr] overflow-hidden transition-all duration-500 ease-out group-hover:max-h-40 group-hover:grid-rows-[1fr]">
              <div className="min-h-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <p
                  className="mt-3 text-sm leading-relaxed text-white/90"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {project.description}
                </p>
                <p
                  className="mt-2 text-[11px] tracking-wider text-white/70"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {project.location}
                </p>
                <button
                  className="mt-4 rounded-full bg-white px-5 py-2 text-xs font-semibold text-neutral-900 shadow-md transition-transform hover:scale-105"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Open Project ↗
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="group relative overflow-hidden rounded-[20px]" style={{ height: 520 }}>
            <img
              src={project.imageUrl}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 translate-y-3 p-6 text-white opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              <p
                className="mb-1 text-[10px] tracking-[0.2em] text-white/80"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {project.category} · {project.year}
              </p>
              <h3
                className="text-xl leading-tight text-white"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
              >
                {project.title}
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed text-white/90"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {project.description}
              </p>
              <p
                className="mt-1 text-[11px] tracking-wider text-white/70"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {project.location}
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between px-1">
            <div>
              <p
                className="text-base font-medium text-neutral-900"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {project.title}
              </p>
              <p
                className="mt-1 text-[10px] tracking-widest text-neutral-500"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {project.category}
              </p>
            </div>
            <span
              className="rounded-full text-white"
              style={{
                backgroundColor: "#C9A84C",
                fontSize: 11,
                padding: "3px 10px",
                fontFamily: "var(--font-sans)",
              }}
            >
              New
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function PortfolioShowcase() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const start = window.scrollY + rect.top;
      const progress = Math.max(0, window.scrollY - start);
      setOffset(progress * 0.4);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={wrapperRef} style={{ height: "300vh" }} className="bg-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white">
        {/* Navbar */}
        <div
          className="flex items-center justify-end px-10 pt-6"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          <a
            href="#"
            className="text-sm font-medium text-neutral-900 transition-opacity hover:opacity-60"
          >
            View All Projects ↗
          </a>
        </div>

        {/* Cards strip */}
        <div
          className="flex items-center"
          style={{ height: "calc(100vh - 80px)", paddingTop: 24 }}
        >
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ width: "100%" }}
          >
            <div className="mb-8 flex items-end justify-between px-[60px]">
              <h2
                className="text-neutral-900"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 64,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  fontWeight: 500,
                }}
              >
                Spaces, <em className="italic" style={{ color: "#C9A84C" }}>softly</em> composed.
              </h2>
              <p
                className="max-w-xs text-sm leading-relaxed text-neutral-600"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                An evolving archive of interiors built around light, material
                and a slower way of living — drift through, at your own pace.
              </p>
            </div>
            <div
              className="flex group/strip"
              style={{
                gap: 20,
                padding: "0 60px",
                transform: `translateX(-${offset}px)`,
                transition: "transform 0.08s linear",
                willChange: "transform",
              }}
            >
              {projectsData.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}