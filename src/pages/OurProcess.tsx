// import React, { useEffect, useRef, useState } from "react";

// const STEPS = [
//   {
//     num: "01",
//     title: "Briefing",
//     copy:
//       "We begin with an exhaustive questionnaire to fully understand your needs and expectations — the most important of all our steps.",
//   },
//   {
//     num: "02",
//     title: "Design",
//     copy:
//       "Translating the brief into the blueprint of what is to come. From moodboards to models, we design every last detail.",
//   },
//   {
//     num: "03",
//     title: "Execution",
//     copy:
//       "Bringing the design to life, built from the ground up. As we only take on end-to-end projects, everything from structural work to décor is executed in this phase.",
//   },
//   {
//     num: "04",
//     title: "Handover",
//     copy:
//       "The most anticipated moment — we hand you the keys to a space that is entirely ready to move into.",
//   },
// ];

// export default function ProcessSection() {
//   const [active, setActive] = useState(0);
//   const [revealed, setRevealed] = useState(STEPS.map(() => false));
//   const [introIn, setIntroIn] = useState(false);
//   const cardRefs = useRef([]);
//   const introRef = useRef(null);

//   useEffect(() => {
//     // Tracks which card sits in the centre band of the viewport — drives the line + active node
//     const spy = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActive(Number(entry.target.dataset.index));
//           }
//         });
//       },
//       { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
//     );

//     // One-way reveal — once a card has entered, it stays revealed
//     const reveal = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const idx = Number(entry.target.dataset.index);
//             setRevealed((prev) => {
//               if (prev[idx]) return prev;
//               const next = [...prev];
//               next[idx] = true;
//               return next;
//             });
//           }
//         });
//       },
//       { rootMargin: "0px 0px -12% 0px", threshold: 0.15 }
//     );

//     const introObs = new IntersectionObserver(
//       ([entry]) => entry.isIntersecting && setIntroIn(true),
//       { threshold: 0.2 }
//     );

//     cardRefs.current.forEach((el) => {
//       if (el) {
//         spy.observe(el);
//         reveal.observe(el);
//       }
//     });
//     if (introRef.current) introObs.observe(introRef.current);

//     return () => {
//       spy.disconnect();
//       reveal.disconnect();
//       introObs.disconnect();
//     };
//   }, []);

//   const lineProgress = (active / (STEPS.length - 1)) * 100;

//   return (
//     <section className="process">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600;700&display=swap');

//         .process {
//           background: #ffffff;
//           color: #1a1a1a;
//           font-family: 'Inter', sans-serif;
//           padding: clamp(64px, 10vw, 120px) clamp(20px, 6vw, 72px);
//         }

//         .process__intro {
//           max-width: 640px;
//           margin: 0 auto clamp(48px, 8vw, 88px);
//           opacity: 0;
//           transform: translateY(24px);
//           transition: opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1);
//         }
//         .process__intro.is-in { opacity: 1; transform: none; }

//         .process__eyebrow {
//           display: inline-block;
//           font: 600 12px/1 'Inter', sans-serif;
//           letter-spacing: .22em;
//           text-transform: uppercase;
//           color: #d4952b;
//           margin-bottom: 18px;
//         }

//         .process__heading {
//           font-family: 'Fraunces', serif;
//           font-weight: 500;
//           font-size: clamp(2.2rem, 5vw, 3.4rem);
//           line-height: 1.08;
//           letter-spacing: -0.01em;
//           margin: 0 0 20px;
//         }
//         .process__heading em {
//           font-style: italic;
//           font-weight: 400;
//           color: #d4952b;
//         }

//         .process__sub {
//           font-size: 1.05rem;
//           line-height: 1.6;
//           color: rgba(26,26,26,.62);
//           max-width: 520px;
//           margin: 0;
//         }

//         .process__body {
//           display: grid;
//           grid-template-columns: 64px 1fr;
//           gap: 32px;
//           max-width: 980px;
//           margin: 0 auto;
//         }

