import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"/>
      </svg>
    ),
    title: 'Odun Ateşi',
    desc: 'Geleneksel yöntemle yakılan odun ateşi, ete eşsiz bir duman ve lezzet katmanı katar.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"/>
      </svg>
    ),
    title: 'Premium Kalite',
    desc: 'Günlük taze seçilen, özenle işlenmiş et ve tavuk; tazeliği garanti, lezzeti eşsiz.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-1.5-.75M9 12.75l2.25 2.25 4.5-4.5"/>
      </svg>
    ),
    title: 'Geniş Menü',
    desc: 'Ekmek döner, pom döner, dürüm ve 14 çeşit mezeden oluşan zengin seçenekler.',
  },
]

function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); observer.disconnect() }
    }, { threshold: 0.12, ...options })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return [ref, inView]
}

function FadeUp({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:    inView ? 1 : 0,
        transform:  inView ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s ${delay}s ease, transform 0.7s ${delay}s ease`,
      }}
    >
      {children}
    </div>
  )
}

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <main>
      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-screen min-h-[640px] overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110">
          <img
            src="/tombik.jpg"
            alt="Kebabo — Premium Döner"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Layered overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/55 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />

        {/* Hero content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-sm mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse-slow" />
            <span className="font-sans text-xs text-amber-200/90 tracking-[0.25em] uppercase font-medium">
              İçmeler · Tuzla · İstanbul
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="font-display text-7xl sm:text-9xl font-bold text-white leading-none tracking-wider uppercase mb-2"
          >
            Kebabo
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="h-0.5 w-24 bg-amber-gradient rounded-full mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="font-sans text-sm sm:text-lg text-zinc-300 tracking-[0.15em] uppercase font-light mb-10 text-center max-w-xl"
          >
            Premium Döner &nbsp;·&nbsp; Et Restoranı &nbsp;·&nbsp; Tuzla
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              to="/menu"
              className="px-8 py-3.5 rounded-full bg-amber-gradient text-white font-sans font-semibold text-sm shadow-amber hover:shadow-amber-lg hover:scale-105 transition-all duration-300"
            >
              Menüyü Gör
            </Link>
            <Link
              to="/iletisim"
              className="px-8 py-3.5 rounded-full border border-white/40 text-white font-sans font-medium text-sm backdrop-blur-sm hover:bg-white/10 hover:border-white/60 transition-all duration-300"
            >
              Bize Ulaş
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-sans text-[10px] text-zinc-500 tracking-widest uppercase">Kaydır</span>
          <div className="w-5 h-8 rounded-full border border-zinc-600 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 rounded-full bg-amber-400/70"
            />
          </div>
        </motion.div>
      </section>

      {/* ── FEATURES STRIP ── */}
      <section className="bg-kebaboCard border-y border-amber-900/20 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <FadeUp key={i} delay={i * 0.15}
                className="flex items-start gap-4 p-6 rounded-2xl bg-kebaboSurface hover:bg-[#28282e] border border-kebaboLine hover:border-amber-800/40 shadow-card transition-all duration-400"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/15 flex items-center justify-center text-amber-400">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-zinc-100 uppercase tracking-wide mb-1">{f.title}</h3>
                  <p className="font-sans text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY SECTION ── */}
      <section className="py-28 bg-kebaboBg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp delay={0} className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-card-hover">
                <img src="/meze.jpg" alt="Kebabo 14 Çeşit Meze" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              {/* floating badge */}
              <div className="absolute -bottom-6 -right-4 bg-kebaboCard rounded-2xl px-6 py-4 shadow-card-hover border border-amber-800/30 animate-float">
                <p className="font-sans text-xs text-amber-500/70 uppercase tracking-widest mb-0.5">İmza</p>
                <p className="font-display text-xl font-semibold text-zinc-100">14 Çeşit Meze</p>
              </div>
            </FadeUp>

            <div className="flex flex-col gap-6">
              <FadeUp delay={0.1}>
                <p className="font-sans text-xs tracking-[0.25em] uppercase text-amber-500 font-semibold">Hikayemiz</p>
              </FadeUp>
              <FadeUp delay={0.2}>
                <h2 className="font-display text-5xl sm:text-6xl font-bold text-zinc-100 uppercase leading-tight">
                  Her Lokmada<br />
                  <span className="amber-text">Tutku</span>
                </h2>
              </FadeUp>
              <FadeUp delay={0.3}>
                <p className="font-sans text-base text-zinc-400 leading-relaxed">
                  Kebabo, Tuzla İçmeler'in kalbinde, döner ve et kültürünü yeni nesil bir bakış açısıyla yorumlamak için kuruldu. Her şeyin başlangıcı basit bir tutkuydu: gerçek lezzet.
                </p>
              </FadeUp>
              <FadeUp delay={0.4}>
                <p className="font-sans text-base text-zinc-400 leading-relaxed">
                  Odun ateşinin cızırtısı, günlük taze kesilen et ve özenle hazırlanan 14 çeşit meze ile her ziyareti unutulmaz bir deneyime dönüştürüyoruz.
                </p>
              </FadeUp>
              <FadeUp delay={0.5}>
                <Link
                  to="/hakkimizda"
                  className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-amber-400 hover:gap-4 transition-all duration-300 group"
                >
                  Daha fazla bilgi
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
                  </svg>
                </Link>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO HIGHLIGHTS ── */}
      <section className="py-24 bg-kebaboCard border-y border-amber-900/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp delay={0} className="text-center mb-14">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-amber-500 font-semibold mb-3">Galeri</p>
            <h2 className="font-display text-5xl font-bold text-zinc-100 uppercase">Lezzetin Görüntüsü</h2>
          </FadeUp>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { src: '/tombik.jpg',     alt: 'Kebabo Tombik Döner'  },
              { src: '/vegan.jpg',      alt: 'Kebabo Vegan Seçenek' },
              { src: '/pizza-yeni.jpg', alt: 'Kebabo Pizza'          },
              { src: '/pom.jpg',        alt: 'Kebabo Pom Döner'     },
            ].map((p, i) => (
              <FadeUp key={p.src} delay={i * 0.1}>
                <div className="gallery-card aspect-[3/4] rounded-2xl overflow-hidden shadow-card">
                  <img src={p.src} alt={p.alt} className="w-full h-full object-cover" />
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.5} className="text-center mt-10">
            <Link
              to="/galeri"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-amber-500/60 text-amber-400 font-sans font-semibold text-sm hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300"
            >
              Tüm Fotoğraflar
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
              </svg>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── QUOTE BANNER ── */}
      <section className="py-24 bg-[#070709] relative overflow-hidden">
        <div className="absolute inset-0 opacity-8">
          <img src="/pom.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />
        {/* Decorative ember glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-amber-600/5 blur-3xl" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <FadeUp>
            <svg className="w-8 h-8 text-amber-500/60 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <p className="font-display text-3xl sm:text-5xl font-light text-zinc-100 uppercase leading-tight mb-8 tracking-wide">
              Tuzla'nın en premium<br />
              <span className="amber-text">döner deneyimi</span>
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-amber-500/40" />
              <span className="font-sans text-sm text-amber-400/80 tracking-[0.2em] uppercase">Kebabo</span>
              <div className="h-px w-12 bg-amber-500/40" />
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
