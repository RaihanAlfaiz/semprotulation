import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

export default function EmotionalMidSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const [typingText, setTypingText] = useState('')
  const [showTyping, setShowTyping] = useState(false)
  const [typingDone, setTypingDone] = useState(false)

  const fullText = 'setelah semua takut gagal, revisi, capek diam-diam, dan overthinking yang gak pernah dicerita.'

  useEffect(() => {
    if (!isInView) return

    const timer = setTimeout(() => {
      setShowTyping(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [isInView])

  useEffect(() => {
    if (!showTyping) return

    let i = 0
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypingText(fullText.slice(0, i))
        i++
      } else {
        clearInterval(interval)
        setTypingDone(true)
      }
    }, 45)

    return () => clearInterval(interval)
  }, [showTyping])

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        paddingTop: 'clamp(96px, 12vw, 192px)',
        paddingBottom: 'clamp(96px, 12vw, 192px)',
        paddingLeft: 'clamp(24px, 5vw, 40px)',
        paddingRight: 'clamp(24px, 5vw, 40px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        minHeight: '60vh',
      }}
    >
      {/* Centered ambient glow */}
      <motion.div
        style={{
          position: 'absolute',
          width: 'min(500px, 90vw)',
          height: 'min(500px, 90vw)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,216,155,0.06), transparent 70%)',
          filter: 'blur(80px)',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={isInView ? { opacity: [0, 0.8, 0.4], scale: [0.8, 1.1, 1] } : {}}
        transition={{ duration: 3, ease: 'easeOut' }}
      />

      <div style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        {/* Main emotional text */}
        <motion.h2
          style={{
            fontSize: 'clamp(1.25rem, 4vw, 3rem)',
            fontStyle: 'italic',
            lineHeight: 1.35,
            marginBottom: 'clamp(24px, 3vw, 32px)',
            fontFamily: 'var(--font-playfair)',
            color: 'var(--color-cream-100)',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          "ternyata kita benar-benar sampai di fase ini ya…"
        </motion.h2>

        <motion.div
          className="section-divider"
          style={{ margin: '0 auto clamp(24px, 3vw, 32px)' }}
          initial={{ width: 0 }}
          animate={isInView ? { width: 80 } : {}}
          transition={{ delay: 1, duration: 1.5 }}
        />

        {/* Typing effect text */}
        <motion.div
          style={{ minHeight: '50px' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <p
            style={{
              fontSize: 'clamp(0.75rem, 2vw, 1rem)',
              fontStyle: 'italic',
              fontFamily: 'var(--font-poppins)',
              color: 'var(--color-text-secondary)',
              fontWeight: 300,
              lineHeight: 1.8,
            }}
          >
            {typingText}
            {showTyping && !typingDone && <span className="typing-cursor" />}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
