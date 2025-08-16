import './App.css';
import Header from "./components/Header"
import Welcome from "./components/Welcome"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from './components/Projects';
import Contact from "./components/Contact"

import { useRef } from "react"


function App() {

  const welcomeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  


  function scrollToSection(ref) {
    if (ref.current) {
      ref.current.scrollIntoView({behavior: "smooth"})
    }
  }


  return (
    <div className="App">
      <Header refs={{welcomeRef, aboutRef, skillsRef, projectsRef, contactRef}} scrollToSection={scrollToSection}/>
      <div ref={welcomeRef}> <Welcome /> </div>
      <div ref={aboutRef}><About /> </div>
      <div ref={skillsRef}> <Skills /> </div>
      <div ref={projectsRef}> <Projects /> </div>
      <div ref={contactRef}> <Contact /> </div>
    </div>
  );
}

export default App;
