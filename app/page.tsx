import Footer from "@/components/footer/Footer";
import Contact from "@/components/contact/Contact";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";
import TechStack from "@/components/tech-stack/TechStack";
import Background from "@/components/layout/Background";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <Background>
      <Navbar />
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </Background>
  );
}