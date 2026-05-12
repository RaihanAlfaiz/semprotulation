import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const friends = [
  {
    name: "Amanda",
    initial: "A",
    vibe: "The Quiet Strength",
    color: "rgba(255, 200, 200, 0.12)",
    glowColor: "rgba(255, 200, 200, 0.08)",
    accentColor: "#FFD1D1",
    shortDesc:
      "Soft, comforting, supportive energy — the one who keeps everyone grounded.",
    letter: `Amanda,

Kamu mungkin gak sadar, tapi kehadiranmu itu punya efek yang besar buat kita semua. Kamu tipe orang yang gak perlu ngomong banyak buat bikin orang lain merasa aman.

Di saat semua panik, kamu yang tetap tenang. Di saat ada yang down, kamu yang diam-diam ngecek. Kamu itu support system yang gak pernah minta diakui — dan justru itu yang bikin kamu luar biasa.

Makasih udah jadi tempat yang nyaman, Man. Makasih udah selalu ada tanpa diminta. Lo gak pernah bikin orang merasa sendirian, dan itu sesuatu yang gak semua orang bisa kasih.

Bangga sama lo, selalu.`,
  },
  {
    name: "Febiana",
    initial: "F",
    vibe: "The Bright Light",
    color: "rgba(255, 230, 180, 0.12)",
    glowColor: "rgba(255, 230, 180, 0.08)",
    accentColor: "#FFE4B5",
    shortDesc:
      "Bright, cheerful, mentally strong — the sunshine that refuses to dim.",
    letter: `Febiana,

Lo tuh tipe orang yang bisa bikin ruangan jadi lebih hidup cuma dengan datang. Cheerful, bright, dan selalu punya energi yang bikin orang lain ikut semangat.

Tapi di balik senyum itu, gue tau lo juga pernah capek. Pernah ngerasa overwhelmed. Dan yang bikin gue respect banget sama lo adalah — lo tetap maju. Gak peduli seberapa berat, lo tetap berdiri.

Mental lo itu kuat banget, Feb. Dan mungkin lo jarang denger ini, tapi gue pengen lo tau: lo gak perlu selalu jadi yang kuat. Tapi fakta bahwa lo selalu memilih untuk bangkit — itu sesuatu yang luar biasa.

Makasih udah jadi cahaya buat kita semua.`,
  },
  {
    name: "Naila",
    initial: "N",
    vibe: "The Warm Heart",
    color: "rgba(200, 220, 255, 0.12)",
    glowColor: "rgba(200, 220, 255, 0.08)",
    accentColor: "#C8DCFF",
    shortDesc:
      "Calm, kind-hearted, emotionally warm — the one who feels everything deeply.",
    letter: `Naila,

Kamu itu tipe orang yang perasaannya dalam banget. Yang kalau peduli, beneran peduli. Yang kalau perhatian, bukan cuma basa-basi.

Di dunia yang sering bikin kita harus pasang muka tebal, kamu tetap jadi orang yang gentle dan tulus. Dan itu bukan kelemahan — itu kekuatan.

Kamu yang sering dengerin tanpa judge. Kamu yang selalu punya kata-kata yang pas di momen yang tepat. Kamu mungkin ngerasa biasa aja, tapi percaya deh, kebaikan kamu itu ninggalin jejak di orang-orang di sekitar kamu.

Makasih udah jadi hati yang hangat di tengah perjalanan yang kadang dingin ini, Nail. Dunia butuh lebih banyak orang kayak kamu.`,
  },
  {
    name: "Faisal",
    initial: "F",
    vibe: "The Steady One",
    color: "rgba(200, 235, 200, 0.12)",
    glowColor: "rgba(200, 235, 200, 0.08)",
    accentColor: "#C8EBC8",
    shortDesc:
      "Relaxed but hardworking — calm on the surface, grinding underneath.",
    letter: `Faisal,

Lo tuh tipe yang dari luar keliatan santai, adem, kayak gak ada beban. Tapi di balik itu, lo kerja keras diam-diam. Lo push diri lo sendiri tanpa perlu pamer.

Gue respect cara lo ngejalani semuanya. Lo gak drama, gak lebay, tapi lo selalu deliver. Dan itu bukan sesuatu yang gampang — butuh kedewasaan yang gak semua orang punya di umur segini.

Mungkin lo sering ngerasa underappreciated karena lo jarang minta pengakuan. Tapi gue pengen lo tau: kita semua notice. Effort lo, kerja keras lo, dan cara lo tetap calm di tengah badai — itu semua keliatan.

Proud of you, Sal. Serius.`,
  },
  {
    name: "Hilman",
    initial: "H",
    vibe: "The Chaotic Good",
    color: "rgba(230, 210, 255, 0.12)",
    glowColor: "rgba(230, 210, 255, 0.08)",
    accentColor: "#E6D2FF",
    shortDesc:
      "Funny, chaotic, but always present — the one who makes hard times lighter.",
    letter: `Hilman,

Lo itu chaos yang kita semua butuhkan. Yang bikin momen-momen berat jadi bisa ketawa. Yang bikin deadline yang menyiksa jadi punya cerita lucu untuk diceritain nanti.

Tapi di balik semua jokes dan keributan lo, lo selalu ada. Lo gak pernah cabut di saat orang butuh. Lo mungkin nunjukin kepedulian lo dengan cara yang beda — lewat candaan, lewat kehadiran yang kadang berantakan — tapi itu genuine, dan kita semua ngerasain itu.

Lo lebih dari yang lo kira, Man. Lo bukan cuma "yang lucu." Lo orang yang bikin orang lain merasa it's okay to not be okay. Dan itu sesuatu yang langka.

Makasih udah jadi keributan terindah di perjalanan ini.`,
  },
];

