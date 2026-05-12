import { useEffect, useRef } from 'react'

export default function FloatingParticles() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const particles = []
    const count = window.innerWidth < 768 ? 20 : 40

    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      const size = Math.random() * 3 + 1
      particle.style.width = size + 'px'
      particle.style.height = size + 'px'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.top = Math.random() * 100 + '%'
      particle.style.opacity = Math.random() * 0.3 + 0.1
      
      // Floating animation
      const duration = Math.random() * 20 + 15
      const delay = Math.random() * -20
      particle.style.animation = `floatParticle ${duration}s ${delay}s ease-in-out infinite`
      
      container.appendChild(particle)
      particles.push(particle)
    }

    // Add keyframes dynamically
    if (!document.getElementById('particle-keyframes')) {
      const style = document.createElement('style')
      style.id = 'particle-keyframes'
      style.textContent = `
        @keyframes floatParticle {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.1;
          }
          25% {
            transform: translate(${Math.random() > 0.5 ? '' : '-'}30px, -40px) scale(1.2);
            opacity: 0.3;
          }
          50% {
            transform: translate(${Math.random() > 0.5 ? '' : '-'}15px, -80px) scale(0.8);
            opacity: 0.15;
          }
          75% {
            transform: translate(${Math.random() > 0.5 ? '' : '-'}40px, -40px) scale(1.1);
            opacity: 0.25;
          }
        }
      `
      document.head.appendChild(style)
    }

    return () => {
      particles.forEach(p => p.remove())
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    />
  )
}
