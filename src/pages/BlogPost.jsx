import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, User, Clock, Mail, ArrowRight, Heart } from 'lucide-react'
import { posts } from '../data/posts'
import EmailSubscribe from '../components/EmailSubscribe'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)
  const related = post
    ? posts.filter((p) => p.slug !== slug && (p.tag === post.tag || p.authors === post.authors)).slice(0, 3)
    : []

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

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-coal-600">
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/40 hover:text-flame-400 text-sm font-sans transition-colors">
              <ArrowLeft size={14} /> Back to Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Email opt-in */}
      <section className="py-16 px-4 bg-coal-800 border-t border-coal-600">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-10 h-10 rounded-full bg-flame-500/10 border border-flame-500/30 flex items-center justify-center mx-auto mb-4">
            <Mail className="text-flame-500" size={18} />
          </div>
          <h3 className="font-serif text-2xl text-white mb-2">Get new posts by email</h3>
          <p className="text-white/40 font-sans text-sm mb-6">Stories, reflections, and encouragement — straight to your inbox.</p>
          <EmailSubscribe />
          <p className="text-white/20 font-sans text-xs mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Prayer request CTA */}
      <section className="py-12 px-4 bg-coal-900 border-t border-coal-700">
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 bg-coal-800 border border-coal-600 rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-flame-500/10 border border-flame-500/30 flex items-center justify-center shrink-0">
              <Heart className="text-flame-500" size={18} />
            </div>
            <div>
              <p className="text-white font-serif text-lg">Need prayer?</p>
              <p className="text-white/40 font-sans text-sm">We're believing with you.</p>
            </div>
          </div>
          <Link
            to="/prayer"
            className="inline-flex items-center gap-2 bg-flame-500 hover:bg-flame-400 text-white font-sans font-semibold text-sm px-6 py-2.5 rounded-full transition-colors whitespace-nowrap"
          >
            Submit a Request <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16 px-4 bg-coal-900 border-t border-coal-700">
          <div className="max-w-2xl mx-auto">
            <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-6">Keep Reading</p>
            <div className="flex flex-col gap-4">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="flex items-start gap-4 bg-coal-800 border border-coal-600 rounded-xl p-4 hover:border-flame-500/40 transition-colors group"
                >
                  {p.image && (
                    <img src={p.image} alt={p.title} className="w-20 h-16 object-cover rounded-lg shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <span className="text-flame-500 text-xs font-sans uppercase tracking-widest">{p.tag}</span>
                    <h4 className="font-serif text-white text-base mt-1 group-hover:text-flame-300 transition-colors line-clamp-2">{p.title}</h4>
                    <p className="text-white/30 text-xs font-sans mt-1">{p.readTime}</p>
                  </div>
                  <ArrowRight size={16} className="text-white/20 group-hover:text-flame-400 transition-colors shrink-0 mt-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
