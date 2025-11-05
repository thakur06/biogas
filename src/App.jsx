import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { Services } from "./pages/Services"
import { Careers } from "./pages/Careers"
import { Contact } from "./pages/Contact"
import { Terms } from "./pages/Terms"
import { Privacy } from "./pages/Privacy"

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Navbar/>
        <main className="grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
