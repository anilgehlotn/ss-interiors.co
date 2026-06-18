// export default function Contact() {
//   return (
//     <div>
//       <h1>Contact</h1>
//     </div>
//   )
// }

// Testimonials.tsx
// "use client";

// const row1Data = [
//   { text: "SS Interiors transformed our office lobby into a statement of elegance. Every detail reflected our brand identity perfectly.", name: "Arjun Mehta", role: "Principal Architect, Mehta Associates" },
//   { text: "Their spatial planning for our residential tower exceeded expectations — functional, luxurious, and deeply considered.", name: "Priya Sharma", role: "Project Director, Skyline Developers" },
//   { text: "Impeccable material selection and a refined aesthetic sense. SS Interiors speaks the language of architecture fluently.", name: "Rohan Nair", role: "Partner, Nair & Co. Architecture" },
//   { text: "From concept boards to site execution, they delivered a seamless experience. Truly a creative powerhouse.", name: "Divya Kapoor", role: "CEO, Kapoor Infra Group" },
// ];

// const row2Data = [
//   { text: "We pitched SS Interiors to our clients and the response was unanimous — this is the team that understands space and soul.", name: "Vikram Desai", role: "Design Lead, Urbancraft Studios" },
//   { text: "Their portfolio won us over instantly. The blend of traditional warmth with modern minimalism is rare and remarkable.", name: "Ananya Iyer", role: "Founder, Iyer Architectural Collective" },
//   { text: "Outstanding project management and a keen eye for proportions. Our hospitality project became an award contender.", name: "Kabir Rao", role: "MD, Rao Hospitality Ventures" },
//   { text: "SS Interiors brought clarity to a complex brief. The finished interiors speak to sophistication and purpose.", name: "Meera Joshi", role: "Senior Architect, Blueprint Bureau" },
// ];

// function initials(name: string) {
//   return name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
// }

// function TestiCard({ text, name, role }: { text: string; name: string; role: string }) {
//   return (
//     <div className="flex-shrink-0 w-[320px] bg-white border border-[#e8e0d4] rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300">
//       <div className="text-[#c9a96e] text-4xl font-serif leading-none mb-3">"</div>
//       <p className="text-sm text-[#444] leading-relaxed mb-5 font-serif">{text}</p>
//       <div className="w-10 h-0.5 bg-[#c9a96e] rounded mb-4" />
//       <div className="flex items-center gap-3">
//         <div className="w-10 h-10 rounded-full bg-[#c9a96e22] border-2 border-[#c9a96e44] flex items-center justify-center text-[#c9a96e] text-sm font-bold flex-shrink-0">
//           {initials(name)}
//         </div>
//         <div>
//           <p className="text-sm font-bold text-[#111]">{name}</p>
//           <p className="text-xs text-[#999] mt-0.5">{role}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// function MarqueeRow({ data, reverse = false }: { data: typeof row1Data; reverse?: boolean }) {
//   return (
//     <div className="relative overflow-hidden">
//       <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-white to-transparent" />
//       <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-white to-transparent" />
//       <div
//         className={`flex gap-6 w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
//         style={{ animationDuration: reverse ? "32s" : "28s" }}
//       >
//         {[...data, ...data].map((d, i) => (
//           <TestiCard key={i} {...d} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function Testimonials() {
//   return (
//     <section className="bg-white py-16 overflow-hidden">
//       <style jsx global>{`
//         @keyframes marquee {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }

//         @keyframes marquee-reverse {
//           from {
//             transform: translateX(-50%);
//           }
//           to {
//             transform: translateX(0);
//           }
//         }

//         .animate-marquee {
//           animation: marquee linear infinite;
//         }

//         .animate-marquee-reverse {
//           animation: marquee-reverse linear infinite;
//         }

//         .animate-marquee:hover,
//         .animate-marquee-reverse:hover {
//           animation-play-state: paused;
//         }
//       `}</style>

//       {/* Badge */}
//       <div className="flex justify-center mb-6">
//         <span className="flex items-center gap-2 bg-[#1a1a1a] text-[#c9a96e] rounded-full px-5 py-2 text-sm tracking-wide">
//           ★ Trusted by leading architects & developers
//         </span>
//       </div>

