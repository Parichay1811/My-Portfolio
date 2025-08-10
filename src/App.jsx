import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar.jsx"
import Home from "./pages/Home/Home.jsx"
import Experience from "./pages/Experience/Experience.jsx"
import Skills from "./pages/Skills/Skills.jsx"
import Projects from "./pages/Projects/Projects.jsx"
import Contact from "./pages/Contact/Contact.jsx"
import About from "./pages/About/About.jsx"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