//         .process__rail { position: relative; }
//         .process__rail-track {
//           position: absolute;
//           left: 50%;
//           top: 6px;
//           bottom: 6px;
//           width: 2px;
//           background: rgba(26,26,26,.08);
//           transform: translateX(-50%);
//         }
//         .process__rail-fill {
//           position: absolute;
//           left: 50%;
//           top: 6px;
//           width: 2px;
//           background: #d4952b;
//           transform: translateX(-50%);
//           transition: height .6s cubic-bezier(.16,1,.3,1);
//         }
//         .process__node {
//           position: absolute;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           background: #ffffff;
//           border: 1.5px solid rgba(212,149,43,.4);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-family: 'Fraunces', serif;
//           font-size: 13px;
//           color: #d4952b;
//           transition: all .45s cubic-bezier(.16,1,.3,1);
//         }
//         .process__node.is-active {
//           background: #d4952b;
//           border-color: #d4952b;
//           color: #1a1a1a;
//           box-shadow: 0 0 0 6px rgba(212,149,43,.16);
//           transform: translate(-50%, -50%) scale(1.12);
//         }

//         .process__cards {
//           display: flex;
//           flex-direction: column;
//           gap: clamp(20px, 3vw, 28px);
//         }

//         .process__card {
//           position: relative;
//           overflow: hidden;
//           border-radius: 18px;
//           padding: clamp(32px, 5vw, 48px) clamp(28px, 5vw, 52px);
//           min-height: 220px;
//           opacity: 0;
//           transform: translateY(48px);
//           transition: opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1), box-shadow .4s ease;
//         }
//         .process__card.is-revealed { opacity: 1; transform: translateY(0); }
//         .process__card.is-active { transform: translateY(-4px); box-shadow: 0 24px 48px -24px rgba(26,26,26,.25); }

//         .process__card.is-dark { background: #1a1a1a; color: #ffffff; }
//         .process__card.is-light { background: #ffffff; color: #1a1a1a; border: 1px solid rgba(26,26,26,.08); }
//         .process__card.is-dark.is-active { box-shadow: 0 24px 48px -24px rgba(212,149,43,.3); }

//         @media (hover: hover) {
//           .process__card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px -24px rgba(26,26,26,.2); }
//         }

//         .process__ghost {
//           position: absolute;
//           right: 24px;
//           top: 8px;
//           font-family: 'Fraunces', serif;
//           font-weight: 500;
//           font-size: clamp(5rem, 11vw, 8rem);
//           line-height: 1;
//           pointer-events: none;
//           opacity: 0;
//           transform: scale(.85);
//           transition: transform .9s cubic-bezier(.16,1,.3,1), opacity .9s ease;
//         }
//         .is-dark .process__ghost { color: rgba(212,149,43,.16); }
//         .is-light .process__ghost { color: rgba(212,149,43,.12); }
//         .process__card.is-revealed .process__ghost { opacity: 1; transform: scale(1); transition-delay: .15s; }

//         .process__tag {
//           display: inline-block;
//           font-size: 12px;
//           letter-spacing: .18em;
//           font-weight: 600;
//           text-transform: uppercase;
//           margin-bottom: 14px;
//           color: #d4952b;
//         }

//         .process__title {
//           position: relative;
//           z-index: 1;
//           font-family: 'Fraunces', serif;
//           font-weight: 500;
//           font-size: clamp(1.6rem, 3vw, 2.1rem);
//           letter-spacing: .04em;
//           text-transform: uppercase;
//           margin: 0 0 14px;
//         }

//         .process__copy {
//           position: relative;
//           z-index: 1;
//           font-size: .98rem;
//           line-height: 1.65;
//           max-width: 46ch;
//           margin: 0;
//         }
//         .is-dark .process__copy { color: rgba(255,255,255,.72); }
//         .is-light .process__copy { color: rgba(26,26,26,.66); }

//         @media (max-width: 720px) {
//           .process__body { grid-template-columns: 1fr; }
//           .process__rail { display: none; }
//           .process__card { padding: 28px 24px; min-height: 0; }
//           .process__ghost { font-size: 4rem; top: 4px; right: 16px; }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .process__intro, .process__card, .process__ghost, .process__rail-fill, .process__node {
//             transition: none !important;
//           }
//           .process__intro, .process__card, .process__ghost {
//             opacity: 1 !important;
//             transform: none !important;
//           }
//         }
//       `}</style>

//       <div ref={introRef} className={`process__intro ${introIn ? "is-in" : ""}`}>
//         <span className="process__eyebrow">Process</span>
//         <h2 className="process__heading">
//           Four stages, <em>one continuous build.</em>
//         </h2>
//         <p className="process__sub">
//           Every project moves through the same disciplined sequence — from the first
//           conversation to the day we hand you the keys.
//         </p>
//       </div>

