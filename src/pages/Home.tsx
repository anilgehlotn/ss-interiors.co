import HeroSection from "../components/HeroSection";
import ProjectCarousel from "../components/ProjectCarousel";
// import OurProcess from "./OurProcess";
import Testimonials from "./Testimonials";
import {ProcessSection} from "./OurProcess";
import { Contact } from "./Contact";
import { AboutSection }    from "./AboutSection";
import Before from "./Before";
import { Footer } from "./Footer";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectCarousel />
      <ProcessSection />
      {/* <Testimonials/> */}
        <AboutSection />
      <Testimonials/>
      <Contact />
      <Before/>
      <Footer/>

      {/* TODO: Add Footer component here once it exists — e.g. <Footer /> */}
    </main>
  );
}
