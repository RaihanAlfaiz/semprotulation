import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const paragraphs = [
  `Mungkin kalian gak pernah baca surat sepanjang ini dari gue. Tapi kali ini, izinin gue nulis sesuatu yang udah lama pengen gue sampaikan.`,

  `Kita semua tau perjalanan ini gak pernah gampang. Ada hari-hari di mana rasanya berat banget, di mana kita ngerasa gak cukup, gak mampu, gak layak. Ada malam-malam di mana kita diem-diem capek tapi gak cerita ke siapa-siapa. Ada momen di mana kita pengen nyerah tapi gak pernah bilang.`,

  `Tapi liat kita sekarang.`,

  `Kita masih di sini. Masih berdiri. Masih bareng.`,

  `Gue selalu percaya bahwa pertemanan yang survive bareng dari tekanan kuliah — dari tugas yang gak masuk akal, dosen yang bikin geleng-geleng kepala, revisi yang rasanya gak ada ujungnya, dan malam-malam panjang ngerjain sesuatu yang bahkan kita sendiri kadang gak yakin buat apa — itu bukan pertemanan biasa.`,

  `Itu pertemanan yang udah diuji. Dan kita lulus.`,

  `Amanda, Febiana, Naila, Faisal, Hilman — kalian semua punya peran yang gak tergantikan di perjalanan ini. Setiap dari kalian ngasih sesuatu yang unik, sesuatu yang bikin gue yakin bahwa apapun yang terjadi setelah ini, kita punya fondasi yang kuat.`,

  `Gue gak tau apa yang ada di depan. Mungkin kita bakal sibuk sendiri-sendiri. Mungkin jarak dan waktu bakal bikin kita jarang ketemu. Tapi gue tau satu hal pasti: orang-orang yang udah bareng melewati masa-masa terberat di kuliah — itu gak gampang dilupain.`,

  `Jadi ini surat dari gue — buat kalian. Bukan karena kewajiban. Bukan karena formalitas. Tapi karena gue beneran bersyukur pernah ada di cerita yang sama dengan kalian.`,

  `Semoga apapun yang kalian kejar setelah ini, kalian dapetin. Semoga mimpi-mimpi yang kalian simpen diam-diam, satu per satu terwujud. Dan semoga kita tetap jadi orang-orang yang bisa saling hubungi di jam 2 pagi tanpa alasan.`,

  `Proud of us. Serius.`,
]

export default function FinalLetter() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section
      id="final-letter"
      style={{
        position: 'relative',
        paddingTop: 'clamp(80px, 8vw, 128px)',
        paddingBottom: 'clamp(80px, 8vw, 128px)',
        paddingLeft: 'clamp(24px, 5vw, 64px)',
        paddingRight: 'clamp(24px, 5vw, 64px)',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glows */}
      <div
        className="ambient-glow ambient-glow-warm"
        style={{ width: 350, height: 350, top: '10%', left: '0%', opacity: 0.05 }}
      />
      <div
        className="ambient-glow ambient-glow-blush"
        style={{ width: 250, height: 250, bottom: '15%', right: '5%', opacity: 0.04 }}
      />

      {/* Section Header */}
      <motion.div
        ref={headerRef}
        style={{ textAlign: 'center', marginBottom: 'clamp(48px, 6vw, 80px)' }}
        initial={{ opacity: 0, y: 40 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <p
          style={{
            fontSize: 'clamp(0.6rem, 1.5vw, 0.75rem)',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: '12px',
            color: 'var(--color-text-muted)',
            fontFamily: 'var(--font-poppins)',
          }}
        >
          a final letter
        </p>
        <h2
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 3rem)',
            fontStyle: 'italic',
            fontFamily: 'var(--font-playfair)',
            color: 'var(--color-cream-100)',
          }}
        >
          For All of Us
        </h2>
        <div className="section-divider" style={{ marginTop: '20px' }} />
      </motion.div>

      {/* Letter */}
      <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
        {paragraphs.map((text, i) => (
          <LetterParagraph key={i} text={text} index={i} />
        ))}

        {/* Signature */}
        <motion.div
          style={{ marginTop: '48px', paddingTop: '32px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p
            style={{ fontSize: '0.875rem', fontStyle: 'italic', marginBottom: '8px', fontFamily: 'var(--font-playfair)', color: 'var(--color-text-muted)' }}
          >
            with everything I have,
          </p>
          <p
            style={{ fontSize: '1rem', fontStyle: 'italic', fontFamily: 'var(--font-playfair)', color: 'var(--color-glow-warm)' }}
          >
            your friend ✦
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function LetterParagraph({ text, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })

  // Short standalone lines get special treatment
  const isShort = text.length < 60

  return (
    <motion.p
      ref={ref}
      style={{
        marginBottom: '24px',
        textAlign: isShort ? 'center' : 'left',
        fontFamily: isShort ? 'var(--font-playfair)' : 'var(--font-poppins)',
        color: isShort ? 'var(--color-cream-100)' : 'var(--color-text-secondary)',
        fontWeight: isShort ? 400 : 300,
        fontSize: isShort ? 'clamp(1rem, 3vw, 1.25rem)' : 'clamp(0.8rem, 2vw, 0.9375rem)',
        fontStyle: isShort ? 'italic' : 'normal',
        lineHeight: 1.9,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {text}
    </motion.p>
  )
}