function PersonCard({ person, index, onClick }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="glass-card cursor-pointer relative overflow-hidden group flex flex-col h-full rounded-[1.75rem] border border-white/10 shadow-2xl backdrop-blur-md"
      style={{
        background: person.color,
        padding: "clamp(2rem, 4vw, 2.5rem)",
        minHeight: "360px",
      }}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Hover glow */}
      <div
        className="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle, ${person.glowColor}, transparent 70%)`,
          filter: "blur(20px)",
        }}
      />

      {/* Initial circle */}
      <div
        className="w-11 h-11 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-4 md:mb-5 relative"
        style={{
          background: `linear-gradient(135deg, ${person.color}, rgba(255,255,255,0.05))`,
          border: `1px solid ${person.accentColor}30`,
        }}
      >
        <span
          className="text-lg md:text-xl font-bold"
          style={{
            fontFamily: "var(--font-playfair)",
            color: person.accentColor,
          }}
        >
          {person.initial}
        </span>
      </div>

      {/* Name */}
      <h3
        className="text-xl md:text-2xl lg:text-3xl mb-1"
        style={{
          fontFamily: "var(--font-playfair)",
          color: "var(--color-cream-50)",
        }}
      >
        {person.name}
      </h3>

      {/* Vibe */}
      <p
        className="text-[0.6rem] md:text-xs tracking-[0.15em] uppercase mb-3 md:mb-4"
        style={{ color: person.accentColor, fontFamily: "var(--font-poppins)" }}
      >
        {person.vibe}
      </p>

      {/* Short description */}
      <p
        className="text-[0.8rem] md:text-sm leading-relaxed mb-3 md:mb-4"
        style={{
          fontFamily: "var(--font-poppins)",
          color: "var(--color-text-secondary)",
          fontWeight: 300,
          lineHeight: 1.7,
        }}
      >
        {person.shortDesc}
      </p>

      {/* Read letter indicator */}
      <div className="mt-auto pt-6 flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
        <span
          className="text-[0.7rem] md:text-xs tracking-[0.1em]"
          style={{
            color: person.accentColor,
            fontFamily: "var(--font-poppins)",
          }}
        >
          Read letter
        </span>
        <motion.span
          style={{ color: person.accentColor }}
          className="text-sm"
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          →
        </motion.span>
      </div>
    </motion.div>
  );
}

