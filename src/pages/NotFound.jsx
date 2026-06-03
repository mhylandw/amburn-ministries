import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'

export default function NotFound() {
  usePageTitle('Page Not Found | Amburn Ministries')

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <p className="text-6xl font-bold text-stone-300 mb-4">404</p>
      <h1 className="text-2xl font-semibold text-stone-800 mb-3">Page not found</h1>
      <p className="text-stone-500 max-w-md mb-8">
        This page doesn't exist or may have moved. Let's get you back on the right path.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          to="/"
          className="px-6 py-3 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors"
        >
          Go home
        </Link>
        <Link
          to="/prayer"
          className="px-6 py-3 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition-colors"
        >
          Submit a prayer request
        </Link>
      </div>
    </div>
  )
}
