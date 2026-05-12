import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const memories = [
  {
    year: "Fase 1",
    title: "Pencarian Judul Berdarah",
    desc: "Gonta-ganti topik, milih-milih masalah, baca puluhan jurnal, tapi ngerasa nggak ada yang pas. Pas udah nemu yang sreg, overthinking takut ditolak dosen.",
    icon: "🔍",
  },
  {
    year: "Fase 2",
    title: "Latar Belakang Stagnan",
    desc: 'Natap layar kosong berjam-jam cuma buat nulis satu paragraf. Kata "Berdasarkan uraian di atas..." jadi kalimat sakti yang paling sering dipakai.',
    icon: "💻",
  },
  {
    year: "Fase 3",
    title: "Mengejar Dosen Pembimbing",
    desc: "Deg-degan nunggu chat dibalas, nunggu berjam-jam depan ruangan taunya dicancel, bimbingan dicoret-coret. Ujian kesabaran sejati.",
    icon: "🏃‍♂️",
  },
  {
    year: "Fase 4",
    title: "Revisi Tak Kunjung Usai",
    desc: '"Coba tambahin variabel ini", "Formatnya benerin lagi". Revisi BAB 1-3 yang rasanya muter-muter aja dan bikin nangis diam-diam waktu malam.',
    icon: "📝",
  },
  {
    year: "Fase 5",
    title: "Kepanikan Administrasi",
    desc: "Ngebut ngejar TTD ACC sana-sini, bolak-balik TU, ngeprint rangkap banyak, sampai deg-degan mantengin grup nunggu jadwal fix sempro keluar.",
    icon: "😰",
  },
  {
    year: "Hari H",
    title: "Akhirnya... Sempro!",
    desc: "Semua rasa capek, air mata, dan begadang berminggu-minggu akhirnya pecah jadi rasa lega. Satu milestone besar berhasil dilewati. We did it!",
    icon: "🎓",
  },
];

function TimelineCard({ memory, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className="timeline-item"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Mobile: simple left-aligned card with left border indicator */}
      <div className="block lg:hidden">
        <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
          {/* Left dot + line */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: 0,
              paddingTop: "4px",
            }}
          >
            <motion.div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "var(--color-glow-warm)",
                boxShadow: "0 0 12px rgba(255,216,155,0.3)",
                flexShrink: 0,
              }}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            />
            {index < memories.length - 1 && (
              <div
                style={{
                  width: "1px",
                  flex: 1,
                  marginTop: "8px",
                  minHeight: "40px",
                  background:
                    "linear-gradient(to bottom, rgba(255,216,155,0.2), transparent)",
                }}
              />
            )}
          </div>

          {/* Card content */}
          <div
            className="glass-card"
            style={{
              padding: "20px",
              flex: 1,
              minWidth: 0,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "12px",
              }}
            >
              <span style={{ fontSize: "1.25rem" }}>{memory.icon}</span>
              <span
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--color-glow-warm)",
                  fontFamily: "var(--font-poppins)",
                }}
              >
                {memory.year}
              </span>
            </div>

            <h3
              style={{
                fontSize: "1.125rem",
                marginBottom: "8px",
                fontFamily: "var(--font-playfair)",
                color: "var(--color-cream-100)",
              }}
            >
              {memory.title}
            </h3>

            <p
              style={{
                fontSize: "0.8rem",
                fontFamily: "var(--font-poppins)",
                color: "var(--color-text-secondary)",
                fontWeight: 300,
                lineHeight: 1.7,
              }}
            >
              {memory.desc}
            </p>
          </div>
        </div>
      </div>

      {/* Desktop: alternating left/right layout */}
      <div className="hidden lg:block">
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          {/* Left side */}
          <div style={{ width: "41.666%", paddingRight: isLeft ? "40px" : 0 }}>
            {isLeft && (
              <div
                className="glass-card"
                style={{
                  padding: "28px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "16px",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>{memory.icon}</span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--color-glow-warm)",
                      fontFamily: "var(--font-poppins)",
                    }}
                  >
                    {memory.year}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "12px",
                    fontFamily: "var(--font-playfair)",
                    color: "var(--color-cream-100)",
                  }}
                >
                  {memory.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    fontFamily: "var(--font-poppins)",
                    color: "var(--color-text-secondary)",
                    fontWeight: 300,
                    lineHeight: 1.8,
                  }}
                >
                  {memory.desc}
                </p>
              </div>
            )}
          </div>

          {/* Center dot */}
          <div
            style={{
              width: "16.666%",
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <motion.div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "var(--color-glow-warm)",
                boxShadow: "0 0 20px rgba(255,216,155,0.3)",
                position: "relative",
                zIndex: 10,
              }}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            />
          </div>

          {/* Right side */}
          <div style={{ width: "41.666%", paddingLeft: !isLeft ? "40px" : 0 }}>
            {!isLeft && (
              <div
                className="glass-card"
                style={{
                  padding: "28px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "16px",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>{memory.icon}</span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--color-glow-warm)",
                      fontFamily: "var(--font-poppins)",
                    }}
                  >
                    {memory.year}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "12px",
                    fontFamily: "var(--font-playfair)",
                    color: "var(--color-cream-100)",
                  }}
                >
                  {memory.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    fontFamily: "var(--font-poppins)",
                    color: "var(--color-text-secondary)",
                    fontWeight: 300,
                    lineHeight: 1.8,
                  }}
                >
                  {memory.desc}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function MemoryTimeline() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="timeline"
      style={{
        position: "relative",
        paddingTop: "clamp(80px, 8vw, 128px)",
        paddingBottom: "clamp(80px, 8vw, 128px)",
        paddingLeft: "clamp(24px, 5vw, 64px)",
        paddingRight: "clamp(24px, 5vw, 64px)",
        overflow: "hidden",
      }}
    >
      {/* Background ambient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "56rem",
          height: "100%",
          pointerEvents: "none",
          background:
            "linear-gradient(to bottom, transparent, rgba(255,216,155,0.02), transparent)",
        }}
      />

      {/* Section Header */}
      <motion.div
        ref={headerRef}
        style={{ textAlign: "center", marginBottom: "clamp(48px, 6vw, 96px)" }}
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
          our journey
        </p>
        <h2
          style={{
            fontSize: "clamp(1.5rem, 4vw, 3rem)",
            fontStyle: "italic",
            fontFamily: "var(--font-playfair)",
            color: "var(--color-cream-100)",
          }}
        >
          The Memories We Made
        </h2>
        <div className="section-divider" style={{ marginTop: "20px" }} />
      </motion.div>

      {/* Timeline line - desktop only */}
      <div
        className="hidden lg:block"
        style={{
          position: "absolute",
          left: "50%",
          top: "192px",
          bottom: "96px",
          width: "1px",
          transform: "translateX(-50%)",
          background:
            "linear-gradient(to bottom, transparent, rgba(255,216,155,0.15), transparent)",
        }}
      />

      {/* Timeline Cards */}
      <div
        style={{
          maxWidth: "56rem",
          margin: "0 auto",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(24px, 4vw, 64px)",
        }}
      >
        {memories.map((memory, i) => (
          <TimelineCard key={i} memory={memory} index={i} />
        ))}
      </div>
    </section>
  );
}
