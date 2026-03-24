import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LeadMagnetPopup from './components/LeadMagnetPopup'
import RadioMiniPlayer from './components/RadioMiniPlayer'
import BottomTabBar from './components/BottomTabBar'
import { RadioProvider } from './context/RadioContext'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Donate from './pages/Donate'
import Resources from './pages/Resources'
import Books from './pages/Books'
import Ebooks from './pages/Ebooks'
import Store from './pages/Store'
import CheckoutSuccess from './pages/CheckoutSuccess'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import Radio from './pages/Radio'
import Discern from './pages/Discern'
import Missions from './pages/Missions'
import Media from './pages/Media'
import Podcast from './pages/Podcast'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <RadioProvider>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <LeadMagnetPopup />
        <Navbar />
        {/* On mobile, add bottom padding for BottomTabBar (64px) and RadioMiniPlayer (approx 64px when active) */}
        <main className="flex-1 md:pb-0 pb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/books" element={<Books />} />
            <Route path="/ebooks" element={<Ebooks />} />
            <Route path="/store" element={<Store />} />
            <Route path="/checkout-success" element={<CheckoutSuccess />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/radio" element={<Radio />} />
            <Route path="/discern" element={<Discern />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/media" element={<Media />} />
            <Route path="/podcast" element={<Podcast />} />
          </Routes>
        </main>
        <RadioMiniPlayer />
        <BottomTabBar />
        <Footer />
      </div>
    </RadioProvider>
  )
}
