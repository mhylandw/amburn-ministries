import { Link, useLocation } from 'react-router-dom'
import { Home, BookOpen, FileText, Layers, Heart } from 'lucide-react'

const tabs = [
  { label: 'Home', to: '/', icon: Home },
  { label: 'Books', to: '/books', icon: BookOpen },
  { label: 'Blog', to: '/blog', icon: FileText },
  { label: 'Resources', to: '/resources', icon: Layers },
  { label: 'Donate', to: '/donate', icon: Heart },
]

export default function BottomTabBar() {
  const { pathname } = useLocation()

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-coal-900/97 backdrop-blur-md border-t border-white/10 shadow-2xl">
      <div
        className="flex items-stretch justify-around"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        {tabs.map(({ label, to, icon: Icon }) => {
          const active = pathname === to || (to !== '/' && pathname.startsWith(to))
          return (
            <Link
              key={to}
              to={to}
              className={`flex flex-col items-center justify-center gap-1 py-2 flex-1 min-w-0 transition-colors ${
                active ? 'text-flame-400' : 'text-white/50 hover:text-white/80'
              }`}
            >
              <Icon size={20} strokeWidth={active ? 2.2 : 1.8} />
              <span className="text-[10px] font-sans font-medium tracking-wide leading-none">
                {label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
