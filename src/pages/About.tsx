// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
// import Navbar from "../components/Navbar";
// import { useScrollReveal } from "../hooks/useScrollReveal";

// /* ────────────────────────────────────────────────────────────
//    Reusable scroll-reveal wrapper
//    ──────────────────────────────────────────────────────────── */
// function Reveal({
//   children,
//   className = "",
//   delay = 0,
// }: {
//   children: React.ReactNode;
//   className?: string;
//   delay?: number;
// }) {
//   const { ref, isVisible } = useScrollReveal(0.12);

//   return (
//     <div
//       ref={ref}
//       className={`transition-all duration-700 ease-out ${
//         isVisible
//           ? "translate-y-0 opacity-100"
//           : "translate-y-8 opacity-0"
//       } ${className}`}
//       style={{ transitionDelay: `${delay}ms` }}
//     >
//       {children}
//     </div>
//   );
// }

// /* ════════════════════════════════════════════════════════════
//    ABOUT PAGE
//    ════════════════════════════════════════════════════════════ */
// export default function About() {
//   return (
//     <main className="min-h-screen bg-charcoal-950 text-white">
//       <Navbar />

//       {/* ─── 1. HERO — Full-bleed photo, oversized serif headline ─── */}
//       <section
//         id="about-hero"
//         className="relative flex min-h-[90vh] items-end overflow-hidden bg-charcoal-950 sm:min-h-screen"
//       >
//         {/* TODO: Replace /about-hero.png with a moody, dark architectural/interior photo */}
//         <div className="absolute inset-0">
//           <img
//             src="/about-hero.png"
//             alt=""
//             className="h-full w-full object-cover"
//             loading="eager"
//           />
//           {/* Gradient overlays — match Home hero */}
//           <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-charcoal-950/30" />
//           <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/50 to-transparent" />
//         </div>

//         {/* Content */}
//         <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-16 pt-32 sm:px-10 sm:pb-24 lg:px-16">
//           <p
//             className="animate-fade-slide-up mb-5 font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-400"
//             style={{ animationDelay: "200ms" }}
//           >
//             Who We Are
//           </p>
//           <h1
//             className="animate-fade-slide-up max-w-3xl font-serif text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
//             style={{ animationDelay: "400ms" }}
//           >
//             Precision in Craft.{" "}
//             <span className="italic text-gold-400">Partnership</span> in
//             Practice.
//           </h1>
//           <p
//             className="animate-fade-slide-up mt-6 max-w-xl font-sans text-base font-light leading-relaxed text-white/60 sm:text-lg"
//             style={{ animationDelay: "600ms" }}
//           >
//             The execution studio that architects in Bangalore actually want to
//             work with — again.
//           </p>
//         </div>
//       </section>

//       {/* ─── 2. INTRO / WHO WE ARE — Pull-quote + body text ─── */}
//       <section
//         id="about-intro"
//         className="bg-charcoal-950"
//       >
//         <div className="mx-auto w-full max-w-[1280px] px-6 py-20 sm:px-10 md:py-28 lg:px-16">
//           <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
//             {/* Pull-quote */}
//             <Reveal>
//               <blockquote className="font-serif text-2xl font-medium leading-snug text-white/90 sm:text-3xl md:text-4xl">
//                 "We don't reinterpret an architect's vision —{" "}
//                 <span className="italic text-gold-400">we honour it.</span>"
//               </blockquote>
//             </Reveal>

//             {/* Body text */}
//             <div className="flex flex-col justify-center">
//               <Reveal delay={150}>
//                 <p className="font-sans text-base leading-relaxed text-white/55">
//                   SS Interiors is a luxury interior execution studio based in
//                   Bangalore. We partner directly with architects to deliver
//                   residential interiors that match the ambition of the original
//                   design — in material, in detail, and in finish.
//                 </p>
//               </Reveal>
//               <Reveal delay={250}>
//                 <p className="mt-5 font-sans text-base leading-relaxed text-white/55">
//                   For homeowners, we bring clarity to a process that's often
//                   opaque — structured timelines, transparent costing, and a
//                   single team accountable from shop drawing to final
//                   walkthrough. No subcontracted chaos. No quiet compromises.
//                 </p>
//               </Reveal>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Divider */}
//       <div className="mx-auto h-px w-full max-w-[1280px] bg-gradient-to-r from-transparent via-charcoal-700/50 to-transparent" />

