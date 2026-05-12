import { useState, useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import CursorGlow from './components/CursorGlow'
import FloatingParticles from './components/FloatingParticles'
import HeroSection from './components/HeroSection'
import MemoriesGallery from './components/MemoriesGallery'
import MemoryTimeline from './components/MemoryTimeline'
import AppreciationCards from './components/AppreciationCards'
import EmotionalMidSection from './components/EmotionalMidSection'
import FinalLetter from './components/FinalLetter'
import EndingScene from './components/EndingScene'
import MusicPlayer from './components/MusicPlayer'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5500)
    return () => clearTimeout(timer)
  }, [])

  const handleStart = () => {
    setHasStarted(true)
    setTimeout(() => {
      setShowContent(true)
      // Smooth scroll to the memories gallery section after content renders
      setTimeout(() => {
        const gallery = document.getElementById('memories-gallery')
        if (gallery) {
          gallery.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 300)
    }, 800)
  }

  return (
    <div ref={containerRef} className="relative min-h-screen">
      <CursorGlow />
      
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <FloatingParticles />
          <HeroSection onStart={handleStart} hasStarted={hasStarted} />
          
          {showContent && (
            <>
              <MemoriesGallery />
              <MemoryTimeline />
              <AppreciationCards />
              <EmotionalMidSection />
              <FinalLetter />
              <EndingScene />
            </>
          )}
          
          <MusicPlayer />
        </>
      )}
    </div>
  )
}

export default App
