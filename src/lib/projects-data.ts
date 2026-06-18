// /* ────────────────────────────────────────────────────────────
//    PROJECT DATA — single source of truth for Home carousel,
//    Portfolio grid, and Project detail pages.
//    ──────────────────────────────────────────────────────────── */

// export interface Project {
//   slug: string;
//   name: string;
//   location: string;
//   /** TODO: Replace durations with real project timelines */
//   duration: string;
//   category: "Residential" | "Commercial";
//   /** Short tag for carousel cards (e.g. "Residential — Koramangala") */
//   tag: string;
//   /** TODO: Replace with real project descriptions */
//   description: string;
//   /** TODO: Replace all image paths with real project photos */
//   images: string[];
// }

// export const projects: Project[] = [
//   {
//     slug: "villa-koramangala",
//     name: "Villa Koramangala",
//     location: "Koramangala, Bangalore",
//     duration: "8 months",
//     category: "Residential",
//     tag: "Residential — Koramangala",
//     description:
//       /* TODO: Replace with real project narrative */
//       "A complete interior fit-out of a four-bedroom villa — from false ceilings and custom joinery through to flooring, lighting integration, and final styling. Designed in collaboration with the architect's office to preserve every spatial intention across two floors and an open-plan living pavilion.",
//     images: [
//       /* TODO: Replace with real project photos */
//       "/images/portfolio/villa-koramangala-1.jpg",
//       "/images/portfolio/villa-koramangala-2.jpg",
//       "/images/portfolio/villa-koramangala-3.jpg",
//     ],
//   },
//   {
//     slug: "penthouse-indiranagar",
//     name: "Penthouse Indiranagar",
//     location: "Indiranagar, Bangalore",
//     duration: "6 months",
//     category: "Residential",
//     tag: "Residential — Indiranagar",
//     description:
//       /* TODO: Replace with real project narrative */
//       "Luxury penthouse interior execution spanning the entire top floor — book-matched marble flooring, integrated cove lighting across 12-foot ceilings, bespoke walnut joinery, and a full kitchen fit-out with imported hardware. Handed over on schedule with zero punch-list items at final walkthrough.",
//     images: [
//       /* TODO: Replace with real project photos */
//       "/images/portfolio/penthouse-indiranagar-1.jpg",
//       "/images/portfolio/penthouse-indiranagar-2.jpg",
//       "/images/portfolio/penthouse-indiranagar-3.jpg",
//     ],
//   },
//   {
//     slug: "residence-jayanagar",
//     name: "Residence Jayanagar",
//     location: "Jayanagar, Bangalore",
//     duration: "10 months",
//     category: "Residential",
//     tag: "Residential — Jayanagar",
//     description:
//       /* TODO: Replace with real project narrative */
//       "Ground-up interior execution for a three-storey family residence — coordinating across civil, electrical, carpentry, and finishing trades under a single project timeline. Custom-designed wardrobes, vanity units, and a formal dining room with coffered ceilings and indirect lighting channels.",
//     images: [
//       /* TODO: Replace with real project photos */
//       "/images/portfolio/residence-jayanagar-1.jpg",
//       "/images/portfolio/residence-jayanagar-2.jpg",
//       "/images/portfolio/residence-jayanagar-3.jpg",
//     ],
//   },
//   {
//     slug: "apartment-whitefield",
//     name: "Apartment Whitefield",
//     location: "Whitefield, Bangalore",
//     duration: "5 months",
//     category: "Residential",
//     tag: "Residential — Whitefield",
//     description:
//       /* TODO: Replace with real project narrative */
//       "A compact luxury apartment interior — maximising spatial utility without compromising material quality. Engineered wood flooring, full-height wardrobes with integrated dressing stations, a modular kitchen with stone countertops, and curated soft furnishings throughout.",
//     images: [
//       /* TODO: Replace with real project photos */
//       "/images/portfolio/apartment-whitefield-1.jpg",
//       "/images/portfolio/apartment-whitefield-2.jpg",
//       "/images/portfolio/apartment-whitefield-3.jpg",
//     ],
//   },
//   {
//     slug: "studio-office-mgroad",
//     name: "Studio Office MG Road",
//     location: "MG Road, Bangalore",
//     duration: "4 months",
//     category: "Commercial",
//     tag: "Commercial — MG Road",
//     description:
//       /* TODO: Replace with real project narrative */
//       "A boutique design studio office — open-plan workspace with acoustic ceiling treatments, custom millwork reception desk, glass-partitioned meeting rooms, and a material library wall. Executed to match the architect's precise brand aesthetic across lighting, furniture, and spatial flow.",
//     images: [
//       /* TODO: Replace with real project photos */
//       "/images/portfolio/studio-office-mgroad-1.jpg",
//       "/images/portfolio/studio-office-mgroad-2.jpg",
//       "/images/portfolio/studio-office-mgroad-3.jpg",
//     ],
//   },
//   {
//     slug: "villa-hsr-layout",
//     name: "Villa HSR Layout",
//     location: "HSR Layout, Bangalore",
//     duration: "9 months",
//     category: "Residential",
//     tag: "Residential — HSR Layout",
//     description:
//       /* TODO: Replace with real project narrative */
//       "Full interior execution of a contemporary villa — double-height living room with feature stone cladding, an integrated home theatre, master suite with walk-in closet, and landscape-facing floor-to-ceiling glazing coordination. Every detail specification from the architect's package executed without substitution.",
//     images: [
//       /* TODO: Replace with real project photos */
//       "/images/portfolio/villa-hsr-layout-1.jpg",
//       "/images/portfolio/villa-hsr-layout-2.jpg",
//       "/images/portfolio/villa-hsr-layout-3.jpg",
//     ],
//   },
// ];

