import "./App.css";
import Footer from "./Footer";
import { Route, Routes, Link } from "react-router-dom";
import About from "./About/index";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-me" element={<Contact />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
