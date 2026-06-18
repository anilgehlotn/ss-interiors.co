import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const GOLD = "#E5AF42";
const INK = "#1A1A1A";

type Testimonial = {
  quote: string;
  name: string;
  location: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "SS Interiors managed our home end-to-end with extraordinary precision. Every contractor, every material, every deadline — handled. We simply walked into a finished masterpiece.",
    name: "Aarav & Meera Khanna",
    location: "Jubilee Hills, Hyderabad",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces",
  },
  {
    quote:
      "Their attention to detail is unmatched. The joinery, the lighting layers, the stone selection — nothing was left to chance. Truly a luxury experience from concept to handover.",
    name: "Rohan Mehta",
    location: "Bandra West, Mumbai",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
  },
  {
    quote:
      "As an architect, I value partners who respect the drawing. SS Interiors executed our vision faithfully and elevated it where it mattered. Communication was impeccable throughout.",
    name: "Ar. Priya Raghavan",
    location: "Indiranagar, Bengaluru",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=faces",
  },
  {
    quote:
      "Delivered ahead of schedule with zero compromise on craft. Weekly walkthroughs, transparent reporting, and a team that genuinely cares about the finish line.",
    name: "Vikram Suri",
    location: "Golf Links, New Delhi",
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=200&h=200&fit=crop&crop=faces",
  },
  {
    quote:
      "From the marble veining to the cabinet hardware, everything was curated. They translated our taste into a home that feels both timeless and personal.",
    name: "Ananya Iyer",
    location: "Boat Club Road, Chennai",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces",
  },
  {
    quote:
      "We collaborated across three projects. Their site discipline, vendor network, and ability to hold timelines make them our default execution partner.",
    name: "Ar. Devansh Kapoor",
    location: "Koregaon Park, Pune",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop&crop=faces",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 6000);
    return () => clearInterval(id);
  }, [paused, total]);

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  // Show 2 cards at a time on desktop — pair around current index
  const visiblePair = [testimonials[index], testimonials[(index + 1) % total]];

  return (
    <section
      className="w-full px-6 py-24 md:px-12 lg:px-20"
      style={{ backgroundColor: "#FFFFFF" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-7xl">
        {/* Top split */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: image + arrows */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="overflow-hidden rounded-3xl shadow-[0_30px_60px_-30px_rgba(26,26,26,0.35)]"
            >
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&h=1500&fit=crop"
                alt="Luxury interior hallway designed by SS Interiors"
                className="h-[420px] w-full object-cover md:h-[560px]"
                loading="lazy"
              />
            </motion.div>

            {/* Arrows */}
            <div className="mt-8 flex items-center gap-4">
              <NavButton onClick={prev} ariaLabel="Previous testimonial">
                <ChevronLeft size={22} />
              </NavButton>
              <NavButton onClick={next} ariaLabel="Next testimonial">
                <ChevronRight size={22} />
              </NavButton>
              <span
                className="ml-3 text-sm tracking-wide"
                style={{ color: INK, opacity: 0.5 }}
              >
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Right: heading + cards */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2
                className="font-serif text-5xl font-bold leading-[1.05] md:text-6xl"
                style={{ color: INK }}
              >
                What Our
                <br />
                Clients Say
              </h2>
              <div
                className="mt-6 h-[2px] w-24"
                style={{ backgroundColor: GOLD }}
              />
              <p
                className="mt-8 max-w-md text-base leading-relaxed"
                style={{ color: INK, opacity: 0.7 }}
              >
                Homeowners and architects across India trust SS Interiors to
                deliver end-to-end luxury execution — with craft, candour, and
                care.
              </p>
            </motion.div>

            {/* Cards carousel */}
            <div className="relative mt-10 lg:-ml-32 lg:mt-16">
              <div className="overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="grid grid-cols-1 gap-6 md:grid-cols-2"
                  >
                    {visiblePair.map((t, i) => (
                      <motion.div
                        key={`${index}-${i}`}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: i * 0.12,
                          ease: "easeOut",
                        }}
                      >
                        <TestimonialCard t={t} />
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dots */}
              <div className="mt-10 flex items-center gap-2">
                {testimonials.map((_, i) => {
                  const active = i === index;
                  return (
                    <button
                      key={i}
                      aria-label={`Go to testimonial ${i + 1}`}
                      onClick={() => setIndex(i)}
                      className="h-[6px] rounded-full transition-all duration-300"
                      style={{
                        width: active ? 28 : 8,
                        backgroundColor: active ? GOLD : INK,
                        opacity: active ? 1 : 0.2,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NavButton({
  onClick,
  children,
  ariaLabel,
}: {
  onClick: () => void;
  children: React.ReactNode;
  ariaLabel: string;
}) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex h-12 w-12 items-center justify-center rounded-full shadow-[0_8px_24px_-12px_rgba(26,26,26,0.4)] transition-colors duration-300"
      style={{
        backgroundColor: hover ? GOLD : "#FFFFFF",
        color: INK,
        border: `1px solid ${hover ? GOLD : "rgba(26,26,26,0.12)"}`,
      }}
    >
      {children}
    </button>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article
      className="relative flex h-full flex-col justify-between rounded-2xl p-10 md:p-12"
      style={{
        backgroundColor: INK,
        boxShadow: "0 30px 60px -30px rgba(26,26,26,0.5)",
        minHeight: 360,
      }}
    >
      <Quote
        size={44}
        style={{ color: GOLD }}
        strokeWidth={1.5}
        className="-scale-x-100"
      />
      <p
        className="mt-6 text-base leading-relaxed md:text-lg"
        style={{ color: "#FFFFFF" }}
      >
        "{t.quote}"
      </p>
      <div className="mt-10 flex items-center gap-4">
        <div
          className="h-14 w-14 overflow-hidden rounded-full p-[2px]"
          style={{ backgroundColor: GOLD }}
        >
          <img
            src={t.avatar}
            alt={t.name}
            className="h-full w-full rounded-full object-cover"
            style={{ border: `2px solid ${INK}` }}
            loading="lazy"
          />
        </div>
        <div>
          <div
            className="text-base font-semibold tracking-wide"
            style={{ color: "#FFFFFF" }}
          >
            {t.name}
          </div>
          <div
            className="text-sm"
            style={{ color: "#FFFFFF", opacity: 0.6 }}
          >
            {t.location}
          </div>
        </div>
      </div>
    </article>
  );
}