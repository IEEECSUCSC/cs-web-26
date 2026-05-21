import About from "@/components/About";
import Contact from "@/components/Contact";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import Timeline from "@/components/Timeline";
import WhatWeDo from "@/components/WhatWeDo";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatWeDo />
        <Timeline />
        <Events />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