// export const categories = ["All", ...new Set(projects.map((p) => p.category))] as const;
export interface Project {
  slug: string;
  name: string;
  location: string;
  duration: string;
  category: "Residential" | "Commercial";
  tag: string;
  description: string;
  images: string[];
}

export const projects: Project[] = [
  {
    slug: "villa-koramangala",
    name: "Villa Koramangala",
    location: "Koramangala, Bangalore",
    duration: "8 months",
    category: "Residential",
    tag: "Residential — Koramangala",
    description:
      "A complete interior fit-out of a four-bedroom villa — from false ceilings and custom joinery through to flooring, lighting integration, and final styling. Designed in collaboration with the architect's office to preserve every spatial intention across two floors and an open-plan living pavilion.",
    images: [
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=80",
    ],
  },
  {
    slug: "penthouse-indiranagar",
    name: "Penthouse Indiranagar",
    location: "Indiranagar, Bangalore",
    duration: "6 months",
    category: "Residential",
    tag: "Residential — Indiranagar",
    description:
      "Luxury penthouse interior execution spanning the entire top floor — book-matched marble flooring, integrated cove lighting across 12-foot ceilings, bespoke walnut joinery, and a full kitchen fit-out with imported hardware. Handed over on schedule with zero punch-list items at final walkthrough.",
    images: [
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=900&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    slug: "residence-jayanagar",
    name: "Residence Jayanagar",
    location: "Jayanagar, Bangalore",
    duration: "10 months",
    category: "Residential",
    tag: "Residential — Jayanagar",
    description:
      "Ground-up interior execution for a three-storey family residence — coordinating across civil, electrical, carpentry, and finishing trades under a single project timeline. Custom-designed wardrobes, vanity units, and a formal dining room with coffered ceilings and indirect lighting channels.",
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1618219740975-d40978bb7378?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=80",
    ],
  },
  {
    slug: "apartment-whitefield",
    name: "Apartment Whitefield",
    location: "Whitefield, Bangalore",
    duration: "5 months",
    category: "Residential",
    tag: "Residential — Whitefield",
    description:
      "A compact luxury apartment interior — maximising spatial utility without compromising material quality. Engineered wood flooring, full-height wardrobes with integrated dressing stations, a modular kitchen with stone countertops, and curated soft furnishings throughout.",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=900&q=80",
    ],
  },
  {
    slug: "studio-office-mgroad",
    name: "Studio Office MG Road",
    location: "MG Road, Bangalore",
    duration: "4 months",
    category: "Commercial",
    tag: "Commercial — MG Road",
    description:
      "A boutique design studio office — open-plan workspace with acoustic ceiling treatments, custom millwork reception desk, glass-partitioned meeting rooms, and a material library wall. Executed to match the architect's precise brand aesthetic across lighting, furniture, and spatial flow.",
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=80",
    ],
  },
  {
    slug: "villa-hsr-layout",
    name: "Villa HSR Layout",
    location: "HSR Layout, Bangalore",
    duration: "9 months",
    category: "Residential",
    tag: "Residential — HSR Layout",
    description:
      "Full interior execution of a contemporary villa — double-height living room with feature stone cladding, an integrated home theatre, master suite with walk-in closet, and landscape-facing floor-to-ceiling glazing coordination. Every detail specification from the architect's package executed without substitution.",
    images: [
      "https://images.unsplash.com/photo-1618219740975-d40978bb7378?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=900&q=80",
    ],
  },
];

export const categories = ["All", ...new Set(projects.map((p) => p.category))] as const;