function LetterModal({ person, onClose }) {
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
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "var(--color-text-muted)",
          }}
          onMouseEnter={(e) => {
            e.target.style.borderColor = "rgba(255,216,155,0.3)";
            e.target.style.color = "var(--color-glow-warm)";
          }}
          onMouseLeave={(e) => {
            e.target.style.borderColor = "rgba(255,255,255,0.1)";
            e.target.style.color = "var(--color-text-muted)";
          }}
        >
          ✕
        </button>

        {/* Header */}
        <div className="mb-5 md:mb-6">
          <div
            className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-3 md:mb-4"
            style={{
              background: person.color,
              border: `1px solid ${person.accentColor}30`,
            }}
          >
            <span
              className="text-base md:text-lg font-bold"
              style={{
                fontFamily: "var(--font-playfair)",
                color: person.accentColor,
              }}
            >
              {person.initial}
            </span>
          </div>

          <h3
            className="text-xl md:text-2xl lg:text-3xl mb-1"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "var(--color-cream-50)",
            }}
          >
            For {person.name}
          </h3>
          <p
            className="text-[0.6rem] md:text-xs tracking-[0.15em] uppercase"
            style={{
              color: person.accentColor,
              fontFamily: "var(--font-poppins)",
            }}
          >
            {person.vibe}
          </p>
        </div>

        <div
          className="section-divider mb-5 md:mb-6"
          style={{ margin: "0 0 1.25rem 0" }}
        />

        {/* Letter content */}
        <div
          className="text-[0.8rem] md:text-[0.9rem] lg:text-base leading-relaxed whitespace-pre-line"
          style={{
            fontFamily: "var(--font-poppins)",
            color: "var(--color-text-secondary)",
            fontWeight: 300,
            lineHeight: 1.85,
          }}
        >
          {person.letter}
        </div>

        {/* Signature */}
        <div
          className="mt-6 md:mt-8 pt-5 md:pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p
            className="text-sm italic"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "var(--color-text-muted)",
            }}
          >
            with love and pride ✦
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function AppreciationCards() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="appreciation"
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
        className="ambient-glow ambient-glow-soft"
        style={{
          width: 400,
          height: 400,
          top: "20%",
          right: "0%",
          opacity: 0.06,
        }}
      />

      {/* Section Header */}
      <motion.div
        ref={headerRef}
        style={{ textAlign: "center", marginBottom: "clamp(48px, 6vw, 80px)" }}
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
          the people
        </p>
        <h2
          style={{
            fontSize: "clamp(1.5rem, 4vw, 3rem)",
            fontStyle: "italic",
            fontFamily: "var(--font-playfair)",
            color: "var(--color-cream-100)",
          }}
        >
          Each of You, a Universe
        </h2>
        <div className="section-divider" style={{ marginTop: "20px" }} />
        <p
          style={{
            fontSize: "clamp(0.7rem, 1.5vw, 0.875rem)",
            marginTop: "20px",
            maxWidth: "28rem",
            marginLeft: "auto",
            marginRight: "auto",
            fontFamily: "var(--font-poppins)",
            color: "var(--color-text-muted)",
            fontWeight: 300,
            lineHeight: 1.8,
          }}
        >
          click each card to read a personal letter
        </p>
      </motion.div>

      {/* Cards Grid — 1 col mobile, 2 col tablet, special 3+2 desktop */}
      <div style={{ maxWidth: "75rem", margin: "0 auto" }}>
        {/* Top row: 3 cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
            gap: "clamp(2rem, 4vw, 3rem)",
          }}
        >
          {friends.slice(0, 3).map((person, i) => (
            <PersonCard
              key={person.name}
              person={person}
              index={i}
              onClick={() => setSelectedPerson(person)}
            />
          ))}
        </div>
        {/* Bottom row: 2 cards, centered */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
            gap: "clamp(2rem, 4vw, 3rem)",
            marginTop: "clamp(2rem, 4vw, 3rem)",
            maxWidth: "55rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {friends.slice(3).map((person, i) => (
            <PersonCard
              key={person.name}
              person={person}
              index={i + 3}
              onClick={() => setSelectedPerson(person)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPerson && (
          <LetterModal
            person={selectedPerson}
            onClose={() => setSelectedPerson(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