//       {/* ─── 3. OVERSIZED STATEMENT — Big serif + side photo ─── */}
//       <section
//         id="about-statement"
//         className="bg-charcoal-950"
//       >
//         <div className="mx-auto w-full max-w-[1280px] px-6 py-20 sm:px-10 md:py-28 lg:px-16">
//           <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
//             {/* Massive headline */}
//             <Reveal>
//               <p className="mb-5 font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-400">
//                 What We Stand For
//               </p>
//               <h2 className="font-serif text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
//                 Faithful{" "}
//                 <span className="italic text-gold-400">Execution.</span>
//               </h2>
//               <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-white/50">
//                 The distance between a render and a finished room is where
//                 luxury is either proved or lost. We exist to close that gap —
//                 precisely.
//               </p>
//             </Reveal>

//             {/* Companion photo */}
//             <Reveal delay={200}>
//               {/* TODO: Replace /images/about-statement.jpg with an architectural detail photo (e.g. close-up of joinery, marble work, or a beautifully lit interior corner) */}
//               <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
//                 <img
//                   src="/craftsmanship-detail.png"
//                   alt="Architectural detail showcasing precision craftsmanship"
//                   className="h-full w-full object-cover"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/30 to-transparent" />
//                 {/* Gold accent bar */}
//                 <div className="absolute bottom-0 left-0 h-1 w-20 bg-gold-500" />
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* ─── 4. FULL-WIDTH PHOTO BREAK ─── */}
//       <section
//         id="about-photo-break"
//         className="relative h-[50vh] min-h-[320px] overflow-hidden sm:h-[60vh]"
//       >
//         {/* TODO: Replace /images/about-fullwidth.jpg with a wide-angle interior/architecture shot — dramatic lighting preferred */}
//         <img
//           src="/studio-workspace.png"
//           alt=""
//           className="h-full w-full object-cover"
//           loading="lazy"
//         />
//         <div className="absolute inset-0 bg-charcoal-950/50" />
//         {/* Optional caption */}
//         <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 sm:px-10 lg:px-16">
//           <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
//             {/* TODO: Replace with actual project location or description */}
//             On Site — Bangalore
//           </p>
//         </div>
//       </section>

//       {/* ─── 5. WHY ARCHITECTS PARTNER WITH US — Pillar grid ─── */}
//       <section
//         id="about-architects"
//         className="bg-charcoal-950"
//       >
//         <div className="mx-auto w-full max-w-[1280px] px-6 py-20 sm:px-10 md:py-28 lg:px-16">
//           {/* Section header */}
//           <div className="mb-14 max-w-2xl">
//             <Reveal>
//               <span className="mb-4 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-400">
//                 For Architects
//               </span>
//             </Reveal>
//             <Reveal delay={100}>
//               <h2 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
//                 Why Architects{" "}
//                 <span className="italic text-gold-400">Partner</span> With Us
//               </h2>
//             </Reveal>
//             <Reveal delay={200}>
//               <p className="mt-5 font-sans text-base leading-relaxed text-white/50">
//                 We understand what's at stake when you hand off a project —
//                 your design reputation, your client relationship, and months of
//                 work. Here's how we protect all three.
//               </p>
//             </Reveal>
//           </div>

