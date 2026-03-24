import { Link } from 'react-router-dom'

export default function Missions() {
  return (
    <div className="pt-16">

      {/* Page header */}
      <div className="bg-coal-800 py-20 px-4 text-center border-b border-coal-600">
        <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">Missions</p>
        <h1 className="font-serif text-4xl md:text-5xl text-white">Healing &amp; Worship Tour</h1>
        <p className="text-white/50 font-sans mt-4 text-lg">Indonesia · 2025</p>
      </div>

      {/* Video */}
      <section className="py-16 px-4 bg-coal-900">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/Gu5wZN0Wr-M?rel=0"
              title="Healing and Worship Tour 2025 — Indonesia"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 bg-coal-800">
        <div className="max-w-3xl mx-auto">
          <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">The Trip</p>
          <h2 className="font-serif text-3xl text-white mb-6">
            Taking the presence of God across the world.
          </h2>
          <p className="text-white/60 font-sans leading-relaxed mb-4">
            In 2025, Michael and Katrina traveled to Indonesia on a healing and worship tour — bringing prayer, music, and the love of God to communities hungry for encounter.
          </p>
          <p className="text-white/60 font-sans leading-relaxed mb-4">
            What happened there wasn't a program or a production. It was real people, real prayer, and a real God showing up in the middle of it all.
          </p>
          <p className="text-white/60 font-sans leading-relaxed">
            This is what Amburn Ministries is built for — not just digital content, but showing up in person and believing that God moves when His people go.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-coal-900 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">Partner With Us</p>
          <h2 className="font-serif text-3xl text-white mb-6">Help us go further.</h2>
          <p className="text-white/60 font-sans leading-relaxed mb-8">
            Trips like this are only possible because of people who believe in the mission. Your support sends us.
          </p>
          <Link
            to="/donate"
            className="inline-flex items-center gap-2 bg-flame-500 hover:bg-flame-400 text-white font-sans font-semibold px-8 py-4 rounded-full transition-colors"
          >
            Support the Mission
          </Link>
        </div>
      </section>

    </div>
  )
}
