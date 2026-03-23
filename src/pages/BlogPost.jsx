import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react'
import { posts } from '../data/posts'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/40 font-sans mb-4">Post not found.</p>
          <Link to="/blog" className="text-flame-400 hover:underline text-sm font-sans">← Back to Blog</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16">
      <div className="bg-coal-800 py-16 px-4 border-b border-coal-600">
        <div className="max-w-2xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/40 hover:text-flame-400 text-sm font-sans transition-colors mb-8">
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          <span className="text-flame-500 text-xs font-sans uppercase tracking-widest bg-flame-500/10 px-3 py-1 rounded-full mb-6 inline-block">
            {post.tag}
          </span>
          <h1 className="font-serif text-3xl md:text-4xl text-white mt-4 mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-white/30 text-xs font-sans">
            <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
            <span className="flex items-center gap-1"><User size={12} />{post.authors}</span>
            <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Hero image */}
      {post.image && (
        <div className="w-full h-72 md:h-96 overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      )}

      <section className="py-16 px-4 bg-coal-900">
        <div className="max-w-2xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none font-sans text-white/70 leading-relaxed">
            {post.body.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return <h3 key={i} className="font-serif text-xl text-white mt-8 mb-3">{paragraph.replace(/\*\*/g, '')}</h3>
              }
              if (paragraph.startsWith('*') && paragraph.endsWith('*')) {
                return <p key={i} className="italic text-white/60 border-l-2 border-flame-500/40 pl-4 my-6">{paragraph.replace(/\*/g, '')}</p>
              }
              if (paragraph.startsWith('**')) {
                // Mixed bold inline
                return <p key={i} className="mb-5" dangerouslySetInnerHTML={{
                  __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                }} />
              }
              return <p key={i} className="mb-5">{paragraph}</p>
            })}
          </div>

          <div className="mt-16 pt-8 border-t border-coal-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/40 hover:text-flame-400 text-sm font-sans transition-colors">
              <ArrowLeft size={14} /> Back to Blog
            </Link>
            <a
              href="https://michaels-newsletter-e5cb1e.beehiiv.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-flame-500 hover:bg-flame-400 text-white font-sans font-semibold text-sm px-6 py-2.5 rounded-full transition-colors"
            >
              Subscribe for more
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