//       <div className="process__body">
//         <div className="process__rail">
//           <div className="process__rail-track" />
//           <div className="process__rail-fill" style={{ height: `${lineProgress}%` }} />
//           {STEPS.map((s, i) => (
//             <div
//               key={s.num}
//               className={`process__node ${i <= active ? "is-active" : ""}`}
//               style={{ top: `${(i / (STEPS.length - 1)) * 100}%` }}
//             >
//               <span>{s.num}</span>
//             </div>
//           ))}
//         </div>

//         <div className="process__cards">
//           {STEPS.map((s, i) => (
//             <div
//               key={s.num}
//               ref={(el) => (cardRefs.current[i] = el)}
//               data-index={i}
//               className={`process__card ${i % 2 === 0 ? "is-dark" : "is-light"} ${
//                 revealed[i] ? "is-revealed" : ""
//               } ${active === i ? "is-active" : ""}`}
//               style={{ transitionDelay: `${i * 60}ms` }}
//             >
//               <span className="process__ghost">{s.num}</span>
//               <span className="process__tag">{s.num}</span>
//               <h3 className="process__title">{s.title}</h3>
//               <p className="process__copy">{s.copy}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
/* Duplicate ProcessSection removed — keeping the ProcessIntro / ProcessCarousel / OurProcess implementation below */
// import React, { useRef } from "react";
// import heroImg from "../assets/hero-interior.png";

// const GOLD = "#C9A84C";

// const STEPS = [
//   {
//     num: "01",
//     title: "Briefing",
//     body: "We begin with an exhaustive questionnaire to fully understand the client's needs and expectations. The most important of all steps.",
//   },
//   {
//     num: "02",
//     title: "Design",
//     body: "Translating the brief into the blueprint of what is to come. From moodboards to models, we design every last detail.",
//   },
//   {
//     num: "03",
//     title: "Execution",
//     body: "Bringing our designs to life by building it from the ground up. As we only take on end-to-end projects, everything from structural design to decor is executed in this phase.",
//   },
//   {
//     num: "04",
//     title: "Handover",
//     body: "The most anticipated moment, where we hand our clients the keys to their new space, all ready to move in.",
//   },
// ];

// const steps = [
//   {
//     n: "01",
//     title: "BRIEFING",
//     img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
//     text: "We begin with an exhaustive questionnaire to fully understand the client's needs and expectations. The most important of all steps.",
//   },
//   {
//     n: "02",
//     title: "DESIGN",
//     img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
//     text: "Translating the brief into the blueprint of what is to come. From moodboards to models, we design every last detail.",
//   },
//   {
//     n: "03",
//     title: "EXECUTION",
//     img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
//     text: "Bringing our designs to life by building it from the ground up. Everything from structural design to decor is executed in this phase.",
//   },
//   {
//     n: "04",
//     title: "HANDOVER",
//     img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80",
//     text: "The most anticipated moment, where we hand our clients the keys to their new space, all ready to move in.",
//   },
// ];

// function Card({ step }: { step: (typeof steps)[number] }) {
//   return (
//     <article
//       className="process-card group shrink-0 overflow-hidden rounded-2xl bg-[#f9f9f9] transition-all duration-500 ease-out"
//       style={{
//         width: "min(80vw, 420px)",
//         boxShadow: "0 8px 24px -12px rgba(0,0,0,0.15)",
//       }}
//     >
//       <div className="aspect-[4/3] w-full overflow-hidden">
//         <img
//           src={step.img}
//           alt={step.title}
//           loading="lazy"
//           className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//         />
//       </div>
//       <div className="p-7">
//         <div
//           className="mb-5 flex h-11 w-11 items-center justify-center rounded-full text-sm"
//           style={{
//             border: `1px solid ${GOLD}`,
//             color: GOLD,
//             fontFamily: "'Inter', sans-serif",
//             letterSpacing: "0.05em",
//           }}
//         >
//           {step.n}
//         </div>
//         <h3
//           className="mb-3 text-xl font-semibold tracking-[0.18em] text-black"
//           style={{ fontFamily: "'Inter', sans-serif" }}
//         >
//           {step.title}
//         </h3>
//         <p
//           className="text-[15px] leading-relaxed text-neutral-600"
//           style={{ fontFamily: "'Inter', sans-serif" }}
//         >
//           {step.text}
//         </p>
//       </div>
//     </article>
//   );
// }

