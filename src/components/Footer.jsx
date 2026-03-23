import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react'
import logo from '../assets/logo.avif'

const socials = [
  { icon: Facebook, href: 'https://www.facebook.com/AmburnMusic', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/amburnmusic/', label: 'Instagram' },
  { icon: Youtube, href: 'https://www.youtube.com/channel/UCFHvg1qehn1Wc1OXpXALUzw', label: 'YouTube' },
]

// TikTok icon (Lucide doesn't have one)
function TikTokIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-coal-800 border-t border-coal-600 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link to="/">
              <img src={logo} alt="Amburn Ministries" className="h-14 w-auto" />
            </Link>
            <p className="text-white/50 text-sm font-sans tracking-widest uppercase">Heal · Deliver · Restore</p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-2">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Pages</p>
            {[['Home', '/'], ['About', '/about'], ['Books', '/books'], ['Store', '/store'], ['Blog', '/blog'], ['Resources', '/resources'], ['Donate', '/donate'], ['Contact', '/contact']].map(([label, to]) => (
              <Link key={to} to={to} className="text-white/60 hover:text-flame-400 text-sm transition-colors">{label}</Link>
            ))}
          </div>

          {/* Social + Contact */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Follow Us</p>
              <div className="flex items-center gap-4">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="text-white/50 hover:text-flame-400 transition-colors" aria-label={label}>
                    <Icon size={20} />
                  </a>
                ))}
                <a href="http://www.tiktok.com/@michael_amburn" target="_blank" rel="noopener noreferrer"
                  className="text-white/50 hover:text-flame-400 transition-colors" aria-label="TikTok">
                  <TikTokIcon size={20} />
                </a>
              </div>
            </div>
            <a href="mailto:admin@amburnministries.com"
              className="flex items-center gap-2 text-white/50 hover:text-flame-400 transition-colors text-sm">
              <Mail size={15} />
              admin@amburnministries.com
            </a>
          </div>
        </div>

        <div className="border-t border-coal-600 mt-10 pt-6 text-center text-white/30 text-xs">
          © {new Date().getFullYear()} Amburn Media, LLC · All rights reserved
        </div>
      </div>
    </footer>
  )
}
