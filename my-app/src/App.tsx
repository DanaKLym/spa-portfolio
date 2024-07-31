import "./App.css";
import Footer from "./Footer/Footer";
import { Route, Routes, Link } from "react-router-dom";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-me" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
