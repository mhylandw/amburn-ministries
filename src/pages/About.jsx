import mkPhoto from '../assets/mk-photo.avif'

export default function About() {
  const sections = [
    {
      title: 'Nurturing Healing and Deliverance',
      subtitle: 'The Heart of Amburn Ministries',
      body: 'In a world where stories of abuse and despair often dominate headlines, Amburn Ministries stands as a beacon of hope and transformation. Rooted in the belief that every individual deserves an environment where healing, deliverance, and restoration are not just ideals but realities, Amburn Ministries reaches out to hearts and communities across the globe. Their mission is clear: to bring about true change that begins within the soul.',
    },
    {
      title: 'Igniting Hope and Faith',
      body: 'Amburn Ministries is dedicated to igniting a spark of hope and faith in everyone they encounter. Through dynamic worship, powerful teaching, and authentic community, they create spaces where the presence of God is tangible and transformative.',
    },
    {
      title: 'Personal Approach, Universal Resonance',
      body: 'Their approach is deeply personal, recognizing that each journey of faith is unique. However, these individual stories of transformation resonate universally—because they point to the same God who heals, delivers, and restores every soul that comes to Him.',
    },
    {
      title: 'Beyond Boundaries, Touching Lives',
      body: 'The vision of Amburn Ministries moves beyond geographical and cultural boundaries. They touch lives through music, writing, speaking, and personal ministry—wherever God opens the door.',
    },
    {
      title: 'Living the Message: Faith in Action',
      body: "Amburn Ministries isn't just about spreading a message; it's about living it. They demonstrate the power of God's love through their own story—a story marked by pain, surrender, and the miraculous restoration that only Jesus can bring.",
    },
    {
      title: 'A Call to Empowerment',
      body: 'For anyone grappling with the scars of life, Amburn Ministries offers a path to healing and empowerment. This is not a journey you have to walk alone—God is with you, and so are we.',
    },
  ]

  return (
    <div className="pt-16">
      {/* Page header */}
      <div className="bg-coal-800 py-20 px-4 text-center border-b border-coal-600">
        <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">Who We Are</p>
        <h1 className="font-serif text-4xl md:text-5xl text-white">About Us</h1>
      </div>

      {/* Photo + intro */}
      <section className="py-20 px-4 bg-coal-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-6">
              {sections[0].title}:<br />
              <span className="text-white/60">{sections[0].subtitle}</span>
            </h2>
            <p className="text-white/60 font-sans leading-relaxed">{sections[0].body}</p>
          </div>
          {/* Photo */}
          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-full overflow-hidden shadow-2xl">
              <img src={mkPhoto} alt="Michael & Kayla" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Rest of sections */}
      <section className="py-16 px-4 bg-coal-800">
        <div className="max-w-3xl mx-auto flex flex-col gap-12">
          {sections.slice(1).map((s, i) => (
            <div key={i} className="border-l-2 border-flame-500/30 pl-6">
              <h3 className="font-serif text-xl text-white mb-3">{s.title}</h3>
              <p className="text-white/60 font-sans leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
