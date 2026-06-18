import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Navbar from "../components/Navbar";
import { projects, categories, type Project } from "../lib/projects-data";

/* ────────────────────────────────────────────────────────────
   PARALLAX NUMERAL — large faded background number
   (same treatment as Services page)
   ──────────────────────────────────────────────────────────── */
function ParallaxNumeral({
  number,
  scrollYProgress,
}: {
  number: string;
  scrollYProgress: MotionValue<number>;
}) {
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.span
      className="pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 select-none font-serif font-bold leading-none text-charcoal-100 text-[clamp(6rem,16vw,12rem)]"
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

/* ────────────────────────────────────────────────────────────
   PROJECT CARD — grid item with parallax numeral
   ──────────────────────────────────────────────────────────── */
function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const displayNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.97 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.09,
      }}
      className="group relative"
    >
      {/* Background numeral */}
      <ParallaxNumeral number={displayNumber} scrollYProgress={scrollYProgress} />

      <Link
        to={`/portfolio/${project.slug}`}
        className="relative z-10 block"
      >
        {/* Image */}
        <div className="overflow-hidden rounded-sm">
          <div className="aspect-[4/3] overflow-hidden bg-charcoal-100">
            <img
              src={project.images[0]}
              alt={project.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Text */}
        <div className="mt-5">
          <h3 className="font-serif text-xl font-bold text-charcoal-950 transition-colors group-hover:text-gold-700 sm:text-2xl">
            {project.name}
          </h3>
          <p className="mt-2 font-sans text-[12px] font-medium uppercase tracking-[0.1em] text-charcoal-400">
            {project.location} &nbsp;·&nbsp; {project.duration}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════
   PORTFOLIO PAGE
   ════════════════════════════════════════════════════════════ */
export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-white">
      {/* Fixed dark band behind Navbar — keeps white nav text readable on light page */}
      <div className="fixed top-0 left-0 right-0 z-40 h-[72px] bg-charcoal-950 lg:h-[84px]" />
      <Navbar />
      {/* Spacer to push content below the fixed navbar band */}
      <div className="h-[72px] lg:h-[84px]" />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section
        id="portfolio-hero"
        className="mx-auto w-full max-w-[1280px] px-6 pb-14 pt-16 sm:px-10 md:pb-20 md:pt-24 lg:px-16"
      >
        {/* Label with line */}
        <motion.div
          className="mb-6 flex items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="h-px w-8 bg-charcoal-400 sm:w-12" />
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-charcoal-400">
            Our Projects &nbsp;/&nbsp; Executed with Precision
          </span>
        </motion.div>

        {/* Headline */}
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
          <span className="italic text-gold-700">PORTFOLIO</span>
        </motion.h1>

        {/* Supporting copy */}
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
          A curated selection of residential and commercial interiors — each
          project executed from architect's drawings through to final
          walkthrough, under one team, one timeline.
        </motion.p>
      </section>

      {/* ─── FILTER PILLS ─────────────────────────────────── */}
      <section className="mx-auto w-full max-w-[1280px] px-6 pb-12 sm:px-10 lg:px-16">
        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.45,
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-6 py-2.5 font-sans text-[12px] font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-charcoal-950 text-white shadow-sm"
                  : "border border-charcoal-300 text-charcoal-600 hover:border-charcoal-500 hover:text-charcoal-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* ─── PROJECT GRID ─────────────────────────────────── */}
      <section className="mx-auto w-full max-w-[1280px] px-6 pb-20 sm:px-10 md:pb-28 lg:px-16">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeCategory}
            className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ─── CLOSING CTA ──────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <div className="h-px w-full bg-charcoal-200" />
      </div>

      <section
        id="portfolio-cta"
        className="mx-auto w-full max-w-[1280px] px-6 py-20 text-center sm:px-10 md:py-28 lg:px-16"
      >
        <motion.p
          className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-700"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Like What You See?
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
          Let's Build Your{" "}
          <span className="italic text-gold-700">Vision</span>
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
          <Link
            to="/contact"
            id="portfolio-cta-contact"
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
          </Link>
        </motion.div>
      </section>

      {/* TODO: Add Footer component here once it exists — e.g. <Footer /> */}
    </main>
  );
}
