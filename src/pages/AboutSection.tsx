// import { motion, useInView, useMotionValue, animate } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// const columns = [
//   [
//     {
//       src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=800&q=80",
//       alt: "Elegant dining room interior",
//       ratio: "aspect-[3/4]",
//       delay: 0,
//     },
//     {
//       src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
//       alt: "Serene bedroom interior",
//       ratio: "aspect-[4/3]",
//       delay: 0.2,
//     },
//   ],
//   [
//     {
//       src: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
//       alt: "Home library interior",
//       ratio: "aspect-[4/3]",
//       delay: 0.1,
//     },
//     {
//       src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80",
//       alt: "Modern luxury kitchen",
//       ratio: "aspect-[3/4]",
//       delay: 0.3,
//     },
//   ],
// ];

// const stats = [
//   { value: 15, suffix: "+", label: "Years" },
//   { value: 240, suffix: "", label: "Projects" },
//   { value: 98, suffix: "%", label: "Repeat clients" },
// ];

// const container = {
//   hidden: {},
//   show: {
//     transition: { staggerChildren: 0.15 },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
// };

// function CountUp({ value, suffix }: { value: number; suffix: string }) {
//   const ref = useRef<HTMLSpanElement>(null);
//   const inView = useInView(ref, { once: true, margin: "-50px" });
//   const count = useMotionValue(0);
//   const [display, setDisplay] = useState(0);

//   useEffect(() => {
//     if (!inView) return;
//     const controls = animate(count, value, {
//       duration: 1.6,
//       ease: [0.22, 1, 0.36, 1] as const,
//       onUpdate: (v) => setDisplay(Math.round(v)),
//     });
//     return () => controls.stop();
//   }, [inView, value, count]);

//   return (
//     <span ref={ref}>
//       {display}
//       {suffix}
//     </span>
//   );
// }

// export function AboutSection() {
//   return (
//     <section className="w-full bg-cream py-20 md:py-28">
//       <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[55fr_45fr] lg:items-center lg:gap-16">
//         {/* Left column */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           animate="show"
//           className="flex flex-col"
//         >
//           <motion.span
//             variants={item}
//             className="text-xs font-semibold uppercase tracking-[0.25em] text-olive"
//           >
//             About SS Interiors
//           </motion.span>

//           <motion.h2
//             variants={item}
//             className="mt-5 font-serif text-4xl font-bold leading-tight text-charcoal md:text-5xl lg:text-[56px] lg:leading-[1.1]"
//           >
//             Crafting Inspired Spaces for Over 15 Years
//           </motion.h2>

//           <motion.p
//             variants={item}
//             className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
//           >
//             Since 2010, our studio has channeled a quiet passion for materials,
//             light and craftsmanship — designing homes and commercial spaces that
//             feel as considered as they look.
//           </motion.p>

//           <motion.div
//             variants={item}
//             className="mt-10 flex flex-wrap gap-10"
//           >
//             {stats.map((s) => (
//               <div key={s.label} className="flex flex-col">
//                 <span className="font-serif text-4xl font-bold text-charcoal">
//                   <CountUp value={s.value} suffix={s.suffix} />
//                 </span>
//                 <span className="mt-1 text-sm text-muted-foreground">
//                   {s.label}
//                 </span>
//               </div>
//             ))}
//           </motion.div>

//           <motion.div variants={item} className="mt-12">
//             <motion.a
//               href="#"
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.98 }}
//               className="inline-flex items-center gap-2 rounded-full bg-olive-dark px-8 py-4 text-sm font-medium text-cream transition-colors hover:bg-charcoal"
//             >
//               Read More <span aria-hidden>→</span>
//             </motion.a>
//           </motion.div>
//         </motion.div>

//         {/* Right column — image grid */}
//         <div className="grid grid-cols-2 gap-4 lg:gap-5">
//           {columns.map((col, ci) => (
//             <div
//               key={ci}
//               className={`flex flex-col gap-4 lg:gap-5 ${ci === 1 ? "mt-8 lg:mt-12" : ""}`}
//             >
//               {col.map((img) => (
//                 <motion.div
//                   key={img.src}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: "-80px" }}
//                   transition={{ duration: 0.6, delay: img.delay, ease: [0.22, 1, 0.36, 1] as const }}
//                   className={`group overflow-hidden rounded-2xl ${img.ratio}`}
//                 >
//                   <img
//                     src={img.src}
//                     alt={img.alt}
//                     loading="lazy"
//                     className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
//                   />
//                 </motion.div>
//               ))}
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const columns = [
  [
    {
      src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=800&q=80",
      alt: "Elegant dining room interior",
      ratio: "aspect-[3/4]",
      delay: 0,
    },
    {
      src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
      alt: "Serene bedroom interior",
      ratio: "aspect-[4/3]",
      delay: 0.2,
    },
  ],
  [
    {
      src: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
      alt: "Home library interior",
      ratio: "aspect-[4/3]",
      delay: 0.1,
    },
    {
      src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80",
      alt: "Modern luxury kitchen",
      ratio: "aspect-[3/4]",
      delay: 0.3,
    },
  ],
];

const stats = [
  { value: 15, suffix: "+", label: "Years" },
  { value: 240, suffix: "", label: "Projects" },
  { value: 98, suffix: "%", label: "Repeat clients" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1] as const,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, count]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function AboutSection() {
  return (
    <section className="w-full py-20 md:py-28" style={{ backgroundColor: "#ffffff" }}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[55fr_45fr] lg:items-center lg:gap-16">
        {/* Left column */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col"
        >
          <motion.span
            variants={item}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-black"
          >
            About SS Interiors
          </motion.span>

          <motion.h2
            variants={item}
            className="mt-5 font-serif text-4xl font-bold leading-tight text-black md:text-5xl lg:text-[56px] lg:leading-[1.1]"
          >
            Crafting Inspired Spaces for Over 15 Years
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-black"
          >
            Since 2010, our studio has channeled a quiet passion for materials,
            light and craftsmanship — designing homes and commercial spaces that
            feel as considered as they look.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap gap-10"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="font-serif text-4xl font-bold text-black">
                  <CountUp value={s.value} suffix={s.suffix} />
                </span>
                <span className="mt-1 text-sm text-black">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-12">
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full bg-olive-dark px-8 py-4 text-sm font-medium text-cream transition-colors hover:bg-charcoal"
            >
              Read More <span aria-hidden>→</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right column — image grid */}
        <div className="grid grid-cols-2 gap-4 lg:gap-5">
          {columns.map((col, ci) => (
            <div
              key={ci}
              className={`flex flex-col gap-4 lg:gap-5 ${ci === 1 ? "mt-8 lg:mt-12" : ""}`}
            >
              {col.map((img) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: img.delay, ease: [0.22, 1, 0.36, 1] as const }}
                  className={`group overflow-hidden rounded-2xl ${img.ratio}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}