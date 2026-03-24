import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.avif'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Books', to: '/books' },
  { label: 'Store', to: '/store' },
  { label: 'Blog', to: '/blog' },
  { label: 'Resources', to: '/resources' },
  { label: 'Missions', to: '/missions' },
  { label: 'Donate', to: '/donate' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-coal-900/95 backdrop-blur-sm shadow-lg shadow-black/40' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Amburn Ministries" className="h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-flame-400 ${
                pathname === to ? 'text-flame-400' : 'text-white/80'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-white/80 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-coal-800 border-t border-coal-600 px-4 py-4 flex flex-col gap-4">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`text-base font-medium transition-colors hover:text-flame-400 ${
                pathname === to ? 'text-flame-400' : 'text-white/80'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
