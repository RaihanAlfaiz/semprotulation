import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection({ onStart, hasStarted }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dark cinematic background with warm gradients */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        {/* Base dark gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 50% 40%, rgba(45, 35, 25, 0.6) 0%, transparent 70%),
              radial-gradient(ellipse 60% 50% at 20% 80%, rgba(60, 40, 20, 0.3) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 80% 20%, rgba(50, 35, 25, 0.25) 0%, transparent 50%),
              var(--color-night-900)
            `,
          }}
        />

        {/* Subtle warm light leaks */}
        <motion.div
          className="absolute"
          style={{
            width: "min(500px, 80vw)",
            height: "min(500px, 80vw)",
            top: "10%",
            left: "5%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,216,155,0.08), transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute"
          style={{
            width: "min(400px, 70vw)",
            height: "min(400px, 70vw)",
            bottom: "10%",
            right: "10%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,221,210,0.06), transparent 70%)",
            filter: "blur(50px)",
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Film grain overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
            opacity: 0.5,
          }}
        />
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {!hasStarted ? (
          <motion.div
            key="hero-content"
            className="relative text-center w-full"
            style={{
              zIndex: 2,
              paddingLeft: "clamp(20px, 5vw, 32px)",
              paddingRight: "clamp(20px, 5vw, 32px)",
              maxWidth: "42rem",
              margin: "0 auto",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Small decorative line */}
            <motion.div
              className="section-divider mx-auto mb-6 md:mb-8"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.5, duration: 1.5 }}
            />

            {/* Eyebrow text */}
            <motion.p
              className="text-[0.65rem] md:text-sm tracking-[0.25em] md:tracking-[0.3em] uppercase mb-4 md:mb-6"
              style={{
                color: "var(--color-text-muted)",
                fontFamily: "var(--font-poppins)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              a letter written in code
            </motion.p>

            {/* Main Title */}
            <motion.h1
              className="text-[2.75rem] md:text-7xl lg:text-8xl font-bold mb-3 md:mb-4"
              style={{
                fontFamily: "var(--font-playfair)",
                background:
                  "linear-gradient(135deg, var(--color-cream-50), var(--color-glow-warm), var(--color-cream-200))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1.1,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.2,
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              Sempro Day
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-sm md:text-lg lg:text-xl mb-2 italic"
              style={{
                fontFamily: "var(--font-playfair)",
                color: "var(--color-text-secondary)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              for Amanda, Febiana, Naila, Faisal, and Hilman
            </motion.p>

            {/* Emotional quote */}
            <motion.p
              className="text-[0.7rem] md:text-sm max-w-sm md:max-w-md mx-auto mt-3 md:mt-4 mb-8 md:mb-12"
              style={{
                fontFamily: "var(--font-poppins)",
                color: "var(--color-text-muted)",
                fontWeight: 300,
                lineHeight: 1.8,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              "Kita mungkin capek, tapi kita sampai sejauh ini bukan tanpa
              alasan."
            </motion.p>

            {/* CTA Button */}
            <motion.button
              id="open-memories-btn"
              onClick={onStart}
              className="relative group cursor-pointer mt-4 inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className="relative z-10 px-10 md:px-12 py-4 md:py-5 rounded-full text-[0.8rem] md:text-sm tracking-[0.25em] uppercase font-medium transition-all duration-500 overflow-hidden flex items-center justify-center gap-4 backdrop-blur-md min-w-[240px]"
                style={{
                  fontFamily: "var(--font-poppins)",
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 216, 155, 0.1))",
                  border: "1px solid rgba(255, 216, 155, 0.3)",
                  color: "var(--color-cream-50)",
                  boxShadow:
                    "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 0 20px rgba(255, 216, 155, 0.05)",
                }}
              >
                <span className="relative z-10 group-hover:text-[#FFD89B] transition-colors duration-300">
                  Open Memories
                </span>
                <span className="relative z-10 text-[#FFD89B] text-lg group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </div>

              {/* Stronger Glow effect on hover */}
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  background: "var(--color-glow-warm)",
                  filter: "blur(24px)",
                  transform: "scale(1.15)",
                  opacity: 0.25,
                }}
              />
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="transition"
            className="relative text-center"
            style={{ zIndex: 2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 20, opacity: 0 }}
              transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-2 h-2 rounded-full mx-auto"
              style={{ background: "var(--color-glow-warm)" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll indicator — hidden on mobile to save space */}
      {hasStarted && (
        <motion.div
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          style={{ zIndex: 2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span
              className="text-xs tracking-[0.2em] uppercase"
              style={{
                color: "var(--color-text-muted)",
                fontFamily: "var(--font-poppins)",
              }}
            >
              scroll
            </span>
            <div
              className="w-px h-8"
              style={{
                background:
                  "linear-gradient(to bottom, var(--color-text-muted), transparent)",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
