import { useState, useRef, useEffect } from 'react'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Create audio element with an ambient piano track from a free source
    const audio = new Audio()
    audio.loop = true
    audio.volume = 0.3
    // Using a royalty-free ambient piece
    audio.src = 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Borrtex/Memories/Borrtex_-_05_-_Thoughts.mp3'
    audio.preload = 'auto'
    
    audio.addEventListener('canplaythrough', () => {
      setIsLoaded(true)
    })

    audio.addEventListener('error', () => {
      // Silently handle errors - music is optional
      setIsLoaded(false)
    })

    audioRef.current = audio

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [])

  const togglePlay = async () => {
    if (!audioRef.current) return

    try {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        await audioRef.current.play()
        setIsPlaying(true)
      }
    } catch {
      // Browser blocked autoplay
      setIsPlaying(false)
    }
  }

  return (
    <button
      id="music-toggle"
      className="music-btn"
      onClick={togglePlay}
      aria-label={isPlaying ? 'Mute music' : 'Play music'}
      title={isPlaying ? 'Mute ambient music' : 'Play ambient music'}
    >
      <div className="music-bars">
        <div className={`music-bar ${isPlaying ? 'playing' : 'paused'}`} />
        <div className={`music-bar ${isPlaying ? 'playing' : 'paused'}`} />
        <div className={`music-bar ${isPlaying ? 'playing' : 'paused'}`} />
        <div className={`music-bar ${isPlaying ? 'playing' : 'paused'}`} />
      </div>
    </button>
  )
}
