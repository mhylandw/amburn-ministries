import mkPhoto from '../assets/mk-photo.avif'
import ministryPhoto from '../assets/ministry-photo.avif'
import mkTogetherPhoto from '../assets/IMG_2773_edited.jpg'
import headerBg from '../assets/mk-header.png'

export default function About() {
  return (
    <div className="pt-16">

      {/* Page header */}
      <div className="relative py-24 px-4 text-center border-b border-coal-600 overflow-hidden">
        <div className="absolute inset-0">
          <img src={headerBg} alt="" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-coal-900/80" />
        </div>
        <div className="relative z-10">
          <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">Who We Are</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white">About Amburn Ministries</h1>
        </div>
      </div>

      {/* Intro */}
      <section className="py-20 px-4 bg-coal-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-white/70 font-sans leading-relaxed text-lg mb-4">
              Amburn Ministries was born out of a journey—not a platform. A journey marked by questions, broken places, unexpected encounters with God, and a growing realization that what people are really searching for isn't more information… it's connection.
            </p>
            <p className="text-white/60 font-sans leading-relaxed">
              At its core, Amburn Ministries exists to help people rediscover God—not as a distant idea, but as a present, personal Father who speaks, leads, heals, and restores.
            </p>
            <p className="text-white/60 font-sans leading-relaxed mt-4">
              This ministry is built on the belief that transformation doesn't come through striving, formulas, or performance. It comes through relationship. Through learning how to hear His voice, recognize His presence, and walk with Him in everyday life.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img src={mkPhoto} alt="Michael & Katrina Amstutz-Washburn" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Heart */}
      <section className="py-20 px-4 bg-coal-800">
        <div className="max-w-3xl mx-auto">
          <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">Our Heart</p>
          <h2 className="font-serif text-3xl text-white mb-6">
            From knowing <em>about</em> God… to actually knowing Him.
          </h2>
          <p className="text-white/60 font-sans leading-relaxed mb-8">
            We carry a simple but weighty calling: to help people move from knowing about God… to actually knowing Him.
          </p>
          <ul className="flex flex-col gap-4">
            {[
              'Creating space for honest questions',
              'Breaking down spiritual confusion and religious pressure',
              'Helping people hear God clearly for themselves',
              'Leading others into a life of intimacy, identity, and freedom',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-flame-500 shrink-0" />
                <span className="text-white/70 font-sans">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-white/60 font-sans leading-relaxed mt-8">
            Everything we do—whether through books, music, media, or live gatherings—is designed to bring people into a deeper awareness of who God really is and who they are in Him.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-4 bg-coal-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="font-serif text-3xl text-white">One mission. Multiple expressions.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Teaching & Discipleship',
                body: 'Practical, honest teaching that helps people understand how to walk with God in real life—not just in theory.',
              },
              {
                title: 'Media & Creative Content',
                body: 'Books, devotionals, and digital tools (like the Discern app) designed to help people engage in daily, two-way conversation with God.',
              },
              {
                title: 'Music & Worship',
                body: 'Original music created to open hearts, shift perspective, and create space for encounter—not just performance.',
              },
              {
                title: 'Mentorship & Equipping',
                body: 'Helping others grow in confidence, identity, and spiritual maturity so they can live with clarity and purpose.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-coal-800 rounded-xl p-6 border border-coal-600">
                <h3 className="font-serif text-xl text-white mb-3">{item.title}</h3>
                <p className="text-white/60 font-sans leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 px-4 bg-coal-800">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img src={mkTogetherPhoto} alt="Michael & Katrina Amstutz-Washburn" className="w-full h-full object-cover object-top" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">The Story Behind It</p>
            <h2 className="font-serif text-3xl text-white mb-6">Built from redeemed ones.</h2>
            <p className="text-white/60 font-sans leading-relaxed mb-4">
              Amburn Ministries isn't built from a perfect background—it's built from redeemed ones.
            </p>
            <p className="text-white/60 font-sans leading-relaxed mb-4">
              Out of seasons of confusion, striving, and searching came a revelation: God was never distant. He was always speaking. Always present. Always inviting relationship.
            </p>
            <p className="text-white/60 font-sans leading-relaxed mb-4">
              What began as personal journaling and raw conversations with God eventually became something meant to be shared—through writing, music, and tools that help others experience that same connection for themselves.
            </p>
            <p className="text-white/60 font-sans leading-relaxed">
              Michael and Katrina Amstutz-Washburn lead this ministry together. Each carries their own story of redemption, and together they bring a shared calling to help others encounter God in a way that is personal, honest, and lasting. Katrina's teaching and creative materials are coming soon.
            </p>
          </div>
        </div>
      </section>

      {/* Where We're Going */}
      <section className="py-24 px-4 bg-coal-900 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">Where We're Going</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">This is just the beginning.</h2>
          <p className="text-white/60 font-sans leading-relaxed mb-8">
            Amburn Ministries is growing into a platform that reaches across cultures and generations—through media, missions, and real-life encounters—to help people experience God in a way that is personal, transformative, and lasting.
          </p>
          <div className="flex flex-col gap-2 text-white/40 font-sans text-sm italic">
            <span>Not hype.</span>
            <span>Not noise.</span>
            <span>Not performance.</span>
          </div>
          <p className="mt-8 text-white/70 font-sans font-medium">Just people… learning to walk with God.</p>
        </div>
      </section>

    </div>
  )
}