//       {/* Heading */}
//       <h2 className="text-center text-3xl md:text-4xl font-bold text-[#111] font-serif mb-12 leading-snug">
//         Words of praise from those who{" "}
//         <span className="text-[#c9a96e]">chose excellence.</span>
//       </h2>

//       {/* Rows */}
//       <div className="flex flex-col gap-6">
//         <MarqueeRow data={row1Data} />
//         <MarqueeRow data={row2Data} reverse />
//       </div>
//     </section>
//   );
// }
// import { ArrowRight } from "lucide-react";
// import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";

// // ─── Types ────────────────────────────────────────────────────────────────────

// interface RevealProps {
//   children: ReactNode;
//   className?: string;
//   delay?: number;
// }

// interface FieldProps {
//   label: string;
//   name: string;
//   type?: string;
// }

// // ─── Constants ────────────────────────────────────────────────────────────────

// const PROJECT_TYPES = [
//   "Full Fit-Out",
//   "False Ceiling",
//   "Flooring",
//   "Carpentry",
//   "Painting",
//   "Other",
// ] as const;

// const WHATSAPP_URL = "https://wa.me/919980802384";
// const BG_IMAGE_URL =
//   "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=1800&q=80";

// // ─── Reveal ───────────────────────────────────────────────────────────────────

// function Reveal({ children, className = "", delay = 0 }: RevealProps) {
//   const ref = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const io = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((e) => {
//           if (e.isIntersecting) {
//             (e.target as HTMLElement).style.animationDelay = `${delay}ms`;
//             e.target.classList.add("in");
//             io.unobserve(e.target);
//           }
//         });
//       },
//       { threshold: 0.15 },
//     );

//     io.observe(el);
//     return () => io.disconnect();
//   }, [delay]);

//   return (
//     <div ref={ref} className={`reveal ${className}`}>
//       {children}
//     </div>
//   );
// }

// // ─── Field ────────────────────────────────────────────────────────────────────

// function Field({ label, name, type = "text" }: FieldProps) {
//   return (
//     <div>
//       <label htmlFor={name} className="label-eyebrow">
//         {label}
//       </label>
//       <input
//         id={name}
//         name={name}
//         type={type}
//         required
//         className="mt-2 w-full border-0 border-b border-brand-divider bg-transparent py-3 text-brand-ink focus:outline-none focus:border-brand-ink"
//       />
//     </div>
//   );
// }

// // ─── Contact ──────────────────────────────────────────────────────────────────

// export function Contact() {
//   const [sent, setSent] = useState<boolean>(false);

//   const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
//     e.preventDefault();
//     setSent(true);
//     setTimeout(() => setSent(false), 4000);
//   };

//   return (
//     <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">

//       {/* Background */}
//       <div className="absolute inset-0">
//         <img
//           src={BG_IMAGE_URL}
//           alt=""
//           aria-hidden="true"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/55" />
//       </div>

//       {/* Content */}
//       <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

//         {/* Left — Copy */}
//         <Reveal>
//           <p className="label-eyebrow !text-white/70">GET IN TOUCH</p>

//           <h2 className="mt-6 font-serif-display text-4xl lg:text-6xl text-white leading-tight">
//             Let's Build Your{" "}
//             <span style={{ color: "var(--brand-gold)" }}>Vision.</span>
//           </h2>

//           <p className="mt-6 text-white/80 max-w-md leading-relaxed">
//             Share your project with us and we'll get back within 24 hours.
//           </p>

//           <a
//             href={WHATSAPP_URL}
//             target="_blank"
//             rel="noreferrer"
//             className="mt-10 inline-flex items-center text-white/90 text-xs uppercase tracking-[0.2em] hover:text-[color:var(--brand-gold)] transition-colors"
//           > 
//             Or chat directly
//             <ArrowRight size={14} className="ml-2" strokeWidth={1.5} />
//           </a>
//         </Reveal>

//         {/* Right — Form */}
//         <Reveal delay={150}>
//           <form
//             onSubmit={handleSubmit}
//             noValidate
//             className="bg-white p-8 lg:p-10 shadow-2xl"
//           >
//             <div className="grid gap-5">

//               {/* Name */}
//               <Field label="Full Name" name="name" />

//               {/* Phone + Email */}
//               <div className="grid sm:grid-cols-2 gap-5">
//                 <Field label="Phone Number" name="phone" type="tel" />
//                 <Field label="Email" name="email" type="email" />
//               </div>

