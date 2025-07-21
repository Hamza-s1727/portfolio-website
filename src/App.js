import './App.css';
import Header from "./components/Header"
import Welcome from "./components/Welcome"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
