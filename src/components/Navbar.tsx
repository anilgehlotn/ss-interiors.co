// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X, Phone } from "lucide-react";

// const navLinks = [
//   { label: "Home", to: "/" },
//   { label: "Services", to: "/services" },
//   { label: "About", to: "/about" },
//   { label: "Portfolio", to: "/portfolio" },
//   { label: "Contact", to: "/contact" },
// ];

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <nav
//       id="main-navbar"
//       className="fixed top-0 left-0 right-0 z-50 w-full"
//     >
//       {/* Glass-tinted bar */}
//       <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-12">
//         {/* Logo */}
//         <Link
//           to="/"
//           id="navbar-logo"
//           className="font-serif text-xl font-bold tracking-[0.2em] text-white transition-colors hover:text-gold-400 sm:text-2xl"
//         >
//           S S INTERIORS
//         </Link>

//         {/* Desktop Nav Links */}
//         <ul className="hidden items-center gap-8 lg:flex">
//           {navLinks.map((link) => (
//             <li key={link.label}>
//               <Link
//                 to={link.to}
//                 className="nav-link font-sans text-[13px] font-medium uppercase tracking-[0.15em] text-white/80 transition-colors hover:text-white"
//               >
//                 {link.label}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Phone + Hamburger */}
//         <div className="flex items-center gap-5">
//           <a
//             href="tel:+919980802384"
//             id="navbar-phone"
//             className="hidden items-center gap-2 font-sans text-[13px] font-medium tracking-wide text-white/80 transition-colors hover:text-gold-400 md:flex"
//           >
//             <Phone size={14} strokeWidth={1.5} />
//             +91 9342843897
//           </a>

//           {/* Mobile hamburger */}
//           <button
//             id="navbar-hamburger"
//             onClick={() => setMobileOpen(!mobileOpen)}
//             className="relative z-50 flex h-10 w-10 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 lg:hidden"
//             aria-label="Toggle navigation menu"
//           >
//             {mobileOpen ? <X size={22} /> : <Menu size={22} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Drawer */}
//       <div
//         className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
//           mobileOpen
//             ? "pointer-events-auto opacity-100"
//             : "pointer-events-none opacity-0"
//         }`}
//       >
//         {/* Backdrop */}
//         <div
//           className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//           onClick={() => setMobileOpen(false)}
//         />

//         {/* Drawer Panel */}
//         <div
//           className={`absolute right-0 top-0 h-full w-[280px] bg-charcoal-950/95 backdrop-blur-xl transition-transform duration-500 ease-out ${
//             mobileOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           <div className="flex flex-col gap-1 px-8 pt-24">
//             {navLinks.map((link, i) => (
//               <Link
//                 key={link.label}
//                 to={link.to}
//                 onClick={() => setMobileOpen(false)}
//                 className="border-b border-white/5 py-4 font-sans text-[15px] font-medium uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-gold-400"
//                 style={{ animationDelay: `${i * 60}ms` }}
//               >
//                 {link.label}
//               </Link>
//             ))}

//             <a
//               href="tel:+919980802384"
//               className="mt-6 flex items-center gap-2 font-sans text-[13px] font-medium tracking-wide text-gold-400"
//             >
//               <Phone size={14} strokeWidth={1.5} />
//               +91 99808 02384
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      id="main-navbar"
      className="fixed inset-x-3 top-3 z-50 sm:inset-x-6 sm:top-4 lg:inset-x-12 lg:top-6"
    >
      {/* Floating glass pill */}
      <div className="mx-auto flex max-w-[1320px] items-center justify-between rounded-full border border-white/10 bg-charcoal-950/80 px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-xl lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          id="navbar-logo"
          className="font-serif text-lg font-bold tracking-[0.2em] text-white transition-colors hover:text-gold-400 sm:text-xl"
        >
          S S INTERIORS
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className="nav-link font-sans text-[12px] font-medium uppercase tracking-[0.15em] text-white/75 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Phone + CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+919980802384"
            id="navbar-phone"
            className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-sans text-[12px] font-medium tracking-wide text-white/75 transition-colors hover:border-gold-400/40 hover:text-gold-400 md:flex"
          >
            <Phone size={13} strokeWidth={1.5} />
            +91 99808 02384
          </a>

          <Link
            to="/contact"
            className="hidden items-center rounded-full bg-gold-400 px-5 py-2 font-sans text-[12px] font-semibold uppercase tracking-[0.1em] text-charcoal-950 transition-colors hover:bg-gold-300 sm:inline-flex"
          >
            Enquire Now
          </Link>

          {/* Mobile hamburger */}
          <button
            id="navbar-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-[280px] rounded-l-3xl bg-charcoal-950/95 backdrop-blur-xl transition-transform duration-500 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-1 px-8 pt-24">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="border-b border-white/5 py-4 font-sans text-[15px] font-medium uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-gold-400"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 flex items-center justify-center rounded-full bg-gold-400 px-5 py-3 font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal-950"
            >
              Enquire Now
            </Link>

            <a
              href="tel:+919980802384"
              className="mt-4 flex items-center gap-2 font-sans text-[13px] font-medium tracking-wide text-gold-400"
            >
              <Phone size={14} strokeWidth={1.5} />
              +91 99808 02384
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}