//           {/* Pillar cards */}
//           <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
//             {[
//               {
//                 number: "01",
//                 title: "Architect-First Collaboration",
//                 body: "Your drawings are the source of truth — not a starting point for our reinterpretation. We ask precise questions, resolve ambiguities before they reach site, and escalate deviations immediately. Never buried in the finish.",
//               },
//               {
//                 number: "02",
//                 title: "Faithful Execution of Design Intent",
//                 body: "Material substitutions require your sign-off. Shadow gaps are precise. Veneers are grain-matched. The invisible work is done right — because detail at the execution stage is where luxury is either proved or lost.",
//               },
//               {
//                 number: "03",
//                 title: "Transparent Project Management",
//                 body: "Structured timelines set at kick-off with built-in procurement buffers. Weekly documentation. Single point of contact. We flag delays before they cascade — not when the client notices.",
//               },
//               {
//                 number: "04",
//                 title: "Craftsmanship Standards",
//                 body: "Multi-point inspections before handover: alignment, finish quality, hardware function, lighting integration. We catch the 2mm gap so you don't have to. No quiet compromises. No value-engineering without consent.",
//               },
//             ].map((pillar, i) => (
//               <Reveal key={pillar.title} delay={i * 120}>
//                 <div className="group relative h-full overflow-hidden rounded-sm border border-charcoal-800/60 bg-charcoal-900/40 p-8 transition-all duration-500 hover:border-gold-500/30 hover:bg-charcoal-900/60 sm:p-10">
//                   {/* Top accent line on hover */}
//                   <div className="absolute left-0 top-0 h-[2px] w-0 bg-gold-500 transition-all duration-500 group-hover:w-full" />

//                   {/* Gold number */}
//                   <span className="mb-5 inline-block font-serif text-3xl font-bold text-gold-400/60">
//                     {pillar.number}
//                   </span>
//                   <h3 className="font-serif text-xl font-semibold text-white">
//                     {pillar.title}
//                   </h3>
//                   <p className="mt-3 font-sans text-sm leading-relaxed text-white/50">
//                     {pillar.body}
//                   </p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Divider */}
//       <div className="mx-auto h-px w-full max-w-[1280px] bg-gradient-to-r from-transparent via-charcoal-700/50 to-transparent" />

//       {/* ─── 6. ASYMMETRIC PHOTO + TEXT SECTION ─── */}
//       <section
//         id="about-asymmetric"
//         className="bg-charcoal-950"
//       >
//         <div className="mx-auto w-full max-w-[1280px] px-6 py-20 sm:px-10 md:py-28 lg:px-16">
//           <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
//             {/* Photo — offset positioning */}
//             <Reveal>
//               {/* TODO: Replace /images/about-asymmetric.jpg with an interior photo — angled or detail shot that works at portrait aspect ratio */}
//               <div className="relative aspect-[4/5] overflow-hidden rounded-sm lg:translate-y-8">
//                 <img
//                   src="/about-hero.png"
//                   alt="Luxury interior detail"
//                   className="h-full w-full object-cover"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/40 to-transparent" />
//               </div>
//             </Reveal>

//             {/* Text */}
//             <div className="flex flex-col justify-center">
//               <Reveal delay={100}>
//                 <span className="mb-4 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-400">
//                   Our Promise
//                 </span>
//               </Reveal>
//               <Reveal delay={200}>
//                 <h2 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
//                   Not a Vendor to Be{" "}
//                   <span className="italic text-gold-400">Managed</span> —
//                   a Partner Who Understands
//                 </h2>
//               </Reveal>
//               <Reveal delay={300}>
//                 <div className="mt-6 h-px w-16 bg-gold-500/40" />
//               </Reveal>
//               <Reveal delay={400}>
//                 <p className="mt-6 font-sans text-base leading-relaxed text-white/55">
//                   {/* TODO: Replace with real founding narrative and year */}
//                   SS Interiors was founded in Bangalore with a clear diagnosis:
//                   the city's luxury residential market had no shortage of
//                   talented architects — but a glaring shortage of execution
//                   partners who could match their standards.
//                 </p>
//               </Reveal>
//               <Reveal delay={500}>
//                 <p className="mt-4 font-sans text-base leading-relaxed text-white/55">
//                   We set out to be the studio that understands spatial intent,
//                   respects material specifications, and treats the architect's
//                   drawing as a contract — not a suggestion. The kind of
//                   partner architects recommend to their next client, not the
//                   one they warn them about.
//                 </p>
//               </Reveal>
//               <Reveal delay={600}>
//                 {/* TODO: Replace with real metrics */}
//                 <div className="mt-10 flex gap-12">
//                   <div>
//                     <p className="font-serif text-3xl font-bold text-gold-400">
//                       {/* TODO: Insert real number of completed projects */}
//                       50+
//                     </p>
//                     <p className="mt-1 font-sans text-xs uppercase tracking-[0.15em] text-white/40">
//                       Projects Delivered
//                     </p>
//                   </div>
//                   <div>
//                     <p className="font-serif text-3xl font-bold text-gold-400">
//                       {/* TODO: Insert real number of architect partners */}
//                       15+
//                     </p>
//                     <p className="mt-1 font-sans text-xs uppercase tracking-[0.15em] text-white/40">
//                       Architect Partners
//                     </p>
//                   </div>
//                   <div>
//                     <p className="font-serif text-3xl font-bold text-gold-400">
//                       {/* TODO: Insert real founding year and calculate years */}
//                       8+
//                     </p>
//                     <p className="mt-1 font-sans text-xs uppercase tracking-[0.15em] text-white/40">
//                       Years in Practice
//                     </p>
//                   </div>
//                 </div>
//               </Reveal>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ─── 7. CTA SECTION ─── */}
//       <section
//         id="about-cta"
//         className="relative overflow-hidden border-t border-charcoal-800/40"
//       >
//         {/* Subtle radial glow */}
//         <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/[0.04] blur-3xl" />