// function ProcessIntro() {
//   return (
//     <section
//       style={{
//         display: "grid",
//         gridTemplateColumns: "1fr 1fr",
//         minHeight: "100vh",
//         background: "#ffffff",
//         alignItems: "stretch",
//       }}
//     >
//       {/* Left: text column */}
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           padding: "clamp(48px, 8vw, 96px) clamp(24px, 6vw, 96px)",
//         }}
//       >
//         <p
//           style={{
//             fontFamily: "'Inter', sans-serif",
//             fontSize: 12,
//             fontWeight: 600,
//             letterSpacing: "0.22em",
//             textTransform: "uppercase",
//             color: GOLD,
//             margin: "0 0 24px",
//           }}
//         >
//           The Process
//         </p>

//         <h2
//           style={{
//             fontFamily: "'Fraunces', serif",
//             fontWeight: 500,
//             fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
//             lineHeight: 1.04,
//             letterSpacing: "-0.01em",
//             color: "#1a1a1a",
//             margin: "0 0 20px",
//           }}
//         >
//           Four stages,{" "}
//           <em style={{ fontStyle: "italic", color: GOLD, fontWeight: 400 }}>
//             one continuous
//           </em>
//           <br />
//           build.
//         </h2>

//         <p
//           style={{
//             fontFamily: "'Inter', sans-serif",
//             fontSize: "1.05rem",
//             lineHeight: 1.6,
//             color: "rgba(26,26,26,.6)",
//             maxWidth: 440,
//             margin: "0 0 40px",
//           }}
//         >
//           Every project moves through the same disciplined sequence — from the
//           first conversation to the day we hand you the keys.
//         </p>

//         {/* Stage list */}
//         <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
//           {STEPS.map((s) => (
//             <div
//               key={s.num}
//               style={{
//                 display: "flex",
//                 gap: 20,
//                 borderRadius: 10,
//                 padding: "12px 12px",
//                 transition: "background 0.2s",
//                 cursor: "default",
//               }}
//               onMouseEnter={(e) =>
//                 (e.currentTarget.style.background = "rgba(0,0,0,0.03)")
//               }
//               onMouseLeave={(e) =>
//                 (e.currentTarget.style.background = "transparent")
//               }
//             >
//               <span
//                 style={{
//                   flexShrink: 0,
//                   marginTop: 2,
//                   width: 32,
//                   height: 32,
//                   borderRadius: "50%",
//                   border: `1.5px solid ${GOLD}`,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontFamily: "'Fraunces', serif",
//                   fontSize: 12,
//                   fontWeight: 600,
//                   color: GOLD,
//                 }}
//               >
//                 {s.num}
//               </span>

//               <div>
//                 <h3
//                   style={{
//                     fontFamily: "'Fraunces', serif",
//                     fontSize: "1.1rem",
//                     fontWeight: 500,
//                     textTransform: "uppercase",
//                     letterSpacing: "0.06em",
//                     color: "#1a1a1a",
//                     margin: 0,
//                   }}
//                 >
//                   {s.title}
//                 </h3>
//                 <p
//                   style={{
//                     fontFamily: "'Inter', sans-serif",
//                     fontSize: "0.875rem",
//                     lineHeight: 1.6,
//                     color: "rgba(26,26,26,.6)",
//                     margin: "4px 0 0",
//                   }}
//                 >
//                   {s.body}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right: image column */}
//       <div style={{ position: "relative", overflow: "hidden", height: "100%" }}>
//         <img
//           src={heroImg}
//           alt="Luxury residential interior"
//           style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
//         />
//       </div>

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400&family=Inter:wght@400;500;600&display=swap');
//         @media (max-width: 768px) {
//           section { grid-template-columns: 1fr !important; }
//         }
//       `}</style>
//     </section>
//   );
// }

// function ProcessCarousel() {
//   const loop = [...steps, ...steps];

//   return (
//     <section className="bg-white py-24 md:py-32">
//       <div className="mx-auto max-w-7xl px-6 md:px-10">
//         <p
//           className="mb-6 text-xs font-medium"
//           style={{ color: GOLD, letterSpacing: "0.35em", fontFamily: "'Inter', sans-serif" }}
//         >
//           THE PROCESS
//         </p>
//         <h2
//           className="max-w-3xl text-4xl leading-[1.1] text-black md:text-5xl lg:text-6xl"
//           style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
//         >
//           Four stages,{" "}
//           <span style={{ color: GOLD, fontStyle: "italic" }}>one continuous</span>{" "}
//           build.
//         </h2>
//         <p
//           className="mt-6 max-w-2xl text-base text-neutral-600 md:text-lg"
//           style={{ fontFamily: "'Inter', sans-serif" }}
//         >
//           Every project moves through the same disciplined sequence — from the
//           first conversation to the day we hand you the keys.
//         </p>
//       </div>

