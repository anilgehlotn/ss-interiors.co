import React, { useRef, useState, useCallback, useEffect } from "react";

// ── Design tokens (match your existing site) ──────────────────────────────────
const CREAM = "#F8F5F0";
const GOLD = "#B89A6A";
const INK = "#1C1C1C";
const SERIF = "'Playfair Display', Georgia, serif";
const SANS = "'Inter', system-ui, sans-serif";

// ── Data ──────────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    name: "Indiranagar Residence",
    location: "Bengaluru, KA",
    before:
      "https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&w=1400&q=80",
    after:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Whitefield Villa",
    location: "Bengaluru, KA",
    before:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
    after:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Koramangala Loft",
    location: "Bengaluru, KA",
    before:
      "https://images.unsplash.com/photo-1494203484021-3c454daf695d?auto=format&fit=crop&w=1400&q=80",
    after:
      "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Sadashivnagar Penthouse",
    location: "Bengaluru, KA",
    before:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1400&q=80",
    after:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
  },
];

// ── Reveal (CSS-based intersection observer) ──────────────────────────────────
interface RevealProps {
  children: React.ReactNode;
  delay?: number;
}

function Reveal({ children, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ── BeforeAfter slider ────────────────────────────────────────────────────────
interface BeforeAfterProps {
  before: string;
  after: string;
  alt: string;
}

function BeforeAfter({ before, after, alt }: BeforeAfterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(50); // slider position 0–100
  const dragging = useRef(false);

  const clamp = (v: number) => Math.min(100, Math.max(0, v));

  const getPos = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return 50;
    return clamp(((clientX - rect.left) / rect.width) * 100);
  }, []);

  // Mouse
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    dragging.current = true;
    setPct(getPos(e.clientX));
  };
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!dragging.current) return;
      setPct(getPos(e.clientX));
    };
    const up = () => { dragging.current = false; };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
  }, [getPos]);

  // Touch
  const onTouchStart = (e: React.TouchEvent) => {
    dragging.current = true;
    setPct(getPos(e.touches[0].clientX));
  };
  useEffect(() => {
    const move = (e: TouchEvent) => {
      if (!dragging.current) return;
      setPct(getPos(e.touches[0].clientX));
    };
    const end = () => { dragging.current = false; };
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("touchend", end);
    return () => {
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", end);
    };
  }, [getPos]);

  // Keyboard (focus on handle → arrow keys)
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPct((v) => clamp(v - 2));
    if (e.key === "ArrowRight") setPct((v) => clamp(v + 2));
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "4/3",
        overflow: "hidden",
        borderRadius: "2px",
        cursor: "col-resize",
        userSelect: "none",
        touchAction: "none",
      }}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {/* AFTER — full width base layer */}
      <img
        src={after}
        alt={`${alt} — after`}
        draggable={false}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
        }}
      />

      {/* BEFORE — clipped to left side */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: `${pct}%`,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <img
          src={before}
          alt={`${alt} — before`}
          draggable={false}
          style={{
            position: "absolute",
            inset: 0,
            width: containerRef.current?.offsetWidth ?? "100%",
            height: "100%",
            objectFit: "cover",
            maxWidth: "none",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Divider line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${pct}%`,
          transform: "translateX(-50%)",
          width: "2px",
          background: "rgba(255,255,255,0.9)",
          pointerEvents: "none",
        }}
      />

      {/* Handle knob */}
      <div
        role="slider"
        aria-valuenow={Math.round(pct)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Compare before and after"
        tabIndex={0}
        onKeyDown={onKeyDown}
        style={{
          position: "absolute",
          top: "50%",
          left: `${pct}%`,
          transform: "translate(-50%, -50%)",
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          background: "white",
          boxShadow: "0 2px 12px rgba(0,0,0,0.22)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          cursor: "col-resize",
          outline: "none",
          zIndex: 10,
        }}
      >
        {/* Left arrow */}
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
          <path d="M7 1L1 7L7 13" stroke={INK} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {/* Right arrow */}
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
          <path d="M1 1L7 7L1 13" stroke={INK} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Labels */}
      <span
        style={{
          position: "absolute",
          bottom: 14,
          left: 14,
          fontSize: "10px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "white",
          background: "rgba(0,0,0,0.45)",
          padding: "3px 8px",
          borderRadius: "2px",
          pointerEvents: "none",
          opacity: pct > 15 ? 1 : 0,
          transition: "opacity 0.2s",
        }}
      >
        Before
      </span>
      <span
        style={{
          position: "absolute",
          bottom: 14,
          right: 14,
          fontSize: "10px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "white",
          background: "rgba(0,0,0,0.45)",
          padding: "3px 8px",
          borderRadius: "2px",
          pointerEvents: "none",
          opacity: pct < 85 ? 1 : 0,
          transition: "opacity 0.2s",
        }}
      >
        After
      </span>
    </div>
  );
}

// ── Portfolio section ─────────────────────────────────────────────────────────
export function Portfolio() {
  return (
    <section
      id="portfolio"
      style={{
        backgroundColor: CREAM,
        fontFamily: SANS,
        paddingTop: "7rem",
        paddingBottom: "9rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "2rem",
            marginBottom: "4rem",
          }}
        >
          <div style={{ maxWidth: "32rem" }}>
            <Reveal>
              <p
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: GOLD,
                  margin: 0,
                }}
              >
                Selected Work
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h2
                style={{
                  marginTop: "1.25rem",
                  marginBottom: 0,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 300,
                  lineHeight: 1.2,
                  fontFamily: SERIF,
                  color: INK,
                }}
              >
                Before &amp; After —{" "}
                <span style={{ fontStyle: "italic" }}>drag to compare.</span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={240}>
            <p
              style={{
                fontSize: "0.875rem",
                color: "#737373",
                maxWidth: "22rem",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              A selection of recent residential transformations. Drag the divider on
              each image to see the space as we found it, and as we left it.
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
            gap: "3.5rem",
          }}
        >
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 120}>
              <figure style={{ margin: 0 }}>
                <BeforeAfter before={p.before} after={p.after} alt={p.name} />
                <figcaption
                  style={{
                    marginTop: "1.25rem",
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 300,
                      fontFamily: SERIF,
                      color: INK,
                    }}
                  >
                    {p.name}
                  </span>
                  <span
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "#a3a3a3",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {p.location}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;