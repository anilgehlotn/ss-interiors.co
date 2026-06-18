import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Portfolio from "./pages/Portfolio"
import ProjectDetail from "./pages/ProjectDetail"
import Difference from "./pages/Difference"
import Testimonials from "./pages/Testimonials"
// import ProcessSection from "./pages/OurProcess"
import {Contact}  from "./pages/Contact"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<ProjectDetail />} />
        <Route path="/difference" element={<Difference />} />
        <Route path="/testimonials" element={<Testimonials />} />
        {/* <Route path="/process" element={<ProcessSection />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
