import { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react'

const RadioContext = createContext(null)

export function RadioProvider({ children }) {
  const [playlist, setPlaylist] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.8)
  const [shuffled, setShuffled] = useState(true)
  const [shuffleOrder, setShuffleOrder] = useState([])
  const audioRef = useRef(new Audio())

  // Load playlist
  useEffect(() => {
    fetch('/playlist.json')
      .then(r => r.json())
      .then(data => {
        setPlaylist(data)
        const order = shuffleArray([...Array(data.length).keys()])
        setShuffleOrder(order)
      })
      .catch(() => {})
  }, [])

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }

  const currentTrack = playlist[currentIndex] || null

  // Audio event listeners
  useEffect(() => {
    const audio = audioRef.current
    audio.volume = volume

    const onTimeUpdate = () => setProgress(audio.currentTime)
    const onDurationChange = () => setDuration(audio.duration)
    const onEnded = () => skipNext()

    audio.addEventListener('timeupdate', onTimeUpdate)
    audio.addEventListener('durationchange', onDurationChange)
    audio.addEventListener('ended', onEnded)

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate)
      audio.removeEventListener('durationchange', onDurationChange)
      audio.removeEventListener('ended', onEnded)
    }
  }, [currentIndex, shuffleOrder, shuffled])

  // Load track when index changes
  useEffect(() => {
    if (!currentTrack) return
    const audio = audioRef.current
    audio.src = currentTrack.src
    audio.load()
    if (isPlaying) audio.play().catch(() => {})
  }, [currentIndex, playlist])

  function play() {
    audioRef.current.play().catch(() => {})
    setIsPlaying(true)
  }

  function pause() {
    audioRef.current.pause()
    setIsPlaying(false)
  }

  function togglePlay() {
    isPlaying ? pause() : play()
  }

  function getNextIndex() {
    if (shuffled && shuffleOrder.length) {
      const pos = shuffleOrder.indexOf(currentIndex)
      return shuffleOrder[(pos + 1) % shuffleOrder.length]
    }
    return (currentIndex + 1) % playlist.length
  }

  function getPrevIndex() {
    if (shuffled && shuffleOrder.length) {
      const pos = shuffleOrder.indexOf(currentIndex)
      return shuffleOrder[(pos - 1 + shuffleOrder.length) % shuffleOrder.length]
    }
    return (currentIndex - 1 + playlist.length) % playlist.length
  }

  function skipNext() {
    if (!playlist.length) return
    setCurrentIndex(getNextIndex())
  }

  function skipPrev() {
    if (!playlist.length) return
    if (progress > 3) {
      audioRef.current.currentTime = 0
      return
    }
    setCurrentIndex(getPrevIndex())
  }

  function seek(time) {
    audioRef.current.currentTime = time
    setProgress(time)
  }

  function changeVolume(v) {
    audioRef.current.volume = v
    setVolume(v)
  }

  function playTrack(index) {
    setCurrentIndex(index)
    setIsPlaying(true)
    setTimeout(() => audioRef.current.play().catch(() => {}), 50)
  }

  return (
    <RadioContext.Provider value={{
      playlist, currentTrack, currentIndex, isPlaying,
      progress, duration, volume, shuffled,
      togglePlay, skipNext, skipPrev, seek, changeVolume,
      playTrack, setShuffled
    }}>
      {children}
    </RadioContext.Provider>
  )
}

export function useRadio() {
  return useContext(RadioContext)
}
