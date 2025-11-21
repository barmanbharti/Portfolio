import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
