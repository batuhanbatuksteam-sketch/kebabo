import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar  from './components/Navbar'
import Footer  from './components/Footer'
import Home    from './pages/Home'
import About   from './pages/About'
import Menu    from './pages/Menu'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"           element={<Home />}    />
        <Route path="/hakkimizda" element={<About />}   />
        <Route path="/menu"       element={<Menu />}    />
        <Route path="/galeri"     element={<Gallery />} />
        <Route path="/iletisim"   element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
