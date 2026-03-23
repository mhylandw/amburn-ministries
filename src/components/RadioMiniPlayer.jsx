import { useState } from 'react'
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, ChevronUp, ChevronDown, Radio } from 'lucide-react'
import { useRadio } from '../context/RadioContext'

function fmt(s) {
  if (!s || isNaN(s)) return '0:00'
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${sec.toString().padStart(2, '0')}`
}

export default function RadioMiniPlayer() {
  const { currentTrack, isPlaying, progress, duration, volume, togglePlay, skipNext, skipPrev, seek, changeVolume } = useRadio()
  const [expanded, setExpanded] = useState(true)
  const [muted, setMuted] = useState(false)
  const [prevVol, setPrevVol] = useState(0.8)

  if (!currentTrack) return null

  const pct = duration ? (progress / duration) * 100 : 0

  function toggleMute() {
    if (muted) {
      changeVolume(prevVol)
      setMuted(false)
    } else {
      setPrevVol(volume)
      changeVolume(0)
      setMuted(true)
    }
  }

  if (!expanded) {
    return (
      <div className="fixed bottom-16 md:bottom-0 left-0 right-0 z-40 bg-coal-900/95 backdrop-blur-sm border-t border-white/10">
        <div
          className="h-1 bg-flame-500/30 cursor-pointer"
          onClick={e => {
            const rect = e.currentTarget.getBoundingClientRect()
            seek(((e.clientX - rect.left) / rect.width) * duration)
          }}
        >
          <div className="h-full bg-flame-500 transition-none" style={{ width: `${pct}%` }} />
        </div>
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-6 h-6 rounded-full bg-flame-500/20 flex items-center justify-center shrink-0">
              <Radio size={10} className="text-flame-400" />
            </div>
            <div className="min-w-0">
              <p className="text-white text-xs font-sans font-medium truncate">{currentTrack.title}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={skipPrev} className="text-white/50 hover:text-white transition-colors p-1"><SkipBack size={14} /></button>
            <button onClick={togglePlay} className="w-7 h-7 rounded-full bg-flame-500 hover:bg-flame-400 flex items-center justify-center transition-colors">
              {isPlaying ? <Pause size={12} className="text-white" /> : <Play size={12} className="text-white ml-0.5" />}
            </button>
            <button onClick={skipNext} className="text-white/50 hover:text-white transition-colors p-1"><SkipForward size={14} /></button>
            <button onClick={() => setExpanded(true)} className="text-white/30 hover:text-white transition-colors p-1 ml-1"><ChevronUp size={14} /></button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-16 md:bottom-0 left-0 right-0 z-40 bg-coal-900/97 backdrop-blur-md border-t border-white/10 shadow-2xl">
      {/* Progress bar */}
      <div
        className="h-1 bg-white/10 cursor-pointer group"
        onClick={e => {
          const rect = e.currentTarget.getBoundingClientRect()
          seek(((e.clientX - rect.left) / rect.width) * duration)
        }}
      >
        <div className="h-full bg-flame-500 relative transition-none" style={{ width: `${pct}%` }}>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-flame-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-4">
        {/* Station badge */}
        <div className="w-9 h-9 rounded-full bg-flame-500/15 border border-flame-500/30 flex items-center justify-center shrink-0">
          <Radio size={15} className="text-flame-400" />
        </div>

        {/* Track info */}
        <div className="min-w-0 flex-1">
          <p className="text-white text-sm font-sans font-medium truncate">{currentTrack.title}</p>
          <p className="text-white/40 text-xs font-sans truncate">{currentTrack.artist || 'Michael & Katrina Amstutz-Washburn'}</p>
        </div>

        {/* Time */}
        <div className="text-white/30 text-xs font-sans tabular-nums shrink-0 hidden sm:block">
          {fmt(progress)} / {fmt(duration)}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button onClick={skipPrev} className="text-white/50 hover:text-white transition-colors p-1.5">
            <SkipBack size={16} />
          </button>
          <button
            onClick={togglePlay}
            className="w-9 h-9 rounded-full bg-flame-500 hover:bg-flame-400 flex items-center justify-center transition-colors shadow-lg"
          >
            {isPlaying ? <Pause size={15} className="text-white" /> : <Play size={15} className="text-white ml-0.5" />}
          </button>
          <button onClick={skipNext} className="text-white/50 hover:text-white transition-colors p-1.5">
            <SkipForward size={16} />
          </button>
        </div>

        {/* Volume */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <button onClick={toggleMute} className="text-white/40 hover:text-white transition-colors">
            {muted || volume === 0 ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
          <input
            type="range" min="0" max="1" step="0.02"
            value={muted ? 0 : volume}
            onChange={e => { changeVolume(parseFloat(e.target.value)); setMuted(false) }}
            className="w-20 accent-flame-500 cursor-pointer"
          />
        </div>

        {/* Collapse */}
        <button onClick={() => setExpanded(false)} className="text-white/30 hover:text-white transition-colors p-1 shrink-0">
          <ChevronDown size={16} />
        </button>
      </div>
    </div>
  )
}