//       <div
//         className="process-marquee mt-16 overflow-hidden"
//         style={{
//           maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
//           WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
//         }}
//       >
//         <div className="process-track flex w-max gap-6 px-6 md:gap-8 md:px-10">
//           {loop.map((s, i) => (
//             <Card key={`${s.n}-${i}`} step={s} />
//           ))}
//         </div>
//       </div>

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;1,400&family=Inter:wght@400;500;600&display=swap');
//         @keyframes process-scroll {
//           from { transform: translateX(0); }
//           to { transform: translateX(-50%); }
//         }
//         .process-track {
//           animation: process-scroll 40s linear infinite;
//         }
//         .process-marquee:hover .process-track {
//           animation-play-state: paused;
//         }
//         .process-card:hover {
//           transform: translateY(-6px);
//           box-shadow: 0 24px 40px -16px rgba(0,0,0,0.22) !important;
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .process-track { animation: none; }
//         }
//       `}</style>
//     </section>
//   );
// }
// const GOLD = "#C9A84C";

// const steps = [
//   {
//     n: "01",
//     title: "BRIEFING",
//     img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
//     text: "We begin with an exhaustive questionnaire to fully understand the client's needs and expectations. The most important of all steps.",
//   },
//   {
//     n: "02",
//     title: "DESIGN",
//     img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
//     text: "Translating the brief into the blueprint of what is to come. From moodboards to models, we design every last detail.",
//   },
//   {
//     n: "03",
//     title: "EXECUTION",
//     img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
//     text: "Bringing our designs to life by building it from the ground up. Everything from structural design to decor is executed in this phase.",
//   },
//   {
//     n: "04",
//     title: "HANDOVER",
//     img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80",
//     text: "The most anticipated moment, where we hand our clients the keys to their new space, all ready to move in.",
//   },
// ];

// function Card({ step }: { step: (typeof steps)[number] }) {
//   return (
//     <article
//       className="process-card group shrink-0 overflow-hidden rounded-2xl bg-[#f9f9f9] transition-all duration-500 ease-out"
//       style={{
//         width: "min(80vw, 420px)",
//         boxShadow: "0 8px 24px -12px rgba(0,0,0,0.15)",
//       }}
//     >
//       <div className="aspect-[4/3] w-full overflow-hidden">
//         <img
//           src={step.img}
//           alt={step.title}
//           loading="lazy"
//           className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//         />
//       </div>
//       <div className="p-7">
//         <div
//           className="mb-5 flex h-11 w-11 items-center justify-center rounded-full text-sm"
//           style={{ border: `1px solid ${GOLD}`, color: GOLD, fontFamily: "'Inter', sans-serif", letterSpacing: "0.05em" }}
//         >
//           {step.n}
//         </div>
//         <h3
//           className="mb-3 text-xl font-semibold tracking-[0.18em] text-black"
//           style={{ fontFamily: "'Inter', sans-serif" }}
//         >
//           {step.title}
//         </h3>
//         <p
//           className="text-[15px] leading-relaxed text-neutral-600"
//           style={{ fontFamily: "'Inter', sans-serif" }}
//         >
//           {step.text}
//         </p>
//       </div>
//     </article>
//   );
// }

// export function ProcessSection() {
//   const loop = [...steps, ...steps];
//   return (
//     <section className="bg-white py-24 md:py-32">
//       <div className="mx-auto max-w-7xl px-6 md:px-10">
//         <p
//           className="mb-6 text-xs font-medium"
//           style={{ color: GOLD, letterSpacing: "0.35em", fontFamily: "'Inter', sans-serif" }}
//         >
//           THE PROCESS
//         </p>
//         <h2
//           className="max-w-3xl text-4xl leading-[1.1] text-black md:text-5xl lg:text-6xl"
//           style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
//         >
//           Four stages,{" "}
//           <span style={{ color: GOLD, fontStyle: "italic" }}>one continuous</span>{" "}
//           build.
//         </h2>
//         <p
//           className="mt-6 max-w-2xl text-base text-neutral-600 md:text-lg"
//           style={{ fontFamily: "'Inter', sans-serif" }}
//         >
//           Every project moves through the same disciplined sequence — from the first
//           conversation to the day we hand you the keys.
//         </p>
//       </div>

