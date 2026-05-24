import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ── Menü verisi (görselden analiz edildi, premium formatla sunuluyor) ──
const categories = [
  {
    id: 'et',
    label: 'Et Menüleri',
    icon: '🥩',
    tagline: 'Odun ateşinde, günlük taze',
    color: 'from-red-950/60 to-transparent',
    accent: 'text-red-400',
    borderAccent: 'border-red-800/30',
    items: [
      {
        name: 'Et Ekmek Döner',
        desc: 'Özel baharatlı dana eti, ince kıyılmış, taze ekmekte — döner sanatının zirvesi.',
        portions: [
          { label: '100 gr', price: 430 },
          { label: '120 gr', price: 460 },
          { label: '150 gr', price: 500 },
          { label: '200 gr', price: 540 },
        ],
      },
      {
        name: 'Et Pom Döner',
        desc: 'Çıtır patates yatağı üzerinde servis edilen, özel soslu et döner kombinasyonu.',
        portions: [
          { label: '100 gr', price: 430 },
          { label: '120 gr', price: 460 },
          { label: '150 gr', price: 500 },
          { label: '200 gr', price: 540 },
        ],
      },
      {
        name: 'Et Dürüm',
        desc: 'İnce lavaş içinde, taze sebzeler ve özel sosla sarılmış premium et dürüm.',
        portions: [
          { label: '100 gr', price: 430 },
          { label: '120 gr', price: 460 },
          { label: '150 gr', price: 500 },
          { label: '200 gr', price: 540 },
        ],
      },
    ],
  },
  {
    id: 'tavuk',
    label: 'Tavuk Menüleri',
    icon: '🍗',
    tagline: 'Izgara aromalarıyla buluşan tavuk',
    color: 'from-amber-950/60 to-transparent',
    accent: 'text-amber-400',
    borderAccent: 'border-amber-800/30',
    items: [
      {
        name: 'Tavuklu Ekmekli Döner',
        desc: 'Özel marine edilmiş tavuk göğsü, taze ekmekte çıtır dokunuşlarla buluşuyor.',
        portions: [
          { label: '100 gr', price: 300 },
          { label: '120 gr', price: 330 },
          { label: '150 gr', price: 360 },
          { label: '200 gr', price: 400 },
        ],
      },
      {
        name: 'Tavuklu Pom Döner',
        desc: 'Kızarmış patates ile birlikte, özel sos eşliğinde sunulan tavuk döner menüsü.',
        portions: [
          { label: '100 gr', price: 300 },
          { label: '120 gr', price: 330 },
          { label: '150 gr', price: 360 },
          { label: '200 gr', price: 400 },
        ],
      },
      {
        name: 'Tavuk Dürüm',
        desc: 'Lavaş içinde, marine tavuk, taze yeşillik ve özel beyaz sos ile hazırlanan enfes dürüm.',
        portions: [
          { label: '100 gr', price: 300 },
          { label: '120 gr', price: 330 },
          { label: '150 gr', price: 360 },
          { label: '200 gr', price: 400 },
        ],
      },
    ],
  },
]