//         <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center px-6 py-24 text-center sm:px-10 md:py-32 lg:px-16">
//           <Reveal>
//             <span className="mb-4 inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-400">
//               Start a Conversation
//             </span>
//           </Reveal>
//           <Reveal delay={100}>
//             <h2 className="max-w-2xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
//               Take the First Step Toward Your{" "}
//               <span className="italic text-gold-400">Next Project</span>
//             </h2>
//           </Reveal>
//           <Reveal delay={200}>
//             <p className="mt-5 max-w-lg font-sans text-base leading-relaxed text-white/50">
//               Whether you're an architect evaluating execution partners or a
//               homeowner planning a luxury residence, we'd welcome the
//               opportunity to understand your project.
//             </p>
//           </Reveal>
//           <Reveal delay={300}>
//             <div className="mt-10">
//               <Link
//                 to="/contact"
//                 id="about-cta-contact"
//                 className="group inline-flex items-center justify-center gap-2 rounded-sm bg-gold-500 px-8 py-4 font-sans text-[13px] font-semibold uppercase tracking-[0.15em] text-charcoal-950 transition-all duration-300 hover:bg-gold-400 hover:shadow-[0_0_30px_rgba(212,149,42,0.3)]"
//               >
//                 Get in Touch
//                 <ArrowRight
//                   size={15}
//                   className="transition-transform duration-300 group-hover:translate-x-1"
//                 />
//               </Link>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* ─── 8. CLOSING FULL-WIDTH PHOTO ─── */}
//       <section
//         id="about-closing-photo"
//         className="relative h-[45vh] min-h-[280px] overflow-hidden sm:h-[55vh]"
//       >
//         {/* TODO: Replace /images/about-closing.jpg with a final hero-style architectural image — wide, dramatic, dark tones */}
//         <img
//           src="/hero-slide-1.png"
//           alt=""
//           className="h-full w-full object-cover"
//           loading="lazy"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-charcoal-950/10" />
//       </section>

//       {/* TODO: Add Footer component here once it exists — e.g. <Footer /> */}
//     </main>
//   );
// }


import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import { useScrollReveal } from "../hooks/useScrollReveal";

/* ────────────────────────────────────────────────────────────
   Reusable scroll-reveal wrapper
   ──────────────────────────────────────────────────────────── */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollReveal(0.12);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   ABOUT PAGE — Editorial light style (Norm Interior reference)
   ════════════════════════════════════════════════════════════ */
