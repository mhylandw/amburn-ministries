export default function Media() {
  const videos = [
    'iQgmxhwPL2Q',
    'NFBqCjMmwWc',
    'nOZQC9Ssn1A',
    '9xmx_qYHSkk',
    'XmPX-HjfH64',
    'ylre3qkhE8M',
    '04DlUfeFe2Q',
    'oBCdUkIiTk8',
    'HA0BhXInYxw',
  ]

  return (
    <div className="pt-16">
      <div className="bg-coal-800 py-20 px-4 text-center border-b border-coal-600">
        <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">Watch & Listen</p>
        <h1 className="font-serif text-4xl md:text-5xl text-white">Worship Sessions</h1>
      </div>

      <section className="py-16 px-4 bg-coal-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((id) => (
            <div key={id} className="rounded-xl overflow-hidden shadow-xl">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${id}?rel=0`}
                  title={`Amburn Ministries — ${id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
