import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import EmailAssistant from '@/components/EmailAssistant';
import YangonBusDemo from '@/components/YangonBusDemo';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <hr className="glow-line" />
        <About />
        <hr className="glow-line" />
        <Experience />
        <hr className="glow-line" />
        <Skills />
        <hr className="glow-line" />
        <Certifications />
        <hr className="glow-line" />
        <Projects />
        <hr className="glow-line" />
        <EmailAssistant />
        <hr className="glow-line" />
        <YangonBusDemo />
        <hr className="glow-line" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
