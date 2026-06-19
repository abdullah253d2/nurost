import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Team from "@/components/sections/Team";
import Blog from "@/components/sections/Blog";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="divider" />
      <Services />
      <div className="divider" />
      <Process />
      <div className="divider" />
      <Testimonials />
      <div className="divider" />
      <Pricing />
      <div className="divider" />
      <Team />
      <div className="divider" />
      <Blog />
      <div className="divider" />
      <CTA />
      <div className="divider" />
      <Contact />
      <Footer />
    </main>
  );
}
