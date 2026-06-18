import { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import { projects } from "../lib/projects-data";

/* ────────────────────────────────────────────────────────────
   Shared luxury easing curve (matches other pages)
   ──────────────────────────────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1] as const;

/* ════════════════════════════════════════════════════════════
   PROJECT DETAIL PAGE — /portfolio/:slug
   ════════════════════════════════════════════════════════════ */
export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const heroRef = useRef<HTMLDivElement>(null);

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[currentIndex];

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const numeralY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  /* ── 404 guard ── */
  if (!project) {
    return (
      <main className="min-h-screen bg-white">
        <div className="fixed top-0 left-0 right-0 z-40 h-[72px] bg-charcoal-950 lg:h-[84px]" />
        <Navbar />
        <div className="h-[72px] lg:h-[84px]" />
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
          <h1 className="font-serif text-4xl font-bold text-charcoal-950 sm:text-5xl">
            Project Not Found
          </h1>
          <p className="mt-4 font-sans text-base text-charcoal-400">
            The project you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/portfolio"
            className="mt-8 inline-flex items-center gap-2 font-sans text-[13px] font-semibold uppercase tracking-[0.15em] text-gold-700 transition-colors hover:text-gold-600"
          >
            <ArrowLeft size={15} />
            Back to Portfolio
          </Link>
        </div>
      </main>
    );
  }

  const displayNumber = String(currentIndex + 1).padStart(2, "0");
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <main className="min-h-screen bg-white">
      {/* Fixed dark band behind Navbar */}
      <div className="fixed top-0 left-0 right-0 z-40 h-[72px] bg-charcoal-950 lg:h-[84px]" />
      <Navbar />
      <div className="h-[72px] lg:h-[84px]" />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section
        ref={heroRef}
        id="project-hero"
        className="relative mx-auto w-full max-w-[1280px] overflow-hidden px-6 pb-14 pt-16 sm:px-10 md:pb-20 md:pt-24 lg:px-16"
      >
        <div className="grid items-end gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          {/* Left — Label + Headline */}
          <div>
            <motion.span
              className="mb-5 inline-block font-sans text-[13px] font-medium tracking-[0.08em] text-gold-700"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              — {displayNumber}
            </motion.span>

            <motion.h1
              className="font-serif text-4xl font-bold leading-[1.1] tracking-tight text-charcoal-950 sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
            >
              {project.name}
            </motion.h1>
          </div>

          {/* Right — Metadata block with faded numeral */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.25 }}
          >
            {/* Background numeral */}
            <motion.span
              className="pointer-events-none absolute -right-4 -top-8 select-none font-serif font-bold leading-none text-charcoal-100 text-[clamp(7rem,18vw,14rem)]"
              style={{ y: numeralY }}
            >
              {displayNumber}
            </motion.span>

            {/* Metadata */}
            <div className="relative z-10 flex gap-12 lg:justify-end">
              <div>
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal-400">
                  Location
                </p>
                <p className="mt-1 font-sans text-base font-medium text-charcoal-950">
                  {project.location}
                </p>
              </div>
              <div>
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal-400">
                  Duration
                </p>
                <p className="mt-1 font-sans text-base font-medium text-charcoal-950">
                  {project.duration}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <div className="h-px w-full bg-charcoal-200" />
      </div>

      {/* ─── IMAGE GRID — Asymmetric 2-column ─────────────── */}
      <section className="mx-auto w-full max-w-[1280px] px-6 py-14 sm:px-10 md:py-20 lg:px-16">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr] lg:gap-6">
          {/* Large image — left */}
          <motion.div
            className="overflow-hidden rounded-sm"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="aspect-[2/3] overflow-hidden bg-charcoal-100 lg:aspect-auto lg:h-full lg:min-h-[560px]">
              <img
                src={project.images[0]}
                alt={`${project.name} — primary`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Two stacked images — right */}
          <div className="flex flex-col gap-5 lg:gap-6">
            <motion.div
              className="overflow-hidden rounded-sm"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-charcoal-100">
                <img
                  src={project.images[1] ?? project.images[0]}
                  alt={`${project.name} — detail 1`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              className="overflow-hidden rounded-sm"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease, delay: 0.2 }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-charcoal-100">
                <img
                  src={project.images[2] ?? project.images[0]}
                  alt={`${project.name} — detail 2`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── DESCRIPTION ──────────────────────────────────── */}
      <section className="mx-auto w-full max-w-[1280px] px-6 pb-14 sm:px-10 md:pb-20 lg:px-16">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="mb-4 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-700">
            About This Project
          </span>
          <p className="font-sans text-base leading-relaxed text-charcoal-500 sm:text-lg">
            {project.description}
          </p>
        </motion.div>
      </section>

      {/* ─── NAVIGATION — Back / Next ─────────────────────── */}
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <div className="h-px w-full bg-charcoal-200" />
      </div>

      <section className="mx-auto w-full max-w-[1280px] px-6 py-12 sm:px-10 md:py-16 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Previous */}
          <Link
            to={`/portfolio/${prevProject.slug}`}
            className="group flex items-center gap-3 font-sans text-[13px] font-semibold uppercase tracking-[0.12em] text-charcoal-400 transition-colors hover:text-charcoal-950"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            <span className="hidden sm:inline">{prevProject.name}</span>
            <span className="sm:hidden">Previous</span>
          </Link>

          {/* Back to grid */}
          <Link
            to="/portfolio"
            className="font-sans text-[12px] font-semibold uppercase tracking-[0.15em] text-gold-700 transition-colors hover:text-gold-600"
          >
            All Projects
          </Link>

          {/* Next */}
          <Link
            to={`/portfolio/${nextProject.slug}`}
            className="group flex items-center gap-3 font-sans text-[13px] font-semibold uppercase tracking-[0.12em] text-charcoal-400 transition-colors hover:text-charcoal-950"
          >
            <span className="hidden sm:inline">{nextProject.name}</span>
            <span className="sm:hidden">Next</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      {/* TODO: Add Footer component here once it exists — e.g. <Footer /> */}
    </main>
  );
}