//               {/* Project Type */}
//               <div>
//                 <label htmlFor="projectType" className="label-eyebrow">
//                   Project Type
//                 </label>
//                 <select
//                   id="projectType"
//                   name="projectType"
//                   required
//                   defaultValue={PROJECT_TYPES[0]}
//                   className="mt-2 w-full border-0 border-b border-brand-divider bg-transparent py-3 text-brand-ink focus:outline-none focus:border-brand-ink"
//                 >
//                   {PROJECT_TYPES.map((type) => (
//                     <option key={type} value={type}>
//                       {type}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Message */}
//               <div>
//                 <label htmlFor="message" className="label-eyebrow">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={3}
//                   className="mt-2 w-full border-0 border-b border-brand-divider bg-transparent py-3 text-brand-ink focus:outline-none focus:border-brand-ink resize-none"
//                 />
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 disabled={sent}
//                 className="btn-gold btn-gold-hover mt-4 w-full sm:w-auto self-start inline-flex items-center disabled:opacity-70"
//               >
//                 {sent ? "Thank you!" : "Send Enquiry"}
//                 <ArrowRight size={14} className="ml-2" strokeWidth={1.5} />
//               </button>

//             </div>
//           </form>
//         </Reveal>

//       </div>
//     </section>
//   );
// }
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const PROJECT_TYPES = [
  "Full Fit-Out",
  "False Ceiling",
  "Flooring",
  "Carpentry",
  "Painting",
  "Other",
] as const;

const WHATSAPP_URL = "https://wa.me/919980802384";
const BG_IMAGE_URL =
  "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=1800&q=80";

// ─── Reveal ───────────────────────────────────────────────────────────────────

function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback: if IntersectionObserver isn't supported, just show it
    if (!("IntersectionObserver" in window)) {
      el.classList.add("in");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.animationDelay = `${delay}ms`;
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05 }, // lowered from 0.15 so it triggers earlier
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

// ─── Field ────────────────────────────────────────────────────────────────────

function Field({ label, name, type = "text" }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="label-eyebrow">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-2 w-full border-0 border-b border-brand-divider bg-transparent py-3 text-brand-ink focus:outline-none focus:border-brand-ink"
      />
    </div>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

export function Contact() {
  const [sent, setSent] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={BG_IMAGE_URL}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left — Copy */}
        <Reveal>
          <p className="label-eyebrow !text-white/70">GET IN TOUCH</p>

          <h2 className="mt-6 font-serif-display text-4xl lg:text-6xl text-white leading-tight">
            Let's Build Your{" "}
            <span style={{ color: "var(--brand-gold)" }}>Vision.</span>
          </h2>

          <p className="mt-6 text-white/80 max-w-md leading-relaxed">
            Share your project with us and we'll get back within 24 hours.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center text-white/90 text-xs uppercase tracking-[0.2em] hover:text-[color:var(--brand-gold)] transition-colors"
          >
            Or chat directly
            <ArrowRight size={14} className="ml-2" strokeWidth={1.5} />
          </a>
        </Reveal>

        {/* Right — Form */}
        <Reveal delay={150}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white p-8 lg:p-10 shadow-2xl"
          >
            <div className="grid gap-5">

              <Field label="Full Name" name="name" />

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Phone Number" name="phone" type="tel" />
                <Field label="Email" name="email" type="email" />
              </div>

              <div>
                <label htmlFor="projectType" className="label-eyebrow">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  defaultValue={PROJECT_TYPES[0]}
                  className="mt-2 w-full border-0 border-b border-brand-divider bg-transparent py-3 text-brand-ink focus:outline-none focus:border-brand-ink"
                >
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="label-eyebrow">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="mt-2 w-full border-0 border-b border-brand-divider bg-transparent py-3 text-brand-ink focus:outline-none focus:border-brand-ink resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className="btn-gold btn-gold-hover mt-4 w-full sm:w-auto self-start inline-flex items-center disabled:opacity-70"
              >
                {sent ? "Thank you!" : "Send Enquiry"}
                <ArrowRight size={14} className="ml-2" strokeWidth={1.5} />
              </button>

            </div>
          </form>
        </Reveal>

      </div>
    </section>
  );
}

export default Contact;