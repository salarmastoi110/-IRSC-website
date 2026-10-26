import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Research from './pages/Research.jsx'
import Scholars from './pages/Scholars.jsx'
import Publications from './pages/Publications.jsx'
import Opportunities from './pages/Opportunities.jsx'
import Events from './pages/Events.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Research />} />
        <Route path="/scholars" element={<Scholars />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
