import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User, Clock } from 'lucide-react'
import { posts } from '../data/posts'

export default function Blog() {
  return (
    <div className="pt-16">
      <div className="bg-coal-800 py-20 px-4 text-center border-b border-coal-600">
        <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">The Overcomer Blog</p>
        <h1 className="font-serif text-4xl md:text-5xl text-white">Stories & Reflections</h1>
      </div>

      <section className="py-16 px-4 bg-coal-900">
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block bg-coal-800 border border-coal-600 rounded-2xl overflow-hidden hover:border-flame-500/40 transition-colors group"
            >
              {/* Cover image */}
              {post.image && (
                <div className="w-full h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-flame-500 text-xs font-sans uppercase tracking-widest bg-flame-500/10 px-3 py-1 rounded-full">
                    {post.tag}
                  </span>
                </div>
                <h2 className="font-serif text-2xl text-white mb-3 group-hover:text-flame-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-white/50 font-sans leading-relaxed mb-5 text-sm">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-white/30 text-xs font-sans">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
                    <span className="flex items-center gap-1"><User size={12} />{post.authors}</span>
                    <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                  </div>
                  <span className="flex items-center gap-1 text-flame-500 group-hover:gap-2 transition-all">
                    Read <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
