import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const photos = [
  { src: 'tombik.jpg',    alt: 'Kebabo Tombik Döner'  },
  { src: 'vegan.jpg',     alt: 'Kebabo Vegan Seçenek' },
  { src: 'pizza-yeni.jpg',alt: 'Kebabo Pizza'          },
  { src: 'pom.jpg',       alt: 'Kebabo Pom Döner'     },
]

function masonryColumns(items, cols = 3) {
  const columns = Array.from({ length: cols }, () => [])
  items.forEach((item, i) => columns[i % cols].push({ ...item, originalIndex: i }))
  return columns
}

export default function Gallery() {
  const [selected, setSelected] = useState(null)
  const [cols, setCols]         = useState(3)
  const [loaded, setLoaded]     = useState({})

  useEffect(() => {
    const update = () => setCols(window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    if (selected === null) return
    const handler = e => {
      if (e.key === 'Escape')      setSelected(null)
      if (e.key === 'ArrowRight')  setSelected(prev => (prev + 1) % photos.length)
      if (e.key === 'ArrowLeft')   setSelected(prev => (prev - 1 + photos.length) % photos.length)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [selected])

  const columns = masonryColumns(photos, cols)

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="relative py-32 bg-[#0a0a0c] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/meze.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/60 to-[#0a0a0c]/92" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-20 bg-amber-600/10 blur-3xl" />
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="font-sans text-xs tracking-[0.28em] uppercase text-amber-400 font-semibold mb-4"
          >Kebabo Anları</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-6xl sm:text-7xl font-bold text-zinc-100 uppercase leading-tight mb-4"
          >Galeri</motion.h1>
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="h-0.5 w-20 bg-amber-gradient rounded-full mx-auto mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="font-sans text-sm text-zinc-500"
          >
            {photos.length} fotoğraf &nbsp;·&nbsp; Tıklayarak büyütün
          </motion.p>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-16 bg-kebaboBg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-5">
            {columns.map((col, ci) => (
              <div key={ci} className="flex-1 flex flex-col gap-5">
                {col.map((photo, pi) => (
                  <motion.div
                    key={`${photo.src}-${photo.originalIndex}`}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: (ci * col.length + pi) * 0.06 }}
                    className="gallery-card cursor-zoom-in rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500"
                    onClick={() => setSelected(photo.originalIndex)}
                  >
                    <div className="relative overflow-hidden">
                      {/* Loading skeleton */}
                      {!loaded[`${photo.src}-${photo.originalIndex}`] && (
                        <div className="absolute inset-0 bg-kebaboCard animate-pulse" />
                      )}
                      <img
                        src={`/${photo.src}`}
                        alt={photo.alt}
                        className="w-full h-auto block transition-all duration-500 hover:scale-105"
                        loading="lazy"
                        onLoad={() => setLoaded(prev => ({ ...prev, [`${photo.src}-${photo.originalIndex}`]: true }))}
                        style={{ opacity: loaded[`${photo.src}-${photo.originalIndex}`] ? 1 : 0, transition: 'opacity 0.4s ease' }}
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-all duration-400 flex items-center justify-center">
                        <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <div className="w-12 h-12 rounded-full bg-amber-500/90 flex items-center justify-center shadow-amber">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/8 border border-white/10 flex items-center justify-center hover:bg-amber-500/30 hover:border-amber-500/40 transition-colors z-10"
              onClick={() => setSelected(null)}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            {/* Prev/Next */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/8 border border-white/10 flex items-center justify-center hover:bg-amber-500/30 hover:border-amber-500/40 transition-colors z-10"
              onClick={e => { e.stopPropagation(); setSelected(prev => (prev - 1 + photos.length) % photos.length) }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
              </svg>
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/8 border border-white/10 flex items-center justify-center hover:bg-amber-500/30 hover:border-amber-500/40 transition-colors z-10"
              onClick={e => { e.stopPropagation(); setSelected(prev => (prev + 1) % photos.length) }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
              </svg>
            </button>

            <motion.img
              key={selected}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              src={`/${photos[selected].src}`}
              alt={photos[selected].alt}
              className="max-w-full max-h-[88vh] object-contain rounded-2xl shadow-2xl"
              onClick={e => e.stopPropagation()}
            />

            {/* Caption */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
              <span className="font-sans text-xs text-zinc-500">{selected + 1} / {photos.length}</span>
              <span className="w-1 h-1 rounded-full bg-amber-400" />
              <span className="font-sans text-xs text-zinc-300">{photos[selected].alt}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
