import { Suspense, lazy, useState } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Navbar from "./components/Navbar/Navbar.jsx"
import Loader from "./components/Loader/Loader.jsx"
import PageTransition from "./components/PageTransition/PageTransition.jsx"
import Home from "./pages/Home/Home.jsx"
import Experience from "./pages/Experience/Experience.jsx"
import Skills from "./pages/Skills/Skills.jsx"
import Projects from "./pages/Projects/Projects.jsx"
import Contact from "./pages/Contact/Contact.jsx"
import About from "./pages/About/About.jsx"
import "./App.css"

const Background3D = lazy(() => import("./components/Background3D/Background3D.jsx"))

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
        <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [booting, setBooting] = useState(true)

  return (
    <Router>
      <div className="App">
        <Suspense fallback={null}>
          <Background3D />
        </Suspense>
        <AnimatePresence>{booting && <Loader onDone={() => setBooting(false)} />}</AnimatePresence>
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  )
}

export default App
