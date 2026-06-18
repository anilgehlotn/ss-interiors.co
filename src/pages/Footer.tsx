// import interiorImage from "../assets/ss-interiors-footer.jpg";

// const companyLinks = [
//   "Our Story",
//   "Portfolio",
//   "Services",
//   "Careers",
//   "Contact",
// ];

// const serviceLinks = [
//   "Residential Design",
//   "Commercial Spaces",
//   "Turnkey Projects",
//   "3D Visualization",
//   "Consultation",
// ];

// const socialLinks = ["Instagram", "Pinterest", "Houzz", "LinkedIn"];

// export function Footer() {
//   return (
//     <footer className="w-full bg-ss-black text-white">
//       <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
//         {/* Top section — two-column layout */}
//         <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
//           {/* Left — heading + paragraph */}
//           <div className="flex flex-col justify-center">
//             <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
//               Let&apos;s Design Your Dream Space.
//             </h2>
//             <p className="mt-6 max-w-lg text-base leading-relaxed text-white/60">
//               We blend timeless craftsmanship with modern sensibility to create
//               spaces that reflect who you are. Every detail, curated for you.
//             </p>
//           </div>

//           {/* Right — interior image */}
//           <div className="flex items-center justify-center lg:justify-end">
//             <img
//               src={interiorImage}
//               alt="Luxurious modern interior design"
//               className="h-auto w-full max-w-md rounded-xl object-cover lg:max-w-lg"
//               loading="lazy"
//             />
//           </div>
//         </div>

//         {/* Middle divider */}
//         <div className="my-16 border-t border-white/10" />

//         {/* Bottom section — three-column links grid */}
//         <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
//           {/* Column 1 — Company */}
//           <div>
//             <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-ss-gold">
//               Company
//             </h3>
//             <ul className="space-y-3">
//               {companyLinks.map((link) => (
//                 <li key={link}>
//                   <a
//                     href="#"
//                     className="text-sm text-white/50 transition-colors duration-200 hover:text-ss-gold"
//                   >
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 2 — Services */}
//           <div>
//             <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-ss-gold">
//               Services
//             </h3>
//             <ul className="space-y-3">
//               {serviceLinks.map((link) => (
//                 <li key={link}>
//                   <a
//                     href="#"
//                     className="text-sm text-white/50 transition-colors duration-200 hover:text-ss-gold"
//                   >
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 3 — Social Media */}
//           <div>
//             <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-ss-gold">
//               Social Media
//             </h3>
//             <ul className="space-y-3">
//               {socialLinks.map((link) => (
//                 <li key={link}>
//                   <a
//                     href="#"
//                     className="text-sm text-white/50 transition-colors duration-200 hover:text-ss-gold"
//                   >
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ss-gold pt-8 sm:flex-row">
//           <p className="text-sm text-white/40">
//             &copy; 2025 SS Interiors. All rights reserved.
//           </p>
//           <span className="text-2xl font-bold tracking-tight text-white">
//             SS Interiors
//           </span>
//         </div>
//       </div>
//     </footer>
//   );
// }
import interiorImage from "../assets/ss-interiors-footer.jpg";

const companyLinks = ["Our Story", "Portfolio", "Services", "Careers", "Contact"];
const serviceLinks = ["Residential Design", "Commercial Spaces", "Turnkey Projects", "3D Visualization", "Consultation"];

export function Footer() {
  return (
    <footer className="w-full bg-ss-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">

        {/* Main section — three columns */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">

          {/* Left — heading + paragraph */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Let&apos;s Design Your Dream Space.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/60">
              We blend timeless craftsmanship with modern sensibility to create
              spaces that reflect who you are. Every detail, curated for you.
            </p>
          </div>

          {/* Middle — Company + Services links */}
          <div className="flex items-center">
            <div className="grid grid-cols-2 gap-12 w-full">
              {/* Company */}
              <div>
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-ss-gold">
                  Company
                </h3>
                <ul className="space-y-3">
                  {companyLinks.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-white/50 transition-colors duration-200 hover:text-ss-gold">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-ss-gold">
                  Services
                </h3>
                <ul className="space-y-3">
                  {serviceLinks.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-white/50 transition-colors duration-200 hover:text-ss-gold">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right — interior image */}
          <div className="flex items-center justify-center lg:justify-end">
            <img
              src={interiorImage}
              alt="Luxurious modern interior design"
              className="h-auto w-full rounded-xl object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ss-gold pt-8 sm:flex-row">
          <p className="text-sm text-white/40">
            &copy; 2025 SS Interiors. All rights reserved.
          </p>
          <span className="text-2xl font-bold tracking-tight text-white">
            SS Interiors
          </span>
        </div>
      </div>
    </footer>
  );
}