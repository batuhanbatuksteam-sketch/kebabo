import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function useInView() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); observer.disconnect() }
    }, { threshold: 0.12 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return [ref, inView]
}

function FadeUp({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={className} style={{
      opacity:    inView ? 1 : 0,
      transform:  inView ? 'translateY(0)' : 'translateY(28px)',
      transition: `opacity 0.7s ${delay}s ease, transform 0.7s ${delay}s ease`,
    }}>
      {children}
    </div>
  )
}

const stats = [
  { num: '7/7',   label: 'Her Gün Açık',        icon: '🔥' },
  { num: '100%',  label: 'Taze Malzeme',         icon: '🥩' },
  { num: '14+',   label: 'Çeşit Meze',           icon: '🍽️' },
  { num: '∞',     label: 'Lezzet Garantisi',     icon: '✦' },
]

const amenities = [
  { icon: '🔥', title: 'Odun Ateşi',          desc: 'Geleneksel odun ateşi ile pişirilmiş, eşsiz duman aromalı et lezzetleri.' },
  { icon: '🥩', title: 'Premium Et',           desc: 'Günlük taze seçilen, kalite kontrollü etler — hiçbir ödün verilmez.' },
  { icon: '🌿', title: '14 Çeşit Meze',       desc: 'El yapımı, günlük taze hazırlanan 14 farklı meze çeşidi ile sofranızı zenginleştirin.' },
  { icon: '⚡', title: 'Hızlı Servis',        desc: 'Sıcak ve taze, masanıza hız kesmeden ulaşır.' },
  { icon: '🍗', title: 'Tavuk Alternatifleri', desc: 'Et sevenler için döner, tavuk sevenler için enfes tavuk alternatifleri.' },
]

export default function About() {
  return (
    <main className="pt-20">
      {/* PAGE HEADER */}
      <section className="relative py-32 bg-[#0a0a0c] overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="/tombik-guncel.jpeg" alt="Kebabo Tombik Döner" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/60 to-[#0a0a0c]/92" />
        {/* Ember glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-24 bg-amber-600/10 blur-3xl" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="font-sans text-xs tracking-[0.28em] uppercase text-amber-400 font-semibold mb-4"
          >Bizi Tanıyın</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-6xl sm:text-7xl font-bold text-zinc-100 uppercase leading-tight"
          >
            Hakkımızda
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="h-0.5 w-20 bg-amber-gradient rounded-full mx-auto mt-6"
          />
        </div>
      </section>

      {/* STORY */}
      <section className="py-28 bg-kebaboBg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Image collage */}
            <FadeUp delay={0} className="relative h-[560px]">
              <div className="absolute top-0 left-0 w-3/4 h-4/5 rounded-3xl overflow-hidden shadow-card-hover border border-amber-900/20">
                <img src="/vegan-guncel.jpeg" alt="Kebabo lezzetleri" loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-2xl overflow-hidden shadow-card border-2 border-kebaboCard">
                <img src="/meze.jpg" alt="Kebabo meze" loading="lazy" className="w-full h-full object-cover" />
              </div>
              {/* amber dot accent */}
              <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-amber-gradient shadow-amber animate-float" />
            </FadeUp>

            {/* Text */}
            <div className="flex flex-col gap-6">
              <FadeUp delay={0.1}>
                <p className="font-sans text-xs tracking-[0.25em] uppercase text-amber-500 font-semibold">Hikayemiz</p>
              </FadeUp>
              <FadeUp delay={0.2}>
                <h2 className="font-display text-5xl font-bold text-zinc-100 uppercase leading-tight">
                  Endüstriyel <span className="amber-text">Premium</span><br />Bir Deneyim
                </h2>
              </FadeUp>
              <FadeUp delay={0.3}>
                <p className="font-sans text-base text-zinc-400 leading-relaxed">
                  Kebabo, Tuzla İçmeler'de döner ve et kültürünü yeniden yorumlamak amacıyla kapılarını açtı. Kurucularımızın temel felsefesi netti: sıradan değil, gerçek.
                </p>
              </FadeUp>
              <FadeUp delay={0.4}>
                <p className="font-sans text-base text-zinc-400 leading-relaxed">
                  Odun ateşinin eşsiz aroması, günlük taze seçilen et ve özenle hazırlanan 14 çeşit mezeden oluşan soframız, her ziyaretçiye unutulmaz bir deneyim sunar.
                </p>
              </FadeUp>
              <FadeUp delay={0.5}>
                <p className="font-sans text-base text-zinc-400 leading-relaxed">
                  Endüstriyel tasarım anlayışımız ve sıcak servis kalitemizle hem bireylere hem de aile sofralarına hitap ediyoruz. Tuzla'nın premium et restoranına hoş geldiniz.
                </p>
              </FadeUp>
              <FadeUp delay={0.6}>
                <div className="flex items-center gap-4 pt-2">
                  <div className="h-px flex-1 bg-amber-900/30" />
                  <span className="font-sans text-xs text-amber-500/50 tracking-widest">✦</span>
                  <div className="h-px flex-1 bg-amber-900/30" />
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-kebaboCard border-y border-amber-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((v, i) => (
              <FadeUp key={i} delay={i * 0.1} className="text-center">
                <div className="text-3xl mb-2">{v.icon}</div>
                <p className="font-display text-4xl font-bold text-amber-400 mb-1 uppercase">{v.num}</p>
                <p className="font-sans text-xs text-zinc-500 uppercase tracking-widest">{v.label}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="py-28 bg-kebaboBg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-amber-500 font-semibold mb-3">Özelliklerimiz</p>
            <h2 className="font-display text-5xl font-bold text-zinc-100 uppercase">Size Sunduklarımız</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {amenities.map((item, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="menu-card p-7 hover:-translate-y-1 group">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-display text-xl font-semibold text-zinc-100 uppercase tracking-wide mb-2 group-hover:text-amber-400 transition-colors">{item.title}</h3>
                  <p className="font-sans text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
