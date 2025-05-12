import './Tailwind.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/AboutMe';
import Skills from './components/Skills/SkillsSection';
import Projects from './components/Project/ProjectSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#1a1a24] text-white">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </div>
  );
}

export default App;
