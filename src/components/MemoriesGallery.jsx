import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const memories = [
  {
    id: 1,
    src: "/memories/memory-1.jpeg",
    caption:
      "Sempro bukan akhir dari perjuangan, tapi bukti kalau kamu sudah sampai sejauh ini. Selamat ya.",
    rotation: -2,
  },
  {
    id: 2,
    src: "/memories/memory-2.jpeg",
    caption:
      "Semoga semua rasa lelah yang kamu simpan terbayar di hari ini. Selamat seminar proposal!",
    rotation: 1.5,
  },
  {
    id: 3,
    src: "/memories/memory-3.jpeg",
    caption:
      "Dari banyaknya revisi dan begadang, akhirnya kamu sampai di titik ini. Proud of you.",
    rotation: -1,
  },
  {
    id: 4,
    src: "/memories/memory-4.jpeg",
    caption:
      "Tidak harus sempurna untuk bisa sampai di sini. Yang penting kamu tidak menyerah.",
    rotation: 2,
  },
  {
    id: 5,
    src: "/memories/memory-5.jpeg",
    caption: "Kamu hebat karena tetap berjalan, bahkan saat capek.”",
    rotation: -1.5,
  },
  {
    id: 6,
    src: "/memories/memory-6.jpeg",
    caption:
      "Semoga setelah hari ini, langkahmu makin dekat dengan semua yang kamu impikan.n",

    rotation: 1,
  },
];

function PolaroidCard({ memory, index, onClick }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      className="polaroid-card group cursor-pointer relative"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        scale: 1.04,
        rotate: 0,
        zIndex: 10,
        transition: { duration: 0.35 },
      }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      style={{ rotate: memory.rotation }}
    >
      {/* Polaroid frame */}
      <div className="polaroid-frame">
        {/* Hover glow — desktop only */}
        <div
          className="absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden md:block"
          style={{
            background:
              "radial-gradient(circle, rgba(255,216,155,0.1), transparent 70%)",
            filter: "blur(12px)",
          }}
        />

        {/* Photo */}
        <div className="polaroid-image-container">
          <img
            src={memory.src}
            alt={memory.caption}
            className="polaroid-image"
            loading="lazy"
          />
          {/* Film overlay */}
          <div className="polaroid-film-overlay" />
        </div>

        {/* Caption area */}
        <div className="polaroid-caption-area">
          <p className="polaroid-date">{memory.date}</p>
          <p className="polaroid-caption">{memory.caption}</p>
        </div>
      </div>
    </motion.div>
  );
}

function PhotoModal({ memory, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <motion.div
      className="gallery-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      onClick={onClose}
    >
      <motion.div
        className="gallery-modal-content"
        initial={{ opacity: 0, scale: 0.88, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 15 }}
        transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="gallery-modal-close"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Image */}
        <div className="gallery-modal-image-wrap">
          <img
            src={memory.src}
            alt={memory.caption}
            className="gallery-modal-image"
          />
          {/* Subtle vignette */}
          <div className="gallery-modal-vignette" />
        </div>

        {/* Caption */}
        <motion.div
          className="gallery-modal-caption-area"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          <p className="gallery-modal-date">{memory.date}</p>
          <p className="gallery-modal-caption">"{memory.caption}"</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function MemoriesGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section
      id="memories-gallery"
      style={{
        position: "relative",
        paddingTop: "clamp(80px, 8vw, 128px)",
        paddingBottom: "clamp(80px, 8vw, 128px)",
        paddingLeft: "clamp(24px, 5vw, 64px)",
        paddingRight: "clamp(24px, 5vw, 64px)",
        overflow: "hidden",
      }}
    >
      {/* Background ambient glows */}
      <div
        className="ambient-glow ambient-glow-warm"
        style={{
          width: 400,
          height: 400,
          top: "5%",
          left: "0%",
          opacity: 0.05,
        }}
      />
      <div
        className="ambient-glow ambient-glow-blush"
        style={{
          width: 300,
          height: 300,
          bottom: "10%",
          right: "0%",
          opacity: 0.04,
        }}
      />

      {/* Section Header */}
      <motion.div
        ref={headerRef}
        style={{
          textAlign: "center",
          marginBottom: "clamp(40px, 5vw, 80px)",
          position: "relative",
          zIndex: 2,
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <p
          style={{
            fontSize: "clamp(0.6rem, 1.5vw, 0.75rem)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "12px",
            color: "var(--color-text-muted)",
            fontFamily: "var(--font-poppins)",
          }}
        >
          our memories
        </p>
        <h2
          style={{
            fontSize: "clamp(1.5rem, 4vw, 3rem)",
            fontStyle: "italic",
            fontFamily: "var(--font-playfair)",
            color: "var(--color-cream-100)",
          }}
        >
          Moments We'll Never Forget
        </h2>
        <div className="section-divider" style={{ marginTop: "20px" }} />
        <p
          style={{
            fontSize: "clamp(0.7rem, 1.5vw, 0.875rem)",
            marginTop: "20px",
            maxWidth: "24rem",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            fontFamily: "var(--font-poppins)",
            color: "var(--color-text-muted)",
            fontWeight: 300,
            lineHeight: 1.8,
          }}
        >
          setiap foto punya cerita, dan semua cerita ini milik kita
        </p>
      </motion.div>

      {/* Gallery Grid */}
      <div
        className="gallery-grid"
        style={{
          maxWidth: "56rem",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {memories.map((memory, i) => (
          <PolaroidCard
            key={memory.id}
            memory={memory}
            index={i}
            onClick={() => setSelectedPhoto(memory)}
          />
        ))}
      </div>

      {/* Instruction hint */}
      <motion.p
        style={{
          textAlign: "center",
          marginTop: "clamp(32px, 4vw, 48px)",
          fontFamily: "var(--font-poppins)",
          color: "var(--color-text-muted)",
          fontSize: "0.65rem",
          letterSpacing: "0.1em",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        tap a photo to see it closer ✦
      </motion.p>

      {/* Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <PhotoModal
            memory={selectedPhoto}
            onClose={() => setSelectedPhoto(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