export default function About() {
  const teamMembers = [
    {
      name: "Suresh Sharma",
      role: "Founder & Principal",
      img: "/team-suresh.png",
    },
    {
      name: "Ananya Reddy",
      role: "Design Director",
      img: "/team-ananya.png",
    },
    {
      name: "Kiran Mehta",
      role: "Project Manager",
      img: "/team-kiran.png",
    },
    {
      name: "Priya Nair",
      role: "Lead Craftsperson",
      img: "/team-priya.png",
    },
  ];

  const honors = [
    {
      org: "Indian Institute of Interior Designers (IIID)",
      award: "Excellence in Residential Execution",
      year: "2023",
    },
    {
      org: "Bangalore Architecture & Design Summit",
      award: "Best Architect Collaboration Award",
      year: "2022",
    },
    {
      org: "Luxury Interiors India (LII)",
      award: "Craftsmanship Standard of the Year",
      year: "2021",
    },
    {
      org: "Design Futures Forum",
      award: "Innovation in Detail Award",
      year: "2020",
    },
    {
      org: "South India Builders Association",
      award: "Preferred Execution Partner",
      year: "2019",
    },
  ];

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <Navbar />

      {/* ─── 1. HERO — Full-bleed dark photo with bold editorial headline ─── */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-stone-900">
        <div className="absolute inset-0">
          <img
            src="/about-hero.png"
            alt=""
            className="h-full w-full object-cover opacity-70"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-stone-900/10" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-20 sm:px-10 lg:px-16">
          {/* Overline */}
          <p
            className="animate-fade-slide-up mb-6 font-sans text-[10px] font-semibold uppercase tracking-[0.35em] text-amber-400"
            style={{ animationDelay: "200ms" }}
          >
            Elegance. Precision. Partnership.
          </p>

          {/* Big editorial headline — uppercase, tightly tracked */}
          <h1
            className="animate-fade-slide-up max-w-4xl font-sans text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl"
            style={{ animationDelay: "350ms" }}
          >
            Crafting Space,
            <br />
            <span className="text-amber-400">Honouring</span>
            <br />
            Vision.
          </h1>

          {/* Sub-copy */}
          <p
            className="animate-fade-slide-up mt-8 max-w-md font-sans text-sm font-light leading-relaxed text-white/60 sm:text-base"
            style={{ animationDelay: "550ms" }}
          >
            At SS Interiors, we design spaces where your architect's ambition
            becomes lived reality — in material, in detail, in finish.
          </p>
        </div>
      </section>

      {/* ─── 2. THE ESSENCE — Editorial two-column intro ─── */}
      <section className="bg-stone-50">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-24 sm:px-10 md:py-32 lg:px-16">
          {/* Section eyebrow + link row */}
          <div className="mb-16 flex items-end justify-between border-b border-stone-200 pb-6">
            <Reveal>
              <h2 className="font-sans text-3xl font-black uppercase leading-tight tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
                The Essence of
                <br />
                SS Interiors
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Link
                to="/projects"
                className="group hidden items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-stone-400 transition-colors hover:text-amber-600 sm:flex"
              >
                View All Projects
                <ArrowRight
                  size={13}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>

          {/* Two images + body copy — editorial asymmetric layout */}
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            {/* Left: portrait photo + caption */}
            <Reveal>
              <div className="flex flex-col gap-4">
                <div className="relative aspect-[3/4] overflow-hidden bg-stone-200">
                  <img
                    src="/about-hero.png"
                    alt="Interior detail — SS Interiors project"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="font-sans text-xs leading-relaxed text-stone-400">
                  The essence of SS Interiors is timeless precision and
                  purposeful execution — creating spaces of balance,
                  craftsmanship, and warmth that endure.
                </p>
              </div>
            </Reveal>

            {/* Right: landscape photo + 3 stats row */}
            <div className="flex flex-col gap-8">
              <Reveal delay={120}>
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                  <img
                    src="/craftsmanship-detail.png"
                    alt="SS Interiors craftsmanship"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>

              {/* Stats row */}
              <Reveal delay={240}>
                <div className="grid grid-cols-3 divide-x divide-stone-200 border border-stone-200">
                  {[
                    { value: "50+", label: "Projects Delivered" },
                    { value: "15+", label: "Architect Partners" },
                    { value: "8+", label: "Years in Practice" },
                  ].map((stat) => (
                    <div key={stat.label} className="px-6 py-8 text-center">
                      <p className="font-sans text-3xl font-black text-amber-500 sm:text-4xl">
                        {stat.value}
                      </p>
                      <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.2em] text-stone-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. WHAT DRIVES OUR WORK — full-bleed dark break ─── */}
      <section className="bg-stone-900">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-24 sm:px-10 md:py-32 lg:px-16">
          <Reveal>
            <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[0.35em] text-amber-400">
              What Truly Drives Our Work
            </p>
          </Reveal>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal delay={100}>
              <h2 className="font-sans text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl">
                Faithful{" "}
                <span className="italic text-amber-400">Execution.</span>
                <br />
                Every Time.
              </h2>
            </Reveal>
            <div className="flex flex-col justify-center gap-6">
              <Reveal delay={200}>
                <p className="font-sans text-sm leading-relaxed text-stone-400 sm:text-base">
                  The distance between a render and a finished room is where
                  luxury is either proved or quietly lost. We exist to close
                  that gap — with material fidelity, immaculate detailing, and
                  a team accountable from shop drawing to final walkthrough.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <p className="font-sans text-sm leading-relaxed text-stone-400 sm:text-base">
                  No subcontracted chaos. No quiet compromises. No
                  value-engineering without your explicit sign-off.
                </p>
              </Reveal>
              <Reveal delay={400}>
                <div className="mt-2 h-px w-14 bg-amber-500/60" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. MEET THE TEAM ─── */}
      <section className="bg-stone-50">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-24 sm:px-10 md:py-32 lg:px-16">
          {/* Section header */}
          <div className="mb-16 flex items-end justify-between border-b border-stone-200 pb-6">
            <Reveal>
              <h2 className="font-sans text-3xl font-black uppercase leading-tight tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
                Meet the Mind
                <br />
                Behind SS
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="hidden max-w-xs text-right font-sans text-xs leading-relaxed text-stone-400 sm:block">
                Our team blends creativity and expertise to shape spaces with
                meaning, precision, and lasting craft.
              </p>
            </Reveal>
          </div>

          {/* Team grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 lg:gap-8">
            {teamMembers.map((member, i) => (
              <Reveal key={member.name} delay={i * 100}>
                <div className="group flex flex-col gap-3">
                  <div className="relative aspect-[3/4] overflow-hidden bg-stone-200">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                      loading="lazy"
                    />
                    {/* Amber bottom bar on hover */}
                    <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-amber-400 transition-all duration-500 group-hover:w-full" />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-stone-400">
                      {member.role}
                    </p>
                    <p className="mt-0.5 font-sans text-sm font-bold text-stone-900">
                      {member.name}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. WHY ARCHITECTS PARTNER WITH US — numbered pillars ─── */}
      <section className="bg-stone-100">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-24 sm:px-10 md:py-32 lg:px-16">
          <div className="mb-16 border-b border-stone-300 pb-6">
            <Reveal>
              <p className="mb-3 font-sans text-[10px] font-semibold uppercase tracking-[0.35em] text-amber-600">
                For Architects
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-sans text-3xl font-black uppercase leading-tight tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
                Why Architects{" "}
                <span className="italic text-amber-500">Partner</span> With Us
              </h2>
            </Reveal>
          </div>

          {/* 4 pillar rows — table-style editorial layout */}
          <div className="divide-y divide-stone-300">
            {[
              {
                num: "01",
                title: "Architect-First Collaboration",
                body: "Your drawings are the source of truth — not a starting point for reinterpretation. We ask precise questions, resolve ambiguities before they reach site, and escalate deviations immediately.",
              },
              {
                num: "02",
                title: "Faithful Execution of Design Intent",
                body: "Material substitutions require your sign-off. Shadow gaps are precise. Veneers are grain-matched. The invisible work is done right — because detail at execution stage is where luxury is proved or lost.",
              },
              {
                num: "03",
                title: "Transparent Project Management",
                body: "Structured timelines set at kick-off with built-in procurement buffers. Weekly documentation. Single point of contact. We flag delays before they cascade.",
              },
              {
                num: "04",
                title: "Craftsmanship Standards",
                body: "Multi-point inspections before handover: alignment, finish quality, hardware function, lighting integration. We catch the 2mm gap so you don't have to. No quiet compromises.",
              },
            ].map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 80}>
                <div className="group grid gap-4 py-8 transition-colors hover:bg-stone-200/60 sm:grid-cols-[80px_1fr_2fr] sm:gap-8 sm:px-4">
                  {/* Number */}
                  <span className="font-sans text-xs font-semibold text-stone-400 sm:pt-1">
                    {pillar.num}
                  </span>
                  {/* Title */}
                  <h3 className="font-sans text-sm font-bold uppercase tracking-wide text-stone-900 sm:text-base">
                    {pillar.title}
                  </h3>
                  {/* Body */}
                  <p className="font-sans text-sm leading-relaxed text-stone-500">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. HONORS / AWARDS — table layout ─── */}
      <section className="bg-stone-50">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-24 sm:px-10 md:py-32 lg:px-16">
          {/* Header row */}
          <div className="mb-14 flex items-end justify-between border-b border-stone-200 pb-6">
            <Reveal>
              <h2 className="font-sans text-3xl font-black uppercase leading-tight tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
                Honors That
                <br />
                Inspire Our Work
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="hidden max-w-[200px] text-right font-sans text-xs leading-relaxed text-stone-400 sm:block">
                Recognition is not the destination, but a reminder of why we
                create.
              </p>
            </Reveal>
          </div>

          {/* Awards table */}
          <div className="divide-y divide-stone-200">
            {honors.map((item, i) => (
              <Reveal key={item.award} delay={i * 70}>
                <div className="grid grid-cols-[20px_1fr] gap-x-8 gap-y-1 py-7 sm:grid-cols-[24px_1fr_1fr_60px] sm:items-center">
                  {/* Index */}
                  <span className="font-sans text-xs text-stone-300 sm:pt-0">
                    {i + 1}
                  </span>
                  {/* Org */}
                  <p className="font-sans text-sm font-semibold text-stone-800 sm:text-base">
                    {item.org}
                  </p>
                  {/* Award */}
                  <p className="col-start-2 font-sans text-xs text-stone-400 sm:col-start-auto sm:text-sm">
                    {item.award}
                  </p>
                  {/* Year */}
                  <p className="col-start-2 font-sans text-xs font-semibold text-amber-500 sm:col-start-auto sm:text-right">
                    {item.year}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. FULL-WIDTH PHOTO BREAK ─── */}
      <section className="relative h-[55vh] min-h-[320px] overflow-hidden sm:h-[70vh]">
        <img
          src="/studio-workspace.png"
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-stone-900/40" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 sm:px-10 lg:px-16">
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-white/50">
            On Site — Bangalore
          </p>
        </div>
      </section>

      {/* ─── 8. CTA — clean, editorial, light ─── */}
      <section className="bg-stone-50 border-t border-stone-200">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center px-6 py-28 text-center sm:px-10 md:py-36 lg:px-16">
          <Reveal>
            <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[0.35em] text-amber-600">
              Start a Conversation
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="max-w-2xl font-sans text-4xl font-black uppercase leading-[0.95] tracking-tight text-stone-900 sm:text-5xl md:text-6xl">
              Take the First Step
              <br />
              <span className="italic text-amber-500">Toward Your Next</span>
              <br />
              Project.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-stone-400 sm:text-base">
              Whether you're an architect evaluating execution partners or a
              homeowner planning a luxury residence, we'd welcome the
              opportunity to understand your vision.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-stone-900 px-10 py-4 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-amber-500 hover:text-stone-900"
              >
                Get in Touch
                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── 9. CLOSING FULL-WIDTH PHOTO ─── */}
      <section className="relative h-[45vh] min-h-[260px] overflow-hidden sm:h-[55vh]">
        <img
          src="/hero-slide-1.png"
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/20 to-transparent" />
      </section>
    </main>
  );
}