function useInView() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); observer.disconnect() }
    }, { threshold: 0.1 })
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
      transform:  inView ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.65s ${delay}s ease, transform 0.65s ${delay}s ease`,
    }}>
      {children}
    </div>
  )
}

function MenuItemCard({ item, accent, delay = 0 }) {
  const [selectedPortion, setSelectedPortion] = useState(null)

  return (
    <FadeUp delay={delay}>
      <div className="menu-card p-6 sm:p-7 group">
        {/* Card shine */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/3 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-start gap-5">
          <div className="flex-1">
            {/* Name + desc */}
            <h3 className={`font-display text-2xl font-bold uppercase tracking-wide mb-2 group-hover:${accent} transition-colors duration-300 text-zinc-100`}>
              {item.name}
            </h3>
            <p className="font-sans text-sm text-zinc-500 leading-relaxed mb-5">{item.desc}</p>

            {/* Porsiyon fiyat tablosu — premium grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {item.portions.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedPortion(selectedPortion === i ? null : i)}
                  className={`relative flex flex-col items-center justify-center py-3 px-2 rounded-xl border transition-all duration-250 cursor-pointer group/btn ${
                    selectedPortion === i
                      ? 'border-amber-500 bg-amber-500/12 shadow-amber'
                      : 'border-zinc-700/60 bg-kebaboSurface hover:border-amber-700/50 hover:bg-amber-500/5'
                  }`}
                >
                  <span className={`font-sans text-xs font-medium tracking-wide uppercase mb-1 ${
                    selectedPortion === i ? 'text-amber-300' : 'text-zinc-400 group-hover/btn:text-zinc-300'
                  }`}>
                    {p.label}
                  </span>
                  <span className={`font-display text-lg font-bold uppercase ${
                    selectedPortion === i ? 'text-amber-400' : 'text-zinc-200'
                  }`}>
                    {p.price}₺
                  </span>
                  {selectedPortion === i && (
                    <motion.div
                      layoutId={`dot-${item.name}`}
                      className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-amber-400 shadow-amber"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeUp>
  )
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('et')
  const currentCat = categories.find(c => c.id === activeCategory)

  return (
    <main className="pt-20 min-h-screen bg-kebaboBg">
      {/* ── HEADER ── */}
      <section className="relative py-32 bg-[#0a0a0c] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/pom-guncel.jpeg" alt="Kebabo Pom Döner" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/65 to-[#0a0a0c]/95" />
        {/* Ember glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-20 bg-amber-600/12 blur-3xl" />

        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="font-sans text-xs tracking-[0.28em] uppercase text-amber-400 font-semibold mb-4"
          >
            Lezzetlerimizi Keşfedin
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-6xl sm:text-7xl font-bold text-zinc-100 uppercase leading-tight mb-6"
          >
            Menü
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="h-0.5 w-20 bg-amber-gradient rounded-full mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="font-sans text-sm text-zinc-500"
          >
            Odun ateşinde pişirilmiş, günlük taze et ve tavuk lezzetleri
          </motion.p>
        </div>
      </section>

      {/* ── CATEGORY SWITCHER ── */}
      <section className="sticky top-20 z-30 bg-kebaboBg/95 backdrop-blur-xl border-b border-amber-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-sans text-sm font-semibold whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-amber-gradient text-white shadow-amber'
                    : 'border border-zinc-700/60 text-zinc-400 hover:text-zinc-200 hover:border-amber-700/40'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENU ITEMS ── */}
      <AnimatePresence mode="wait">
        <motion.section
          key={activeCategory}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Category header */}
            <div className="mb-12">
              <div className={`inline-flex items-center gap-3 px-5 py-2 rounded-full border ${currentCat.borderAccent} bg-kebaboCard mb-6`}>
                <span className="text-2xl">{currentCat.icon}</span>
                <span className="font-display text-sm font-medium uppercase tracking-widest text-zinc-300">{currentCat.label}</span>
              </div>
              <p className="font-sans text-sm text-zinc-500 italic">{currentCat.tagline}</p>
              {/* Decorative line */}
              <div className="mt-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-amber-900/40 to-transparent max-w-xs" />
                <span className="text-amber-500/40 text-xs">✦</span>
              </div>
            </div>

            {/* Items grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {currentCat.items.map((item, i) => (
                <MenuItemCard
                  key={item.name}
                  item={item}
                  accent={currentCat.accent}
                  delay={i * 0.1}
                />
              ))}
            </div>

            {/* Note */}
            <FadeUp delay={0.3} className="mt-10">
              <div className="flex items-start gap-3 p-5 rounded-2xl bg-kebaboCard border border-amber-900/20">
                <svg className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"/>
                </svg>
                <p className="font-sans text-xs text-zinc-500 leading-relaxed">
                  Fiyatlarımız gramaj seçimine göre değişmektedir. Porsiyon seçmek için yukarıdaki kutucuklara tıklayın. Tüm ürünlerimiz günlük taze hazırlanmaktadır.
                </p>
              </div>
            </FadeUp>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* ── MEZE BANNER ── */}
      <section className="py-20 bg-kebaboCard border-y border-amber-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-800/30 bg-amber-500/8 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse-slow" />
                <span className="font-sans text-xs text-amber-300/80 tracking-widest uppercase">İmza Lezzet</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-zinc-100 uppercase leading-tight">
                14 Çeşit<br /><span className="amber-text">Meze</span>
              </h2>
              <p className="font-sans text-base text-zinc-400 leading-relaxed">
                Sofranızı taçlandıran 14 farklı el yapımı meze çeşidiyle, ana yemeklerinizi daha da özel hale getirin. Her gün taze hazırlanan mezelerimiz, Kebabo deneyiminin ayrılmaz bir parçasıdır.
              </p>
              <div className="flex items-center gap-3 mt-2">
                <div className="h-px w-10 bg-amber-500/30" />
                <span className="font-sans text-xs text-amber-500/60 tracking-widest uppercase">Her gün taze</span>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-video shadow-card-hover border border-amber-900/20">
              <img src="/meze.jpg" alt="14 Çeşit Meze" loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 bg-kebaboCard/90 backdrop-blur-sm rounded-xl px-4 py-3 border border-amber-800/20">
                <p className="font-display text-sm font-bold text-amber-400 uppercase tracking-wide">14 Çeşit Meze</p>
                <p className="font-sans text-xs text-zinc-500 mt-0.5">Günlük taze hazırlanır</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