//       <div
//         className="process-marquee mt-16 overflow-hidden"
//         style={{
//           maskImage:
//             "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
//           WebkitMaskImage:
//             "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
//         }}
//       >
//         <div className="process-track flex w-max gap-6 px-6 md:gap-8 md:px-10">
//           {loop.map((s, i) => (
//             <Card key={`${s.n}-${i}`} step={s} />
//           ))}
//         </div>
//       </div>

//       <style>{`
//         @keyframes process-scroll {
//           from { transform: translateX(0); }
//           to { transform: translateX(-50%); }
//         }
//         .process-track {
//           animation: process-scroll 40s linear infinite;
//         }
//         .process-marquee:hover .process-track {
//           animation-play-state: paused;
//         }
//         .process-card:hover {
//           transform: translateY(-6px);
//           box-shadow: 0 24px 40px -16px rgba(0,0,0,0.22) !important;
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .process-track { animation: none; }
//         }
//       `}</style>
//     </section>
//   );
// }

// export default function OurProcess() {
//   return (
//     <>
//       <ProcessIntro />
//       <ProcessCarousel />
//     </>
//   );
// }
const GOLD = "#C9A84C";

const steps = [
  {
    n: "01",
    title: "BRIEFING",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=90",
    text: "We begin with an exhaustive questionnaire to fully understand the client's needs and expectations. The most important of all steps.",
  },
  {
    n: "02",
    title: "DESIGN",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=90",
    text: "Translating the brief into the blueprint of what is to come. From moodboards to models, we design every last detail.",
  },
  {
    n: "03",
    title: "EXECUTION",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90",
    text: "Bringing our designs to life by building it from the ground up. Everything from structural design to decor is executed in this phase.",
  },
  {
    n: "04",
    title: "HANDOVER",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=90",
    text: "The most anticipated moment, where we hand our clients the keys to their new space, all ready to move in.",
  },
];

function Card({ step }: { step: (typeof steps)[number] }) {
  return (
    <article
      className="process-card group shrink-0 overflow-hidden rounded-2xl bg-[#f9f9f9] transition-all duration-500 ease-out"
      style={{
        width: "min(80vw, 420px)",
        boxShadow: "0 8px 24px -12px rgba(0,0,0,0.15)",
      }}
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={step.img}
          alt={step.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-7">
        <div
          className="mb-5 flex h-11 w-11 items-center justify-center rounded-full text-sm"
          style={{ border: `1px solid ${GOLD}`, color: GOLD, fontFamily: "'Inter', sans-serif", letterSpacing: "0.05em" }}
        >
          {step.n}
        </div>
        <h3
          className="mb-3 text-xl font-semibold tracking-[0.18em] text-black"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {step.title}
        </h3>
        <p
          className="text-[15px] leading-relaxed text-neutral-600"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {step.text}
        </p>
      </div>
    </article>
  );
}

export function ProcessSection() {
  const loop = [...steps, ...steps];
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p
          className="mb-6 text-xs font-medium"
          style={{ color: GOLD, letterSpacing: "0.35em", fontFamily: "'Inter', sans-serif" }}
        >
          THE PROCESS
        </p>
        <h2
          className="max-w-3xl text-4xl leading-[1.1] text-black md:text-5xl lg:text-6xl"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
        >
          Four stages,{" "}
          <span style={{ color: GOLD, fontStyle: "italic" }}>one continuous</span>{" "}
          build.
        </h2>
        <p
          className="mt-6 max-w-2xl text-base text-neutral-600 md:text-lg"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Every project moves through the same disciplined sequence — from the first
          conversation to the day we hand you the keys.
        </p>
      </div>

      <div className="mx-auto mt-16 w-full max-w-6xl overflow-hidden rounded-2xl px-6 md:px-10">
        <div className="process-track flex w-max gap-6 md:gap-8">
          {loop.map((s, i) => (
            <Card key={`${s.n}-${i}`} step={s} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes process-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .process-track {
          animation: process-scroll 40s linear infinite;
        }
        .process-track:hover {
          animation-play-state: paused;
        }
        .process-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 40px -16px rgba(0,0,0,0.22) !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .process-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
