import { Play, Pause, Radio, Shuffle } from 'lucide-react'
import { useRadio } from '../context/RadioContext'

export default function RadioPage() {
  const { playlist, currentTrack, currentIndex, isPlaying, shuffled, setShuffled, playTrack, togglePlay } = useRadio()

  return (
    <div className="pt-16 min-h-screen bg-coal-900">
      <div className="bg-coal-800 py-20 px-4 text-center border-b border-coal-600">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-flame-500/10 border border-flame-500/30 mb-4">
          <Radio className="text-flame-500" size={24} />
        </div>
        <p className="text-flame-500 text-xs font-sans uppercase tracking-widest mb-3">Amburn Ministries</p>
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Radio</h1>
        <p className="text-white/40 font-sans text-sm max-w-lg mx-auto leading-relaxed">
          A worship-driven radio stream centered on intimacy with God—songs that teach, challenge, and draw listeners into deeper relationship, not just emotion.
        </p>
        <div className="flex items-center justify-center gap-3 mt-6">
          <button
            onClick={() => setShuffled(!shuffled)}
            className={`flex items-center gap-2 text-sm font-sans px-4 py-2 rounded-full border transition-colors ${
              shuffled
                ? 'bg-flame-500/10 border-flame-500/30 text-flame-400'
                : 'border-white/10 text-white/30 hover:border-white/20 hover:text-white/50'
            }`}
          >
            <Shuffle size={13} /> Shuffle {shuffled ? 'On' : 'Off'}
          </button>
        </div>
      </div>

      <section className="py-10 px-4">
        <div className="max-w-3xl mx-auto">
          {playlist.length === 0 ? (
            <div className="text-center py-20 text-white/30 font-sans">
              <Radio size={40} className="mx-auto mb-4 opacity-20" />
              <p>No tracks loaded yet.</p>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-white/5">
              {playlist.map((track, i) => {
                const active = i === currentIndex
                return (
                  <div
                    key={i}
                    onClick={() => active ? togglePlay() : playTrack(i)}
                    className={`flex items-center gap-4 px-3 py-3 rounded-lg cursor-pointer transition-colors group ${
                      active ? 'bg-flame-500/10' : 'hover:bg-white/5'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      active ? 'bg-flame-500' : 'bg-white/5 group-hover:bg-white/10'
                    }`}>
                      {active && isPlaying
                        ? <Pause size={12} className="text-white" />
                        : <Play size={12} className={active ? 'text-white ml-0.5' : 'text-white/40 ml-0.5'} />
                      }
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className={`font-sans text-sm truncate ${active ? 'text-flame-400 font-medium' : 'text-white/80'}`}>
                        {track.title}
                      </p>
                      {track.artist && (
                        <p className="text-white/30 font-sans text-xs truncate">{track.artist}</p>
                      )}
                    </div>
                    <span className="text-white/20 font-sans text-xs shrink-0">{i + 1}</span>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
