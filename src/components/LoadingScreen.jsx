import { motion } from 'framer-motion'

export default function LoadingScreen() {
  const text = "for the people who survived chaos, overthinking, revisi, and sleepless nights…"
  const words = text.split(' ')

  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
    >
      {/* Ambient background glows */}
      <div
        className="ambient-glow ambient-glow-warm"
        style={{ width: 400, height: 400, top: '20%', left: '10%', opacity: 0.08 }}
      />
      <div
        className="ambient-glow ambient-glow-blush"
        style={{ width: 300, height: 300, bottom: '20%', right: '15%', opacity: 0.06 }}
      />

      <motion.div
        className="loading-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8 + i * 0.12,
              duration: 0.6,
              ease: 'easeOut',
            }}
            className="inline-block mr-[0.35em]"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        className="loading-line"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 60, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5, ease: 'easeInOut' }}
      />

      {/* Subtle breathing circle */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.4, 0] }}
        transition={{ delay: 2, duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{ background: 'var(--color-glow-warm)' }}
        />
      </motion.div>
    </motion.div>
  )
}
