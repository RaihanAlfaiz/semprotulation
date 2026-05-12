import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const names = ['Amanda', 'Febiana', 'Naila', 'Faisal', 'Hilman']

function Star({ style }) {
  return (
    <div
      className="star"
      style={{
        ...style,
        animation: `twinkle ${2 + Math.random() * 4}s ${Math.random() * 5}s ease-in-out infinite`,
      }}
    />
  )
}

export default function EndingScene() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const [stars, setStars] = useState([])

  useEffect(() => {
    // Fewer stars on mobile for performance
    const isMobile = window.innerWidth < 768
    const count = isMobile ? 40 : 80
    const generated = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100 + '%',
      top: Math.random() * 100 + '%',
      width: Math.random() * 2 + 1 + 'px',
      height: Math.random() * 2 + 1 + 'px',
      opacity: Math.random() * 0.5 + 0.2,
    }))
    setStars(generated)
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingLeft: 'clamp(24px, 5vw, 40px)',
        paddingRight: 'clamp(24px, 5vw, 40px)',
        background: `
          radial-gradient(ellipse 80% 50% at 50% 100%, rgba(20, 20, 30, 1) 0%, transparent 70%),
          radial-gradient(ellipse 60% 40% at 30% 20%, rgba(15, 10, 25, 0.5) 0%, transparent 50%),
          var(--color-night-900)
        `,
      }}
    >
      {/* Stars */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {stars.map((s) => (
          <Star key={s.id} style={s} />
        ))}
      </div>

      {/* Subtle warm horizon glow */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 'clamp(192px, 30vh, 256px)',
          background: 'linear-gradient(to top, rgba(255,216,155,0.03), transparent)',
        }}
      />

      {/* Content */}
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 2, width: '100%' }}>
        {/* Names fading in */}
        <div style={{ marginBottom: 'clamp(40px, 5vw, 48px)' }}>
          {names.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.5 + i * 0.5,
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{ marginBottom: '8px' }}
            >
              <span
                style={{
                  fontSize: 'clamp(1.25rem, 4vw, 2.25rem)',
                  fontFamily: 'var(--font-playfair)',
                  color: 'var(--color-cream-100)',
                  fontStyle: 'italic',
                }}
              >
                {name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          className="section-divider"
          style={{ margin: '0 auto clamp(32px, 4vw, 40px)' }}
          initial={{ width: 0 }}
          animate={isInView ? { width: 80 } : {}}
          transition={{ delay: 3.2, duration: 1.5 }}
        />

        {/* Final texts */}
        <motion.p
          style={{
            fontSize: 'clamp(1.125rem, 3vw, 1.875rem)',
            fontFamily: 'var(--font-playfair)',
            fontStyle: 'italic',
            color: 'var(--color-cream-50)',
            marginBottom: '12px',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 3.8, duration: 1.2 }}
        >
          Proud of you, always.
        </motion.p>

        <motion.p
          style={{
            fontSize: 'clamp(0.7rem, 1.5vw, 1rem)',
            fontFamily: 'var(--font-poppins)',
            color: 'var(--color-text-muted)',
            fontWeight: 300,
            letterSpacing: '0.1em',
          }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 4.5, duration: 1.5 }}
        >
          See you at the next chapter.
        </motion.p>

        {/* Subtle breathing dot at the end */}
        <motion.div
          style={{ marginTop: 'clamp(48px, 5vw, 64px)', display: 'flex', justifyContent: 'center' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 5.5, duration: 1 }}
        >
          <motion.div
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--color-glow-warm)',
            }}
            animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.3, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
